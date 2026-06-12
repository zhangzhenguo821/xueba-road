/**
 * 学霸之路：Canvas 交互引擎
 * 为每个思维模型提供真实的可交互 Canvas 元素
 * 外包技术组拿到这些代码就能直接在前端跑起来
 */

// ====== Number Axis: 得分扣分差量模型 ======
function renderNumberAxis(canvas, chip) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let dragOffset = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    
    // Background
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    // Title
    ctx.fillStyle = '#FF6B6B';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('里外里原理：差量 = 5 + 2 = 7（不是 5 − 2 = 3！）', W/2, 20);
    ctx.textAlign = 'left';
    
    // Number line
    const lineY = H * 0.45;
    const lineStart = 40;
    const lineEnd = W - 40;
    ctx.strokeStyle = '#B2BEC3';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(lineStart, lineY);
    ctx.lineTo(lineEnd, lineY);
    ctx.stroke();
    
    // Zero point
    const zeroX = lineStart + (lineEnd - lineStart) * 0.35;
    ctx.fillStyle = '#2D3436';
    ctx.beginPath();
    ctx.arc(zeroX, lineY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 12px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('0', zeroX, lineY + 22);
    
    // +5 reward (right)
    const rewardX = zeroX + (lineEnd - lineStart) * 0.28 + dragOffset * 0.5;
    ctx.fillStyle = '#00B894';
    ctx.beginPath();
    ctx.arc(rewardX, lineY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillStyle = '#00B894';
    ctx.fillText('+5', rewardX, lineY - 16);
    ctx.font = '10px "Noto Sans SC"';
    ctx.fillStyle = '#636E72';
    ctx.fillText('进球得分', rewardX, lineY + 38);
    
    // -2 penalty (left)
    const penaltyX = zeroX - (lineEnd - lineStart) * 0.18 - dragOffset * 0.3;
    ctx.fillStyle = '#FF6B6B';
    ctx.beginPath();
    ctx.arc(penaltyX, lineY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillStyle = '#FF6B6B';
    ctx.fillText('−2', penaltyX, lineY - 16);
    ctx.font = '10px "Noto Sans SC"';
    ctx.fillStyle = '#636E72';
    ctx.fillText('投错扣分', penaltyX, lineY + 38);
    
    // Gap line (the key insight!)
    ctx.strokeStyle = '#FF6B35';
    ctx.lineWidth = 4;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(penaltyX, lineY + 52);
    ctx.lineTo(rewardX, lineY + 52);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Gap label
    const gapCenter = (penaltyX + rewardX) / 2;
    ctx.fillStyle = '#FF6B35';
    ctx.font = 'bold 16px "Noto Sans SC"';
    ctx.fillText('差 7 步！', gapCenter, lineY + 72);
    
    // Drag hint
    ctx.fillStyle = '#B2BEC3';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('👆 点击画面体验差量原理', gapCenter, H - 10);
    
    ctx.textAlign = 'left';
  }

  draw();
  
  canvas.addEventListener('click', function() {
    dragOffset = dragOffset === 0 ? 20 : 0;
    draw();
  });
}

// ====== Seesaw: 盈亏跷跷板模型 ======
function renderSeesaw(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let angle = -0.08;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    // Title
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('跷跷板差量模型：多和少是仇人，数量要相加！', W/2, 18);
    ctx.textAlign = 'left';
    
    // Pivot point (triangle base)
    const pivotX = W / 2, pivotY = H * 0.55;
    ctx.fillStyle = '#636E72';
    ctx.beginPath();
    ctx.moveTo(pivotX - 15, pivotY);
    ctx.lineTo(pivotX + 15, pivotY);
    ctx.lineTo(pivotX, pivotY - 20);
    ctx.closePath();
    ctx.fill();
    
    // Beam (rotated)
    const beamLen = W * 0.7;
    ctx.save();
    ctx.translate(pivotX, pivotY - 20);
    ctx.rotate(angle);
    
    ctx.strokeStyle = '#2D3436';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-beamLen/2, 0);
    ctx.lineTo(beamLen/2, 0);
    ctx.stroke();
    
    // Left side: "多15本" (up)
    const leftX = -beamLen * 0.35;
    ctx.fillStyle = '#00B894';
    ctx.beginPath();
    ctx.roundRect(leftX - 32, -50, 64, 38, 6);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('多15本 ↑', leftX, -26);
    
    // Right side: "缺25本" (down)
    const rightX = beamLen * 0.35;
    ctx.fillStyle = '#FF6B6B';
    ctx.beginPath();
    ctx.roundRect(rightX - 32, 12, 64, 38, 6);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.fillText('缺25本 ↓', rightX, 36);
    
    ctx.restore();
    ctx.textAlign = 'left';
    
    // Total gap
    ctx.fillStyle = '#FF6B35';
    ctx.font = 'bold 15px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('总差量 = 15 + 25 = 40', W/2, pivotY + 38);
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.fillText('班数 = 40 ÷ (10−8) = 20 个', W/2, pivotY + 56);
    
    // Tip
    ctx.fillStyle = '#B2BEC3';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('👆 点击左右两端，感受跷跷板翻转', W/2, H - 10);
    ctx.textAlign = 'left';
  }
  
  draw();
  
  canvas.addEventListener('click', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (window.devicePixelRatio || 1);
    const W = canvas.width;
    if (x < W / 2) {
      angle = -0.15;
    } else {
      angle = 0.15;
    }
    draw();
    setTimeout(() => { angle = -0.08; draw(); }, 600);
  });
}

// ====== Film Strip: 周期循环模型 ======
function renderFilmStrip(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let selectedFrame = 2; // Default: 余数3 = 第3帧 = 黄灯
  const frames = [
    { color: '#FF6B6B', label: '红', emoji: '🔴' },
    { color: '#FFE66D', label: '黄', emoji: '🟡' },
    { color: '#FFE66D', label: '黄', emoji: '🟡' },
    { color: '#4ECDC4', label: '蓝', emoji: '🔵' },
    { color: '#00B894', label: '绿', emoji: '🟢' }
  ];

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    // Title
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('周期胶卷模型：128÷5=25余3 → 第3帧=黄灯！', W/2, 16);
    ctx.textAlign = 'left';
    
    // Film strip background
    const stripY = 30;
    const stripH = 76;
    ctx.fillStyle = '#2D3436';
    ctx.beginPath();
    ctx.roundRect(15, stripY, W - 30, stripH, 4);
    ctx.fill();
    
    // Perforations
    for (let i = 0; i < 16; i++) {
      ctx.fillStyle = '#555';
      ctx.beginPath();
      ctx.roundRect(22 + i * (W-50)/15, stripY + 4, 4, 6, 1);
      ctx.fill();
      ctx.beginPath();
      ctx.roundRect(22 + i * (W-50)/15, stripY + stripH - 10, 4, 6, 1);
      ctx.fill();
    }
    
    // Frames
    const frameW = (W - 50) / 5;
    frames.forEach((f, i) => {
      const x = 25 + i * frameW;
      const isSelected = (i === selectedFrame);
      
      ctx.fillStyle = isSelected ? f.color : 'rgba(255,255,255,0.1)';
      ctx.beginPath();
      ctx.roundRect(x, stripY + 14, frameW - 6, stripH - 28, 4);
      ctx.fill();
      
      if (isSelected) {
        ctx.shadowColor = f.color;
        ctx.shadowBlur = 10;
        ctx.strokeStyle = '#FF6B35';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(x, stripY + 14, frameW - 6, stripH - 28, 4);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
      
      ctx.fillStyle = isSelected ? '#1a1a2e' : 'rgba(255,255,255,0.5)';
      ctx.font = isSelected ? 'bold 13px "Noto Sans SC"' : '11px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText(f.label, x + (frameW - 6)/2, stripY + stripH/2 + 2);
      
      ctx.fillStyle = '#888';
      ctx.font = '10px "Noto Sans SC"';
      ctx.fillText(`第${i+1}帧`, x + (frameW - 6)/2, stripY + stripH + 14);
    });
    ctx.textAlign = 'left';
    
    // Result
    ctx.fillStyle = '#FF6B35';
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.textAlign = 'center';
    if (selectedFrame === 4) {
      ctx.fillText('余数0 → 大结局最后一帧 = 🟢绿灯！', W/2, stripY + stripH + 34);
    } else {
      const f = frames[selectedFrame];
      ctx.fillText(`余数${selectedFrame+1} → 第${selectedFrame+1}帧 = ${f.emoji} ${f.label}灯！`, W/2, stripY + stripH + 34);
    }
    
    ctx.fillStyle = '#B2BEC3';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('👆 点击胶卷帧，模拟余数对应的颜色', W/2, H - 10);
    ctx.textAlign = 'left';
  }
  
  draw();
  
  canvas.addEventListener('click', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const stripY = 30, stripH = 76;
    const y = e.clientY - rect.top;
    if (y < stripY || y > stripY + stripH + 20) return;
    const frameW = (W - 50) / 5;
    const i = Math.floor((x - 25) / frameW);
    if (i >= 0 && i < 5) { selectedFrame = i; draw(); }
  });
}

// ====== Overlap Area: 重叠面积模型 ======
function renderOverlapArea(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let separation = 0;
  let dragging = false;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('多退少补：重叠部分被算了两遍！', W/2, 16);
    ctx.textAlign = 'left';
    
    const centerX = W / 2, centerY = H * 0.44;
    const rectW = 100, rectH = 64, overlapW = 36;
    
    // Rectangle A
    const aX = centerX - rectW/2 - overlapW/2 - separation;
    ctx.fillStyle = 'rgba(255, 107, 107, 0.32)';
    ctx.strokeStyle = '#FF6B6B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(aX, centerY - rectH/2, rectW, rectH, 4);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#FF6B6B';
    ctx.font = 'bold 16px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('A', aX + rectW/2, centerY + 6);
    
    // Rectangle B
    const bX = centerX - rectW/2 + overlapW/2 + separation;
    ctx.fillStyle = 'rgba(108, 92, 231, 0.32)';
    ctx.strokeStyle = '#6C5CE7';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(bX, centerY - rectH/2, rectW, rectH, 4);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 16px "Noto Sans SC"';
    ctx.fillText('B', bX + rectW/2, centerY + 6);
    
    // Overlap region
    if (separation < 2) {
      const overlapL = bX;
      const overlapR = aX + rectW;
      const ow = overlapR - overlapL;
      if (ow > 0) {
        ctx.fillStyle = 'rgba(155, 89, 182, 0.55)';
        ctx.beginPath();
        ctx.roundRect(overlapL, centerY - rectH/2, ow, rectH, 2);
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 10px "Noto Sans SC"';
        ctx.fillText('重叠', overlapL + ow/2, centerY - 4);
        ctx.fillText('多算了!', overlapL + ow/2, centerY + 8);
      }
    }
    ctx.textAlign = 'left';
    
    // Formula
    ctx.textAlign = 'center';
    ctx.font = 'bold 13px "Noto Sans SC"';
    if (separation > 5) {
      ctx.fillStyle = '#00B894';
      ctx.fillText('✅ 拉开了！总面积 = A + B', W/2, centerY + rectH/2 + 28);
    } else {
      ctx.fillStyle = '#FF6B35';
      ctx.fillText('总面积 = A + B − 重叠面积（多算的剪掉！）', W/2, centerY + rectH/2 + 28);
    }
    ctx.fillStyle = '#B2BEC3';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('👆 拖动画面把两个长方形拉开', W/2, H - 10);
    ctx.textAlign = 'left';
  }
  
  draw();
  
  canvas.addEventListener('mousedown', () => dragging = true);
  canvas.addEventListener('mouseup', () => { dragging = false; });
  canvas.addEventListener('mousemove', e => {
    if (!dragging) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    separation = Math.max(0, Math.min(70, Math.abs(x - W/2) * 0.8));
    draw();
  });
  canvas.addEventListener('touchstart', () => dragging = true);
  canvas.addEventListener('touchend', () => dragging = false);
  canvas.addEventListener('touchmove', e => {
    if (!dragging) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    separation = Math.max(0, Math.min(70, Math.abs(x - W/2) * 0.8));
    draw();
  });
}

// ====== Butterfly Model: 梯形蝴蝶几何 ======
function renderButterflyModel(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let hovered = 'none';

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('蝴蝶模型：梯形对角线交叉，左右翅膀面积死锁！', W/2, 16);
    ctx.textAlign = 'left';
    
    const topY = 32, bottomY = H - 36;
    const topLeft = W * 0.22, topRight = W * 0.78;
    const bottomLeft = W * 0.06, bottomRight = W * 0.94;
    
    // Trapezoid outline
    ctx.strokeStyle = '#B2BEC3';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(topLeft, topY); ctx.lineTo(topRight, topY);
    ctx.lineTo(bottomRight, bottomY); ctx.lineTo(bottomLeft, bottomY);
    ctx.closePath(); ctx.stroke();
    
    // Intersection point
    const interX = W / 2, interY = topY + (bottomY - topY) * 0.48;
    
    // Left wing
    const leftA = hovered === 'left' ? 0.5 : 0.22;
    ctx.fillStyle = `rgba(108, 92, 231, ${leftA})`;
    ctx.beginPath();
    ctx.moveTo(topLeft, topY); ctx.lineTo(interX, interY);
    ctx.lineTo(bottomLeft, bottomY); ctx.closePath();
    ctx.fill();
    if (hovered === 'left') { ctx.strokeStyle = '#6C5CE7'; ctx.lineWidth = 2.5; ctx.stroke(); }
    
    // Right wing
    const rightA = hovered === 'right' ? 0.5 : 0.22;
    ctx.fillStyle = `rgba(0, 184, 148, ${rightA})`;
    ctx.beginPath();
    ctx.moveTo(topRight, topY); ctx.lineTo(interX, interY);
    ctx.lineTo(bottomRight, bottomY); ctx.closePath();
    ctx.fill();
    if (hovered === 'right') { ctx.strokeStyle = '#00B894'; ctx.lineWidth = 2.5; ctx.stroke(); }
    
    // Diagonal lines
    ctx.strokeStyle = '#636E72'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(topLeft, topY); ctx.lineTo(bottomRight, bottomY); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(topRight, topY); ctx.lineTo(bottomLeft, bottomY); ctx.stroke();
    
    // O point
    ctx.fillStyle = '#FF6B35';
    ctx.beginPath(); ctx.arc(interX, interY, 5, 0, Math.PI * 2); ctx.fill();
    ctx.font = '11px "Noto Sans SC"'; ctx.fillStyle = '#FF6B35';
    ctx.fillText('O', interX + 8, interY + 4);
    
    // Labels
    ctx.fillStyle = hovered === 'left' ? '#6C5CE7' : '#A29BFE';
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillText('S₂', topLeft - 8, (topY + interY + bottomY) / 3 + 5);
    ctx.fillStyle = hovered === 'right' ? '#00B894' : '#55EFC4';
    ctx.fillText('S₄', topRight + 4, (topY + interY + bottomY) / 3 + 5);
    
    // Equality
    ctx.textAlign = 'center';
    if (hovered !== 'none') {
      ctx.fillStyle = '#FF6B35';
      ctx.font = 'bold 14px "Noto Sans SC"';
      ctx.fillText('S₂ = S₄ 左右翅膀面积死锁！', W/2, H - 14);
    } else {
      ctx.fillStyle = '#B2BEC3';
      ctx.font = '11px "Noto Sans SC"';
      ctx.fillText('👆 移到左翼或右翼，观察两者面积相等', W/2, H - 14);
    }
    ctx.textAlign = 'left';
  }
  
  draw();
  
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    hovered = x < W/2 ? 'left' : 'right';
    draw();
  });
  canvas.addEventListener('mouseleave', () => { hovered = 'none'; draw(); });
  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    hovered = x < W/2 ? 'left' : 'right';
    draw();
  });
}

// ====== Verb Burst: 动词爆炸模型 ======
function renderVerbBurst(canvas, modelVisual) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  const expanded = (modelVisual && modelVisual.expanded) ? modelVisual.expanded : [
    { verb: '弓', desc: '弓下腰' },
    { verb: '跺', desc: '左脚往地上一跺' },
    { verb: '甩', desc: '右腿抡圆了往前一甩' },
    { verb: '抽', desc: '鞋尖狠狠地抽在足球上' }
  ];
  const original = (modelVisual && modelVisual.original) ? modelVisual.original : '他一脚把球踢进了球门';
  let burstComplete = false;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#FF6B6B';
    ctx.font = 'bold 12px "Noto Sans SC"';
    ctx.fillText('❌ 流水账原句：', 14, 18);
    ctx.fillStyle = '#B2BEC3';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText(original, 120, 18);
    
    if (!burstComplete) {
      // Core verb (center)
      ctx.fillStyle = '#FF6B35';
      ctx.beginPath();
      ctx.arc(W/2, H * 0.42, 28, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = 'bold 20px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText(expanded[0] ? expanded[0].verb : '动', W/2, H * 0.42 + 7);
      
      ctx.fillStyle = '#636E72';
      ctx.font = '12px "Noto Sans SC"';
      ctx.fillText('👆 点击「动词爆炸」按钮，把一句话拆成4步慢放！', W/2, H * 0.42 + 52);
    } else {
      ctx.fillStyle = '#00B894';
      ctx.font = 'bold 12px "Noto Sans SC"';
      ctx.textAlign = 'left';
      ctx.fillText('✅ 学霸级慢放镜头：', 14, 36);
      
      const colW = (W - 28) / expanded.length;
      expanded.forEach((v, i) => {
        const x = 14 + i * colW + colW/2;
        const y = H * 0.44;
        
        ctx.fillStyle = '#FF6B35';
        ctx.beginPath();
        ctx.roundRect(x - 24, y - 16, 48, 28, 6);
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 13px "Noto Sans SC"';
        ctx.textAlign = 'center';
        ctx.fillText(`【${v.verb}】`, x, y);
        
        ctx.fillStyle = '#2D3436';
        ctx.font = '10px "Noto Sans SC"';
        // Word wrap for desc
        const words = v.desc;
        ctx.fillText(words.length > 7 ? words.substring(0, 7) : words, x, y + 22);
        if (words.length > 7) ctx.fillText(words.substring(7), x, y + 34);
      });
      
      ctx.fillStyle = '#6C5CE7';
      ctx.font = 'bold 12px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText('一秒钟动作 → 拆成4步慢放 → 作文瞬间变大片！', W/2, H - 14);
    }
    ctx.textAlign = 'left';
  }
  
  draw();
  
  canvas.burst = function() {
    burstComplete = true;
    draw();
  };
}

// ====== Detective Chain: 侦探连线模型 ======
function renderDetectiveChain(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let lineComplete = false;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#16213E';
    ctx.fillRect(0, 0, W, H);
    
    // Title
    ctx.fillStyle = '#55EFC4';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('侦探证据链：不看运气，只看证据！', W/2, 16);
    ctx.textAlign = 'left';
    
    // Text passage
    ctx.fillStyle = '#F5F6FA';
    ctx.font = '14px "Noto Sans SC"';
    ctx.fillText('Mike was very', 20, 48);
    
    // Blank box
    ctx.fillStyle = '#FF6B35';
    ctx.beginPath(); ctx.roundRect(148, 34, 70, 20, 4); ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 11px "Noto Sans SC"';
    ctx.fillText('______', 158, 48);
    
    ctx.fillStyle = '#F5F6FA';
    ctx.font = '14px "Noto Sans SC"';
    ctx.fillText(', because his dog', 226, 48);
    
    // Clue word "died" (glowing green)
    ctx.shadowColor = '#00B894';
    ctx.shadowBlur = lineComplete ? 12 : 4;
    ctx.fillStyle = '#00B894';
    ctx.font = 'bold 16px "Noto Sans SC"';
    ctx.fillText('died', 20, 86);
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#55EFC4';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('🐕 狗死了 → 线索！', 20, 104);
    
    // Options
    const opts = ['A. happy', 'B. sad ✅', 'C. tired'];
    opts.forEach((opt, i) => {
      const isCorrect = lineComplete && i === 1;
      ctx.fillStyle = isCorrect ? '#00B894' : '#636E72';
      ctx.font = isCorrect ? 'bold 13px "Noto Sans SC"' : '12px "Noto Sans SC"';
      ctx.fillText(opt, 20 + i * 120, 130);
      if (isCorrect) {
        ctx.strokeStyle = '#00B894';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.roundRect(14 + i * 120, 118, 88, 18, 3); ctx.stroke();
      }
    });
    
    // Detective line
    if (lineComplete) {
      ctx.shadowColor = '#00B894';
      ctx.shadowBlur = 8;
      ctx.strokeStyle = '#00B894';
      ctx.lineWidth = 3;
      ctx.setLineDash([6, 3]);
      ctx.beginPath();
      ctx.moveTo(44, 90); ctx.lineTo(185, 45);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.shadowBlur = 0;
      
      // Arrow
      ctx.fillStyle = '#FFE66D';
      ctx.font = 'bold 12px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText('证据链：died → 伤心 → sad 锁死！', W/2, H - 14);
    } else {
      ctx.fillStyle = '#636E72';
      ctx.font = '11px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText('👆 点击「连线」按钮，画出侦探证据链！', W/2, H - 14);
    }
    ctx.textAlign = 'left';
  }
  
  draw();
  
  canvas.connectLine = function() {
    lineComplete = true;
    draw();
  };
}

// ====== NEW: Magnet-S: 单三磁铁模型 ======
function renderMagnetS(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let step = 0; // 0=before attraction, 1=after attraction
  let animT = 0;

  function drawMagnet(x, y, label, color) {
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.roundRect(x - 34, y - 20, 68, 38, 8); ctx.fill();
    ctx.fillStyle = '#FF3333';
    ctx.beginPath(); ctx.roundRect(x - 34, y - 20, 30, 38, [8, 0, 0, 8]); ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('N', x - 19, y + 5);
    ctx.fillStyle = '#1A1A2E';
    ctx.fillText('S', x + 18, y + 5);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 11px "Noto Sans SC"';
    ctx.fillText(label, x, y - 28);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#00B894';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('单三磁铁原理：He/She/It 出来当老大，动词必须被吸来尾巴！', W/2, 16);
    ctx.textAlign = 'left';
    
    const midY = H * 0.46;
    
    if (step === 0) {
      // He/She/It on left
      ctx.fillStyle = '#FF6B35';
      ctx.font = 'bold 24px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText('He / She / It', W * 0.22, midY - 10);
      ctx.fillStyle = '#B2BEC3';
      ctx.font = '11px "Noto Sans SC"';
      ctx.fillText('三大傲娇怪', W * 0.22, midY + 10);
      
      // verb "run" on right (no suffix)
      ctx.fillStyle = '#6C5CE7';
      ctx.font = 'bold 28px "Noto Sans SC"';
      ctx.fillText('run', W * 0.68, midY + 6);
      ctx.fillStyle = '#FF6B6B';
      ctx.font = 'bold 11px "Noto Sans SC"';
      ctx.fillText('❌ 没有尾巴！句子摔倒了！', W * 0.68, midY + 26);
      
      // Arrow between
      ctx.strokeStyle = '#FFE66D';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(W * 0.35, midY); ctx.lineTo(W * 0.54, midY); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#FFE66D';
      ctx.font = '20px "Noto Sans SC"';
      ctx.fillText('🧲', W * 0.455, midY + 8);
    } else {
      // After attraction
      ctx.fillStyle = '#FF6B35';
      ctx.font = 'bold 22px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText('He', W * 0.22, midY);
      
      // Arrow
      ctx.fillStyle = '#00B894';
      ctx.font = 'bold 18px "Noto Sans SC"';
      ctx.fillText('→🧲→', W * 0.42, midY);
      
      // run + s
      ctx.fillStyle = '#6C5CE7';
      ctx.font = 'bold 28px "Noto Sans SC"';
      ctx.fillText('run', W * 0.62, midY + 4);
      ctx.fillStyle = '#00B894';
      ctx.font = 'bold 32px "Noto Sans SC"';
      ctx.shadowColor = '#00B894'; ctx.shadowBlur = 10;
      ctx.fillText('s', W * 0.78, midY + 4);
      ctx.shadowBlur = 0;
      
      ctx.fillStyle = '#00B894';
      ctx.font = 'bold 14px "Noto Sans SC"';
      ctx.fillText('✅ runs — 完美！句子站稳了！', W/2, midY + 36);
    }
    
    // Bottom tip
    ctx.textAlign = 'center';
    ctx.fillStyle = '#B2BEC3';
    ctx.font = '11px "Noto Sans SC"';
    if (step === 0) {
      ctx.fillText('👆 点击「加载交互Canvas」后再点此处，触发磁铁吸附！', W/2, H - 12);
    } else {
      ctx.fillText('动词尾巴被吸过来了！漏掉 -s，句子就摔倒！', W/2, H - 12);
    }
    ctx.textAlign = 'left';
  }
  
  draw();
  
  canvas.addEventListener('click', () => {
    step = step === 0 ? 1 : 0;
    draw();
  });
}

// ====== NEW: Time Arrow: 现在完成时 vs 一般过去时 ======
function renderTimeArrow(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let showing = 'past'; // 'past' or 'perfect'
  let blinkT = 0;
  let blinkInterval = null;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#16213E';
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#A29BFE';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('时空手术刀：过去时=历史 | 完成时=后果还热乎！', W/2, 16);
    
    // Timeline
    const lineY = H * 0.52;
    const pastX = W * 0.18, nowX = W * 0.82;
    
    ctx.strokeStyle = '#636E72';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(pastX, lineY); ctx.lineTo(nowX, lineY); ctx.stroke();
    
    // Arrow end
    ctx.fillStyle = '#636E72';
    ctx.beginPath();
    ctx.moveTo(nowX, lineY); ctx.lineTo(nowX - 10, lineY - 6); ctx.lineTo(nowX - 10, lineY + 6);
    ctx.closePath(); ctx.fill();
    
    // Labels
    ctx.fillStyle = '#636E72';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('Past 过去', pastX, lineY + 20);
    ctx.fillText('Now 现在', nowX - 28, lineY + 20);
    
    if (showing === 'past') {
      // Isolated dot in past
      ctx.fillStyle = '#888';
      ctx.beginPath(); ctx.arc(pastX + 40, lineY, 10, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#aaa';
      ctx.font = '11px "Noto Sans SC"';
      ctx.fillText('lost 丢了（发生在过去）', pastX + 55, lineY - 4);
      ctx.fillStyle = '#636E72';
      ctx.font = '10px "Noto Sans SC"';
      ctx.fillText('和现在没关系，可能已经找到了', pastX + 55, lineY + 10);
      
      ctx.fillStyle = '#FF6B6B';
      ctx.font = 'bold 13px "Noto Sans SC"';
      ctx.fillText('= I lost my key yesterday ✓', W/2, lineY - 30);
      ctx.fillStyle = '#636E72'; ctx.font = '11px "Noto Sans SC"';
      ctx.fillText('一般过去时：孤立的历史事件', W/2, lineY - 14);
    } else {
      // Arrow from past to now
      ctx.shadowColor = '#FF6B35';
      ctx.shadowBlur = 12;
      ctx.strokeStyle = '#FF6B35';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(pastX + 35, lineY);
      ctx.lineTo(nowX - 20, lineY);
      ctx.stroke();
      ctx.shadowBlur = 0;
      
      // Past point
      ctx.fillStyle = '#FF6B6B';
      ctx.beginPath(); ctx.arc(pastX + 35, lineY, 7, 0, Math.PI * 2); ctx.fill();
      
      // Arrow head at now
      ctx.fillStyle = '#FF6B35';
      ctx.beginPath();
      ctx.moveTo(nowX - 20, lineY); ctx.lineTo(nowX - 30, lineY - 7); ctx.lineTo(nowX - 30, lineY + 7);
      ctx.closePath(); ctx.fill();
      
      // Now impact
      ctx.fillStyle = '#FF6B35';
      ctx.beginPath(); ctx.arc(nowX - 20, lineY, 10, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = 'bold 9px "Noto Sans SC"';
      ctx.fillText('还热!', nowX - 33, lineY + 4);
      
      ctx.fillStyle = '#FF6B35';
      ctx.font = 'bold 13px "Noto Sans SC"';
      ctx.fillText('= I have lost my key ✓', W/2, lineY - 30);
      ctx.fillStyle = '#FDCB6E'; ctx.font = '11px "Noto Sans SC"';
      ctx.fillText('现在完成时：后果对现在有影响！进不去屋！', W/2, lineY - 14);
    }
    
    // Toggle tip
    ctx.fillStyle = '#636E72';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('👆 点击切换：一般过去时 ↔ 现在完成时', W/2, H - 12);
    ctx.textAlign = 'left';
  }
  
  draw();
  
  canvas.addEventListener('click', () => {
    showing = showing === 'past' ? 'perfect' : 'past';
    draw();
  });
}

// ====== NEW: Evidence Bar: 情态动词证据量化条 ======
function renderEvidenceBar(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let evidenceLevel = 100; // 0-100, draggable
  let dragging = false;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#00B894';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('学霸证据量化条：证据有多强，情态动词就有多确定！', W/2, 16);
    ctx.textAlign = 'left';
    
    const barX = 30, barY = H * 0.38, barW = W - 60, barH = 32;
    
    // Bar background
    ctx.fillStyle = '#e0e0e0';
    ctx.beginPath(); ctx.roundRect(barX, barY, barW, barH, barH/2); ctx.fill();
    
    // Filled portion
    const fillW = barW * (evidenceLevel / 100);
    let barColor = '#FF6B6B';
    if (evidenceLevel > 70) barColor = '#00B894';
    else if (evidenceLevel > 30) barColor = '#FFE66D';
    ctx.fillStyle = barColor;
    ctx.beginPath(); ctx.roundRect(barX, barY, fillW, barH, barH/2); ctx.fill();
    
    // Thumb
    const thumbX = barX + fillW;
    ctx.fillStyle = 'white';
    ctx.shadowColor = 'rgba(0,0,0,0.2)'; ctx.shadowBlur = 6;
    ctx.beginPath(); ctx.arc(thumbX, barY + barH/2, 14, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = barColor; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(thumbX, barY + barH/2, 14, 0, Math.PI * 2); ctx.stroke();
    
    // Labels under bar
    ctx.fillStyle = '#FF6B6B'; ctx.font = 'bold 11px "Noto Sans SC"';
    ctx.fillText("can't\n0%", barX, barY + barH + 20);
    ctx.fillStyle = '#c4a000'; ctx.font = 'bold 11px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('may 50%', barX + barW/2, barY + barH + 20);
    ctx.fillStyle = '#00B894';
    ctx.textAlign = 'right';
    ctx.fillText('must 100%', barX + barW, barY + barH + 20);
    ctx.textAlign = 'left';
    
    // Current modal verb
    let modal = 'may', example = '';
    if (evidenceLevel <= 5) { modal = "can't"; example = '没有证据 → 完全排除'; }
    else if (evidenceLevel < 40) { modal = 'might'; example = '证据薄弱 → 不太可能'; }
    else if (evidenceLevel < 70) { modal = 'may'; example = '证据一半 → 有可能'; }
    else { modal = 'must'; example = '证据充足(灯亮) → 一定！'; }
    
    ctx.fillStyle = barColor;
    ctx.font = 'bold 26px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText(modal, W/2, barY - 18);
    ctx.fillStyle = '#2D3436';
    ctx.font = '12px "Noto Sans SC"';
    ctx.fillText(example, W/2, barY - 4);
    
    ctx.fillStyle = '#B2BEC3';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('👆 拖动滑块，感受证据强度→情态动词的对应关系', W/2, H - 12);
    ctx.textAlign = 'left';
  }
  
  draw();
  
  function getX(e) {
    const rect = canvas.getBoundingClientRect();
    return (e.clientX || e.touches[0].clientX) - rect.left;
  }
  function updateLevel(e) {
    const x = getX(e);
    const barX = 30, barW = W - 60;
    evidenceLevel = Math.max(0, Math.min(100, ((x - barX) / barW) * 100));
    draw();
  }
  
  canvas.addEventListener('mousedown', e => { dragging = true; updateLevel(e); });
  canvas.addEventListener('mousemove', e => { if (dragging) updateLevel(e); });
  canvas.addEventListener('mouseup', () => dragging = false);
  canvas.addEventListener('touchstart', e => { dragging = true; updateLevel(e); });
  canvas.addEventListener('touchmove', e => { if (dragging) { e.preventDefault(); updateLevel(e); } }, { passive: false });
  canvas.addEventListener('touchend', () => dragging = false);
}

// ====== NEW: 3D Space: 介词空间模型 ======
function render3DSpace(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let selected = null; // 'at'|'on'|'in'

  const items = [
    { key: 'at', x: W * 0.18, y: H * 0.48, emoji: '🎯', label: 'at = 点', sublabel: '车站/门口/某地', color: '#FF6B6B', desc: '精准坐标点，地图上的一个点' },
    { key: 'on', x: W * 0.5, y: H * 0.48, emoji: '📖', label: 'on = 面', sublabel: '桌面/墙上/地上', color: '#FFE66D', desc: '接触面，有粘连感' },
    { key: 'in', x: W * 0.82, y: H * 0.48, emoji: '📦', label: 'in = 体', sublabel: '城市/房间/箱子里', color: '#00B894', desc: '立体包裹空间，有四周包围' }
  ];

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#00B894';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('三维空间模型：at=点 / on=面 / in=体', W/2, 16);
    ctx.textAlign = 'left';
    
    items.forEach(item => {
      const isSelected = selected === item.key;
      const r = isSelected ? 38 : 32;
      
      // Glow
      if (isSelected) {
        ctx.shadowColor = item.color; ctx.shadowBlur = 16;
      }
      ctx.fillStyle = isSelected ? item.color : 'rgba(200,200,200,0.4)';
      ctx.beginPath(); ctx.arc(item.x, item.y, r, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
      
      // Border
      ctx.strokeStyle = item.color; ctx.lineWidth = isSelected ? 3 : 1.5;
      ctx.beginPath(); ctx.arc(item.x, item.y, r, 0, Math.PI * 2); ctx.stroke();
      
      // Emoji
      ctx.font = `${isSelected ? 22 : 18}px "Noto Sans SC"`;
      ctx.textAlign = 'center';
      ctx.fillText(item.emoji, item.x, item.y + 7);
      
      // Labels
      ctx.fillStyle = item.color;
      ctx.font = `bold ${isSelected ? 13 : 12}px "Noto Sans SC"`;
      ctx.fillText(item.label, item.x, item.y + r + 18);
      ctx.fillStyle = '#636E72';
      ctx.font = '10px "Noto Sans SC"';
      ctx.fillText(item.sublabel, item.x, item.y + r + 31);
    });
    
    // Selected description
    if (selected) {
      const item = items.find(i => i.key === selected);
      ctx.fillStyle = item.color;
      ctx.font = 'bold 13px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText(`【${item.label}】${item.desc}`, W/2, H - 24);
    } else {
      ctx.fillStyle = '#B2BEC3';
      ctx.font = '11px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText('👆 点击 at / on / in，感受三种空间感的差别', W/2, H - 12);
    }
    ctx.textAlign = 'left';
  }
  
  draw();
  
  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    let hit = null;
    items.forEach(item => {
      const dx = x - item.x, dy = y - item.y;
      if (Math.sqrt(dx*dx + dy*dy) < 42) hit = item.key;
    });
    selected = hit === selected ? null : hit;
    draw();
  });
}

// ====== NEW: LCM Tail: 公倍数尾巴模型 ======
function renderLcmTail(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let step = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('多退少补：最小公倍数 + 余数尾巴', W/2, 16);
    ctx.textAlign = 'left';
    
    const midY = H * 0.44;
    
    if (step === 0) {
      // Show three circles: 3, 4, 5
      const nums = [3, 4, 5];
      const colors = ['#FF6B6B', '#6C5CE7', '#00B894'];
      nums.forEach((n, i) => {
        const cx = W * (0.2 + i * 0.3), cy = midY;
        ctx.fillStyle = colors[i] + '22';
        ctx.strokeStyle = colors[i];
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, 34, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = colors[i];
        ctx.font = 'bold 20px "Noto Sans SC"';
        ctx.textAlign = 'center';
        ctx.fillText(n, cx, cy + 7);
        ctx.font = '10px "Noto Sans SC"';
        ctx.fillStyle = '#636E72';
        ctx.fillText(`${n}个一堆剩2`, cx, cy + 26);
      });
      ctx.textAlign = 'center';
      ctx.fillStyle = '#636E72';
      ctx.font = '12px "Noto Sans SC"';
      ctx.fillText('👆 点击「加载交互Canvas」查看最小公倍数怎么求！', W/2, H - 12);
    } else {
      // Show LCM calculation
      ctx.fillStyle = '#6C5CE7';
      ctx.font = 'bold 15px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText('3的倍数 ∩ 4的倍数 ∩ 5的倍数 = 60', W/2, midY - 20);
      
      // LCM circle
      ctx.shadowColor = '#6C5CE7'; ctx.shadowBlur = 14;
      ctx.fillStyle = '#6C5CE7';
      ctx.beginPath(); ctx.arc(W * 0.38, midY + 16, 30, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'white';
      ctx.font = 'bold 18px "Noto Sans SC"';
      ctx.fillText('60', W * 0.38, midY + 23);
      
      // Plus tail
      ctx.fillStyle = '#FF6B35';
      ctx.font = 'bold 24px "Noto Sans SC"';
      ctx.fillText('+', W * 0.54, midY + 22);
      
      // Tail circle
      ctx.fillStyle = '#FF6B35';
      ctx.beginPath(); ctx.arc(W * 0.70, midY + 16, 22, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = 'bold 16px "Noto Sans SC"';
      ctx.fillText('2', W * 0.70, midY + 23);
      
      // Equal
      ctx.fillStyle = '#00B894';
      ctx.font = 'bold 28px "Noto Sans SC"';
      ctx.fillText('= 62 🍬', W * 0.82, midY + 23);
      
      ctx.fillStyle = '#FF6B35';
      ctx.font = 'bold 13px "Noto Sans SC"';
      ctx.fillText('每次都多出来2个 → 加上这个尾巴！', W/2, midY + 58);
    }
    ctx.textAlign = 'left';
  }
  
  draw();
  
  canvas.addEventListener('click', () => { step = step === 0 ? 1 : 0; draw(); });
}

// ====== NEW: Chicken Rabbit: 鸡兔同笼假设补差法 ======
function renderChickenRabbit(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let step = 0; // 0=题目, 1=假设全鸡, 2=算差, 3=答案

  const TOTAL = 20, ACTUAL_LEGS = 54;
  const CHICKEN_LEGS = 2, RABBIT_LEGS = 4;
  const assumedLegs = TOTAL * CHICKEN_LEGS;       // 40
  const legDiff = ACTUAL_LEGS - assumedLegs;       // 14
  const legPerSwap = RABBIT_LEGS - CHICKEN_LEGS;   // 2
  const rabbits = legDiff / legPerSwap;             // 7
  const chickens = TOTAL - rabbits;                 // 13

  const steps = [
    { title: '题目来了！', desc: `鸡和兔共 ${TOTAL} 只，腿共 ${ACTUAL_LEGS} 条，各几只？` },
    { title: '第一步：假设全是鸡', desc: `${TOTAL} 只全是鸡 → 腿 = ${TOTAL} × ${CHICKEN_LEGS} = ${assumedLegs} 条` },
    { title: '第二步：算差量', desc: `实际 ${ACTUAL_LEGS} 条 > 假设 ${assumedLegs} 条，多了 ${legDiff} 条\n每把1只鸡换成兔，多 ${legPerSwap} 条 → 换了 ${legDiff}÷${legPerSwap} = ${rabbits} 只` },
    { title: '✅ 答案锁定！', desc: `兔 ${rabbits} 只，鸡 ${TOTAL - rabbits} 只\n验证：${chickens}×${CHICKEN_LEGS} + ${rabbits}×${RABBIT_LEGS} = ${chickens*2 + rabbits*4} 条 ✓` }
  ];

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#FFF9F0';
    ctx.fillRect(0, 0, W, H);

    // Progress bar
    const barW = (W - 40) * (step / 3);
    ctx.fillStyle = '#e8e0d5';
    ctx.beginPath(); ctx.roundRect(20, 8, W - 40, 6, 3); ctx.fill();
    ctx.fillStyle = '#FF6B35';
    ctx.beginPath(); ctx.roundRect(20, 8, barW, 6, 3); ctx.fill();

    const s = steps[step];

    // Title chip
    ctx.fillStyle = step === 3 ? '#00B894' : '#FF6B35';
    ctx.beginPath(); ctx.roundRect(W/2 - 80, 22, 160, 24, 12); ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 12px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText(s.title, W/2, 38);

    // Main visual per step
    if (step === 0) {
      // Chickens & rabbits silhouette
      const emojis = ['🐔','🐔','🐔','🐔','🐔','🐔','🐇','🐇','🐇','🐇'];
      emojis.forEach((e, i) => {
        ctx.font = '20px serif';
        ctx.fillText(e, 18 + (i % 5) * 54, 78 + Math.floor(i / 5) * 28);
      });
      ctx.fillStyle = '#B2BEC3';
      ctx.font = '10px "Noto Sans SC"';
      ctx.fillText('（示意图：实际 20 只，不知道几鸡几兔）', W/2, 116);
    } else if (step === 1) {
      // All chickens row
      const cx = W/2, cy = 90;
      ctx.fillStyle = '#FFE66D';
      ctx.beginPath(); ctx.roundRect(cx - 120, cy - 24, 240, 38, 8); ctx.fill();
      ctx.fillStyle = '#2D3436';
      ctx.font = 'bold 13px "Noto Sans SC"';
      ctx.fillText('假设 20 只全是鸡 🐔🐔🐔...🐔', cx, cy - 4);
      ctx.font = '12px "Noto Sans SC"';
      ctx.fillText(`20 × 2 = ${assumedLegs} 条腿`, cx, cy + 16);
    } else if (step === 2) {
      // Number line: 40 vs 54
      const lineY = 82, lineX0 = 30, lineX1 = W - 30;
      ctx.strokeStyle = '#B2BEC3'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(lineX0, lineY); ctx.lineTo(lineX1, lineY); ctx.stroke();

      const x40 = lineX0 + (lineX1 - lineX0) * 0.4;
      const x54 = lineX0 + (lineX1 - lineX0) * 0.78;

      ctx.fillStyle = '#6C5CE7';
      ctx.beginPath(); ctx.arc(x40, lineY, 8, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = '#6C5CE7'; ctx.font = 'bold 12px "Noto Sans SC"';
      ctx.fillText(`假设${assumedLegs}腿`, x40, lineY - 14);

      ctx.fillStyle = '#FF6B35';
      ctx.beginPath(); ctx.arc(x54, lineY, 8, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = '#FF6B35'; ctx.font = 'bold 12px "Noto Sans SC"';
      ctx.fillText(`实际${ACTUAL_LEGS}腿`, x54, lineY - 14);

      ctx.strokeStyle = '#FF6B35'; ctx.lineWidth = 3; ctx.setLineDash([5,3]);
      ctx.beginPath(); ctx.moveTo(x40, lineY + 18); ctx.lineTo(x54, lineY + 18); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#FF6B35'; ctx.font = 'bold 13px "Noto Sans SC"';
      ctx.fillText(`差 ${legDiff} 条 ÷ ${legPerSwap} = ${rabbits} 只兔！`, (x40+x54)/2, lineY + 36);
    } else {
      // Final answer
      ctx.font = '36px serif';
      ctx.fillText('🐔', W * 0.22, 100);
      ctx.fillText('🐇', W * 0.62, 100);
      ctx.fillStyle = '#2D3436'; ctx.font = 'bold 18px "Noto Sans SC"';
      ctx.fillText(`${chickens} 只`, W * 0.26, 116);
      ctx.fillText(`${rabbits} 只`, W * 0.67, 116);
      ctx.fillStyle = '#00B894'; ctx.font = 'bold 12px "Noto Sans SC"';
      ctx.fillText(`验证：${chickens}×2 + ${rabbits}×4 = ${chickens*2+rabbits*4} ✓`, W/2, 138);
    }

    // Step dots
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = i === step ? '#FF6B35' : '#D0D0D0';
      ctx.beginPath(); ctx.arc(W/2 - 30 + i*20, H - 16, 5, 0, Math.PI*2); ctx.fill();
    }
    ctx.fillStyle = '#B2BEC3'; ctx.font = '10px "Noto Sans SC"';
    ctx.fillText('👆 点击下一步', W/2, H - 4);
    ctx.textAlign = 'left';
  }

  draw();
  canvas.addEventListener('click', () => { step = (step + 1) % 4; draw(); });
}

// ====== NEW: Verb Anchor: 阅读动词锚定·首尾追踪法 ======
function renderVerbAnchor(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let phase = 0; // 0=原文, 1=高亮主语, 2=高亮动词, 3=高亮结果, 4=答案

  const passage = '小明跑到操场上，用力踢出了那个足球，';
  const extra = '球飞过半场，最终滚进了球门。';

  // Token analysis
  const tokens = [
    { text: '小明', type: 'subject', color: '#FF6B6B' },
    { text: '跑到', type: 'verb', color: '#6C5CE7' },
    { text: '操场上，', type: 'other', color: '#B2BEC3' },
    { text: '用力踢出了', type: 'verb', color: '#6C5CE7' },
    { text: '那个', type: 'other', color: '#B2BEC3' },
    { text: '足球', type: 'object', color: '#FFE66D' },
    { text: '，', type: 'other', color: '#B2BEC3' },
  ];
  const tokens2 = [
    { text: '球', type: 'subject', color: '#FF6B6B' },
    { text: '飞过', type: 'verb', color: '#6C5CE7' },
    { text: '半场，最终', type: 'other', color: '#B2BEC3' },
    { text: '滚进了', type: 'verb', color: '#6C5CE7' },
    { text: '球门', type: 'result', color: '#00B894' },
    { text: '。', type: 'other', color: '#B2BEC3' },
  ];

  const phases = [
    '原文：读完整段',
    '第1步：圈出主语（红色）',
    '第2步：圈出动词（蓝色）',
    '第3步：找结果词（绿色）',
    '✅ 套公式：谁+做了什么+结果'
  ];

  function drawTokens(tList, startX, y) {
    let x = startX;
    tList.forEach(t => {
      ctx.font = '13px "Noto Sans SC"';
      const tw = ctx.measureText(t.text).width;

      let highlight = false;
      if (phase >= 1 && t.type === 'subject') highlight = true;
      if (phase >= 2 && t.type === 'verb') highlight = true;
      if (phase >= 3 && (t.type === 'result' || t.type === 'object')) highlight = true;

      if (highlight) {
        ctx.fillStyle = t.color + '33';
        ctx.beginPath(); ctx.roundRect(x - 2, y - 15, tw + 4, 20, 4); ctx.fill();
        ctx.strokeStyle = t.color; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.roundRect(x - 2, y - 15, tw + 4, 20, 4); ctx.stroke();
        ctx.fillStyle = t.color;
      } else {
        ctx.fillStyle = '#636E72';
      }
      ctx.font = highlight ? 'bold 13px "Noto Sans SC"' : '13px "Noto Sans SC"';
      ctx.textAlign = 'left';
      ctx.fillText(t.text, x, y);
      x += tw + 2;
    });
    return x;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F0F4FF';
    ctx.fillRect(0, 0, W, H);

    // Phase chip
    ctx.fillStyle = phase === 4 ? '#00B894' : '#6C5CE7';
    ctx.beginPath(); ctx.roundRect(W/2 - 100, 8, 200, 22, 11); ctx.fill();
    ctx.fillStyle = 'white'; ctx.font = 'bold 11px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText(phases[phase], W/2, 23);

    // Passage
    drawTokens(tokens, 16, 58);
    drawTokens(tokens2, 16, 82);

    // Three-color legend
    if (phase >= 1) {
      const legend = [
        { color: '#FF6B6B', label: '主语' },
        { color: '#6C5CE7', label: '动词' },
        { color: '#00B894', label: '结果' }
      ];
      legend.forEach((l, i) => {
        if (phase <= i) return; // show progressively
        const lx = 16 + i * 80;
        ctx.fillStyle = l.color;
        ctx.beginPath(); ctx.arc(lx + 6, 100, 5, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = l.color; ctx.font = 'bold 11px "Noto Sans SC"'; ctx.textAlign = 'left';
        ctx.fillText(l.label, lx + 15, 104);
      });
    }

    if (phase === 4) {
      // Answer formula
      ctx.fillStyle = '#00B894';
      ctx.beginPath(); ctx.roundRect(16, 112, W - 32, 34, 8); ctx.fill();
      ctx.fillStyle = 'white'; ctx.font = 'bold 13px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText('小明 + 用力踢出足球 + 球滚进球门', W/2, 127);
      ctx.font = '11px "Noto Sans SC"';
      ctx.fillText('→ 小明踢球入门（标准段意概括）', W/2, 141);
    }

    // Dots
    for (let i = 0; i < 5; i++) {
      ctx.fillStyle = i === phase ? '#6C5CE7' : '#D0D0D0';
      ctx.beginPath(); ctx.arc(W/2 - 40 + i * 20, H - 14, 4, 0, Math.PI*2); ctx.fill();
    }
    ctx.fillStyle = '#B2BEC3'; ctx.font = '10px "Noto Sans SC"'; ctx.textAlign = 'center';
    ctx.fillText('👆 点击逐步标注', W/2, H - 2);
    ctx.textAlign = 'left';
  }

  draw();
  canvas.addEventListener('click', () => { phase = (phase + 1) % 5; draw(); });
}

// ====== NEW: Tense Timeline: 时间轴定位法（过去时 vs 现在时）======
function renderTenseTimeline(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width / (window.devicePixelRatio || 1);
  const H = canvas.height / (window.devicePixelRatio || 1);
  let selected = null; // null | 'past' | 'present'

  const examples = {
    past: {
      timeWord: 'yesterday',
      timeWordCN: '昨天',
      sentence: 'Yesterday, I played soccer.',
      verb: 'played',
      rule: '时间词在左边（过去）→ 动词加 -ed',
      color: '#FF6B6B',
      axisX: 0.25
    },
    present: {
      timeWord: 'Every day',
      timeWordCN: '每天',
      sentence: 'Every day, I play soccer.',
      verb: 'play',
      rule: '时间词在中间（现在）→ 动词不变',
      color: '#00B894',
      axisX: 0.65
    }
  };

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F8F0FF';
    ctx.fillRect(0, 0, W, H);

    // Title
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.textAlign = 'center';
    ctx.fillText('时间词是指挥官 → 它在哪，动词就变成哪里的形式！', W/2, 16);

    // Timeline axis
    const lineY = H * 0.48;
    const lineX0 = 24, lineX1 = W - 24;
    ctx.strokeStyle = '#C0AEE0'; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(lineX0, lineY); ctx.lineTo(lineX1, lineY); ctx.stroke();
    // Arrow
    ctx.fillStyle = '#C0AEE0';
    ctx.beginPath(); ctx.moveTo(lineX1, lineY); ctx.lineTo(lineX1-10, lineY-5); ctx.lineTo(lineX1-10, lineY+5); ctx.closePath(); ctx.fill();

    // Axis labels
    ctx.fillStyle = '#999'; ctx.font = '10px "Noto Sans SC"'; ctx.textAlign = 'center';
    ctx.fillText('← 过去 Past', lineX0 + 50, lineY + 18);
    ctx.fillText('现在 Now →', lineX1 - 40, lineY + 18);

    // Draw both time word cards on axis
    Object.entries(examples).forEach(([key, ex]) => {
      const x = lineX0 + (lineX1 - lineX0) * ex.axisX;
      const isSelected = selected === key;
      const r = isSelected ? 16 : 12;

      // Dot
      ctx.fillStyle = isSelected ? ex.color : ex.color + '66';
      ctx.shadowColor = isSelected ? ex.color : 'transparent'; ctx.shadowBlur = isSelected ? 10 : 0;
      ctx.beginPath(); ctx.arc(x, lineY, r, 0, Math.PI*2); ctx.fill();
      ctx.shadowBlur = 0;

      ctx.fillStyle = 'white'; ctx.font = `bold ${isSelected ? 10 : 9}px "Noto Sans SC"`;
      ctx.textAlign = 'center';
      ctx.fillText(ex.timeWordCN, x, lineY + 4);

      // Label above
      ctx.fillStyle = isSelected ? ex.color : '#888';
      ctx.font = `${isSelected ? 'bold ' : ''}11px "Noto Sans SC"`;
      ctx.fillText(ex.timeWord, x, lineY - r - 6);
    });

    // Explanation panel
    if (selected) {
      const ex = examples[selected];
      const px = 16, py = H * 0.7, pw = W - 32, ph = H * 0.22;
      ctx.fillStyle = ex.color + '1A';
      ctx.strokeStyle = ex.color;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.roundRect(px, py, pw, ph, 8); ctx.fill(); ctx.stroke();

      ctx.fillStyle = ex.color;
      ctx.font = 'bold 13px "Noto Sans SC"';
      ctx.fillText(ex.sentence.replace(ex.verb, `[${ex.verb}]`), W/2, py + 16);
      ctx.fillStyle = '#444'; ctx.font = '11px "Noto Sans SC"';
      ctx.fillText(ex.rule, W/2, py + 32);
    } else {
      ctx.fillStyle = '#B2BEC3'; ctx.font = '11px "Noto Sans SC"'; ctx.textAlign = 'center';
      ctx.fillText('👆 点击 "昨天" 或 "每天"，看动词怎么变', W/2, H - 12);
    }

    ctx.textAlign = 'left';
  }

  draw();

  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const lineX0 = 24, lineX1 = W - 24, lineY = H * 0.48;
    const y = e.clientY - rect.top;

    let hit = null;
    Object.entries(examples).forEach(([key, ex]) => {
      const cx = lineX0 + (lineX1 - lineX0) * ex.axisX;
      const dx = x - cx, dy = y - lineY;
      if (Math.sqrt(dx*dx + dy*dy) < 28) hit = key;
    });

    selected = hit === selected ? null : hit;
    draw();
  });
}

// ====== Master Render Function ======
function renderCanvasInteraction(containerId, modelType, chip) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const canvas = document.createElement('canvas');
  const dpr = window.devicePixelRatio || 1;
  const displayW = Math.min(container.clientWidth || 480, 480);
  const displayH = 200;
  
  canvas.style.width = '100%';
  canvas.style.maxWidth = displayW + 'px';
  canvas.style.height = displayH + 'px';
  canvas.style.borderRadius = '8px';
  canvas.style.cursor = 'pointer';
  canvas.style.display = 'block';
  canvas.style.margin = '0 auto';
  
  canvas.width = displayW * dpr;
  canvas.height = displayH * dpr;
  
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  
  container.innerHTML = '';
  container.appendChild(canvas);
  
  // Get modelVisual from chip if available
  const modelVisual = chip && chip.chip && chip.chip.modelVisual ? chip.chip.modelVisual : null;
  
  // Render based on model type
  switch(modelType) {
    case 'number-axis':
    case 'number-axis-difference':
    case 'number-axis-sum-diff':
      renderNumberAxis(canvas, chip);
      break;
    case 'seesaw':
    case 'seesaw-balance':
    case 'seesaw-unit':
      renderSeesaw(canvas);
      break;
    case 'film-strip':
    case 'film-strip-cycle':
    case 'film-strip-period':
      renderFilmStrip(canvas);
      break;
    case 'overlap-canvas':
    case 'overlap-area':
    case 'angle-stretch':
    case 'parallelogram-stretch':
      renderOverlapArea(canvas);
      break;
    case 'butterfly-model':
    case 'butterfly-geometry':
      renderButterflyModel(canvas);
      break;
    case 'verb-burst':
      renderVerbBurst(canvas, modelVisual);
      break;
    case 'detective-chain':
    case 'detective-highlight':
      renderDetectiveChain(canvas);
      break;
    case 'magnet-s':
    case 'magnet-suffix':
      renderMagnetS(canvas);
      break;
    case 'time-arrow':
    case 'past-vs-perfect':
    case 'timeline-interactive':
      renderTimeArrow(canvas);
      break;
    case 'evidence-bar':
    case 'evidence-meter':
    case 'slider-interactive':
      renderEvidenceBar(canvas);
      break;
    case '3d-space':
    case '3d-space-preposition':
    case '3d-interactive':
      render3DSpace(canvas);
      break;
    case 'lcm-tail':
    case 'lcm-remainder':
      renderLcmTail(canvas);
      break;
    case 'chicken-rabbit':
    case 'chicken-rabbit-assume':
    case 'assume-diff-method':
      renderChickenRabbit(canvas);
      break;
    case 'verb-anchor':
    case 'reading-anchor':
    case 'center-sentence':
      renderVerbAnchor(canvas);
      break;
    case 'tense-timeline':
    case 'past-vs-present':
    case 'time-word-tense':
      renderTenseTimeline(canvas);
      break;
    default:
      // Generic placeholder
      ctx.fillStyle = '#F5F6FA';
      ctx.fillRect(0, 0, displayW, displayH);
      ctx.fillStyle = '#A29BFE';
      ctx.font = 'bold 14px "Noto Sans SC"';
      ctx.textAlign = 'center';
      ctx.fillText(`🎨 交互模型：${modelType}`, displayW/2, displayH/2 - 12);
      ctx.fillStyle = '#636E72';
      ctx.font = '11px "Noto Sans SC"';
      ctx.fillText('（外包团队按PRD实现 Canvas 交互）', displayW/2, displayH/2 + 10);
      ctx.textAlign = 'left';
      break;
  }
  
  return canvas;
}
