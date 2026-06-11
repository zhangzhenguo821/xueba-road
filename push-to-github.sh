#!/bin/bash
# ============================================
# 学霸之路：一键推送到 GitHub + 启用 Pages
# ============================================
#
# 前提条件：
# 1. 已安装 gh CLI（brew install gh）
# 2. 已登录 gh（gh auth login）
#
# 使用方法：直接在终端执行 bash push-to-github.sh

REPO_NAME="xueba-road-platform"
OWNER="zhangzhenguo821"
BRANCH="main"

echo "🚀 学霸之路：一键推送到 GitHub"
echo "================================"

# Step 1: 检查 gh CLI
if ! command -v gh &> /dev/null; then
    echo "❌ gh CLI 未安装"
    echo "   安装方法: brew install gh"
    exit 1
fi

# Step 2: 检查认证
if ! gh auth status &> /dev/null 2>&1; then
    echo "❌ gh CLI 未认证"
    echo ""
    echo "   请先在终端执行: gh auth login"
    echo "   选择: GitHub.com → HTTPS → Login with a web browser"
    echo "   按照提示在浏览器完成认证后，再执行本脚本"
    exit 1
fi

echo "✅ gh CLI 已认证"

# Step 3: 创建仓库
echo ""
echo "📦 创建 GitHub 仓库..."
gh repo create $REPO_NAME --public \
    --description "四五六年级全科突破学习平台 - 产品原型网站。26个核心芯片数据、3个核心页面、Canvas交互引擎、交付包导出系统。" \
    --source=. \
    --push 2>&1

if [ $? -ne 0 ]; then
    echo "⚠️ 仓库可能已存在，尝试直接推送..."
    git remote add origin https://github.com/$OWNER/$REPO_NAME.git 2>/dev/null
    git push -u origin $BRANCH 2>&1
fi

echo ""
echo "🌐 启用 GitHub Pages..."
gh api repos/$OWNER/$REPO_NAME/pages \
    --method POST \
    -f build_type=workflow \
    -f source[branch]=$BRUNCH \
    -f source[path]=/ 2>&1 || echo "⚠️ Pages需要手动启用（见下方说明）"

# 也创建一个 .nojekyll 文件确保 Pages 正常工作
echo "nojekyll" > .nojekyll
git add .nojekyll
git commit -m "添加 .nojekyll 确保 GitHub Pages 正常渲染" 2>/dev/null
git push origin $BRANCH 2>/dev/null

echo ""
echo "✅✅✅ 推送完成！✅✅✅"
echo ""
echo "🔗 仓库地址: https://github.com/$OWNER/$REPO_NAME"
echo "🌐 网站地址: https://$OWNER.github.io/$REPO_NAME/"
echo ""
echo "⚠️ 如果 GitHub Pages 未自动启用："
echo "   1. 打开 https://github.com/$OWNER/$REPO_NAME/settings/pages"
echo "   2. Source 选择 'Deploy from a branch'"
echo "   3. Branch 选择 'main' / '(root)'"
echo "   4. 点击 Save"
echo "   5. 等待1-2分钟，网站即可访问"
echo ""
echo "📝 外包团队操作："
echo "   - 打开网站链接查看活的原型"
echo "   - git clone https://github.com/$OWNER/$REPO_NAME.git 获取源代码"
echo "   - 按照 README.md 的对接指南开始开发"