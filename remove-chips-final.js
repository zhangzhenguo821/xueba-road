/**
 * remove-chips-final.js
 * 最可靠方法：eval CHIPS → 过滤 → 重新拼接整个 data.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = '/Users/zhang/WorkBuddy/2026-06-12-10-19-38/xueba-road-clean';
const files = ['data.js', 'deploy/data.js', 'docs/data.js'];

const REMOVE_IDS = new Set([
  'MATH-04-019',
  'MATH-04-029',
  'MATH-05-011',
  'CHI-04-003',
  'CHI-04-016',
  'CHI-05-009',
  'CHI-05-013',
  'CHI-06-012',
]);

function processFile(fpath) {
  const basename = path.basename(fpath);
  if (!fs.existsSync(fpath)) {
    console.log(`⏭️  ${basename}: 不存在，跳过`);
    return;
  }

  let data = fs.readFileSync(fpath, 'utf8');

  // ===== 1. 解析 CHIPS =====
  const chipsStart = data.indexOf('const CHIPS = [');
  const chipsEnd = data.lastIndexOf('];');
  if (chipsStart === -1 || chipsEnd === -1) {
    console.log(`❌ ${basename}: 找不到 CHIPS 数组`);
    return;
  }

  const chipsJSText = data.substring(chipsStart + 15, chipsEnd + 1);
  let CHIPS;
  try {
    CHIPS = (new Function('return ' + chipsJSText))();
  } catch (e) {
    console.log(`❌ ${basename}: CHIPS 解析失败: ${e.message}`);
    return;
  }

  const originalLen = CHIPS.length;
  const newChips = CHIPS.filter(c => !REMOVE_IDS.has(c.id));

  if (newChips.length === originalLen) {
    console.log(`⚠️  ${basename}: 没有找到要删除的芯片（可能已删除）`);
    return;
  }

  console.log(`  CHIPS: ${originalLen} → ${newChips.length}`);

  // ===== 2. 重新生成 CHIPS 文本 =====
  // 从原文件中提取第一个 chip 的完整文本作为格式模板
  // 更实用的方法：直接从原文件中提取每个保留芯片的原始文本块

  function extractChipText(id) {
    // 在原始 data 中找到这个 chip 的文本
    const header = '\n  {\n    id: "' + id + '"';
    const idx = data.indexOf(header);
    if (idx === -1) return null;

    let depth = 0;
    let inStr = false, strCh = '', esc = false;
    let end = -1;

    for (let i = idx; i < data.length; i++) {
      const ch = data[i];
      if (esc) { esc = false; continue; }
      if (ch === '\\') { esc = true; continue; }
      if (ch === '"' || ch === "'") {
        if (!inStr) { inStr = true; strCh = ch; }
        else if (ch === strCh) { inStr = false; }
        continue;
      }
      if (!inStr) {
        if (ch === '{') depth++;
        if (ch === '}') { depth--; if (depth === 0) { end = i; break; } }
      }
    }
    if (end === -1) return null;
    return data.substring(idx, end + 1);
  }

  const chipTexts = [];
  for (const chip of newChips) {
    const text = extractChipText(chip.id);
    if (text) chipTexts.push(text);
    else console.log(`  ⚠️  无法提取芯片文本: ${chip.id}`);
  }

  const newChipsSection = '\n' + chipTexts.join(',\n') + '\n  ';

  const before = data.substring(0, chipsStart + 15);  // `const CHIPS = [`
  const after = data.substring(chipsEnd);  // `];<rest of file>`

  let newData = before + newChipsSection + after;

  // ===== 3. 从 PAIN_BUTTONS 删除 =====
  let removedBtn = 0;
  for (const id of REMOVE_IDS) {
    // 匹配 { label: "...", chipId: "ID" } （可能多行）
    const re = new RegExp(
      '\\{\\s*label:\\s*"[^"]*",\\s*chipId:\\s*"' + id + '"\\s*\\}',
      'g'
    );
    newData = newData.replace(re, () => { removedBtn++; return ''; });

    // 多行格式
    const re2 = new RegExp(
      '\\{\\s*\\n\\s*label:\\s*"[^"]*",\\s*\\n\\s*chipId:\\s*"' + id + '"\\s*\\n\\s*\\}',
      'g'
    );
    newData = newData.replace(re2, () => { removedBtn++; return ''; });
  }

  // 清理 PAIN_BUTTONS 中的空行和多余逗号
  newData = newData.replace(/,\s*\n\s*]/g, '\n]');
  newData = newData.replace(/\[[\s\n]*\]/g, '[]');

  // ===== 4. 更新进度计数器 =====
  newData = newData.replace(
    /(\/\/\s*进度[：:]\s*)0\/169/g,
    '$1 0/161'
  );

  // ===== 5. 写回并验证 =====
  fs.writeFileSync(fpath, newData, 'utf8');

  try {
    const verify = fs.readFileSync(fpath, 'utf8');
    const vStart = verify.indexOf('const CHIPS = [');
    const vEnd = verify.lastIndexOf('];');
    (new Function('return ' + verify.substring(vStart + 15, vEnd + 1)))();
    console.log(`✅ ${basename}: 完成 (CHIPS 语法 OK, 删除 ${originalLen - newChips.length} 芯片, ${removedBtn} 按钮)`);
  } catch (e) {
    console.log(`❌ ${basename}: 验证失败: ${e.message}`);
    fs.writeFileSync(fpath + '.broken', newData, 'utf8');
    console.log(`   损坏版本已保存到 ${basename}.broken`);
  }
}

for (const fname of files) {
  const fpath = path.join(ROOT, fname);
  console.log(`\n--- ${fname} ---`);
  processFile(fpath);
}

console.log('\n=== 全部处理完成 ===');
