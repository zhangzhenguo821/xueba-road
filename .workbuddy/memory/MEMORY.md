# 学霸之路项目记忆

## 项目概述
- 产品名：学霸之路：四五六年级全科突破平台
- 方法论：认知动作突破（不是死记硬背，而是通过交互动作理解）
- 三条铁律：去废话、防漏掉、学得会
- 用户核心信念："不怕内容多，就怕漏"

## 技术架构
- SPA原型：index.html（5页面hash路由）+ data.js + canvas-interactive.js
- Canvas交互模型7种：number-axis/seesaw/film-strip/overlap-area/butterfly-model/verb-burst/detective-chain
- 芯片5字段标准：编码/痛点/诊断/芯片/真题

## 内容状态
- data.js 当前32颗芯片（4年级数学14+语文2+英语3, 5年级数学3+语文2+英语2, 6年级数学3+语文2+英语2）
- 芯片编号：MATH-04-001~014, CHI-04-001~002, ENG-04-001~003, MATH/CHI/ENG-05/06

## AI教研系统
- SOP文件：AI教研组长-SOP.md
- 质量检查：quality-checker.js（4层9项检测）
- 交付格式：JSON + 纯文本 + 质量报告
- 生产流程：AI生产 → 质量自检 → 打包交付 → 外包导入

## 部署状态
- GitHub Pages 已成功部署：https://zhangzhenguo821.github.io/xueba-road/
- GitHub仓库：zhangzhenguo821/xueba-road（main分支，/docs目录）
- gh CLI已认证（zhangzhenguo821），可直接推送
- 本地代理对git push间歇性502，需要重试

## 外包团队协作
- 外包只负责"容器"（前端框架+后端CMS），不碰内容
- 内容由AI教研系统生产+质检后打包交付
- 外包的职责是"一键导入"JSON数据
