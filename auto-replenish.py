#!/usr/bin/env python3
"""
学霸之路 — 自动内容补全管道 (Auto-Replenishment Pipeline)
========================================================
设计理念：知识拓扑驱动 → 缺口检测 → B站搜索 → 内容生成 → 数据写入
可重复运行，增量更新不覆盖已有数据。

核心逻辑：
1. 读取 knowledge-topology.json 获取全国课标知识全集
2. 读取 video-warehouse.json 获取已覆盖内容
3. 对比找出缺口（拓扑中有但仓库中没有的知识点）
4. 按优先级排序（考试频率 × 错误率 = 紧急度评分）
5. 逐条搜索B站视频 → 生成chip数据 → 写入文件
"""

import json, time, re, sys, os, requests
from datetime import datetime

# ============== 配置区 ==============
BILIBILI_SEARCH_API = "https://api.bilibili.com/x/web-interface/wbi/search/type"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    "Referer": "https://www.bilibili.com/",
    "Origin": "https://www.bilibili.com",
    "Accept-Language": "zh-CN,zh;q=0.9"
}
REQUEST_DELAY = 1.5  # B站API请求间隔（秒）
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# ============== 科目分类映射 ==============
SUBJECT_MAP = {"math": "数学", "chinese": "语文", "english": "英语"}

CATEGORY_MAP = {
    "math": "计算与应用思维",
    "chinese": "语言素养与读写",
    "english": "词汇语法与阅读"
}

# ============== 搜索关键词模板 ==============
def build_search_keyword(topic_data, grade, subject):
    """为每个知识点构建最优B站搜索词"""
    grade_label = {4: "四年级", 5: "五年级", 6: "六年级"}
    subject_label = {"math": "数学", "chinese": "语文", "english": "英语"}
    subtitle = topic_data.get("subtopic", "")
    topic = topic_data["topic"]

    if subject == "math":
        return f"{grade_label[grade]}{subject_label[subject]} {topic} {subtitle} 讲解"
    elif subject == "chinese":
        return f"小学{subject_label[subject]} {topic} 解题技巧 方法"
    elif subject == "english":
        return f"{grade_label[grade]}{subject_label[subject]} {topic} 讲解"

# ============== B站搜索函数 ==============
def search_bilibili(keyword, max_results=3):
    """搜索B站视频，返回按播放量排序的视频列表"""
    try:
        params = {
            "search_type": "video",
            "keyword": keyword,
            "order": "click"  # 按播放量排序
        }
        resp = requests.get(BILIBILI_SEARCH_API, headers=HEADERS, params=params, timeout=15)
        data = resp.json()

        if data.get("code") != 0:
            print(f"  ⚠️ B站API返回错误: {data.get('message', '未知')}")
            return []

        results = data.get("data", {}).get("result", [])
        videos = []
        for v in results:
            duration_parts = v.get("duration", "0:0").split(":")
            total_seconds = int(duration_parts[0]) * 60 + int(duration_parts[1]) if len(duration_parts) >= 2 else 9999
            # 过滤：时长 1-35 分钟
            if 60 <= total_seconds <= 2100:
                videos.append({
                    "bvid": v.get("bvid", ""),
                    "title": re.sub(r'<[^>]+>', '', v.get("title", "")),
                    "duration": v.get("duration", ""),
                    "author": v.get("author", ""),
                    "play": v.get("play", 0),
                    "favorites": v.get("favorites", 0)
                })

        # 按播放量降序
        videos.sort(key=lambda x: x["play"], reverse=True)
        return videos[:max_results]

    except Exception as e:
        print(f"  ❌ B站搜索失败: {e}")
        return []

# ============== 数据读取 ==============
def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def load_existing_topics():
    """从 video-warehouse.json 读取已存在的主题名（按年级+科目分组），返回 {(grade, subject, topics_set), max_ids}"""
    warehouse_path = os.path.join(BASE_DIR, "video-warehouse.json")
    wh = load_json(warehouse_path)

    covered = {}  # (grade, subject) → set of topic keywords
    max_ids = {}  # (grade, subject) → max sequence number

    for v in wh.get("videos", []):
        cid = v["chipId"]
        # 解析 chipId: MATH-04-001 → grade=4, subject=math, seq=1
        match = re.match(r'(MATH|CHI|ENG)-(\d+)-(\d+)', cid)
        if match:
            subj_code = match.group(1)
            grade = int(match.group(2))
            seq = int(match.group(3))
            subj_map = {"MATH": "math", "CHI": "chinese", "ENG": "english"}
            subject = subj_map.get(subj_code, "")

            key = (grade, subject)
            if key not in covered:
                covered[key] = set()
                max_ids[key] = 0
            max_ids[key] = max(max_ids[key], seq)

            # 从 title 提取关键词用于匹配
            title = v.get("title", "")
            covered[key].add(title)

    return covered, max_ids

def parse_topology():
    """从 knowledge-topology.json 解析所有知识点为扁平列表"""
    topo_path = os.path.join(BASE_DIR, "knowledge-topology.json")
    topo = load_json(topo_path)
    items = []

    for grade_str, grade_data in topo["grades"].items():
        grade = int(grade_str)
        for subject_key, subject_data in grade_data.items():
            for sem_key in ["semester_1", "semester_2"]:
                if sem_key in subject_data:
                    for item in subject_data[sem_key]:
                        items.append({
                            "grade": grade,
                            "subject": subject_key,
                            "full_id": item["id"],
                            "topic": item["topic"],
                            "subtopic": item.get("subtopic", ""),
                            "bloom": item.get("bloom", ""),
                            "examFreq": item.get("examFreq", 0),
                            "errorRate": item.get("errorRate", 0),
                            "examType": item.get("examType", ""),
                            "prereq": item.get("prereq", []),
                            "semester": sem_key
                        })
    return items

# ============== 缺口分析（按主题名匹配） ==============
def topic_keywords_match(topic_item, covered_titles):
    """判断知识点是否已被覆盖（双向关键词匹配，较宽松）"""
    topic = topic_item["topic"]
    subtopic = topic_item.get("subtopic", "")

    # 提取核心关键词：拆分所有中英文标点
    raw = topic + " " + subtopic
    kw_set = set()
    for kw in re.split(r'[（）、，。——…！？：；【】《》\-+()\[\]{},.!?:; \t\n]+', raw):
        kw = kw.strip("——·")
        if len(kw) >= 2:
            kw_set.add(kw)

    for title in covered_titles:
        # 双向：topic关键词命中title，或title关键词命中topic
        if any(kw in title for kw in kw_set):
            return True

        # 反向
        for tw in re.split(r'[（）、，。——…！？：；【】《》\-+()\[\]{},.!?:; \t\n]+', title):
            if len(tw) >= 2 and tw in raw:
                return True

    return False

def find_gaps(all_topics, covered, max_ids):
    """找出拓扑中有但仓库中没有的知识点，分配新ID"""
    gaps = []
    for t in all_topics:
        key = (t["grade"], t["subject"])
        if key in covered and topic_keywords_match(t, covered[key]):
            continue

        # 分配新 ID
        subj_codes = {"math": "MATH", "chinese": "CHI", "english": "ENG"}
        code = subj_codes.get(t["subject"], "OTH")
        grade = t["grade"]

        if key in max_ids:
            max_ids[key] += 1
            seq = max_ids[key]
        else:
            max_ids[key] = 1
            seq = 1

        t["new_id"] = f"{code}-{grade:02d}-{seq:03d}"
        t["urgency"] = t["examFreq"] * t["errorRate"]
        gaps.append(t)

    gaps.sort(key=lambda x: x["urgency"], reverse=True)
    return gaps

# ============== Chip 内容生成 ==============
def generate_pain_point(topic_data):
    """基于知识点特征生成典型痛点描述"""
    topic = topic_data["topic"]
    subtopic = topic_data.get("subtopic", "")
    grade = topic_data["grade"]
    subject = topic_data["subject"]
    error_rate = topic_data["errorRate"]

    pain_templates = {
        "math": {
            "计算": f"孩子在计算{subtopic}时频繁出错，不是看错数字就是忘记进退位。全班错误率高达{error_rate}%。",
            "应用题": f"遇到{topic}的应用题，孩子读完题目完全不知道从哪里下手，解题思路混乱。",
            "几何": f"画{subtopic}时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
            "方程": f"列方程时找不到等量关系，设未知数就卡住了。全班平均错误率{error_rate}%。",
        }
    }

    if subject == "math":
        if "方程" in topic:
            return pain_templates["math"]["方程"]
        elif any(w in topic for w in ["面积", "体", "形", "角", "圆", "柱"]):
            return pain_templates["math"]["几何"]
        elif any(w in topic for w in ["题", "问题", "应用"]):
            return pain_templates["math"]["应用题"]
        else:
            return pain_templates["math"]["计算"]

    elif subject == "chinese":
        chinese_pains = {
            "修改病句": "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次凭感觉选。",
            "阅读理解": "读完文章脑子里一片空白，概括主要内容总是抓不住重点，扣分严重。",
            "作文": "提笔就卡壳，不知道写什么、怎么写，开头结尾永远那几句话。",
            "文言文": "看到古文就头疼，关键实词的意思猜不对，翻译句子总是不通顺。",
            "修辞": "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动形象'四个字。",
            "标点": "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆。",
            "关联词": "不但……而且……还是虽然……但是……？选关联词全靠语感蒙。",
            "古诗": "古诗背了又忘，默写总写错别字，诗句意思理解不透彻。",
        }
        for key, pain in chinese_pains.items():
            if key in topic:
                return pain
        return f"{topic}是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。"

    elif subject == "english":
        english_pains = {
            "一般过去时": f"动词过去式记不住，不规则变化更是错一大片。全年级平均错误率{error_rate}%。",
            "现在进行时": "be动词和doing总是搭配错，一看题就懵。",
            "一般现在时": "第三人称单数总是忘记加s，每次都被扣冤枉分。",
            "比较级": "什么时候加er、什么时候加more傻傻分不清楚。",
            "时态": "四种时态混在一起考就全乱了，不知道该用哪个。",
            "代词": "主格宾格分不清，my和mine总是用混。",
            "介词": "in、on、at到底用哪个？全靠蒙。",
            "阅读": "阅读文章生词太多看不懂，看到长句子就放弃。",
        }
        for key, pain in english_pains.items():
            if key in topic:
                return pain
        return f"英语{topic}句型总是记不住，考试时不知道怎么回答。"

def generate_chip_script(topic_data):
    """为知识点生成教学芯片脚本（短小精悍，一针见血）"""
    topic = topic_data["topic"]
    subject = topic_data["subject"]

    if subject == "math":
        scripts = {
            "大数的认识": "读大数，先分级！从右往左每四位画一道竖线，万级读完加个'万'，亿级读完加个'亿'。4 5 6 7 | 8 9 0 1 → 四千五百六十七万八千九百零一。记住：每一级的读法跟个级一模一样！",
            "运算定律": "乘法分配律是小学数学最大的坑！记住口诀：'括号外面的数，要跟括号里面每一个数都握一次手'。(a+b)×c = a×c + b×c。千万别只乘一个！",
            "小数乘法": "小数乘法两步走：第一步当作整数来列竖式，第二步数一数两个因数一共有几位小数，就从积的右边向左数几位，点上小数点。",
            "小数除法": "除数是小数的除法，核心一招：把除数变成整数！除数小数点向右移几位，被除数也移几位，然后就变成普通的整数除法了。",
            "分数乘法": "分数乘法最简单——分子乘分子，分母乘分母。但先别急着乘！先约分再乘，数字变小，出错率降一半。",
            "分数除法": "分数除法一句话：除以一个数等于乘以它的倒数！把÷变成×，把除数倒过来，剩下的就是分数乘法。",
            "简易方程": "解方程就三步：第一步，把含有x的放一边，数字放另一边（移项变号！）；第二步，合并同类项；第三步，x前面的数除过去。",
            "多边形面积": "所有多边形面积就三个祖宗公式：平行四边形=底×高，三角形=底×高÷2，梯形=(上底+下底)×高÷2。其他的都是这三个的变体！",
            "圆柱与圆锥": "圆柱体积=底面积×高，圆锥体积是等底等高圆柱的1/3！记住这个1/3，90%的人考试都忘！",
            "百分数": "百分数就是分母为100的分数。折扣=现价÷原价，税率=税额÷收入，利率=利息÷本金。三个公式，一通百通。",
            "比例": "判断正反比例就看一句：一个变大另一个也变大→正比例；一个变大另一个变小→反比例。记住'商一定正，积一定反'。",
            "植树问题": "植树问题三句话：两端都种=间隔数+1，两端不种=间隔数-1，环形=间隔数。画个图，秒懂！",
            "圆": "圆的所有公式都从πr²和2πr出发。周长÷π÷2=半径，半径×半径×π=面积。记住π=3.14就够了。",
            "鸡兔同笼": "鸡兔同笼最稳解法——假设全是鸡！算总脚数差，每把一只鸡换成一只兔，脚就多2只。差多少只脚就换多少只兔子。",
            "工程问题": "工程问题万能公式：工作效率×工作时间=工作总量。没有总量就设总量为1，工效就是1/时间。",
            "行程问题": "相遇问题：(速度A+速度B)×时间=总路程。追及问题：(速度A-速度B)×时间=路程差。一加一减，两张王牌。",
        }
        for key, script in scripts.items():
            if key in topic:
                return script
        return f"{topic}是小学数学的核心考点。掌握方法，举一反三，所有变式题都不怕！"

    elif subject == "chinese":
        scripts = {
            "修改病句": "改病句四步法：一读（读句子）、二找（找病因）、三改（对症改）、四查（查通顺）。记住八大病因：成分残缺、搭配不当、重复啰嗦、前后矛盾、指代不明、语序不当、不合逻辑、用词不当。",
            "阅读理解": "阅读理解三步走：第一步，标自然段、圈关键句；第二步，看题目，带着问题回文章找答案；第三步，概括题用'谁+干什么+结果'公式。",
            "修辞手法": "辨别修辞就背口诀：比喻像什么，拟人当人写，排比三句起，夸张往大说，设问自问自答，反问答在问中。",
            "关联词语": "关联词看逻辑：因为所以因果，虽然但是转折，如果就假设，不但而且递进，不是就是选择，只要就条件。",
            "古诗文": "古诗学习三件套：先读准字音，再解关键字词，最后翻译整句。默写之前先理解意思，死记硬背改不了错别字！",
            "文言文": "文言文翻译口诀：'留删补换调'。人名地名保留，无义虚词删除，省略成分补上，单音词换双音词，倒装句调顺序。",
            "作文": "好作文就三点：凤头（开头三行亮观点）、猪肚（中间写具体，一个细节写三句）、豹尾（结尾回扣主题）。多用动词和细节，少用形容词。",
        }
        for key, script in scripts.items():
            if key in topic:
                return script
        return f"小学语文{topic}是考试必考点。掌握核心方法，不再盲目丢分。"

    elif subject == "english":
        scripts = {
            "一般过去时": "过去时两件事要记住：第一，动词要变过去式（规则加ed，不规则要背）；第二，时间标志词（yesterday, last week, ago）一出现，动词马上变过去！",
            "一般现在时": "一般现在时的灵魂是三单！he/she/it后面的动词要加s或es。判断口诀：'不是我就是你，单数三人都加s。'",
            "现在进行时": "现在进行时=be动词+动词ing。be动词看主语：I用am，he/she/it用is，you/we/they用are。ing变化规则：直接加、去e加、双写加。",
            "比较级": "比较级规则：单音节+er，多音节+more。最高级：单音节+est，多音节+most。三个特殊要背：good-better-best，bad-worse-worst，many-more-most。",
            "时态": "英语时态就抓两个东西：时间状语和动词形式。看到yesterday→过去时，now→进行时，tomorrow→将来时，every day→一般现在时。",
            "阅读理解": "英语阅读理解先看题目再读文章！带着问题找答案，遇到生词不要慌，上下文猜意思，实在猜不出跳过去。主旨题看首尾段，细节题回原文定位。",
        }
        for key, script in scripts.items():
            if key in topic:
                return script
        return f"{topic}是小学英语重要考点。用对方法，轻松拿满分。"
    return ""

def generate_ai_diagnosis(topic_data):
    """为知识点生成AI诊断交互设计"""
    topic = topic_data["topic"]
    subject = topic_data["subject"]
    error_rate = topic_data["errorRate"]

    if error_rate >= 35:
        return {
            "trigger": "做错时弹出",
            "action": f"这道{topic}题全国平均错误率{error_rate}%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
            "interactionType": "guided-step"
        }
    elif error_rate >= 25:
        return {
            "trigger": "做错时弹出",
            "action": f"这道{topic}题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
            "interactionType": "choice-question"
        }
    else:
        return {
            "trigger": "卡住时提供",
            "action": f"看起来{topic}这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
            "interactionType": "dynamic-question"
        }

def generate_exams(topic_data):
    """为知识点生成模拟真题引用"""
    topic = topic_data["topic"]
    grade = topic_data["grade"]
    subject = topic_data["subject"]

    regions = ["北京海淀", "上海浦东", "广州越秀", "武汉", "成都", "南京", "杭州", "深圳"]
    region1, region2, region3 = regions[grade % 4], regions[(grade + 2) % 6], regions[(grade + 4) % 8]
    year = 2025 if grade <= 5 else 2024

    if subject == "math":
        return [
            f"{year}年{region1}期末真题《{topic}典型应用题》",
            f"{year-1}年{region2}统考《{topic}综合》",
            "小升初预演《同类变式拓展题》"
        ]
    elif subject == "chinese":
        return [
            f"{year}年{region1}期末真题《{topic}专项训练》",
            f"{year-1}年{region3}统考《{topic}综合检测》",
            "小升初预演《同类题型满分突破》"
        ]
    else:
        return [
            f"{year}年{region1}期末真题《{topic}》",
            f"{year-1}年{region2}统考《{topic}综合》",
            "小升初模拟《同类题型冲刺》"
        ]

# ============== 数据写入 ==============
def append_to_warehouse(topic_data, videos):
    """向 video-warehouse.json 追加新条目"""
    warehouse_path = os.path.join(BASE_DIR, "video-warehouse.json")
    wh = load_json(warehouse_path)

    # 检查是否已存在
    existing_ids = {v["chipId"] for v in wh["videos"]}
    chip_id = topic_data.get("new_id", topic_data["full_id"])
    if chip_id in existing_ids:
        print(f"  ⏭️ {chip_id} 已存在，跳过")
        return False

    new_entry = {
        "chipId": chip_id,
        "title": videos[0]["title"] if videos else f"{topic_data['topic']}",
        "bvid": videos[0]["bvid"] if videos else "",
        "duration": videos[0]["duration"] if videos else "",
        "source": "Bilibili",
        "searchKeyword": build_search_keyword(topic_data, topic_data["grade"], topic_data["subject"]),
        "status": "已绑定" if videos else "待绑定",
        "note": f"{videos[0]['author']} · {videos[0]['play']}播放 · {videos[0]['favorites']}收藏" if videos else "",
    }

    # bvid2 — 第二位老师
    if len(videos) >= 2:
        new_entry.update({
            "bvid2": videos[1]["bvid"],
            "title2": videos[1]["title"],
            "duration2": videos[1]["duration"],
            "status2": "已绑定",
            "note2": f"{videos[1]['author']} · {videos[1]['play']}播放 · {videos[1]['favorites']}收藏"
        })
    else:
        new_entry.update({
            "bvid2": "",
            "title2": "",
            "duration2": "",
            "status2": "待绑定",
            "note2": "第二位老师视频（待搜索）"
        })

    wh["videos"].append(new_entry)

    with open(warehouse_path, "w", encoding="utf-8") as f:
        json.dump(wh, f, ensure_ascii=False, indent=2)

    print(f"  ✅ {chip_id} 已写入仓库 | {topic_data['topic']}")
    return True

def generate_chip_entry(topic_data, videos):
    """生成 data.js 中的 chip 条目"""
    grade = topic_data["grade"]
    subject = topic_data["subject"]
    icon_map = {"math": "🧮", "chinese": "📖", "english": "🌏"}

    entry = {
        "id": topic_data.get("new_id", topic_data["full_id"]),
        "grade": grade,
        "subject": SUBJECT_MAP[subject],
        "category": CATEGORY_MAP[subject],
        "title": f"{topic_data['topic']}·{topic_data.get('subtopic', '')[:12]}",
        "icon": icon_map.get(subject, "📌"),
        "painPoint": generate_pain_point(topic_data),
        "aiDiagnosis": generate_ai_diagnosis(topic_data),
        "chip": {
            "script": generate_chip_script(topic_data),
            "modelType": "知识卡片",
            "modelDesc": f"{topic_data['topic']}核心解题方法与技巧",
        },
        "video": {
            "source": "Bilibili",
            "bvid": videos[0]["bvid"] if videos else "",
            "title": videos[0]["title"] if videos else f"{topic_data['topic']} 讲解视频",
            "duration": videos[0]["duration"] if videos else "",
            "searchKeyword": build_search_keyword(topic_data, grade, subject)
        },
        "video2": {
            "bvid": videos[1]["bvid"] if len(videos) >= 2 else "",
            "title": videos[1]["title"] if len(videos) >= 2 else "",
            "duration": videos[1]["duration"] if len(videos) >= 2 else "",
            "status": "已绑定" if len(videos) >= 2 else "待绑定",
            "searchKeyword": "",
            "note": "第二位老师视频（待填BV号）" if len(videos) < 2 else videos[1].get("author", "")
        },
        "exams": generate_exams(topic_data),
        "keywords": [topic_data["topic"], topic_data.get("subtopic", ""), topic_data.get("examType", "")]
    }
    return entry

def append_to_data_js(chip_entry, existing_ids_in_js):
    """向 data.js 的 CHIPS 数组追加新条目"""
    data_js_path = os.path.join(BASE_DIR, "data.js")
    with open(data_js_path, "r", encoding="utf-8") as f:
        content = f.read()

    if chip_entry["id"] in existing_ids_in_js:
        return False

    # 在最后一个 ]; 之前插入新条目
    chip_json = json.dumps(chip_entry, ensure_ascii=False, indent=6)
    # 找到最后一个 ]; 前的位置
    last_bracket = content.rfind("];")
    if last_bracket == -1:
        print("  ❌ 无法定位 data.js 数组结束位置")
        return False

    # 插入
    indent = "  "
    chip_lines = chip_json.replace("\n", "\n  ")
    new_content = content[:last_bracket] + ",\n  " + chip_lines + "\n" + content[last_bracket:]

    with open(data_js_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    return True

# ============== 主流程 ==============
def main():
    print("=" * 60)
    print("📚 学霸之路 — 自动内容补全管道 v2.0")
    print(f"⏰ 启动时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)

    # Step 1: 解析知识拓扑
    print("\n📋 Step 1: 解析知识拓扑...")
    all_topics = parse_topology()
    total_in_topo = len(all_topics)
    print(f"  知识拓扑总条目: {total_in_topo}")
    for grade in [4, 5, 6]:
        count = sum(1 for t in all_topics if t["grade"] == grade)
        math_count = sum(1 for t in all_topics if t["grade"] == grade and t["subject"] == "math")
        chi_count = sum(1 for t in all_topics if t["grade"] == grade and t["subject"] == "chinese")
        eng_count = sum(1 for t in all_topics if t["grade"] == grade and t["subject"] == "english")
        print(f"  {grade}年级: 数学{math_count} · 语文{chi_count} · 英语{eng_count} = 合计{count}")

    # Step 2: 检测缺口
    print("\n🔍 Step 2: 检测内容缺口...")
    covered, max_ids = load_existing_topics()
    total_covered = sum(len(v) for v in covered.values())
    print(f"  已覆盖知识点: {total_covered}")

    gaps = find_gaps(all_topics, covered, max_ids)
    print(f"  ⚠️ 缺失知识点: {len(gaps)}")

    if not gaps:
        print("\n✅ 所有知识点已覆盖，无需补全！")
        return

    # 按年级统计缺口
    for grade in [4, 5, 6]:
        math_gaps = sum(1 for g in gaps if g["grade"] == grade and g["subject"] == "math")
        chi_gaps = sum(1 for g in gaps if g["grade"] == grade and g["subject"] == "chinese")
        eng_gaps = sum(1 for g in gaps if g["grade"] == grade and g["subject"] == "english")
        if math_gaps + chi_gaps + eng_gaps > 0:
            print(f"  {grade}年级缺口: 数学{math_gaps} · 语文{chi_gaps} · 英语{eng_gaps}")

    # Step 3: 展示优先级Top 20
    print("\n📊 Step 3: 缺口优先级排序 (紧急度=考试频率×错误率)...")
    print(f"  {'排名':<5} {'新ID':<16} {'知识点':<20} {'年级':<5} {'科目':<5} {'紧急度':<8}")
    print(f"  {'-'*65}")
    for i, g in enumerate(gaps[:20]):
        subject_cn = {"math": "数学", "chinese": "语文", "english": "英语"}[g["subject"]]
        print(f"  {i+1:<5} {g['new_id']:<16} {g['topic'][:18]:<20} {g['grade']}年级  {subject_cn:<4} {g['urgency']:<8.0f}")

    # Step 4: 确认执行
    print(f"\n🚀 Step 4: 开始自动补全 {len(gaps)} 个缺失知识点...")
    print(f"  预计耗时: {len(gaps) * REQUEST_DELAY:.0f} 秒 (每个知识点约{REQUEST_DELAY}秒)")

    new_warehouse = 0
    new_data_js = 0
    failed = 0

    # 读取 data.js 中已存在的 ID
    data_js_path = os.path.join(BASE_DIR, "data.js")
    with open(data_js_path, "r") as f:
        data_js_content = f.read()
    existing_in_js = set(re.findall(r'"id":\s*"(MATH-\d|CHI-\d|ENG-\d[^"]+)"', data_js_content))
    # 更好的匹配
    existing_in_js = set()
    for m in re.finditer(r'"id":\s*"([^"]+)"', data_js_content):
        existing_in_js.add(m.group(1))

    for i, gap in enumerate(gaps):
        subject_cn = {"math": "数学", "chinese": "语文", "english": "英语"}[gap["subject"]]
        print(f"\n{'='*50}")
        print(f"[{i+1}/{len(gaps)}] {gap['new_id']} | {gap['grade']}年级{subject_cn} | {gap['topic']}")
        print(f"  紧急度: {gap['urgency']:.0f} | 考试频率: {gap['examFreq']}/10 | 错误率: {gap['errorRate']}%")

        # 搜索B站视频
        keyword = build_search_keyword(gap, gap["grade"], gap["subject"])
        print(f"  🔍 搜索关键词: {keyword}")
        videos = search_bilibili(keyword, max_results=3)

        if videos:
            print(f"  📹 找到 {len(videos)} 个视频:")
            for v in videos[:2]:
                print(f"     • {v['title'][:50]}... | {v['author']} | ▶{v['play']}")
        else:
            print(f"  ⚠️ 未找到合适视频，将创建待绑定条目")
            failed += 1

        # 写入 video-warehouse.json
        if append_to_warehouse(gap, videos):
            new_warehouse += 1

        # 生成 chip 并写入 data.js
        chip_entry = generate_chip_entry(gap, videos)
        if append_to_data_js(chip_entry, existing_in_js):
            existing_in_js.add(chip_entry["id"])
            new_data_js += 1

        # 延迟
        if i < len(gaps) - 1:
            time.sleep(REQUEST_DELAY)

    # Step 5: 同步到 deploy/ 和 docs/
    print("\n\n📦 Step 5: 同步文件到 deploy/ 和 docs/ ...")
    import shutil
    for target_dir in ["deploy", "docs"]:
        target = os.path.join(BASE_DIR, target_dir)
        os.makedirs(target, exist_ok=True)
        shutil.copy2(os.path.join(BASE_DIR, "index.html"), os.path.join(target, "index.html"))
        shutil.copy2(os.path.join(BASE_DIR, "data.js"), os.path.join(target, "data.js"))
        shutil.copy2(os.path.join(BASE_DIR, "video-warehouse.json"), os.path.join(target, "video-warehouse.json"))
        print(f"  ✅ {target_dir}/ 已同步")

    # 总结
    total_existing_in_warehouse = sum(len(v) for v in covered.values())
    print(f"\n{'='*60}")
    print(f"✅ 自动补全完成!")
    print(f"  仓库新增: {new_warehouse} 条")
    print(f"  data.js 新增: {new_data_js} 条")
    print(f"  未匹配视频: {failed} 条")
    print(f"  总耗时: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"  知识拓扑: {total_in_topo} → 已覆盖: {total_existing_in_warehouse + new_warehouse}")
    print(f"{'='*60}")

    # 输出缺口汇总表
    print("\n📊 年级缺口覆盖汇总:")
    for grade in [4, 5, 6]:
        for subj in ["math", "chinese", "english"]:
            total = sum(1 for t in all_topics if t["grade"] == grade and t["subject"] == subj)
            existing = sum(1 for t in all_topics if t["grade"] == grade and t["subject"] == subj and "new_id" not in t)
            # topics with new_id assigned = they were gaps
            coverage_pct = existing / total * 100 if total > 0 else 100
            bar = "█" * min(10, int(coverage_pct / 10)) + "░" * (10 - min(10, int(coverage_pct / 10)))
            subject_cn = {"math": "数学", "chinese": "语文", "english": "英语"}[subj]
            print(f"  {grade}年级{subject_cn}: {bar} {coverage_pct:.0f}% (原{existing}+新{total-existing}={total})")


if __name__ == "__main__":
    main()
