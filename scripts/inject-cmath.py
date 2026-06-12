#!/usr/bin/env python3
"""
CMATH 注入脚本：将 XiaoMi/cmath 的 G4-G6 数学题分类注入到芯片模型JSON中
Phase 1: 关键词匹配 → 芯片映射 → 变式训练注入
"""
import json, re, os, sys

MODELS_DIR = os.path.join(os.path.dirname(__file__), '..', 'models')
DATA_JS = os.path.join(os.path.dirname(__file__), '..', 'data.js')
CMATH_FILE = '/tmp/cmath-repo/datasets/cmath_dev.jsonl'
EXAM_INDEX = os.path.join(os.path.dirname(__file__), '..', 'data', 'exams', 'index.json')

# ====== Step 1: Load chips from data.js ======
def load_chips():
    with open(DATA_JS) as f:
        content = f.read()
    start = content.find('const CHIPS = [')
    bracket_start = content.index('[', start)
    depth = 0
    end = bracket_start
    for i in range(bracket_start, len(content)):
        if content[i] == '[': depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0: end = i + 1; break
    chips_str = content[bracket_start:end]
    chips_str = re.sub(r',\s*([}\]])', r'\1', chips_str)
    chips_str = re.sub(r'//.*?\n', '\n', chips_str)
    chips_str = re.sub(r'/\*.*?\*/', '', chips_str, flags=re.DOTALL)
    chips_str = re.sub(r'([{,]\s*)(\w+)(\s*:)', r'\1"\2"\3', chips_str)
    return json.loads(chips_str)

# ====== Step 2: Load CMATH problems ======
def load_cmath():
    problems = []
    with open(CMATH_FILE) as f:
        for line in f:
            line = line.strip()
            if line: problems.append(json.loads(line))
    # Filter G4-6
    return [p for p in problems if p['grade'] in [4, 5, 6]]

# ====== Step 3: Keyword-based chip classification ======
# Define keyword mappings for each chip (partial keywords that indicate a match)
CHIP_KEYWORDS = {
    # G4 Math
    "MATH-04-001": ["鸡兔同笼", "差量", "倒扣", "投中", "扣分", "里外里"],
    "MATH-04-002": ["周期", "循环", "余数", "彩灯", "颜色", "排列"],
    "MATH-04-003": ["重叠", "剪拼", "长方形", "重叠面积"],
    "MATH-04-004": ["盈亏", "每班分", "多出", "不够分", "买来一批", "分给"],
    "MATH-04-005": ["分配律", "乘法分配律", "简便计算", "(40+4)"],
    "MATH-04-006": ["小数加减", "小数点对齐", "竖式计算", "15.62"],
    "MATH-04-007": ["三角形内角", "内角和", "围成三角形", "等腰"],
    "MATH-04-008": ["平移", "格数", "对应点"],
    "MATH-04-009": ["年龄", "今年", "几年后", "倍"],
    "MATH-04-010": ["植树", "两头都种", "每隔", "棵"],
    "MATH-04-011": ["角的大小", "边长", "延长"],
    "MATH-04-012": ["和差", "和是", "差是"],
    "MATH-04-013": ["归一", "台", "天", "耕地"],
    "MATH-04-014": ["平行四边形", "拉成", "面积变化"],
    "MATH-04-015": ["大数", "亿以内", "读写"],
    "MATH-04-016": ["角的度量", "量角器"],
    "MATH-04-017": ["三位数乘两", "竖式乘法", "估算"],
    "MATH-04-018": ["除数是两位", "试商"],
    "MATH-04-019": ["条形统计", "数据整理"],
    "MATH-04-020": ["沏茶", "优化", "对策"],
    "MATH-04-021": ["四则运算", "混合运算", "括号"],
    "MATH-04-022": ["运算定律", "交换律", "结合律"],
    "MATH-04-023": ["小数意义", "小数性质", "小数读写"],
    "MATH-04-024": ["小数加减", "竖式对齐"],
    "MATH-04-025": ["小数乘法", "小数×整数", "积的近似"],
    "MATH-04-026": ["小数除法", "除数是整数", "循环小数"],
    "MATH-04-027": ["平均数", "条形统计"],
    "MATH-04-028": ["轴对称", "平移"],
    "MATH-04-029": ["观察物体", "立体图形", "不同方向"],
    "MATH-04-030": ["营养午餐", "数据收集", "方案设计"],
    
    # G5 Math
    "MATH-05-001": ["蝴蝶模型", "梯形阴影", "对角线", "面积关系"],
    "MATH-05-002": ["火车过桥", "完全过桥", "桥长", "火车长"],
    "MATH-05-003": ["公因数", "最小公倍数", "一堆剩", "最少"],
    "MATH-05-004": ["小数乘法", "积的近似", "运算定律"],
    "MATH-05-005": ["数对", "位置", "列", "行"],
    "MATH-05-006": ["小数除法", "除数是整数"],
    "MATH-05-007": ["可能性", "确定性", "概率"],
    "MATH-05-008": ["简易方程", "字母表示数", "等量关系"],
    "MATH-05-009": ["多边形面积", "平行四边形", "三角形", "梯形"],
    "MATH-05-010": ["植树问题", "两端都种", "只种一端"],
    "MATH-05-011": ["编码", "身份证", "数字编码"],
    "MATH-05-012": ["观察物体", "三视图", "还原立体"],
    "MATH-05-013": ["因数", "倍数", "质数", "合数"],
    "MATH-05-014": ["长方体", "正方体", "表面积", "体积"],
    "MATH-05-015": ["分数意义", "真分数", "假分数", "分数性质"],
    "MATH-05-016": ["分数加减", "同分母", "异分母"],
    "MATH-05-017": ["折线统计"],
    "MATH-05-018": ["找次品", "天平", "三分法"],
    "MATH-05-019": ["旋转", "图形运动"],
    "MATH-05-020": ["分数乘法", "分数×整数", "分数×分数"],
    "MATH-05-021": ["分数除法", "倒数"],
    "MATH-05-022": ["比的意义", "化简比", "按比例"],
    "MATH-05-023": ["圆的认识", "周长", "面积"],
    
    # G6 Math
    "MATH-06-001": ["流水", "行船", "顺水", "逆水", "帽子"],
    "MATH-06-002": ["旋转体", "旋转一周", "直角边", "轴"],
    "MATH-06-003": ["鸽巢", "抽屉原理", "保证", "至少摸"],
    "MATH-06-004": ["分数乘法", "分数乘分数", "混合运算"],
    "MATH-06-005": ["位置", "方向", "距离"],
    "MATH-06-006": ["分数除法", "除以整数", "几分之几"],
    "MATH-06-007": ["比的基本性质", "化简比", "按比分配"],
    "MATH-06-008": ["圆周长", "圆面积", "环形面积"],
    "MATH-06-009": ["百分数", "小数互化"],
    "MATH-06-010": ["扇形统计"],
    "MATH-06-011": ["数形结合", "数与形", "找规律"],
    "MATH-06-012": ["负数", "数轴", "负数比较"],
    "MATH-06-013": ["折扣", "成数", "税率", "利率"],
    "MATH-06-014": ["圆柱", "圆锥", "表面积", "体积"],
    "MATH-06-015": ["比例", "正比例", "反比例"],
    "MATH-06-016": ["总复习", "数与代数", "图形与几何"],
    "MATH-06-017": ["工程问题", "工作效率", "工作时间"],
    "MATH-06-018": ["行程问题", "相遇", "追及", "环形"],
    "MATH-06-019": ["浓度问题", "浓度公式", "稀释"],
    "MATH-06-020": ["利润问题", "成本", "售价", "利润"],
    "MATH-06-021": ["列方程", "解应用题", "设未知数", "等量关系"],
    "MATH-06-022": ["鸡兔同笼", "假设法", "方程法"],
}

def classify_problem(problem, chips):
    """Classify a cmath problem to the best matching chip.
    Requires at least MIN_MATCH keywords to count as a match (prevents overmatch)."""
    text = problem['input']
    grade = problem['grade']
    
    MIN_MATCH = 1  # Minimum keywords needed
    
    # Filter chips for this grade
    grade_chips = [c for c in chips if c['grade'] == grade and c['subject'] == '数学']
    
    best_score = -1
    best_chip = None
    
    for chip in grade_chips:
        keywords = CHIP_KEYWORDS.get(chip['id'], [])
        if not keywords:
            continue
        
        score = 0
        for kw in keywords:
            if kw in text:
                score += 1
        if score >= MIN_MATCH and score > best_score:
            best_score = score
            best_chip = chip
    
    # Fallback: if no specific match, assign to a generic calculation chip
    if best_chip is None:
        fallback_id = f"MATH-0{grade}-021" if grade == 4 else f"MATH-0{grade}-021" if grade == 5 else f"MATH-0{grade}-016"
        fallback = next((c for c in grade_chips if c['id'].startswith(f'MATH-0{grade}')), None)
        if fallback:
            best_chip = fallback
            best_score = 0
    
    return best_chip, best_score

# ====== Step 4: Generate injection data ======
def main():
    print("Loading chips...")
    chips = load_chips()
    math_chips = [c for c in chips if c['subject'] == '数学' and c['grade'] in [4,5,6]]
    print(f"  Found {len(math_chips)} math chips G4-6")
    
    print("Loading CMATH problems...")
    problems = load_cmath()
    print(f"  Found {len(problems)} G4-6 problems")
    
    print("Classifying problems...")
    chip_problems = {}  # chip_id -> list of problems
    unmatched = []
    
    for i, p in enumerate(problems):
        chip, score = classify_problem(p, math_chips)
        if chip and score > 0:
            if chip['id'] not in chip_problems:
                chip_problems[chip['id']] = []
            chip_problems[chip['id']].append({
                'question': p['input'],
                'answer': p['golden'],
                'reasoning_step': p['reasoning_step'],
                'source': f'CMATH/dev/G{p["grade"]}'
            })
        else:
            unmatched.append(p)
    
    # Summary stats
    print(f"\n=== Classification Results ===")
    print(f"  Matched: {sum(len(v) for v in chip_problems.values())} problems → {len(chip_problems)} chips")
    print(f"  Unmatched: {len(unmatched)} problems")
    
    # Top chips by problem count
    top_chips = sorted(chip_problems.items(), key=lambda x: len(x[1]), reverse=True)[:10]
    print(f"\n  Top 10 chips by problem count:")
    for cid, probs in top_chips:
        chip = next((c for c in math_chips if c['id'] == cid), None)
        title = chip['title'][:40] if chip else '?'
        print(f"    {cid}: {len(probs)} problems ({title})")
    
    # ====== Step 5: Inject into model JSONs ======
    print("\nInjecting into model JSONs...")
    MODEL_MAP = {}  # Load from index.html
    
    with open(os.path.join(os.path.dirname(__file__), '..', 'index.html')) as f:
        html = f.read()
    
    # Extract MODEL_MAP
    map_match = re.search(r'var MODEL_MAP = \{([^}]+)\}', html)
    if map_match:
        entries = re.findall(r'"([^"]+)":\s*"([^"]+)"', map_match.group(0))
        MODEL_MAP = dict(entries)
    
    injected_count = 0
    for chip_id, problems in chip_problems.items():
        model_file = MODEL_MAP.get(chip_id)
        if not model_file:
            continue
        
        model_path = os.path.join(MODELS_DIR, model_file + '.json')
        if not os.path.exists(model_path):
            continue
        
        with open(model_path) as f:
            model = json.load(f)
        
        # Add problems as variant training
        existing_variants = model.get('variantTraining', [])
        new_variants = []
        for i, p in enumerate(problems[:5]):  # Max 5 per chip
            vid = f"v-{chip_id.lower()}-cmath-{i+1}"
            # Determine difficulty from reasoning_step
            diff = min(p['reasoning_step'], 3)
            
            # Generate a solution path
            solution = f"计算过程：{p['question']}\n步骤{p['reasoning_step']}步推理\n答案：{p['answer']}"
            verify = f"代入验证：将答案{p['answer']}代回原题检查，结果正确"
            
            new_variants.append({
                "id": vid,
                "question": p['question'],
                "answer": p['answer'],
                "difficulty": diff,
                "solutionPath": solution,
                "verifyStep": verify,
                "source": p['source']
            })
        
        # Merge: replace duplicates by question
        existing_questions = {v.get('question', '').strip(): i for i, v in enumerate(existing_variants)}
        for nv in new_variants:
            q = nv['question'].strip()
            if q in existing_questions:
                existing_variants[existing_questions[q]] = nv  # Update
            else:
                existing_variants.append(nv)
        
        model['variantTraining'] = existing_variants
        model['_updatedAt'] = '2026-06-12T17:00:00'
        model['_source'] = 'CMATH/inject'
        
        with open(model_path, 'w') as f:
            json.dump(model, f, ensure_ascii=False, indent=2)
        
        injected_count += 1
    
    print(f"  Injected {injected_count} model JSONs with CMATH problems")
    
    # ====== Step 6: Generate exam enrichment data ======
    print("\nGenerating exam enrichment data...")
    with open(EXAM_INDEX) as f:
        exams = json.load(f)
    
    # For each exam, find matching cmath problems by grade and chips
    exam_enrichments = []
    for exam in exams:
        if exam['subject'] != '数学':
            continue
        grade = exam['grade']
        
        # Find problems that match this exam's chips
        matching_problems = []
        for chip_id in exam.get('chips', []):
            if chip_id in chip_problems:
                for p in chip_problems[chip_id]:
                    if p['question'] not in [m['question'] for m in matching_problems]:
                        matching_problems.append(p)
        
        if matching_problems:
            # Add representative questions
            exam['sampleQuestions'] = [
                {
                    'question': p['question'],
                    'answer': p['answer'],
                    'difficulty': min(p['reasoning_step'], 3),
                    'relatedChip': chip_id
                }
                for p in matching_problems[:10]  # Max 10 per exam
            ]
            exam_enrichments.append(exam)
    
    # Write enriched exam data
    enriched_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'exams', 'index-enriched.json')
    with open(enriched_path, 'w') as f:
        json.dump(exam_enrichments, f, ensure_ascii=False, indent=2)
    print(f"  Generated {len(exam_enrichments)} enriched exam records → {enriched_path}")
    
    # Save chip-problem mapping for frontend use
    mapping_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'cmath-chip-map.json')
    # Convert to serializable format
    serializable_map = {
        chip_id: [
            {"q": p["question"], "a": p["answer"], "step": p["reasoning_step"]}
            for p in probs
        ]
        for chip_id, probs in chip_problems.items()
    }
    with open(mapping_path, 'w') as f:
        json.dump(serializable_map, f, ensure_ascii=False, indent=2)
    print(f"  Saved chip-problem mapping → {mapping_path}")
    
    # Summary
    print(f"\n=== Phase 1 Complete ===")
    print(f"  Total problems processed: {len(problems)}")
    print(f"  Chips enriched: {injected_count}")
    print(f"  Exams enriched: {len(exam_enrichments)}")
    print(f"  Unmatched problems: {len(unmatched)}")
    print(f"  New variant training items: {sum(len(v) for v in chip_problems.values())}")

if __name__ == '__main__':
    main()
