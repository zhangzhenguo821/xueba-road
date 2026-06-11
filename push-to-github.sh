#!/bin/bash
# ============================================
# 学霸之路：一键推送到 GitHub 脚本
# ============================================
# 
# 使用方法：
# 1. 先在终端执行: gh auth login
# 2. 然后执行本脚本: bash push-to-github.sh
#
# 如果没有 gh CLI，先安装: brew install gh

REPO_NAME="xueba-road-platform"
REPO_DESC="四五六年级全科突破学习平台 - 产品原型网站。26个核心芯片数据、3个核心页面、Canvas交互引擎、交付包导出系统。外包团队拿到即可开工。"

echo "🚀 开始推送学霸之路项目到 GitHub..."

# Step 1: 检查 gh CLI 是否安装和认证
if ! command -v gh &> /dev/null; then
    echo "❌ gh CLI 未安装。请先执行: brew install gh"
    exit 1
fi

if ! gh auth status &> /dev/null; then
    echo "❌ gh CLI 未认证。请先执行: gh auth login"
    echo "   选择: GitHub.com → HTTPS → Login with a web browser"
    exit 1
fi

# Step 2: 创建 GitHub 仓库
echo "📦 创建 GitHub 仓库..."
gh repo create $REPO_NAME --public --description "$REPO_DESC" --source=. --push

# Step 3: 启用 GitHub Pages
echo "🌐 启用 GitHub Pages..."
gh repo set-pages -r root -b main 2>/dev/null || echo "⚠️ Pages 可能需要手动启用"

# Step 4: 输出访问链接
echo ""
echo "✅ 推送完成！"
echo ""
echo "🔗 仓库地址: https://github.com/zhangzhenguo821/$REPO_NAME"
echo "🌐 网站地址: https://zhangzhenguo821.github.io/$REPO_NAME/"
echo ""
echo "📝 外包团队访问方式:"
echo "   1. 直接打开网站链接查看活的原型"
echo "   2. clone 仓库获取源代码和数据库"
echo "   3. 按照 SOP 模板和开工信开始工作"
echo ""
echo "⚠️ 如果 GitHub Pages 未自动启用，请到仓库 Settings → Pages → Source 选择 main branch"