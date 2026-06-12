/**
 * 认知模型批量构建脚本
 * 从 data.js 的 CHIPS 数组中提取每个芯片的认知模型，生成标准化 JSON 文件
 */

const fs = require('fs');
const path = require('path');

// ---- 加载 data.js ----
const code = fs.readFileSync(path.join(__dirname, '..', 'data.js'), 'utf-8');
const chipsMatch = code.match(/const CHIPS\s*=\s*(\[[\s\S]*?\n\]);/);
if (!chipsMatch) { console.error('CHIPS not found in data.js'); process.exit(1); }
const chips = eval(chipsMatch[1]);
console.log(`加载了 ${chips.length} 个芯片`);

// ---- 配置 ----
const MODELS_DIR = path.join(__dirname, '..', 'models');
if (!fs.existsSync(MODELS_DIR)) fs.mkdirSync(MODELS_DIR, { recursive: true });

// ---- 辅助函数 ----
/** 从 chip.id 生成 model_id，格式: math-g4-001 */
function chipIdToModelId(chipId) {
  // MATH-04-001 → math-g4-001
  const parts = chipId.split('-');
  const subject = parts[0].toLowerCase();
  const grade = parts[1].replace(/^0/, ''); // '04' → '4'
  const num = parts[2];
  return `${subject}-g${grade}-${num}`;
}

/** 从脚本文本中提取解题步骤（按中文句号分句） */
function parseScriptToSteps(script) {
  if (!script || script.trim() === '') return [];
  const sentences = script.split(/[。！]/).filter(s => s.trim().length > 0);
  return sentences.map((s, i) => ({
    step: i + 1,
    title: s.trim().substring(0, 20),
    action: s.trim(),
    hint: ''
  }));
}

/** 从 chip.subject 获取学科中文名 */
function subjectCN(subject) {
  const map = { '数学': '数学', '语文': '语文', '英语': '英语' };
  return map[subject] || subject;
}

/** 生成空 insight 模板 */
function emptyInsight() {
  return {
    oneliner: '',
    explanation: '',
    trigger: '',
    keyQuestion: ''
  };
}

// ---- 统计 ----
let stats = { generated: 0, skipped: 0, templates: 0, errors: [] };

// ---- 批量生成 ----
chips.forEach((chip, idx) => {
  try {
    const modelId = chipIdToModelId(chip.id);
    const filePath = path.join(MODELS_DIR, `${modelId}.json`);
    
    // 检查是否已有文件（保留手工编辑过的文件）
    if (fs.existsSync(filePath)) {
      stats.skipped++;
      return;
    }
    
    const model = {
      id: modelId,
      title: chip.chip.modelType || chip.title,
      chipId: chip.id,
      grade: chip.grade,
      subject: chip.subject,
      category: chip.category || '',
      icon: chip.icon || '📌',
      version: '1.0.0',
      created: new Date().toISOString().split('T')[0],
      
      modelType: chip.chip.modelType || '通用',
      modelDesc: chip.chip.modelDesc || '',
      
      insight: emptyInsight(),
      
      commonMistakes: [],
      
      standardSolution: {
        formula: '',
        steps: parseScriptToSteps(chip.chip.script)
      },
      
      variantTraining: [],
      
      nationalFrequency: {
        description: `${chip.subject}${chip.grade}年级必考点`,
        examTypes: [],
        frequencyRank: '待标注',
        relatedExams: [],
        skinVariants: []
      },
      
      crossReferences: {
        prerequisite: [],
        leadsTo: [],
        relatedChips: []
      }
    };
    
    // 如果 solution 步骤为空，至少加入脚本原文
    if (model.standardSolution.steps.length === 0 && chip.chip.script) {
      model.standardSolution.steps = [{
        step: 1,
        title: '大白话讲解',
        action: chip.chip.script,
        hint: ''
      }];
    }
    
    fs.writeFileSync(filePath, JSON.stringify(model, null, 2), 'utf-8');
    stats.generated++;
    
    // 每30个输出一次进度
    if (stats.generated % 30 === 0) {
      console.log(`  进度: ${stats.generated} 个已生成...`);
    }
  } catch (e) {
    stats.errors.push(`${chip.id}: ${e.message}`);
  }
});

// ---- 输出统计 ----
console.log('\n===== 构建完成 =====');
console.log(`✅ 新生成: ${stats.generated}`);
console.log(`⏭️ 跳过(已存在): ${stats.skipped}`);
console.log(`❌ 错误: ${stats.errors.length}`);
if (stats.errors.length > 0) {
  stats.errors.forEach(e => console.log(`  - ${e}`));
}
console.log(`📁 模型目录: ${MODELS_DIR}`);
console.log(`📊 总计: ${stats.generated + stats.skipped} / ${chips.length}`);
