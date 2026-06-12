// sync-warehouse-bvid-v2.js
// 更简单的策略：直接遍历文件，对每个 bvid: "" 用仓库数据替换

const fs = require('fs');

const warehouse = JSON.parse(fs.readFileSync('video-warehouse.json', 'utf8'));
let dataJs = fs.readFileSync('data.js', 'utf8');

const whMap = {};
(warehouse.videos || []).forEach(v => {
  if (v.bvid) whMap[v.chipId] = v;
});

// Find all bvid: "" patterns and determine which chip they belong to
// by looking backwards for the nearest chipId

const bvidEmptyRe = /bvid:\s*""/g;
let replacements = []; // { start, end, chipId, newBvid }

let bvidMatch;
while ((bvidMatch = bvidEmptyRe.exec(dataJs)) !== null) {
  const bvidPos = bvidMatch.index;
  
  // Look backwards to find the nearest chip ID
  const beforeBvid = dataJs.substring(0, bvidPos);
  const chipIdMatch = beforeBvid.match(/id:\s*"([A-Z]+-\d+-\d+)"[\s\S]*$/);
  
  if (!chipIdMatch) continue;
  const chipId = chipIdMatch[1];
  
  const wh = whMap[chipId];
  if (!wh || !wh.bvid) continue;
  
  replacements.push({
    start: bvidPos,
    end: bvidPos + bvidMatch[0].length,
    chipId: chipId,
    newBvid: wh.bvid
  });
}

// Apply replacements in REVERSE order (so positions stay valid)
replacements.sort((a, b) => b.start - a.start);

let count = 0;
replacements.forEach(r => {
  const newField = `bvid: "${r.newBvid}"`;
  dataJs = dataJs.substring(0, r.start) + newField + dataJs.substring(r.end);
  count++;
});

fs.writeFileSync('data.js', dataJs, 'utf8');
console.log(`✅ Synced ${count} bvid entries`);

// Final verification
const finalBvids = (dataJs.match(/bvid:\s*"BV[a-zA-Z0-9]+"/g) || []).length;
console.log(`Total BV号 in data.js: ${finalBvids}`);
console.log(`Approximately ${Math.floor(finalBvids/2)} chips have primary video with BV号`);
