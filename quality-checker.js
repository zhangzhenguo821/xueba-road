#!/usr/bin/env node
/**
 * AI 内容质量检查器
 * 用法：node quality-checker.js <chips-batch.json>
 */

const fs = require('fs');
const path = require('path');

const RULES = {
  semantic: [
    {
      name: '学术名词检测',
      check: (chip) => {
        const academicWords = ['本题', '考查', '综上所述', '故', '因此', '由此可见', '解析', '考点', '鸡兔同笼', '数论', '余数定理'];
        const text = (chip.painPoint || '') + ' ' + (chip.chip?.script || '');
        const found = academicWords.filter(w => text.includes(w));
        return {
          passed: found.length === 0,
          message: found.length > 0 ? `❌ 发现学术名词：${found.join('、')}` : '✅ 无学术名词'
        };
      }
    },
    {
      name: '大白话引导语检测',
      check: (chip) => {
        const text = chip.chip?.script || '';
        const hasGuide = text.includes('别担心') || text.includes('看这里') || text.includes('孩子们') || text.includes('学霸们');
        return {
          passed: hasGuide,
          message: hasGuide ? '✅ 包含大白话引导语' : '❌ 缺少大白话引导语'
        };
      }
    },
    {
      name: '一句话口诀检测',
      check: (chip) => {
        const text = chip.chip?.script || '';
        const hasKoujue = text.includes('口诀') || text.includes('记住') || text.includes('就是') || text.includes('叫做');
        return {
          passed: hasKoujue,
          message: hasKoujue ? '✅ 包含一句话口诀' : '❌ 缺少一句话口诀'
        };
      }
    }
  ],
  
  format: [
    {
      name: '字段完整性检测',
      check: (chip) => {
        const requiredFields = ['id', 'grade', 'subject', 'title', 'painPoint', 'aiDiagnosis', 'chip', 'exams'];
        const missing = requiredFields.filter(f => !chip[f]);
        return {
          passed: missing.length === 0,
          message: missing.length === 0 ? '✅ 字段完整' : `❌ 缺少字段：${missing.join(', ')}`
        };
      }
    },
    {
      name: '真题数量检测',
      check: (chip) => {
        const exams = chip.exams || [];
        return {
          passed: exams.length >= 2,
          message: exams.length >= 2 ? `✅ 真题数量足够（${exams.length}道）` : `❌ 真题数量不足（仅${exams.length}道，需要≥2）`
        };
      }
    }
  ],
  
  logic: [
    {
      name: '模型类型匹配',
      check: (chip) => {
        const subject = chip.subject;
        const modelType = chip.chip?.modelType || '';
        
        const validModels = {
          '数学': ['number-axis', 'seesaw', 'film-strip', 'overlap-area', 'butterfly-model'],
          '语文': ['radical-maze', 'tone-match', 'film-strip'],
          '英语': ['verb-burst', 'detective-chain', 'film-strip']
        };
        
        const valid = validModels[subject] || [];
        return {
          passed: valid.includes(modelType),
          message: valid.includes(modelType) ? `✅ 模型类型匹配（${modelType}）` : `❌ 模型类型不匹配（${modelType} 不适用于 ${subject}）`
        };
      }
    }
  ],
  
  cognitive: [
    {
      name: '认知动作设计',
      check: (chip) => {
        const action = chip.aiDiagnosis?.action || '';
        const hasInteraction = action.includes('弹出') || action.includes('交互') || action.includes('拖') || action.includes('画') || action.includes('连线');
        return {
          passed: hasInteraction,
          message: hasInteraction ? '✅ 设计了认知动作' : '❌ 缺少认知动作设计'
        };
      }
    },
    {
      name: 'Canvas 交互描述具体性',
      check: (chip) => {
        const desc = chip.chip?.modelDesc || '';
        const hasDetail = desc.length > 20;
        return {
          passed: hasDetail,
          message: hasDetail ? '✅ Canvas 描述具体' : '❌ Canvas 描述不够具体'
        };
      }
    }
  ]
};

function checkChip(chip, allChips) {
  const result = {
    id: chip.id,
    title: chip.title,
    scores: {},
    passed: 0,
    failed: 0,
    details: []
  };
  
  for (const [category, rules] of Object.entries(RULES)) {
    result.scores[category] = { passed: 0, failed: 0 };
    
    for (const rule of rules) {
      const checkResult = rule.check(chip, allChips);
      
      if (checkResult.passed) {
        result.passed++;
        result.scores[category].passed++;
      } else {
        result.failed++;
        result.scores[category].failed++;
      }
      
      result.details.push({
        category,
        rule: rule.name,
        passed: checkResult.passed,
        message: checkResult.message
      });
    }
  }
  
  result.totalScore = (result.passed / (result.passed + result.failed) * 100).toFixed(1);
  return result;
}

function generateReport(results) {
  let md = '# 🛡️ AI 内容质量检查报告\n\n';
  md += `> 检查时间：${new Date().toLocaleString('zh-CN', {timeZone: 'Asia/Shanghai'})}\n\n`;
  
  const totalChips = results.length;
  const avgScore = results.reduce((sum, r) => sum + parseFloat(r.totalScore), 0) / totalChips;
  const passedChips = results.filter(r => parseFloat(r.totalScore) >= 80).length;
  
  md += '## 📊 总体统计\n\n';
  md += `| 指标 | 数值 |\n`;
  md += `|------|------|\n`;
  md += `| 检查芯片总数 | ${totalChips} |\n`;
  md += `| 平均质量得分 | ${avgScore.toFixed(1)} / 100 |\n`;
  md += `| 合格芯片数（≥80分） | ${passedChips} / ${totalChips} |\n`;
  md += `| 合格率 | ${(passedChips / totalChips * 100).toFixed(1)}% |\n\n`;
  
  md += '## 🔍 逐芯片检查详情\n\n';
  
  for (const result of results) {
    const score = parseFloat(result.totalScore);
    const status = score >= 80 ? '✅ 合格' : '❌ 需修改';
    
    md += `### ${result.id} — ${result.title} （得分：${score} / 100）${status}\n\n`;
    
    for (const detail of result.details) {
      const icon = detail.passed ? '✅' : '❌';
      md += `- ${icon} **${detail.rule}**：${detail.message}\n`;
    }
    
    md += '\n';
  }
  
  return md;
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('用法：node quality-checker.js <chips-batch.json>');
    process.exit(1);
  }
  
  const filePath = args[0];
  
  if (!fs.existsSync(filePath)) {
    console.error(`❌ 文件不存在：${filePath}`);
    process.exit(1);
  }
  
  console.log(`📂 读取文件：${filePath}\n`);
  
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const chips = data.chips || [data];
  
  console.log(`🔍 开始检查 ${chips.length} 个芯片...\n`);
  
  const results = chips.map(chip => checkChip(chip, chips));
  const report = generateReport(results);
  
  const reportPath = filePath.replace('.json', '-quality-report.md');
  fs.writeFileSync(reportPath, report, 'utf-8');
  
  console.log(`📝 质量报告已保存：${reportPath}\n`);
  console.log(report);
}

main();
