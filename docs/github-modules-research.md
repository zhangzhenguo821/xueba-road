# 学习操作系统 — GitHub 能力模块调研报告

> 调研日期：2026-06-12 | 用途：全国小学知识压缩系统所需开源"零件仓库"

---

## 一、交互式知识可视化（核心层）

### 1. React Flow — 知识节点流图 ⭐⭐⭐
- **GitHub**: [xyflow/xyflow](https://github.com/xyflow/xyflow) — 28k+ stars
- **能力**: 拖拽连线、自定义节点、子流(subflow)、缩放/小地图
- **适用**: 认知模型思维路径图、考点拓扑关系图、解题流程图
- **技术栈**: React + TypeScript
- **替代方案**: D3.js (110k+ stars) — 更底层更灵活但开发成本高

### 2. Konva.js / react-konva — 交互画布 ⭐⭐⭐
- **GitHub**: [konvajs/konva](https://github.com/konvajs/konva) — 11k+ stars
- **能力**: 2D Canvas 声明式渲染、拖拽、缩放、图层管理、动画
- **适用**: 数学几何画板、语文批注画布、分数条/面积模型拖拽
- **技术栈**: React/Vue/Vanilla JS

### 3. Markmap — 思维导图自动生成 ⭐⭐
- **GitHub**: [markmap/markmap](https://github.com/markmap/markmap) — 9k+ stars
- **能力**: Markdown → 交互式思维导图，支持缩放展开
- **适用**: 知识点大纲可视化、易错点归类树

---

## 二、数学公式与图形渲染

### 4. KaTeX — 最快数学公式渲染 ⭐⭐⭐
- **GitHub**: [KaTeX/KaTeX](https://github.com/KaTeX/KaTeX) — 18k+ stars
- **能力**: LaTeX→HTML/SVG，同步渲染，无页面回流
- **适用**: 数学方程展示、公式编辑器
- **替代**: MathJax (10k+ stars) — 功能更全但更慢

### 5. Math.js — 数学计算引擎 ⭐⭐
- **GitHub**: [josdejong/mathjs](https://github.com/josdejong/mathjs) — 14k+ stars
- **能力**: 符号计算、矩阵运算、单位转换、表达式解析
- **适用**: 变式题自动验算、难度系数计算

---

## 三、搜索引擎（内容发现层）

### 6. Meilisearch — 即时全文搜索 ⭐⭐⭐
- **GitHub**: [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) — 50k+ stars
- **能力**: 中文分词、拼音搜索、容错纠错、瞬时响应(<50ms)
- **适用**: 161个考点全文搜索、错题关键词检索
- **部署**: 单个二进制，Docker 一行启动
- **替代**: Typesense (21k+ stars) — 性能更强但中文支持弱

---

## 四、试题/题库系统

### 7. ClassQuiz — 开源 Kahoot! 替代 ⭐⭐
- **GitHub**: [mawoka-myblock/ClassQuiz](https://github.com/mawoka-myblock/ClassQuiz)
- **能力**: 多选题、投票、自托管、房间制
- **适用**: 课堂互动测验、自我诊断
- **替代**: Quiz0r (更新更现代)

### 8. Question Generator (NLP) ⭐⭐
- **GitHub Topics**: `question-generator` — 30+ 个项目
- **能力**: 从文本/PDF自动出题，NLP驱动
- **适用**: 真题→变式题自动生成

---

## 五、文档/静态站点

### 9. Docusaurus ⭐⭐⭐ (推荐)
- **GitHub**: [facebook/docusaurus](https://github.com/facebook/docusaurus) — 58k+ stars
- **能力**: React MDX、多语言、版本管理、博客、搜索集成
- **适用**: 知识库文档站、系统帮助中心
- **对比**: MkDocs (20k, Python) 更轻量；VuePress (23k) Vue生态

---

## 六、PDF 处理（试卷入口层）

### 10. PDF.js — PDF 渲染查看 ⭐⭐⭐
- **GitHub**: [mozilla/pdf.js](https://github.com/mozilla/pdf.js) — 50k+ stars
- **能力**: 浏览器内渲染PDF、文本提取、注释读取
- **适用**: 真题PDF在线浏览

### 11. PDF-lib — PDF 生成修改 ⭐⭐
- **GitHub**: [Hopding/pdf-lib](https://github.com/Hopding/pdf-lib) — 7k+ stars
- **能力**: 创建/修改PDF、合并拆分、表单填充
- **适用**: 自动生成变式练习卷

---

## 七、数据存储与同步

### 12. Dexie.js — 浏览器数据库 ⭐⭐
- **GitHub**: [dexie/Dexie.js](https://github.com/dexie/Dexie.js) — 12k+ stars
- **能力**: IndexedDB封装，离线优先
- **适用**: 离线刷题记录、学习进度本地存储

### 13. Yjs — CRDT 实时协作 ⭐
- **GitHub**: [yjs/yjs](https://github.com/yjs/yjs) — 17k+ stars
- **能力**: 无冲突实时同步
- **适用**: 未来多人协作刷题场景

---

## 八、推荐技术栈组合

### 🥇 轻量方案（当前SPA渐进升级）
| 层 | 选型 | 理由 |
|----|------|------|
| 可视化 | Markmap + KaTeX | 零框架依赖，直接注入HTML |
| 画布交互 | Konva.js (CDN) | 原生JS可用 |
| 搜索 | Meilisearch (独立进程) | 中文友好，瞬时响应 |
| 文档 | Docusaurus (独立站) | 知识库子站 |
| PDF | PDF.js (CDN) | 试卷在线浏览 |

### 🥈 全栈方案（后续重构）
| 层 | 选型 | 理由 |
|----|------|------|
| 框架 | Docusaurus 或 Next.js | 静态生成+交互页面 |
| 可视化 | React Flow + KaTeX | 知识图谱+公式 |
| 画布 | react-konva | 数学几何交互 |
| 搜索 | Meilisearch | 全文检索 |
| 题库 | 自建 JSON + ClassQuiz | 结构化存储+在线答题 |
| 存储 | Dexie.js + Yjs | 离线+协作 |

---

## 九、立即可行的三个最小闭环

### 闭环2: 知识搜索 (Meilisearch)
```
输入搜索词 → Meilisearch全文检索 → 返回匹配考点 → 点击直达模型
```

### 闭环3: 试卷入口 (PDF.js)
```
真题PDF → PDF.js在线浏览 → 标记题目 → 关联到对应认知模型
```

### 闭环4: 思维导图 (Markmap)
```
知识点大纲Markdown → Markmap实时渲染 → 可视化学科知识拓扑
```

---

> 📌 所有工具均为 MIT/Apache-2.0 开源协议，可自由用于商业和非商业项目。
