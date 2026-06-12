// sync-warehouse-bvid.js
// 将 video-warehouse.json 中的 BV号精准同步到 data.js 的每个芯片中
// 解决异步加载导致的视频暂时不可用问题

const fs = require('fs');

const dataPath = 'data.js';
const whPath = 'video-warehouse.json';

const warehouse = JSON.parse(fs.readFileSync(whPath, 'utf8'));
let dataJs = fs.readFileSync(dataPath, 'utf8');

const whMap = {};
(warehouse.videos || []).forEach(v => {
  if (v.bvid) whMap[v.chipId] = v;
});

// Extract all chip positions with their exact ranges
const chipIdPositions = [];
const chipRe = /id:\s*"([A-Z]+-\d+-\d+)"/g;
let m;
while ((m = chipRe.exec(dataJs)) !== null) {
  chipIdPositions.push({ id: m[1], pos: m.index });
}

let syncedCount = 0;

// Process in REVERSE so positions remain valid as we modify the string
for (let i = chipIdPositions.length - 1; i >= 0; i--) {
  const chip = chipIdPositions[i];
  const wh = whMap[chip.id];
  if (!wh || !wh.bvid) continue;

  // Find next chip start (or end of file)
  const nextPos = (i < chipIdPositions.length - 1) 
    ? chipIdPositions[i + 1].pos 
    : dataJs.length;
  
  const chipText = dataJs.substring(chip.pos, nextPos);
  
  // Find video block within this chip
  const videoIdx = chipText.indexOf('video: {');
  if (videoIdx < 0) continue;
  
  const videoBlock = chipText.substring(videoIdx);
  
  // Find bvid field within video block
  const bvidInVideo = videoBlock.match(/bvid:\s*"([^"]*)"/);
  if (!bvidInVideo) continue;
  
  // If bvid already has a value, skip
  if (bvidInVideo[1] && bvidInVideo[1].length > 0) continue;
  
  // Calculate absolute position of bvid in dataJs
  const absBvidStart = chip.pos + videoIdx + bvidInVideo.index;
  const absBvidEnd = absBvidStart + bvidInVideo[0].length;
  
  // Build replacement
  const newBvidField = `bvid: "${wh.bvid}"`;
  
  // Replace at exact position
  dataJs = dataJs.substring(0, absBvidStart) + newBvidField + dataJs.substring(absBvidEnd);
  
  // Update positions after this one (they shifted by the difference in length)
  const lengthDiff = newBvidField.length - bvidInVideo[0].length;
  for (let j = 0; j < i; j++) {
    chipIdPositions[j].pos += lengthDiff;
  }
  
  syncedCount++;
}

fs.writeFileSync(dataPath, dataJs, 'utf8');
console.log(`✅ Synced bvid for ${syncedCount} chips`);

// Verify
const finalMatches = dataJs.match(/bvid:\s*"BV[a-zA-Z0-9]+"/g) || [];
console.log(`BV号总数: ${finalMatches.length} (含video+video2)`);
console.log(`约 ${Math.floor(finalMatches.length/2)} 个芯片有BV号`);
