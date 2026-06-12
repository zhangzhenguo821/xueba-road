#!/usr/bin/env python3
"""全量审计 index.html：JS语法、函数存在性、元素ID交叉验证"""

import re, sys, subprocess

INDEX_PATH = '/Users/zhang/WorkBuddy/2026-06-12-10-19-38/xueba-road-clean/index.html'

with open(INDEX_PATH, 'r') as f:
    html = f.read()

errors = []

# ===== 1. HTML 标签完整性 (用标准解析器) =====
from html.parser import HTMLParser
class TagChecker(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.errors = []
        self.void = {'br','hr','img','input','meta','link','area','base','col','embed','source','track','wbr'}
    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        if tag not in self.void:
            self.stack.append(tag)
    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in self.void: return
        if self.stack and self.stack[-1] == tag:
            self.stack.pop()
        elif tag in self.stack:
            while self.stack and self.stack[-1] != tag:
                self.errors.append(f'未关闭: {self.stack.pop()}')
            if self.stack: self.stack.pop()
        else:
            self.errors.append(f'多余关闭标签: </{tag}>')

tc = TagChecker()
tc.feed(html)
if tc.errors:
    errors.extend(f"HTML标签错误: {e}" for e in tc.errors)
if tc.stack:
    errors.append(f"HTML标签未关闭: {tc.stack}")

# ===== 2. 提取 JS 代码 =====
script_match = re.search(r'<script>\s*\n(.*?)</script>', html, re.DOTALL)
if not script_match:
    errors.append("找不到内联 <script> 块")
    js = ""
else:
    js = script_match.group(1)

# ===== 3. JS 语法验证 =====
with open('/tmp/index_audit.js', 'w') as f:
    f.write(js)
result = subprocess.run(['node', '--check', '/tmp/index_audit.js'], capture_output=True, text=True)
if result.returncode != 0:
    errors.append(f"JS语法错误: {result.stderr.strip()}")

# ===== 4. 提取 onclick 绑定的函数名 (排除内联表达式) =====
# onclick 中可能包含: func(), obj.method(), if(), event.stopPropagation(), window.open()
# 我们只检查 "裸函数调用" 模式：onclick="funcName(...)"
native_patterns = {'if','else','return','event','this','window','document','console',
                   'true','false','null','undefined','new','typeof','instanceof'}
onclick_funcs = set()
for m in re.finditer(r'onclick="([^"]*)"', html):
    code = m.group(1)
    # 找顶层函数调用: 以字母开头，后跟(，且不在对象后
    for cm in re.finditer(r'(?:^|;)\s*(\w+)\s*\(', code):
        fn = cm.group(1)
        if fn not in native_patterns:
            onclick_funcs.add(fn)
    # 也处理单个函数调用（整个onclick就是一个调用）
    single = re.match(r'^\s*(\w+)\s*\(', code)
    if single:
        fn = single.group(1)
        if fn not in native_patterns:
            onclick_funcs.add(fn)

# ===== 5. 提取 JS 中定义的函数名 =====
js_funcs = set()
for m in re.finditer(r'function\s+(\w+)\s*\(', js):
    js_funcs.add(m.group(1))
for m in re.finditer(r'(?:var|let|const)\s+(\w+)\s*=\s*function\s*\(', js):
    js_funcs.add(m.group(1))

# ===== 6. onclick → JS函数交叉验证 =====
for func in sorted(onclick_funcs):
    if func not in js_funcs:
        errors.append(f"onclick 引用了不存在的函数: {func}()")

# ===== 7. 提取 HTML 中所有 id =====
html_ids = set()
for m in re.finditer(r'\sid="([^"]+)"', html):
    html_ids.add(m.group(1))

# ===== 8. 提取 JS 中所有 getElementById 引用 =====
for m in re.finditer(r'getElementById\([\'"]([^\'"]+)[\'"]\)', js):
    eid = m.group(1)
    if eid not in html_ids:
        # 检查是否是模板拼接生成的 (包含 +)
        if '+' not in eid:
            errors.append(f"JS引用不存在的元素: getElementById('{eid}')")

# ===== 9. 关键函数白名单检查 =====
critical_funcs = {
    'init': '页面初始化入口',
    'showPage': '页面切换',
    'selectGrade': '年级选择',
    'renderTree': '思维树渲染',
    'renderExams': '试卷列表渲染',
    'loadExams': '加载试卷数据',
    'viewExamPaper': '查看试卷详情',
    'closeExamPaper': '关闭试卷弹窗',
    'toggleAnswers': '切换答案显示',
    'updateProgress': '更新进度条',
    'loadVideoWarehouse': '加载视频库',
}
for f, desc in critical_funcs.items():
    if f not in js_funcs:
        errors.append(f"关键函数缺失: {f}() — {desc}")

# ===== 10. 检查是否有遗漏的 HTML 引用 =====
# 模板生成的ID (如 'videoArea_' + chip.id) 跳过检查
for m in re.finditer(r"getElementById\(['\"]([^'\"]+)(?:\s*\+\s*\w+(?:\.\w+)*)?['\"]\)", js):
    pass  # 模板拼接的已经在第8步处理过

# ===== 输出 =====
print("=" * 60)
print("🔍 index.html 全量审计")
print("=" * 60)
print(f"  HTML: {len(html):,} 字符 | 标签结构: {'✅' if not tc.errors and not tc.stack else '❌'}")
print(f"  JS:   {len(js):,} 字符 | 语法验证: {'✅' if result.returncode == 0 else '❌'}")
print(f"  onclick 绑定: {len(onclick_funcs)} | JS函数: {len(js_funcs)} | HTML id: {len(html_ids)}")

if errors:
    print(f"\n🔴 发现 {len(errors)} 个问题:")
    for i, e in enumerate(errors, 1):
        print(f"  {i}. {e}")
    sys.exit(1)
else:
    print(f"\n✅ 全部通过 — 0 个问题")
    sys.exit(0)
