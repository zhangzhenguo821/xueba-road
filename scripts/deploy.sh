#!/bin/bash
# 安全部署脚本：修改 index.html 后的标准流程
# 用法: bash scripts/deploy.sh "commit message"
# 
# 流程: 审计 → 同步 → 提交 → 推送

set -e
cd "$(dirname "$0")/.."

MSG="${1:-update index.html}"

echo "┌──────────────────────────────────────┐"
echo "│  🚀 学霸之路 · 安全部署流程         │"
echo "└──────────────────────────────────────┘"
echo ""

# Step 1: 全量审计
echo "📋 Step 1/4: 全量审计 index.html..."
python3 scripts/audit-index.py
echo ""

# Step 2: 三版同步
echo "📦 Step 2/4: 同步到 deploy/ 和 docs/..."
cp index.html deploy/index.html
cp index.html docs/index.html

# 同步手册页（如果存在）
for f in grade4-math-manual.html; do
    if [ -f "$f" ]; then
        cp "$f" "deploy/$f"
        cp "$f" "docs/$f"
        echo "  ✅ $f 已同步"
    fi
done

# 同步数据文件
if [ -d "data" ]; then
    rsync -a --delete data/ docs/data/ 2>/dev/null || true
    rsync -a --delete data/ deploy/data/ 2>/dev/null || true
    echo "  ✅ data/ 已同步"
fi

if [ -f "data.js" ]; then
    cp data.js docs/data.js
    cp data.js deploy/data.js
    echo "  ✅ data.js 已同步"
fi

echo ""

# Step 3: 提交
echo "📝 Step 3/4: Git 提交..."
git add index.html docs/index.html deploy/index.html
git add grade4-math-manual.html docs/grade4-math-manual.html deploy/grade4-math-manual.html 2>/dev/null || true
git add docs/data/ deploy/data/ docs/data.js deploy/data.js 2>/dev/null || true
git commit -m "$MSG"
echo ""

# Step 4: 推送
echo "⬆️  Step 4/4: 推送到 GitHub..."
git -c http.proxy=127.0.0.1:7890 push
echo ""

echo "🎉 部署完成！"
echo "   线上地址: https://zhangzhenguo821.github.io/xueba-road/"
