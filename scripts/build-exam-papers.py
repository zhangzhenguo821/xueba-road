#!/usr/bin/env python3
"""Build complete exam papers from cmath problems mapped to chips.

For each enriched exam:
- Pull all matching cmath problems through chip→problem mapping
- Assemble a full paper (8-20 questions)
- Store questions and answers separately
- Output exam-papers.js and exam-papers.json
"""

import json
import random
import os
import sys

random.seed(42)

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ── Load data ──

with open(os.path.join(BASE, 'data/exams/index.json')) as f:
    exams = json.load(f)

with open(os.path.join(BASE, 'data/exams/index-enriched.json')) as f:
    enriched = {e['id']: e for e in json.load(f)}

with open(os.path.join(BASE, 'data/cmath-chip-map.json')) as f:
    chip_map = json.load(f)

# Load all cmath problems for reference
cmath_problems = []
cmath_path = '/tmp/cmath-repo/datasets/cmath_dev.jsonl'
if os.path.exists(cmath_path):
    with open(cmath_path) as f:
        for line in f:
            line = line.strip()
            if line:
                cmath_problems.append(json.loads(line))

print(f"Loaded {len(exams)} exams, {len(enriched)} enriched, {len(chip_map)} chip-mapped, {len(cmath_problems)} cmath problems")

# ── Build per-chip problem pools ──
chip_pools = {}
for cid, probs in chip_map.items():
    pool = []
    for p in probs:
        pool.append({
            'question': p['q'],
            'answer': str(p['a']),
            'grade': 4,
            'difficulty': p.get('step', 1),
            'numDigits': 1
        })
    chip_pools[cid] = pool

print(f"Built problem pools for {len(chip_pools)} chips")

# ── Build complete papers ──

PAPER_STRUCTURES = {
    '期末': {'minQuestions': 15, 'maxQuestions': 22, 'sections': ['一、填空题', '二、计算题', '三、应用题', '四、思维拓展']},
    '期中': {'minQuestions': 12, 'maxQuestions': 18, 'sections': ['一、填空题', '二、计算题', '三、应用题']},
    '竞赛': {'minQuestions': 8, 'maxQuestions': 15, 'sections': ['一、选择题', '二、填空题', '三、解答题']},
}

def build_paper(exam):
    """Build a complete exam paper for a given exam entry."""
    enr = enriched.get(exam['id'], {})
    
    # Collect all available problems for this exam's chips
    all_questions = []
    for cid in exam.get('chips', []):
        pool = chip_pools.get(cid, [])
        for p in pool:
            p2 = dict(p)
            p2['chipId'] = cid
            all_questions.append(p2)
    
    if not all_questions:
        return None
    
    # Determine paper structure
    structure = PAPER_STRUCTURES.get(exam['type'], PAPER_STRUCTURES['期末'])
    target = min(structure['maxQuestions'], len(all_questions))
    if target < structure['minQuestions']:
        target = len(all_questions)
    
    # Select questions (prefer higher difficulty for variety)
    sorted_qs = sorted(all_questions, key=lambda q: (-q['difficulty'], random.random()))
    selected = sorted_qs[:target]
    
    # Deduplicate by question text
    seen = set()
    unique = []
    for q in selected:
        if q['question'] not in seen:
            seen.add(q['question'])
            unique.append(q)
    
    # Distribute across sections
    sections = structure['sections']
    n = len(unique)
    section_alloc = []
    remaining = n
    for i, sec in enumerate(sections):
        if i == len(sections) - 1:
            count = remaining
        else:
            count = max(2, n // len(sections))
            count = min(count, remaining - (len(sections) - i - 1) * 2)
        section_alloc.append(count)
        remaining -= count
    
    # Build paper structure
    paper_sections = []
    q_idx = 0
    for sec_name, count in zip(sections, section_alloc):
        qs = []
        for j in range(count):
            if q_idx < len(unique):
                q = unique[q_idx]
                qs.append({
                    'number': q_idx + 1,
                    'question': q['question'],
                    'difficulty': q['difficulty'],
                    'chipId': q['chipId']
                })
                q_idx += 1
        if qs:
            paper_sections.append({
                'name': sec_name,
                'questions': qs
            })
    
    total_q = sum(len(s['questions']) for s in paper_sections)
    if total_q < 3:
        return None
    
    # Build answer list (matched to unique order)
    answer_list = []
    for i, q in enumerate(unique):
        answer_list.append({
            'number': i + 1,
            'answer': q['answer']
        })
    
    return {
        'id': exam['id'],
        'title': exam['title'],
        'grade': exam['grade'],
        'subject': exam['subject'],
        'type': exam['type'],
        'region': exam['region'],
        'term': exam.get('term', ''),
        'year': exam.get('year', ''),
        'totalQuestions': total_q,
        'sections': paper_sections,
        'answers': answer_list
    }

# ── Generate papers ──

papers = []
paper_count = 0
for exam in exams:
    paper = build_paper(exam)
    if paper and paper['totalQuestions'] >= 3:
        papers.append(paper)
        paper_count += 1

print(f"\nGenerated {paper_count} complete exam papers")

# Stats
by_subject = {}
for p in papers:
    s = p['subject']
    by_subject[s] = by_subject.get(s, 0) + 1
print(f"  By subject: {by_subject}")
print(f"  Avg questions: {sum(p['totalQuestions'] for p in papers)/len(papers):.1f}")

# ── Write output ──

# JSON (for reference/rebuild)
json_path = os.path.join(BASE, 'data/exams/exam-papers.json')
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(papers, f, ensure_ascii=False)
print(f"\nWritten: {json_path} ({os.path.getsize(json_path):,} bytes)")

# JS (for direct page loading)
# Structure: papers indexed by exam id for O(1) lookup
papers_dict = {p['id']: p for p in papers}
js_content = 'var _EXAM_PAPERS = ' + json.dumps(papers_dict, ensure_ascii=False) + ';\n'
js_path = os.path.join(BASE, 'data/exams/exam-papers.js')
with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
print(f"Written: {js_path} ({os.path.getsize(js_path):,} bytes)")

print("\n✅ Done! Paper files ready for deployment.")
