// sync-warehouse-bvid-v3.js
// 最终修复版：找 bvid:"" 往前找最近的 chipId，替换为仓库中的 BV 号

const fs = require('fs');

const warehouse = JSON.parse(fs.readFileSync('video-warehouse.json', 'utf8'));
let dataJs = fs.readFileSync('data.js', 'utf8');

const whMap = {};
(warehouse.videos || []).forEach(v => {
  if (v.bvid) whMap[v.chipId] = v;
});

// Find all empty bvid positions
const bvidEmptyRe = /bvid:\s*""/g;
let replacements = [];

let bvidMatch;
while ((bvidMatch = bvidEmptyRe.exec(dataJs)) !== null) {
  const bvidPos = bvidMatch.index;
  
  // Find ALL chip IDs before this position
  const beforeBvid = dataJs.substring(0, bvidPos);
  const allChipIds = [...beforeBvid.matchAll(/id:\s*"([A-Z]+-\d+-\d+)"/g)];
  
  if (allChipIds.length === 0) continue;
  
  // Take the LAST (closest) chip ID
  const chipId = allChipIds[allChipIds.length - 1][1];
  
  const wh = whMap[chipId];
  if (!wh || !wh.bvid) continue;
  
  replacements.push({
    start: bvidPos,
    end: bvidPos + bvidMatch[0].length,
    chipId: chipId,
    newBvid: wh.bvid
  });
}

console.log(`Found ${replacements.length} empty bvid slots to fill`);

// Apply replacements in reverse order
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
const emptyBvids = (dataJs.match(/bvid:\s*""/g) || []).length;
console.log(`BV号: ${finalBvids} | 空BV: ${emptyBvids}`);
