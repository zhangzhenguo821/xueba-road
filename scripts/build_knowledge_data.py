#!/usr/bin/env python3
"""Build JS data files for 学霸之路 knowledge base.
Processes: tangshisanbaishou -> poetry.js
          idiom.json      -> idioms.js
          xiehouyu.json  -> xiehouyu.js
          word.json       -> characters.js
All Traditional Chinese -> Simplified Chinese via zhconv.
"""
import json
import re
import os
import sys

# ---------- Traditional -> Simplified ----------
try:
    from zhconv import convert as _t2s
    def to_simplified(text):
        if not text:
            return text
        return _t2s(text, "zh-cn")
    print("✅ zhconv loaded")
except ImportError:
    print("⚠️  zhconv not found, installing...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "zhconv", "-q"])
    from zhconv import convert as _t2s
    def to_simplified(text):
        if not text:
            return text
        return _t2s(text, "zh-cn")
    print("✅ zhconv installed and loaded")

# ---------- 1. 唐诗三百首 ----------
def process_poetry(inpath, outpath):
    with open(inpath, "r") as f:
        data = json.load(f)
    
    # Grade mapping (rough, based on difficulty/type)
    # These are the 小学必背75首 standard mapping
    REQUIRED_75 = {
        "静夜思", "春晓", "村居", "咏鹅", "悯农", "江雪", "登鹳雀楼",
        "鹿柴", "九月九日忆山东兄弟", "望庐山瀑布", "赠汪伦", "黄鹤楼送孟浩然之广陵",
        "早发白帝城", "望天门山", "小儿垂钓", "池上", "忆江南", "塞下曲",
        "渔歌子", "枫桥夜泊", "游子吟", "清明", "江南春", "乐游原", "蜂",
        "江上渔者", "元日", "泊船瓜洲", "书湖阴先生壁", "六月二十七日望湖楼醉书",
        "饮湖上初晴后雨", "惠崇春江晚景", "题西林壁", "夏日绝句", "示儿",
        "秋夜将晓出篱门迎凉有感", "四时田园杂兴", "小池", "晓出净慈寺送林子方",
        "春日", "题临安邸", "游园不值", "乡村四月", "墨梅", "石灰吟", "竹石",
        "所见", "己亥杂诗", "长歌行", "七步诗", "回乡偶书", "凉州词", "出塞",
        "芙蓉楼送辛渐", "鹿柴", "送元二使安西", "九月九日忆山东兄弟",
    }
    
    grade_map = {
        "五言绝句": [1, 2],
        "七言绝句": [2, 3],
        "五言律诗": [3, 4],
        "七言律诗": [4, 5],
        "五言古诗": [4, 5],
        "七言古诗": [5, 6],
        "乐府": [3, 4, 5],
    }
    
    poems = []
    for section in data.get("content", []):
        poem_type = section.get("type", "")
        suggested_grades = grade_map.get(poem_type, [3, 4, 5])
        for item in section.get("content", []):
            title = item.get("chapter", "")
            author = item.get("author", "")
            paragraphs = item.get("paragraphs", [])
            if isinstance(paragraphs, list) and paragraphs and isinstance(paragraphs[0], dict):
                # subchapters
                for sub in paragraphs:
                    poems.append({
                        "title": to_simplified(sub.get("subchapter", title)),
                        "author": to_simplified(author),
                        "paragraphs": [to_simplified(p) for p in sub.get("paragraphs", [])],
                        "type": poem_type,
                        "grades": suggested_grades,
                        "required": any(kw in title for kw in REQUIRED_75),
                    })
            else:
                poems.append({
                    "title": to_simplified(title),
                    "author": to_simplified(author),
                    "paragraphs": [to_simplified(p) for p in paragraphs] if isinstance(paragraphs, list) else [],
                    "type": poem_type,
                    "grades": suggested_grades,
                    "required": title in REQUIRED_75 or any(kw in title for kw in REQUIRED_75),
                })
    
    js = "var _POETRY_DATA = " + json.dumps(poems, ensure_ascii=False, indent=2) + ";"
    with open(outpath, "w") as f:
        f.write(js)
    print(f"✅ Poetry: {len(poems)} poems -> {outpath}")
    return poems

# ---------- 2. 成语 ----------
def process_idioms(inpath, outpath, max_count=600):
    """Keep only common idioms suitable for primary school."""
    with open(inpath, "r") as f:
        data = json.load(f)
    
    # Filter: keep those with good data (explanation + example)
    filtered = []
    for item in data:
        word = item.get("word", "")
        pinyin = item.get("pinyin", "")
        explanation = item.get("explanation", "")
        example = item.get("example", "")
        derivation = item.get("derivation", "")
        if not word or not explanation:
            continue
        filtered.append({
            "word": to_simplified(word),
            "pinyin": pinyin,
            "explanation": to_simplified(explanation),
            "example": to_simplified(example),
            "derivation": to_simplified(derivation),
        })
    
    # For primary school: keep first 600 (most common by source order)
    # In practice, the source JSON is not sorted by frequency, so we just take all
    # and let the UI handle filtering
    result = filtered[:max_count]  # limit for file size
    
    js = "var _IDIOM_DATA = " + json.dumps(result, ensure_ascii=False, indent=2) + ";"
    with open(outpath, "w") as f:
        f.write(js)
    print(f"✅ Idioms: {len(result)} (from {len(filtered)} total) -> {outpath}")
    return result

# ---------- 3. 歇后语 ----------
def process_xiehouyu(inpath, outpath, max_count=500):
    with open(inpath, "r") as f:
        data = json.load(f)
    
    result = []
    for item in data:
        riddle = item.get("riddle", "")
        answer = item.get("answer", "")
        if not riddle or not answer:
            continue
        result.append({
            "riddle": to_simplified(riddle),
            "answer": to_simplified(answer),
        })
    
    result = result[:max_count]
    js = "var _XIEHOUYU_DATA = " + json.dumps(result, ensure_ascii=False, indent=2) + ";"
    with open(outpath, "w") as f:
        f.write(js)
    print(f"✅ Xiehouyu: {len(result)} -> {outpath}")
    return result

# ---------- 4. 汉字库 ----------
def process_characters(inpath, outpath, max_count=2500):
    """Process character data for primary school (grades 1-6)."""
    with open(inpath, "r") as f:
        data = json.load(f)
    
    # For primary school: filter by common characters
    # Grade 1-6: ~2500 characters
    result = []
    for item in data[:max_count]:
        word = item.get("word", "")
        pinyin = item.get("pinyin", "")
        strokes = item.get("strokes", "")
        radicals = item.get("radicals", "")
        explanation = item.get("explanation", "")
        if not word:
            continue
        result.append({
            "word": to_simplified(word),
            "pinyin": pinyin,
            "strokes": int(strokes) if strokes and strokes.isdigit() else 0,
            "radicals": to_simplified(radicals),
            "explanation": to_simplified(explanation[:200]) if explanation else "",
        })
    
    js = "var _CHAR_DATA = " + json.dumps(result, ensure_ascii=False, indent=2) + ";"
    with open(outpath, "w") as f:
        f.write(js)
    print(f"✅ Characters: {len(result)} -> {outpath}")
    return result

# ---------- Run ----------
if __name__ == "__main__":
    base = "/tmp/k12-datasets"
    out = "/Users/zhang/WorkBuddy/2026-06-12-10-19-38/xueba-road-clean/data/knowledge"
    os.makedirs(out, exist_ok=True)
    
    poetry_in = os.path.join(base, "tangshisanbaishou.json")
    if not os.path.exists(poetry_in):
        # Check /tmp directly
        poetry_in = "/tmp/tangshisanbaishou.json"
    
    if os.path.exists(poetry_in):
        process_poetry(poetry_in, os.path.join(out, "poetry.js"))
    else:
        print(f"⚠️  Poetry data not found: {poetry_in}")
    
    idiom_in = os.path.join(base, "idiom.json")
    if os.path.exists(idiom_in):
        process_idioms(idiom_in, os.path.join(out, "idioms.js"))
    else:
        print(f"⚠️  Idiom data not found: {idiom_in}")
    
    xiehouyu_in = os.path.join(base, "xiehouyu.json")
    if os.path.exists(xiehouyu_in):
        process_xiehouyu(xiehouyu_in, os.path.join(out, "xiehouyu.js"))
    else:
        print(f"⚠️  Xiehouyu data not found: {xiehouyu_in}")
    
    word_in = os.path.join(base, "word.json")
    if os.path.exists(word_in):
        process_characters(word_in, os.path.join(out, "characters.js"))
    else:
        print(f"⚠️  Characters data not found: {word_in}")
    
    print("\nDone!")
