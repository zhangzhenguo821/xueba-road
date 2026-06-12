/**
 * 学霸之路：Canvas 交互引擎
 * 为每个思维模型提供真实的可交互 Canvas 元素
 * 外包技术组拿到这些代码就能直接在前端跑起来
 */

// ====== Number Axis: 得分扣分差量模型 ======
function renderNumberAxis(canvas, chip) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  let dragOffset = 0;
  let animating = false;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    
    // Background
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    // Title
    ctx.fillStyle = '#FF6B6B';
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillText('里外里原理：差量 = 5 + 2 = 7（不是 5 − 2 = 3！）', W/2-160, 20);
    
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
    ctx.fillText('0', zeroX - 4, lineY + 22);
    
    // +5 reward (right)
    const rewardX = zeroX + (lineEnd - lineStart) * 0.28 + dragOffset * 0.5;
    ctx.fillStyle = '#00B894';
    ctx.beginPath();
    ctx.arc(rewardX, lineY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillText('+5', rewardX - 12, lineY - 18);
    ctx.fillText('进球得分 →', rewardX - 30, lineY + 38);
    
    // -2 penalty (left)
    const penaltyX = zeroX - (lineEnd - lineStart) * 0.18 - dragOffset * 0.3;
    ctx.fillStyle = '#FF6B6B';
    ctx.beginPath();
    ctx.arc(penaltyX, lineY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillText('−2', penaltyX - 10, lineY - 18);
    ctx.fillText('← 投错扣分', penaltyX - 20, lineY + 38);
    
    // Gap line (the key insight!)
    ctx.strokeStyle = '#FF6B6B';
    ctx.lineWidth = 4;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(penaltyX, lineY + 50);
    ctx.lineTo(rewardX, lineY + 50);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Gap label
    const gapCenter = (penaltyX + rewardX) / 2;
    ctx.fillStyle = '#FF6B35';
    ctx.font = 'bold 18px "Noto Sans SC"';
    ctx.fillText('差7步', gapCenter - 24, lineY + 70);
    
    // Drag hint
    ctx.fillStyle = '#636E72';
    ctx.font = '12px "Noto Sans SC"';
    ctx.fillText('👆 拖动下方滑块，观察差量变化', W/2-90, H - 20);
  }

  draw();
  
  // Slider interaction
  canvas.addEventListener('input', function(e) {
    if (e.target.tagName === 'INPUT') {
      dragOffset = (e.target.value - 50) * 2;
      draw();
    }
  });
}

// ====== Seesaw: 盈亏跷跷板模型 ======
function renderSeesaw(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  let angle = -0.08;
  let dragging = false;
  let animFrame = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    // Title
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillText('跷跷板差量模型：多和少是仇人，数量要相加！', W/2-140, 18);
    
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
    ctx.beginPath();
    ctx.moveTo(-beamLen/2, 0);
    ctx.lineTo(beamLen/2, 0);
    ctx.stroke();
    
    // Left side: "多15本" (up)
    const leftX = -beamLen * 0.35;
    ctx.fillStyle = '#00B894';
    ctx.beginPath();
    ctx.roundRect(leftX - 30, -45, 60, 35, 6);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 11px "Noto Sans SC"';
    ctx.fillText('多15本', leftX - 20, -23);
    ctx.fillText('↑ 翘起', leftX - 16, -32);
    
    // Right side: "缺25本" (down)
    const rightX = beamLen * 0.35;
    ctx.fillStyle = '#FF6B6B';
    ctx.beginPath();
    ctx.roundRect(rightX - 30, 10, 60, 35, 6);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 11px "Noto Sans SC"';
    ctx.fillText('缺25本', rightX - 20, 32);
    ctx.fillText('↓ 陷下', rightX - 16, 24);
    
    ctx.restore();
    
    // Total gap
    ctx.fillStyle = '#FF6B35';
    ctx.font = 'bold 16px "Noto Sans SC"';
    ctx.fillText('总差量 = 15 + 25 = 40 本', W/2-100, pivotY + 40);
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.fillText('班数 = 40 ÷ (10−8) = 20 个', W/2-80, pivotY + 60);
    
    // Formula highlight
    ctx.fillStyle = '#00B894';
    ctx.font = 'bold 11px "Noto Sans SC"';
    ctx.fillText('多和少 = 仇人 → 相加', 30, H - 15);
    ctx.fillStyle = '#6C5CE7';
    ctx.fillText('多和多 = 朋友 → 相减', W - 130, H - 15);
    
    // Click hint
    ctx.fillStyle = '#636E72';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('👆 点击跷跷板两端，观察平衡变化', W/2-90, H - 35);
  }
  
  draw();
  
  // Animate seesaw rocking
  let rockDir = 1;
  canvas.addEventListener('click', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < W/2) {
      angle = -0.15; // Left side up
    } else {
      angle = 0.15; // Right side up
    }
    draw();
    // Animate back to equilibrium
    setTimeout(() => {
      angle = -0.08;
      draw();
    }, 600);
  });
}

// ====== Film Strip: 周期循环模型 ======
function renderFilmStrip(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  let selectedFrame = 2; // Default: 余数3 = 黄灯
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
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillText('周期胶卷模型：看电影找余数！', W/2-100, 16);
    
    // Film strip background
    const stripY = 35;
    const stripH = 80;
    ctx.fillStyle = '#2D3436';
    ctx.beginPath();
    ctx.roundRect(15, stripY, W - 30, stripH, 4);
    ctx.fill();
    
    // Perforations (film holes)
    for (let i = 0; i < 18; i++) {
      ctx.fillStyle = '#636E72';
      ctx.beginPath();
      ctx.roundRect(20 + i * (W-40)/17, stripY + 4, 4, 6, 1);
      ctx.fill();
      ctx.beginPath();
      ctx.roundRect(20 + i * (W-40)/17, stripY + stripH - 10, 4, 6, 1);
      ctx.fill();
    }
    
    // Frames
    const frameW = (W - 50) / 5;
    frames.forEach((f, i) => {
      const x = 25 + i * frameW;
      const isSelected = (i === selectedFrame);
      
      // Frame background
      ctx.fillStyle = isSelected ? f.color : 'rgba(255,255,255,0.12)';
      ctx.beginPath();
      ctx.roundRect(x, stripY + 14, frameW - 6, stripH - 28, 4);
      ctx.fill();
      
      // Frame border
      if (isSelected) {
        ctx.strokeStyle = '#FF6B35';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(x, stripY + 14, frameW - 6, stripH - 28, 4);
        ctx.stroke();
        
        // Glow effect
        ctx.shadowColor = f.color;
        ctx.shadowBlur = 12;
        ctx.fillStyle = f.color;
        ctx.beginPath();
        ctx.roundRect(x + 4, stripY + 18, frameW - 14, stripH - 36, 3);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      
      // Frame number
      ctx.fillStyle = isSelected ? '#2D3436' : 'rgba(255,255,255,0.6)';
      ctx.font = isSelected ? 'bold 16px "Noto Sans SC"' : '11px "Noto Sans SC"';
      ctx.fillText(f.label, x + frameW/2 - 6, stripY + stripH/2 + 2);
      
      // Position label
      ctx.fillStyle = '#636E72';
      ctx.font = '10px "Noto Sans SC"';
      ctx.fillText(`第${i+1}帧`, x + 5, stripY + stripH + 10);
    });
    
    // Result
    const resultFrame = frames[selectedFrame];
    ctx.fillStyle = '#FF6B35';
    ctx.font = 'bold 14px "Noto Sans SC"';
    if (selectedFrame === 4) {
      ctx.fillText('余数0 → 大结局最后一帧 = 🟢绿灯！', W/2-110, stripY + stripH + 40);
    } else {
      ctx.fillText(`余数${selectedFrame+1} → 第${selectedFrame+1}帧 = ${resultFrame.emoji}${resultFrame.label}灯！`, W/2-110, stripY + stripH + 40);
    }
    
    ctx.fillStyle = '#636E72';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('👆 点击帧数，观察余数对应的颜色', W/2-80, H - 12);
    
    // 128÷5=25...3 formula
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 11px "Noto Sans SC"';
    ctx.fillText('128÷5 = 25余3 → 第3帧', W/2-50, stripY + stripH + 55);
  }
  
  draw();
  
  canvas.addEventListener('click', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const frameW = (W - 50) / 5;
    const frameIndex = Math.floor((x - 25) / frameW);
    if (frameIndex >= 0 && frameIndex < 5) {
      selectedFrame = frameIndex;
      draw();
    }
  });
}

// ====== Overlap Area: 重叠面积模型 ======
function renderOverlapArea(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  let separation = 0; // 0 = overlapped, increases = separated
  let dragging = false;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    // Title
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillText('多退少补：重叠部分被算了两遍！', W/2-120, 16);
    
    const centerX = W / 2;
    const centerY = H * 0.42;
    const rectW = 110;
    const rectH = 70;
    const overlapW = 40;
    
    // Rectangle A (red, left side)
    const aX = centerX - rectW/2 - overlapW/2 + separation;
    ctx.fillStyle = 'rgba(255, 107, 107, 0.35)';
    ctx.strokeStyle = '#FF6B6B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(aX, centerY - rectH/2, rectW, rectH, 4);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#FF6B6B';
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillText('A', aX + rectW/2 - 6, centerY + 4);
    
    // Rectangle B (blue, right side)
    const bX = centerX - rectW/2 + overlapW/2 - separation;
    ctx.fillStyle = 'rgba(108, 92, 231, 0.35)';
    ctx.strokeStyle = '#6C5CE7';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(bX, centerY - rectH/2, rectW, rectH, 4);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillText('B', bX + rectW/2 - 6, centerY + 4);
    
    // Overlap area (when close together)
    if (separation < overlapW) {
      const overlapLeft = Math.max(aX + rectW, bX);
      const overlapRight = Math.min(aX + rectW + overlapW, bX + rectW);
      const actualOverlap = overlapRight - overlapLeft;
      if (actualOverlap > 0) {
        ctx.fillStyle = 'rgba(155, 89, 182, 0.55)'; // Purple = overlap
        ctx.beginPath();
        ctx.roundRect(overlapLeft, centerY - rectH/2, actualOverlap, rectH, 2);
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 10px "Noto Sans SC"';
        ctx.fillText('重叠!', overlapLeft + actualOverlap/2 - 12, centerY + 4);
        ctx.fillText('多算1次', overlapLeft + actualOverlap/2 - 16, centerY - 6);
      }
    }
    
    // Formula below
    ctx.fillStyle = '#2D3436';
    ctx.font = 'bold 13px "Noto Sans SC"';
    if (separation >= overlapW) {
      ctx.fillStyle = '#00B894';
      ctx.fillText('✅ 拉开了！没有重叠，总面积 = A + B', W/2-100, centerY + rectH/2 + 30);
    } else {
      ctx.fillStyle = '#FF6B35';
      ctx.fillText('总面积 = A + B − 重叠面积（多算的剪掉！）', W/2-130, centerY + rectH/2 + 30);
    }
    
    // Arrow indicators
    ctx.fillStyle = '#636E72';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('👆 拖动下方滑块把两个长方形拉开', W/2-90, H - 12);
    
    // Drag direction arrows
    ctx.strokeStyle = '#B2BEC3';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(aX + rectW, centerY);
    ctx.lineTo(bX, centerY);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  
  draw();
  
  // Mouse drag for separation
  canvas.addEventListener('mousedown', function(e) { dragging = true; });
  canvas.addEventListener('mouseup', function(e) { dragging = false; });
  canvas.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    separation = Math.max(0, Math.min(80, (x - W/2) * 0.8));
    draw();
  });
  
  // Touch support
  canvas.addEventListener('touchstart', function(e) { dragging = true; });
  canvas.addEventListener('touchend', function(e) { dragging = false; });
  canvas.addEventListener('touchmove', function(e) {
    if (!dragging) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    separation = Math.max(0, Math.min(80, (x - W/2) * 0.8));
    draw();
  });
}

// ====== Butterfly Model: 梯形蝴蝶几何 ======
function renderButterflyModel(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  let hovered = 'none';

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = '#6C5CE7';
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillText('蝴蝶模型：左右翅膀，面积死锁！', W/2-110, 16);
    
    // Trapezoid
    const topY = 50, bottomY = H - 40;
    const topLeft = W * 0.2, topRight = W * 0.8;
    const bottomLeft = W * 0.08, bottomRight = W * 0.92;
    
    // Full trapezoid outline
    ctx.strokeStyle = '#B2BEC3';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(topLeft, topY);
    ctx.lineTo(topRight, topY);
    ctx.lineTo(bottomRight, bottomY);
    ctx.lineTo(bottomLeft, bottomY);
    ctx.closePath();
    ctx.stroke();
    
    // Diagonal lines
    ctx.strokeStyle = '#636E72';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(topLeft, topY);
    ctx.lineTo(bottomRight, bottomY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(topRight, topY);
    ctx.lineTo(bottomLeft, bottomY);
    ctx.stroke();
    
    // Intersection point
    const interX = W / 2, interY = topY + (bottomY - topY) * 0.5;
    ctx.fillStyle = '#FF6B35';
    ctx.beginPath();
    ctx.arc(interX, interY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '10px "Noto Sans SC"';
    ctx.fillStyle = '#FF6B35';
    ctx.fillText('O', interX + 8, interY + 3);
    
    // Left wing (S2) - highlight on hover
    const leftAlpha = hovered === 'left' ? 0.5 : 0.25;
    ctx.fillStyle = `rgba(108, 92, 231, ${leftAlpha})`;
    ctx.beginPath();
    ctx.moveTo(topLeft, topY);
    ctx.lineTo(interX, interY);
    ctx.lineTo(bottomLeft, bottomY);
    ctx.closePath();
    ctx.fill();
    
    if (hovered === 'left') {
      ctx.strokeStyle = '#6C5CE7';
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    
    ctx.fillStyle = hovered === 'left' ? '#6C5CE7' : '#A29BFE';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.fillText('S₂', W * 0.2, interY + 20);
    
    // Right wing (S4) - highlight on hover
    const rightAlpha = hovered === 'right' ? 0.5 : 0.25;
    ctx.fillStyle = `rgba(0, 184, 148, ${rightAlpha})`;
    ctx.beginPath();
    ctx.moveTo(topRight, topY);
    ctx.lineTo(interX, interY);
    ctx.lineTo(bottomRight, bottomY);
    ctx.closePath();
    ctx.fill();
    
    if (hovered === 'right') {
      ctx.strokeStyle = '#00B894';
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    
    ctx.fillStyle = hovered === 'right' ? '#00B894' : '#55EFC4';
    ctx.font = 'bold 13px "Noto Sans SC"';
    ctx.fillText('S₄', W * 0.78, interY + 20);
    
    // Equality highlight
    if (hovered === 'left' || hovered === 'right') {
      ctx.fillStyle = '#FF6B35';
      ctx.font = 'bold 16px "Noto Sans SC"';
      ctx.fillText('S₂ = S₄ 左右翅膀面积死锁！', W/2-110, H - 15);
    } else {
      ctx.fillStyle = '#636E72';
      ctx.font = '11px "Noto Sans SC"';
      ctx.fillText('👆 悬停左翼或右翼，观察面积相等', W/2-80, H - 15);
    }
  }
  
  draw();
  
  canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < W / 2) {
      hovered = 'left';
    } else {
      hovered = 'right';
    }
    draw();
  });
  
  canvas.addEventListener('mouseleave', function() {
    hovered = 'none';
    draw();
  });
}

// ====== Verb Burst: 动词爆炸模型 ======
function renderVerbBurst(canvas, chipData) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const expanded = chipData ? chipData.expanded : [
    { verb: '弓', desc: '弓下腰' },
    { verb: '跺', desc: '左脚往地上一跺' },
    { verb: '甩', desc: '右腿抡圆了往前一甩' },
    { verb: '抽', desc: '鞋尖狠狠地抽在足球上' }
  ];
  const original = chipData ? chipData.original : '他一脚把球踢进了球门';
  let burstProgress = 0;
  let animating = false;
  let burstComplete = false;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F6FA';
    ctx.fillRect(0, 0, W, H);
    
    // Original text (top)
    ctx.fillStyle = '#FF6B6B';
    ctx.font = 'bold 12px "Noto Sans SC"';
    ctx.fillText('❌ 流水账原句：', 20, 20);
    ctx.fillStyle = '#B2BEC3';
    ctx.font = '12px "Noto Sans SC"';
    ctx.fillText(original, 130, 20);
    
    if (!burstComplete) {
      // Core verb (center)
      ctx.fillStyle = '#FF6B35';
      ctx.beginPath();
      ctx.arc(W/2, H * 0.35, 28 + burstProgress * 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = 'bold 22px "Noto Sans SC"';
      ctx.fillText(expanded[0].verb || '抓', W/2 - 10, H * 0.35 + 8);
      
      // Click prompt
      ctx.fillStyle = '#636E72';
      ctx.font = '12px "Noto Sans SC"';
      ctx.fillText('👆 点击「爆炸」按钮，把一个动词拆成4个微动作！', W/2-120, H * 0.35 + 50);
    } else {
      // Expanded verbs (scattered)
      ctx.fillStyle = '#00B894';
      ctx.font = 'bold 12px "Noto Sans SC"';
      ctx.fillText('✅ 学霸级慢放：', 20, 40);
      
      expanded.forEach((v, i) => {
        const x = 40 + (W - 80) * (i / expanded.length);
        const y = H * 0.45;
        
        // Verb bubble
        ctx.fillStyle = '#FF6B35';
        ctx.beginPath();
        ctx.roundRect(x, y, 50, 28, 6);
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px "Noto Sans SC"';
        ctx.fillText(`【${v.verb}】`, x + 4, y + 19);
        
        // Description below
        ctx.fillStyle = '#2D3436';
        ctx.font = '10px "Noto Sans SC"';
        ctx.fillText(v.desc, x, y + 40);
      });
      
      // Result text
      ctx.fillStyle = '#6C5CE7';
      ctx.font = 'bold 12px "Noto Sans SC"';
      ctx.fillText('一秒钟的动作 → 拆成4步写 → 作文瞬间变大片！', W/2-140, H - 18);
    }
  }
  
  draw();
  
  // Burst function (called externally)
  canvas.burst = function() {
    burstComplete = true;
    draw();
  };
}

// ====== Detective Chain: 侦探连线模型 ======
function renderDetectiveChain(canvas) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  let lineProgress = 0;
  let lineComplete = false;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#1A1A2E';
    ctx.fillRect(0, 0, W, H);
    
    // Text passage
    ctx.fillStyle = '#F5F6FA';
    ctx.font = '14px "Noto Sans SC"';
    ctx.fillText('Mike was very', 20, 40);
    
    // Blank space
    ctx.fillStyle = '#FF6B35';
    ctx.fillRect(140, 25, 80, 22);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 12px "Noto Sans SC"';
    ctx.fillText('______', 150, 40);
    
    ctx.fillStyle = '#F5F6FA';
    ctx.font = '14px "Noto Sans SC"';
    ctx.fillText(', because his dog', 230, 40);
    
    // Clue word (highlighted)
    ctx.fillStyle = '#00B894';
    ctx.font = 'bold 14px "Noto Sans SC"';
    ctx.fillText('died', 20, 80);
    
    // Evidence word below
    ctx.fillStyle = '#00B894';
    ctx.font = '11px "Noto Sans SC"';
    ctx.fillText('🐕 狗死了 → 线索！', 20, 100);
    
    // Detective line (animated)
    if (lineComplete) {
      ctx.strokeStyle = '#00B894';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#00B894';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(40, 85);
      ctx.lineTo(180, 38);
      ctx.stroke();
      ctx.shadowBlur = 0;
      
      // Arrow at the end
      ctx.fillStyle = '#00B894';
      ctx.font = 'bold 14px "Noto Sans SC"';
      ctx.fillText('→ sad ✅', 200, 65);
      
      // Result
      ctx.fillStyle = '#FFE66D';
      ctx.font = 'bold 12px "Noto Sans SC"';
      ctx.fillText('证据链：died → 伤心 → sad！不看运气，只看证据！', W/2-130, H - 20);
    } else {
      ctx.fillStyle = '#636E72';
      ctx.font = '11px "Noto Sans SC"';
      ctx.fillText('👆 点击「连线」按钮，画出侦探证据链！', W/2-90, H - 20);
    }
    
    // Options at the bottom
    const options = ['A. happy', 'B. sad', 'C. tired'];
    const optColors = ['#FF6B6B', '#00B894', '#B2BEC3'];
    options.forEach((opt, i) => {
      ctx.fillStyle = lineComplete && i === 1 ? optColors[i] : '#636E72';
      ctx.font = lineComplete && i === 1 ? 'bold 12px "Noto Sans SC"' : '11px "Noto Sans SC"';
      ctx.fillText(opt, 20 + i * 120, 130);
      if (lineComplete && i === 1) {
        ctx.strokeStyle = '#00B894';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(15 + i * 120, 118, 80, 18, 3);
        ctx.stroke();
      }
    });
  }
  
  draw();
  
  canvas.connectLine = function() {
    lineComplete = true;
    draw();
  };
}

// ====== Master Render Function ======
function renderCanvasInteraction(containerId, modelType, chipData) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const canvas = document.createElement('canvas');
  canvas.width = 480;
  canvas.height = 200;
  canvas.style.width = '100%';
  canvas.style.maxWidth = '480px';
  canvas.style.height = 'auto';
  canvas.style.borderRadius = '8px';
  canvas.style.cursor = 'pointer';
  canvas.style.display = 'block';
  canvas.style.margin = '0 auto';
  
  container.innerHTML = '';
  container.appendChild(canvas);
  
  // Scale canvas for retina
  const dpr = window.devicePixelRatio || 1;
  canvas.width = 480 * dpr;
  canvas.height = 200 * dpr;
  canvas.style.width = '100%';
  canvas.style.maxWidth = '480px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  
  // Render based on model type
  switch(modelType) {
    case 'number-axis':
    case 'number-axis-difference':
      renderNumberAxis(canvas, chipData);
      break;
    case 'seesaw':
    case 'seesaw-balance':
      renderSeesaw(canvas);
      break;
    case 'film-strip':
    case 'film-strip-cycle':
      renderFilmStrip(canvas);
      break;
    case 'overlap-canvas':
    case 'overlap-area':
      renderOverlapArea(canvas);
      break;
    case 'butterfly-model':
    case 'butterfly-geometry':
      renderButterflyModel(canvas);
      break;
    case 'verb-burst':
      renderVerbBurst(canvas, chipData ? chipData.modelVisual : null);
      break;
    case 'detective-chain':
    case 'detective-highlight':
      renderDetectiveChain(canvas);
      break;
    default:
      // Generic placeholder
      ctx.fillStyle = '#F5F6FA';
      ctx.fillRect(0, 0, 480, 200);
      ctx.fillStyle = '#636E72';
      ctx.font = '12px "Noto Sans SC"';
      ctx.fillText(`交互模型: ${modelType}`, 480/2-60, 100);
      ctx.fillText('（外包团队需按PRD实现Canvas交互）', 480/2-90, 120);
      break;
  }
  
  return canvas;
}