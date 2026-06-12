/**
 * 自动化测试 v2：直接从源文件提取并检查所有芯片数据
 */
var fs = require('fs');

var dataJs = fs.readFileSync('./data.js', 'utf8');
var indexHtml = fs.readFileSync('./index.html', 'utf8');

// ===== 提取 CHIPS 数组中的每个芯片对象 =====
function extractChips(source) {
  // 找到 CHIPS = [ 开始位置
  var chipsMatch = source.match(/CHIPS\s*=\s*\[/);
  if (!chipsMatch) {
    // 尝试 PAIN_BUTTONS
    console.log('CHIPS 数组直接提取失败，尝试从全局变量提取');
    return null;
  }
  
  // 从 CHIPS = [ 开始，找到匹配的 ]
  var startIdx = chipsMatch.index + chipsMatch[0].length;
  var depth = 1;
  var i = startIdx;
  var inString = false;
  var stringChar = '';
  
  while (i < source.length && depth > 0) {
    var ch = source[i];
    if (inString) {
      if (ch === '\\') { i += 2; continue; }
      if (ch === stringChar) inString = false;
      i++;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { inString = true; stringChar = ch; i++; continue; }
    if (ch === '[' || ch === '{') { depth++; i++; continue; }
    if (ch === ']' || ch === '}') { depth--; i++; continue; }
    i++;
  }
  
  var chipsText = source.substring(startIdx, i - 1).trim();
  
  // 解析每个芯片对象（以 { 开始，} 结束，后面是 , 或 ]）
  var chips = [];
  var j = 0;
  while (j < chipsText.length) {
    // 跳过空白和逗号
    while (j < chipsText.length && (chipsText[j] === ' ' || chipsText[j] === '\n' || chipsText[j] === '\r' || chipsText[j] === '\t' || chipsText[j] === ',')) j++;
    if (j >= chipsText.length) break;
    if (chipsText[j] !== '{') { j++; continue; }
    
    // 找到匹配的 }
    var startJ = j;
    var depthJ = 1;
    j++;
    var inStr = false, strCh = '';
    while (j < chipsText.length && depthJ > 0) {
      var c = chipsText[j];
      if (inStr) {
        if (c === '\\') { j += 2; continue; }
        if (c === strCh) inStr = false;
        j++;
        continue;
      }
      if (c === '"' || c === "'" || c === '`') { inStr = true; strCh = c; j++; continue; }
      if (c === '{') { depthJ++; j++; continue; }
      if (c === '}') { depthJ--; j++; continue; }
      j++;
    }
    
    var chipText = chipsText.substring(startJ, j);
    
    // 提取关键字段
    function extractField(text, field) {
      var re = new RegExp(field + '\\s*:\\s*');
      var m = text.match(re);
      if (!m) return null;
      var start = m.index + m[0].length;
      var c = text[start];
      if (c === '"' || c === "'" || c === '`') {
        // 字符串值
        var end = start + 1;
        while (end < text.length) {
          if (text[end] === '\\') { end += 2; continue; }
          if (text[end] === c) return text.substring(start + 1, end);
          end++;
        }
        return null;
      }
      // 数字
      if (c >= '0' && c <= '9') {
        var end = start;
        while (end < text.length && text[end] >= '0' && text[end] <= '9') end++;
        return parseInt(text.substring(start, end));
      }
      return text.substring(start, start + 20).replace(/[\n\r,].*/, '');
    }
    
    function extractArrayField(text, field) {
      var re = new RegExp(field + '\\s*:\\s*\\[');
      var m = text.match(re);
      if (!m) return [];
      var start = m.index + m[0].length;
      // 简单计数
      var items = [];
      var depth = 1, k = start;
      var inStr2 = false, strCh2 = '';
      var currentItem = '';
      while (k < text.length && depth > 0) {
        var c = text[k];
        if (inStr2) {
          if (c === '\\') { currentItem += c + text[k+1]; k += 2; continue; }
          if (c === strCh2) { inStr2 = false; currentItem += c; k++; continue; }
          currentItem += c; k++; continue;
        }
        if (c === '"' || c === "'") { inStr2 = true; strCh2 = c; currentItem += c; k++; continue; }
        if (c === '[') { depth++; currentItem += c; k++; continue; }
        if (c === ']') { depth--; if (depth === 0) break; currentItem += c; k++; continue; }
        if (c === ',' && depth === 1) {
          if (currentItem.trim()) items.push(currentItem.trim().replace(/^["']|["']$/g, ''));
          currentItem = '';
          k++; continue;
        }
        currentItem += c; k++;
      }
      if (currentItem.trim()) items.push(currentItem.trim().replace(/^["']|["']$/g, ''));
      return items;
    }
    
    function hasField(text, field) {
      return new RegExp(field + '\\s*:').test(text);
    }
    
    var chip = {
      id: extractField(chipText, 'id'),
      grade: extractField(chipText, 'grade'),
      subject: extractField(chipText, 'subject'),
      title: extractField(chipText, 'title'),
      icon: extractField(chipText, 'icon'),
      category: extractField(chipText, 'category'),
      map: extractField(chipText, 'map'),
      video_bvid: extractField(chipText, 'bvid'),
      examCodes: extractArrayField(chipText, 'examCodes'),
      keywords: extractArrayField(chipText, 'keywords'),
      exams: extractArrayField(chipText, 'exams'),
      has_chip: hasField(chipText, 'modelType'),
      has_script: chipText.includes('script'),
      has_video2: chipText.includes('video2'),
      raw_length: chipText.length
    };
    
    chips.push(chip);
  }
  
  return chips;
}

// ===== 提取 PAIN_BUTTONS =====
function extractPainButtons(source) {
  var match = source.match(/PAIN_BUTTONS\s*=\s*\{/);
  if (!match) return {};
  
  var start = match.index + match[0].length - 1;
  var depth = 1, i = start + 1;
  var inStr = false, strCh = '';
  
  while (i < source.length && depth > 0) {
    var c = source[i];
    if (inStr) {
      if (c === '\\') { i += 2; continue; }
      if (c === strCh) inStr = false;
      i++; continue;
    }
    if (c === '"' || c === "'") { inStr = true; strCh = c; i++; continue; }
    if (c === '{') { depth++; i++; continue; }
    if (c === '}') { depth--; i++; continue; }
    i++;
  }
  
  var text = source.substring(start, i);
  
  // 提取所有 chipId
  var chipIds = [];
  var re = /chipId\s*:\s*["']([^"']+)["']/g;
  var m;
  while ((m = re.exec(text)) !== null) {
    chipIds.push(m[1]);
  }
  
  // 提取 label
  var labels = [];
  re = /label\s*:\s*["']([^"']+)["']/g;
  while ((m = re.exec(text)) !== null) {
    labels.push(m[1]);
  }
  
  return { chipIds: chipIds, labels: labels, count: chipIds.length };
}

// ===== 主测试逻辑 =====
var chips = extractChips(dataJs);
var painButtons = extractPainButtons(dataJs);

if (!chips || chips.length === 0) {
  console.error('❌ 无法提取 CHIPS 数据');
  // 尝试简单的 id 提取
  var ids = [];
  var re = /id\s*:\s*"([^"]+)"/g;
  var m;
  while ((m = re.exec(dataJs)) !== null) {
    ids.push(m[1]);
  }
  console.log('简单提取到 ' + ids.length + ' 个 id（可能包含 bvid/id 混淆）');
  process.exit(1);
}

console.log('✅ 提取到 ' + chips.length + ' 个芯片对象\n');

// 1. chipId 映射
console.log('='.repeat(60));
console.log('📋 测试 1: PAIN_BUTTONS 的 chipId 有效性');
console.log('='.repeat(60));

var chipIdMap = {};
chips.forEach(function(c) { chipIdMap[c.id] = c; });

var missingFromChips = [];
if (painButtons.chipIds) {
  painButtons.chipIds.forEach(function(id, idx) {
    if (!chipIdMap[id]) {
      missingFromChips.push({ id: id, label: painButtons.labels[idx] || '?' });
    }
  });
}

console.log('PAIN_BUTTONS 条目数: ' + (painButtons.count || painButtons.chipIds.length));
console.log('在 CHIPS 中缺失: ' + missingFromChips.length);
if (missingFromChips.length > 0) {
  missingFromChips.forEach(function(m) { console.log('  ❌ ' + m.id + ' (' + m.label + ')'); });
} else {
  console.log('✅ 全部匹配');
}

// 2. 字段完整性
console.log('\n' + '='.repeat(60));
console.log('📋 测试 2: 字段完整性');
console.log('='.repeat(60));

var issues = [];
chips.forEach(function(c) {
  if (!c.id) issues.push({ id: '?', issue: '无 id' });
  if (!c.grade) issues.push({ id: c.id, issue: '无 grade' });
  if (!c.subject) issues.push({ id: c.id, issue: '无 subject' });
  if (!c.title) issues.push({ id: c.id, issue: '无 title' });
  if (!c.has_chip) issues.push({ id: c.id, issue: '缺少 chip 模型数据(modelType/modelDesc/script)' });
  if (!c.examCodes || c.examCodes.length === 0) issues.push({ id: c.id, issue: '缺少 examCodes' });
  if (!c.keywords || c.keywords.length === 0) issues.push({ id: c.id, issue: '缺少 keywords' });
  if (!c.exams || c.exams.length === 0) issues.push({ id: c.id, issue: '缺少 exams（真题映射）' });
});

console.log('问题总数: ' + issues.length);
issues.forEach(function(iss) {
  console.log('  ⚠️  ' + iss.id + ': ' + iss.issue);
});

// 3. 视频统计
console.log('\n' + '='.repeat(60));
console.log('📋 测试 3: 视频 BV 号统计');
console.log('='.repeat(60));

var withVideo = chips.filter(function(c) { return c.video_bvid; });
console.log('有主视频 BV: ' + withVideo.length + '/' + chips.length);
var noVideo = chips.filter(function(c) { return !c.video_bvid; });
if (noVideo.length > 0 && noVideo.length <= 20) {
  noVideo.forEach(function(c) {
    console.log('  - ' + c.id + ' (' + c.title + ')');
  });
}
if (noVideo.length > 20) {
  console.log('  ... 共 ' + noVideo.length + ' 个无视频芯片');
}

// 4. 按年级/学科统计
console.log('\n' + '='.repeat(60));
console.log('📋 测试 4: 按年级学科分布');
console.log('='.repeat(60));

var groups = {};
chips.forEach(function(c) {
  var key = 'G' + c.grade + ' ' + c.subject;
  if (!groups[key]) groups[key] = { total: 0, withVideo: 0, noExamCodes: 0, noKeywords: 0, noChip: 0 };
  groups[key].total++;
  if (c.video_bvid) groups[key].withVideo++;
  if (!c.examCodes || c.examCodes.length === 0) groups[key].noExamCodes++;
  if (!c.keywords || c.keywords.length === 0) groups[key].noKeywords++;
  if (!c.has_chip) groups[key].noChip++;
});

Object.keys(groups).sort().forEach(function(k) {
  var g = groups[k];
  console.log('  ' + k + ': ' + g.total + '芯片, ' + g.withVideo + '有视频, ' + g.noExamCodes + '缺examCodes, ' + g.noKeywords + '缺keywords, ' + g.noChip + '缺chip模型');
});

// 5. 关键Bug: examCodes[0] 检查
console.log('\n' + '='.repeat(60));
console.log('📋 测试 5: 关键崩溃点检查');
console.log('='.repeat(60));

// 检查 renderModelPage 中的关键表达式
// line 543: chip.examCodes[0]
var examCodesSafe = chips.filter(function(c) { return !c.examCodes || c.examCodes.length === 0; });
console.log('examCodes[0] 会崩溃的芯片数: ' + examCodesSafe.length);
if (examCodesSafe.length > 0 && examCodesSafe.length <= 10) {
  examCodesSafe.forEach(function(c) { console.log('  - ' + c.id); });
  console.log('⚠️  这是严重BUG：renderModelPage 第543行 chip.examCodes[0] 会导致 JS 错误终止渲染');
}

// 检查 video tags (line 558-559)
var videosAllOk = true;
console.log('video.bvid 状态: ' + withVideo.length + '个有BV, ' + noVideo.length + '个无BV');

// ===== 最终汇总 =====
console.log('\n' + '='.repeat(60));
console.log('📊 最终汇总');
console.log('='.repeat(60));
console.log('芯片总数:          ' + chips.length);
console.log('PAIN_BUTTONS:      ' + (painButtons.count || painButtons.chipIds.length));
console.log('映射缺失:          ' + missingFromChips.length);
console.log('字段问题:          ' + issues.length);
console.log('无视频:            ' + noVideo.length);
console.log('examCodes崩溃风险: ' + examCodesSafe.length);
console.log('');

var criticalCount = examCodesSafe.length;
var totalIssues = missingFromChips.length + issues.length + criticalCount;
if (totalIssues === 0) {
  console.log('✅ 所有测试通过！');
} else {
  console.log('🔴 发现 ' + totalIssues + ' 个问题需修复');
  if (criticalCount > 0) console.log('   🔥 其中 ' + criticalCount + ' 个是会导致页面崩溃的关键问题！');
}
