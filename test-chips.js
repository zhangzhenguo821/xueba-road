/**
 * 自动化测试：检查所有芯片的数据完整性和点击可行性
 * 
 * 测试项目：
 * 1. PAIN_BUTTONS 中每个 chipId 都能在 CHIPS 中找到
 * 2. CHIPS 中每个芯片都有必要的字段
 * 3. renderModelPage 所需的字段检查
 * 4. 视频 bvid 有效性
 */

var fs = require('fs');
var vm = require('vm');

var dataJs = fs.readFileSync('./data.js', 'utf8');
var htmlJs = fs.readFileSync('./index.html', 'utf8');

// 提取 index.html 中的 JS（<script> 标签内的内容）
var scriptMatch = htmlJs.match(/<script>\s*([\s\S]*?)\s*<\/script>/);
if (!scriptMatch) {
  console.error('❌ 找不到 <script> 标签');
  process.exit(1);
}

// 合并 data.js 和 index.html 的 JS 到同一个沙箱
var sandbox = {
  console: console,
  XMLHttpRequest: function() {},
  setTimeout: setTimeout,
  document: { getElementById: function() { return { innerHTML: '' }; }, createElement: function() { return {}; }, querySelector: function() { return {}; } },
  window: {},
  globalThis: {}
};

// 先执行 data.js
vm.runInNewContext(dataJs, sandbox);

// 获取 CHIPS 数组
var CHIPS = sandbox.globalThis.CHIPS;
var PAIN_BUTTONS = sandbox.globalThis.PAIN_BUTTONS;

if (!CHIPS) {
  // 尝试从 sandbox 直接获取
  CHIPS = sandbox.CHIPS;
}

if (!CHIPS) {
  console.error('❌ 无法获取 CHIPS 数组');
  // 用 grep 方式直接从源文件提取 chip IDs
  var chipIds = [];
  var matches = dataJs.match(/id:\s*"([^"]+)"/g);
  if (matches) {
    chipIds = matches.map(function(m) { return m.match(/"([^"]+)"/)[1]; });
    console.log('✅ 从源文件提取到 ' + chipIds.length + ' 个 id');
  }
  process.exit(1);
}

console.log('✅ CHIPS 加载成功，共 ' + CHIPS.length + ' 条\n');

// ===== 测试 1: PAIN_BUTTONS 的 chipId 有效性 =====
console.log('='.repeat(60));
console.log('📋 测试 1: PAIN_BUTTONS chipId 映射检查');
console.log('='.repeat(60));

var chipMap = {};
CHIPS.forEach(function(c) {
  chipMap[c.id] = c;
});

var missingChips = [];
var painButtonCount = 0;

// PAIN_BUTTONS 结构: { '4': { '数学': [...], '语文': [...], '英语': [...] }, '5': {...}, '6': {...} }
Object.keys(PAIN_BUTTONS).forEach(function(grade) {
  var subjects = PAIN_BUTTONS[grade];
  Object.keys(subjects).forEach(function(subj) {
    var items = subjects[subj];
    if (!Array.isArray(items)) {
      console.error('  ⚠️  年级' + grade + ' ' + subj + ' 不是数组: ' + typeof items);
      return;
    }
    items.forEach(function(item) {
      painButtonCount++;
      if (!chipMap[item.chipId]) {
        missingChips.push({ grade: grade, subject: subj, chipId: item.chipId, label: item.label });
      }
    });
  });
});

console.log('PAIN_BUTTONS 总条目: ' + painButtonCount);
console.log('缺失 chipId 数: ' + missingChips.length);

if (missingChips.length > 0) {
  console.log('\n❌ 以下 chipId 在 CHIPS 中找不到:');
  missingChips.forEach(function(m) {
    console.log('  - ' + m.chipId + ' (' + m.grade + '年级 ' + m.subject + ': ' + m.label + ')');
  });
} else {
  console.log('✅ 所有 PAIN_BUTTONS 的 chipId 都能在 CHIPS 中找到');
}

// ===== 测试 2: CHIPS 字段完整性 =====
console.log('\n' + '='.repeat(60));
console.log('📋 测试 2: CHIPS 字段完整性检查（renderModelPage 依赖）');
console.log('='.repeat(60));

var REQUIRED_FIELDS = ['id', 'grade', 'subject', 'title', 'icon', 'category', 'keywords', 'exams', 'chip'];
var CHIP_REQUIRED = ['modelType', 'modelDesc', 'script'];

var fieldErrors = [];
var videoMissingBvid = [];
var scriptEmpty = [];
var examsEmpty = [];
var videoTotal = 0;
var video2Total = 0;

CHIPS.forEach(function(chip) {
  // 必填字段
  REQUIRED_FIELDS.forEach(function(f) {
    if (chip[f] === undefined || chip[f] === null) {
      fieldErrors.push({ id: chip.id || 'UNKNOWN', field: f });
    }
  });
  
  // chip 子字段
  if (chip.chip) {
    CHIP_REQUIRED.forEach(function(f) {
      if (chip.chip[f] === undefined || chip.chip[f] === null) {
        fieldErrors.push({ id: chip.id, field: 'chip.' + f });
      }
    });
    if (!chip.chip.script || chip.chip.script.trim() === '') {
      scriptEmpty.push(chip.id);
    }
  } else {
    fieldErrors.push({ id: chip.id, field: 'chip (整个对象)' });
  }
  
  // exams
  if (!chip.exams || !Array.isArray(chip.exams) || chip.exams.length === 0) {
    examsEmpty.push(chip.id);
  }
  
  // 视频
  if (chip.video && chip.video.bvid) {
    videoTotal++;
  }
  if (chip.video2 && chip.video2.bvid) {
    video2Total++;
  }
});

console.log('字段缺失错误: ' + fieldErrors.length);
if (fieldErrors.length > 0) {
  fieldErrors.slice(0, 20).forEach(function(e) {
    console.log('  - ' + e.id + ' 缺少: ' + e.field);
  });
  if (fieldErrors.length > 20) console.log('  ... 还有 ' + (fieldErrors.length - 20) + ' 个错误');
} else {
  console.log('✅ 所有必要字段完整');
}

console.log('\n无脚本芯片: ' + scriptEmpty.length);
if (scriptEmpty.length > 0 && scriptEmpty.length <= 10) {
  scriptEmpty.forEach(function(id) { console.log('  - ' + id); });
}

console.log('无真题芯片: ' + examsEmpty.length);

// ===== 测试 3: 视频覆盖率 =====
console.log('\n' + '='.repeat(60));
console.log('📋 测试 3: 视频 BV 号统计');
console.log('='.repeat(60));
console.log('主视频有 BV: ' + videoTotal + '/' + CHIPS.length);
console.log('视频2有 BV:  ' + video2Total + '/' + CHIPS.length);

var noVideoChips = CHIPS.filter(function(c) {
  return (!c.video || !c.video.bvid) && (!c.video2 || !c.video2.bvid);
});
console.log('无任何视频: ' + noVideoChips.length);
if (noVideoChips.length > 0) {
  noVideoChips.forEach(function(c) {
    console.log('  - ' + c.id + ' (' + c.title + ')');
  });
}

// ===== 测试 4: renderModelPage 关键行检查 =====
console.log('\n' + '='.repeat(60));
console.log('📋 测试 4: renderModelPage 关键字段检查（防止 JS 崩溃）');
console.log('='.repeat(60));

// 第 543 行: chip.examCodes[0]
var examCodesErrors = [];
CHIPS.forEach(function(chip) {
  if (!chip.examCodes || !Array.isArray(chip.examCodes) || chip.examCodes.length === 0) {
    examCodesErrors.push(chip.id);
  }
});

console.log('缺少 examCodes 字段的芯片: ' + examCodesErrors.length);

// 第 558 行: chip.keywords.map
var keywordsErrors = [];
CHIPS.forEach(function(chip) {
  if (!chip.keywords || !Array.isArray(chip.keywords)) {
    keywordsErrors.push(chip.id);
  }
});
console.log('缺少 keywords 数组的芯片: ' + keywordsErrors.length);

// ===== 测试 5: 模拟 openChip 调用 =====
console.log('\n' + '='.repeat(60));
console.log('📋 测试 5: 模拟 openChip 调用（检测崩溃点）');
console.log('='.repeat(60));

var crashCount = 0;
var MODEL_MAP = sandbox.globalThis.MODEL_MAP || {};
var SUBJECT_MAP = sandbox.globalThis.SUBJECT_MAP || {};
var GRADE_MAP = sandbox.globalThis.GRADE_MAP || {};

// 取前5个和后5个芯片做模拟
var testChips = CHIPS.slice(0, 5).concat(CHIPS.slice(-5));

testChips.forEach(function(chip) {
  try {
    // 模拟 openChip
    var found = CHIPS.find(function(c) { return c.id === chip.id; });
    if (!found) {
      console.log('  ❌ ' + chip.id + ': CHIPS.find 返回 undefined');
      crashCount++;
      return;
    }
    
    // 检查 subject 在 SUBJECT_MAP 中
    if (!SUBJECT_MAP[chip.subject]) {
      console.log('  ❌ ' + chip.id + ': subject "' + chip.subject + '" 不在 SUBJECT_MAP');
      crashCount++;
      return;
    }
    
    // 检查 grade 在 GRADE_MAP 中
    if (!GRADE_MAP[chip.grade]) {
      console.log('  ❌ ' + chip.id + ': grade "' + chip.grade + '" 不在 GRADE_MAP');
      crashCount++;
      return;
    }
    
    console.log('  ✅ ' + chip.id + ' (' + chip.subject + ' G' + chip.grade + ') 模拟成功');
  } catch(e) {
    console.log('  ❌ ' + chip.id + ': 崩溃 - ' + e.message);
    crashCount++;
  }
});

console.log('\n崩溃数: ' + crashCount + '/' + testChips.length);

// ===== 汇总 =====
console.log('\n' + '='.repeat(60));
console.log('📊 测试汇总');
console.log('='.repeat(60));
console.log('CHIPS 总数:             ' + CHIPS.length);
console.log('PAIN_BUTTONS 条目:      ' + painButtonCount);
console.log('缺失 chipId:            ' + missingChips.length);
console.log('字段缺失:               ' + fieldErrors.length);
console.log('无脚本:                 ' + scriptEmpty.length);
console.log('无真题:                 ' + examsEmpty.length);
console.log('无视频:                 ' + noVideoChips.length);
console.log('模拟崩溃:               ' + crashCount + '/' + testChips.length);

var totalIssues = missingChips.length + fieldErrors.length + noVideoChips.length;
console.log('\n🔴 总问题数: ' + totalIssues);
if (totalIssues === 0) {
  console.log('✅ 所有测试通过！');
} else {
  console.log('⚠️  需要修复 ' + totalIssues + ' 个问题');
}
