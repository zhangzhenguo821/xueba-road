/**
 * 学霸之路：四年级全科突破平台 — 内容数据库
 * 每条芯片包含 5 大核心字段：编码、痛点、诊断、芯片、真题
 * 支持无限扩容：只要按此格式在 chips 数组里加一行，前端自动挂载
 */

const CHIPS = [
  // ============== 四年级数学 ==============
  {
    id: "MATH-04-001",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "得分扣分题换个壳就不会",
    icon: "🎯",
    painPoint: "投篮比赛，投中一球得5分，投错一球扣2分，共投10球得36分。问投中几球？孩子总是把差量算成 5−2=3，导致满盘皆输。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出动态追问：'学霸，投错一球，你觉得你只是丢了扣掉的2分吗？'",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子们，投错一球，你不仅拿不到原本能得到的 5 分，还要被倒扣 2 分！这一进一出，你和全对的差距拉开了 5+2=7 分！这叫里外里原理。所以总差量要除以 7，而不是除以 3！",
      modelType: "number-axis",
      modelDesc: "画一个数轴，0在中间。向右是奖5分，向左是罚2分。中间的距离用大红线标注：总共差了 7 步。",
      modelVisual: {
        type: "canvas-interactive",
        component: "number-axis-difference"
      }
    },
    exams: [
      "2025年北京海淀期末真题《运送玻璃瓶（运好一箱赚10元，打碎一箱赔5元）》",
      "2024年黄冈密卷《考试答题（答对得4分，答错扣1分）》",
      "小升初预演《得分扣分变形综合题》"
    ],
    examCodes: ["MATH-4A-07-03"],
    keywords: ["鸡兔同笼", "假设法", "得分扣分", "差量代换"]
  },
  {
    id: "MATH-04-002",
    grade: 4,
    subject: "数学",
    category: "数论与巧算思维",
    title: "周期循环问题余数对应",
    icon: "🔄",
    painPoint: "一串彩灯按红、黄、黄、蓝、绿的顺序排列，第128盏灯是什么颜色？孩子算出了余数，但数数的时候数错，或者余数是0的时候不知道是谁。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出交互：'如果余数是0，说明这个组刚好分完了，它应该属于这个组的'老大'还是'守门员（最后一个）'？'",
      interactionType: "choice-question"
    },
    chip: {
      script: "数周期就像看电影。红、黄、黄、蓝、绿，这 5 个色是一集。128÷5=25余3。说明放完了25集全集，第26集刚刚演到第3个镜头。咱们直接去第一集里数第3个镜头——黄灯！如果余数是0，说明这一集完美大团圆，演完了！那它就是这集大结局的最后一个颜色——绿灯！",
      modelType: "film-strip",
      modelDesc: "做出'胶卷/电影底片'的视觉，5个灯一卷胶卷。余数3对应的胶卷第三帧高亮闪烁。",
      modelVisual: {
        type: "canvas-interactive",
        component: "film-strip-cycle"
      }
    },
    exams: [
      "2024年广州越秀期末真题《按规律排队问题》",
      "小升初预演《数图形周期》",
      "2025年武汉期末真题《彩灯排列周期》"
    ],
    examCodes: ["MATH-4A-08-01"],
    keywords: ["周期问题", "余数", "循环排列"]
  },
  {
    id: "MATH-04-003",
    grade: 4,
    subject: "数学",
    category: "几何与空间思维",
    title: "长方形剪拼与重叠面积",
    icon: "📐",
    painPoint: "两个长方形重叠在一起，已知重叠部分是个正方形，求组合后的总面积。孩子找不到不重叠部分的各自长宽，卡死。",
    aiDiagnosis: {
      trigger: "卡住时提供",
      action: "屏幕拖拽：'用手指把这两个长方形往两边拉开，看看总面积发生了什么变化？'",
      interactionType: "drag-interaction"
    },
    chip: {
      script: "求组合图形，就一招：'多退少补'。两个图形叠在一起，重叠的那块地方（正方形）被算了两遍。所以，总面积 = 长方形A + 长方形B − 重叠面积。学霸的眼睛能看到重叠部分的'重影'，把多算的那一遍剪掉就收工！",
      modelType: "overlap-canvas",
      modelDesc: "动态Canvas。两个半透明的彩色长方形，重叠部分由于颜色叠加变得特别深（红+蓝=紫），提示孩子'这里重叠了，多算了一次'。",
      modelVisual: {
        type: "canvas-interactive",
        component: "overlap-area"
      }
    },
    exams: [
      "2024年北京海淀期末真题《组合图形面积》",
      "黄冈密卷《重叠与剪拼综合》",
      "小升初几何专项《面积计算变形》"
    ],
    examCodes: ["MATH-4A-06-02"],
    keywords: ["重叠面积", "多退少补", "组合图形"]
  },
  {
    id: "MATH-04-004",
    grade: 4,
    subject: "数学",
    category: "盈亏问题",
    title: "盈亏问题多多少少搞不清",
    icon: "⚖️",
    painPoint: "学校买来一批图书，如果每班分8本则多出15本；如果每班分10本则少25本。问有多少个班？孩子不知道什么时候该加，什么时候该减。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "动态跷跷板追问：'从多15到缺25，中间横跨的总差距是多少？'",
      interactionType: "visual-prompt"
    },
    chip: {
      script: "别背公式了！咱们来玩跷跷板。多15本，跷跷板往上翘了15度；缺25本，陷下去了25度。从最上面到最下面，总共差了多少度？是不是 15+25=40 度？为什么会差40度？因为每个班分到的书变多了。记住，'多和少'是仇人，数量要相加；'多和多'是朋友，数量要相减。永远用总差量除以单差量！",
      modelType: "seesaw",
      modelDesc: "动态跷跷板WebGL动效，展示'多'与'少'叠加后的总差距。",
      modelVisual: {
        type: "canvas-interactive",
        component: "seesaw-balance"
      }
    },
    exams: [
      "2024年黄冈密卷期末压轴题：分苹果问题",
      "全国统考：租车船问题变形",
      "2025年北京海淀期末：盈亏综合应用"
    ],
    examCodes: ["MATH-4A-07-04"],
    keywords: ["盈亏问题", "跷跷板模型", "差量代换"]
  },

  // ============== 四年级数学（北京真题扩展芯片） ==============
  {
    id: "MATH-04-005",
    grade: 4,
    subject: "数学",
    category: "运算定律",
    title: "乘法分配律正向逆向全考",
    icon: "✖️",
    painPoint: "用简便方法计算：(40+4)×25，孩子只乘第一个数40×25+4，忘记4也要乘25！常见错误：只乘第一项漏乘第二项。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "高亮拆分动画：'(a+b)×c = a×c + b×c'，把漏乘的第二项用红色闪烁标记。",
      interactionType: "visual-highlight"
    },
    chip: {
      script: "乘法分配律口诀：括号外面乘进来，每个都要乘！40×25=1000，4×25=100，加起来1100。记住：括号里的每一个数，都必须跟外面的数相乘，漏乘一个就全错！逆用也一样：37×28+37×72 = 37×(28+72) = 37×100 = 3700，提取公因数37，剩下的凑整百！",
      modelType: "distributive-law",
      modelDesc: "分配律拆分可视化：(40+4)×25 → 40×25 + 4×25，每个分支必须完整。逆向：37×(28+72)，提取37后28+72=100。",
      modelVisual: { type: "canvas-interactive", component: "distributive-law" }
    },
    exams: [
      "2021-2025年北京海淀期末必考：乘法分配律正向(40+4)×25",
      "2021-2025年北京西城期末必考：乘法分配律逆向37×28+37×72",
      "2021-2025年北京朝阳期末：125×88特殊数凑整"
    ],
    examCodes: ["MATH-4A-01-01"],
    keywords: ["乘法分配律", "漏乘", "提取公因数", "凑整百"]
  },
  {
    id: "MATH-04-006",
    grade: 4,
    subject: "数学",
    category: "小数运算",
    title: "小数加减竖式小数点不对齐",
    icon: "🔢",
    painPoint: "列竖式计算15.62+7.8，孩子末尾对齐而不是小数点对齐，导致错误。20-5.46忘记给整数补0变成20.00。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "竖式动画：强制小数点对齐，位数不够补0。红色箭头指向小数点位置。",
      interactionType: "visual-align"
    },
    chip: {
      script: "小数加减法的铁律：小数点对齐！不是末尾对齐！15.62和7.8，7.8后面补一个0变成7.80，小数点对齐后逐位相加。整数减小数更要注意：20变成20.00，小数点对齐后再减5.46。记住：小数点对齐=相同数位对齐，这是小数加减的全部核心！",
      modelType: "decimal-align",
      modelDesc: "竖式对齐演示：小数点用红色竖线标注，位数不够的补0显示。两数对齐后逐位计算。",
      modelVisual: { type: "canvas-interactive", component: "decimal-align" }
    },
    exams: [
      "2021-2025年北京各区期末必考：小数加减竖式",
      "2021-2025年北京海淀期末：小数加减简便运算18.51-9.03-0.97",
      "北京统考：小数点移动与单位换算"
    ],
    examCodes: ["MATH-4A-02-01"],
    keywords: ["小数加减", "小数点对齐", "补0", "竖式计算"]
  },
  {
    id: "MATH-04-007",
    grade: 4,
    subject: "数学",
    category: "三角形几何",
    title: "三角形三边关系内角和总记错",
    icon: "🔺",
    painPoint: "判断能否围成三角形：2,3,5不能！孩子以为两边之和等于第三边就行。内角和记成360°（那是四边形）。等腰三角形底角忘记除以2。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "三边关系动画：最短两边之和必须大于最长边，等于也不行。内角和：三角形=180°，四边形=360°。",
      interactionType: "visual-demonstration"
    },
    chip: {
      script: "三角形铁律两招：第一，三边关系：最短两边之和>最长边，等于也不行！2+3=5，刚好等于所以不能围成。第二，内角和：三角形=180°，不是360°！360°是四边形的。等腰三角形求底角：底角=(180°-顶角)÷2，别忘了÷2！",
      modelType: "triangle-rules",
      modelDesc: "三边关系可视化：短+短>长，用颜色标注最短两边和最长边。内角和180°标注在三角形内部。",
      modelVisual: { type: "canvas-interactive", component: "triangle-rules" }
    },
    exams: [
      "2021-2025年北京各区期末必考：三边关系判断",
      "2021-2025年北京海淀期末：内角和求角度+等腰三角形",
      "北京统考：三角形分类与三边范围"
    ],
    examCodes: ["MATH-4A-03-01"],
    keywords: ["三边关系", "内角和", "等腰三角形", "最短两边>最长边"]
  },
  {
    id: "MATH-04-008",
    grade: 4,
    subject: "数学",
    category: "图形运动",
    title: "平移格数数对应点不是数间距",
    icon: "↗️",
    painPoint: "图形A向右平移5格再向下平移3格得到图形B，孩子数两个图形中间的空格数而不是对应点移动的格数。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "平移动画：在图形上标记一个关键点，用红色箭头标注该点移动的实际路径和格数。",
      interactionType: "drag-interaction"
    },
    chip: {
      script: "平移数格子的铁律：找对应点，数这个点移动了多少格！不是数两个图形中间的空格！比如三角形的一个角，原来在第2列第3行，平移后到了第7列第6行，那就是右移5格、下移3格。平移还有一个妙用：不规则图形的周长，可以通过平移转化成标准长方形来算！",
      modelType: "translation-grid",
      modelDesc: "网格图上一个三角形，标记关键点A和A'，红色箭头画出A→A'的移动路径和格数。",
      modelVisual: { type: "canvas-interactive", component: "translation-grid" }
    },
    exams: [
      "2021-2025年北京各区期末必考：数平移格数",
      "2021-2025年北京期末：平移求不规则图形周长",
      "北京统考：轴对称图形判断与对称轴数量"
    ],
    examCodes: ["MATH-4A-04-01"],
    keywords: ["平移格数", "对应点", "数格不是数间距", "平移求周长"]
  },

  // ============== 四年级语文 ==============
  {
    id: "CHI-04-001",
    grade: 4,
    subject: "语文",
    category: "阅读理解",
    title: "词句赏析题只会写'生动形象'",
    icon: "📖",
    painPoint: "结合上下文，体会'嫩绿的叶子在风中摇曳'中'摇曳'的意思。孩子只会写'生动形象'，拿不到阅卷老师的采分点。",
    aiDiagnosis: {
      trigger: "答题时内置",
      action: "答题框内置三个彩色'乐高卡槽'，强迫孩子分步执行：[本义] → [语境特质] → [作者情感]",
      interactionType: "slot-fill"
    },
    chip: {
      script: "孩子们，考试看到'某个动词用得好不好'，别再写生动形象了！阅卷老师手里的判卷标准有三层。第一层（表层），把这个词本来的意思写出来（摇晃）；第二层（深层），看它写出了主角什么样子（像小姑娘跳舞，充满生机）；第三层（核心），表达了作者什么感情（对大自然的喜爱）。这叫三层剥洋葱法！",
      modelType: "onion-three-layer",
      modelDesc: "UI绘制成一个可剥开的三层洋葱图（外皮：表层本义；内肉：语境状态；核心：作者情感）。",
      modelVisual: {
        type: "slot-interactive",
        component: "onion-decompose",
        slots: [
          { color: "#FDCB6E", label: "表层：释本义", hint: "摇曳就是摇摆、晃动" },
          { color: "#6C5CE7", label: "深层：找语境", hint: "拟人，写出叶子充满生机/活泼的特点" },
          { color: "#FF6B35", label: "核心：连情感", hint: "表达了作者对大自然的喜爱/赞美之情" }
        ]
      }
    },
    exams: [
      "2024年上海徐汇期末真题阅读《小兵张嘎》第4题：体会嘎子'溜'过去这个动词的妙处",
      "2025年北京海淀期末真题阅读《草地》词句赏析",
      "全国统考期末《现代文阅读词句理解》"
    ],
    examCodes: ["CN-4A-05-02"],
    keywords: ["词句赏析", "三层剥洋葱", "采分点", "阅读理解"]
  },
  {
    id: "CHI-04-002",
    grade: 4,
    subject: "语文",
    category: "考场作文",
    title: "写事流水账干巴巴写不长",
    icon: "✍️",
    painPoint: "写《记一次游戏》，孩子写：他跑过来一脚把球踢进了球门，我很开心。全是流水账，没有细节。",
    aiDiagnosis: {
      trigger: "作文输入检测",
      action: "系统判定为流水账，弹出'放大镜'，要求把'抓'拆成4个连贯微动作",
      interactionType: "verb-burst"
    },
    chip: {
      script: "把平凡动词进行像素级拆解。别写'他一脚把球踢进了球门'，用微动作慢放：他【弓】下腰，左脚往地上一【跺】，右腿抡圆了往前一【甩】，鞋尖狠狠地【抽】在足球上，球离弦之箭般破网得分。连用四个微动词，流水账瞬间变成动作大片！",
      modelType: "verb-burst",
      modelDesc: "抖音短视频慢动作回放，配上四个动词的闪烁出现。一个动作被打碎成4个微动词。",
      modelVisual: {
        type: "verb-burst-interactive",
        component: "verb-explosion",
        original: "他一脚把球踢进了球门",
        expanded: [
          { verb: "弓", desc: "弓下腰" },
          { verb: "跺", desc: "左脚往地上一跺" },
          { verb: "甩", desc: "右腿抡圆了往前一甩" },
          { verb: "抽", desc: "鞋尖狠狠地抽在足球上" }
        ]
      }
    },
    exams: [
      "四年级统考期末作文《记一次游戏》",
      "四年级统考期末作文《我的乐园》",
      "高分平替数据库：写事类作文微动作素材"
    ],
    examCodes: ["CN-4A-05-03"],
    keywords: ["动词爆炸", "微动作拆解", "流水账", "考场作文"]
  },

  // ============== 四年级英语 ==============
  {
    id: "ENG-04-001",
    grade: 4,
    subject: "英语",
    category: "时态与动词变形",
    title: "单三后面的s永远漏掉",
    icon: "🧲",
    painPoint: "He like_____ playing football. 孩子永远写 like，不知道 She goes 为什么要加 es。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "动词尾部弹出一块巨大的磁铁磁场动效，追问：'学霸，主语是He/She/It这三大傲娇怪之一，你身后的动词尾巴怎么能光溜溜的？'",
      interactionType: "magnet-effect"
    },
    chip: {
      script: "孩子们，在英语王国里，He（他）、She（她）、It（它）是能量最强的三大'单身傲娇怪'。因为他们太孤单了，所以只要他们出来当老大，身后的动词就必须被吸过来一个尾巴——字母 -s 或 -es 来陪伴他们。这叫单三磁铁原理。漏了 -s，句子就会摔倒！",
      modelType: "magnet-s",
      modelDesc: "小红书多巴胺手账风。将 He/She/It 画成红色磁铁，动词 run 走过去，屁股上瞬间被吸附上一个大大的绿色 -s。",
      modelVisual: {
        type: "magnet-interactive",
        component: "magnet-suffix"
      }
    },
    exams: [
      "2025年广州越秀期末真题连词成句",
      "2024年北京海淀期末看图写话易错题",
      "小升初语法易错单三专项"
    ],
    examCodes: ["EN-4A-06-01"],
    keywords: ["单三", "动词变形", "磁铁原理", "-s/-es"]
  },
  {
    id: "ENG-04-002",
    grade: 4,
    subject: "英语",
    category: "介词与空间思维",
    title: "介词in/on/at换个场景就瞎猜",
    icon: "📍",
    painPoint: "My mom is waiting for me _____ the bus stop. 孩子分不清到底是在'里面'、'在上面'还是'在哪个点'。",
    aiDiagnosis: {
      trigger: "卡住时提供",
      action: "系统界面瞬间将文字转化为一个3D可旋转的立体空间魔方房间，允许孩子用手指转动观察物体位置",
      interactionType: "3d-rotate"
    },
    chip: {
      script: "别去背中文翻译了！学霸眼里只有三个空间模型：at 是一个精准的坐标点（Point），比如你在地图上找公交车站，它只是个点；on 是一个接触面（Surface），必须有脚踏实地的粘连，比如苍蝇趴在墙上；in 是一个立体包裹空间（Volume），必须有四周包围的安全感。车站是个点，所以无脑选 at！",
      modelType: "3d-space",
      modelDesc: "绘制3D空间图：一个飞镖扎在靶心上（at），一本书平贴在桌面上（on），一只猫缩在纸箱子里（in）。",
      modelVisual: {
        type: "3d-interactive",
        component: "space-preposition"
      }
    },
    exams: [
      "2024年上海徐汇期末真题选词填空",
      "小升初语法易错介词专项",
      "2025年广州越秀期末真题介词辨析"
    ],
    examCodes: ["EN-4A-06-02"],
    keywords: ["介词", "空间思维", "in/on/at", "Point/Surface/Volume"]
  },
  {
    id: "ENG-04-003",
    grade: 4,
    subject: "英语",
    category: "完形填空与逻辑思维",
    title: "完形填空看懂了也选错",
    icon: "🔍",
    painPoint: "Mike was very ______, because his dog died yesterday. 选项：A.happy B.sad C.tired。孩子全凭翻译瞎猜。",
    aiDiagnosis: {
      trigger: "做错时启动",
      action: "启动'侦探探案高亮连线'，从 dog died 一秒连向空格",
      interactionType: "detective-line"
    },
    chip: {
      script: "做英语完形填空，不是考你当翻译官，而是考你当福尔摩斯！出题老师挖掉的每一个空，都在前后3句话里留下了'逻辑钩子'。看看空格后面写了什么？because it was raining（因为下雨了）。顺着这个证据往前抓，下雨天出门必须带什么？当然是 umbrella（伞）！学霸做题，不看运气，只看证据链！",
      modelType: "detective-chain",
      modelDesc: "在文章大背景上，空格和后面的线索词 raining 之间，拉出一根闪烁的绿色激光连线，锁死正确答案。",
      modelVisual: {
        type: "line-interactive",
        component: "detective-highlight"
      }
    },
    exams: [
      "全国近3年四年级期末统考真题完形填空压轴题",
      "2024年北京海淀期末完形填空",
      "2025年浙江杭州期末选词填空"
    ],
    examCodes: ["EN-4A-06-03"],
    keywords: ["完形填空", "证据链", "侦探连线", "前后照应"]
  },

  // ============== 五年级数学 ==============
  {
    id: "MATH-05-001",
    grade: 5,
    subject: "数学",
    category: "几何思维",
    title: "梯形对角线阴影面积毫无头绪",
    icon: "🦋",
    painPoint: "已知梯形面积，对角线交于点O，求左右两个小三角形的面积关系。孩子习惯了死套 S=½ah，找不到高就直接放弃。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "彩色高亮提示：'学霸，把注意力从'高'移开。看看左边翅膀和右边翅膀，它们是不是从同一个大三角形里剪出来的？'",
      interactionType: "visual-prompt"
    },
    chip: {
      script: "孩子们，这就是著名的几何蝴蝶模型！只要是梯形，不管它怎么变形，左边翅膀的三角形和右边翅膀的三角形，面积永远一模一样！为什么？因为△ABC和△DBC等底等高，面积相等。它们同时减去底部公共的三角形，剩下的两翼自然死死相等！记住：左右翅膀，面积死锁！",
      modelType: "butterfly-model",
      modelDesc: "在一个彩色梯形中，对角线划出四块，左右两块三角形高亮闪烁，并标注 S₂=S₄，视觉呈蝴蝶展翅状。",
      modelVisual: {
        type: "canvas-interactive",
        component: "butterfly-geometry"
      }
    },
    exams: [
      "2025年上海徐汇期末压轴几何题",
      "高分奥数几何专项：蝴蝶模型",
      "2024年黄冈密卷梯形阴影面积"
    ],
    examCodes: ["MATH-5A-06-03"],
    keywords: ["蝴蝶模型", "等积变形", "梯形阴影", "等底等高"]
  },
  {
    id: "MATH-05-002",
    grade: 5,
    subject: "数学",
    category: "应用题思维",
    title: "列车过桥路程总漏车长",
    icon: "🚂",
    painPoint: "一列火车长200米，以每秒20米的速度通过一座长800米的桥，求完全过桥需要多少秒？孩子往往直接拿桥长800除以速度，漏掉车长。",
    aiDiagnosis: {
      trigger: "卡住时启动",
      action: "Canvas动态小火车开动效，要求孩子用手指拖动火车完全过桥，观察火车头走过的真正轨迹",
      interactionType: "drag-train"
    },
    chip: {
      script: "火车过桥，绝对不是只有桥的长度！当火车头刚上桥，到火车尾巴完全离开桥，火车头实际上不仅走完了整座桥，还把自己的车身长度也走了一遍！所以，总路程 = 桥长 + 车长。学霸过桥，必加车长！",
      modelType: "train-track",
      modelDesc: "动态轨迹图。一辆小火车通过隧道，从车头进到车尾出，红线标注出车头行进的实际总长度（桥长+自长）。",
      modelVisual: {
        type: "canvas-interactive",
        component: "train-bridge"
      }
    },
    exams: [
      "2024年湖北黄冈期末真题行程专项",
      "小升初经典常考题列车过桥",
      "2025年北京海淀期末行程应用题"
    ],
    examCodes: ["MATH-5A-07-02"],
    keywords: ["列车过桥", "行程问题", "总路程=桥长+车长"]
  },
  {
    id: "MATH-05-003",
    grade: 5,
    subject: "数学",
    category: "数论思维",
    title: "公因数公倍数分不清该求哪个",
    icon: "🍬",
    painPoint: "有一些糖果，3个一堆剩2个，4个一堆剩2个，5个一堆剩2个，求最少有多少个？孩子看到数字就盲目通分或乱乘。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "追问：'糖果的总数，应该比3、4、5大还是比它们小？每次都多出来2个，如果我们先把这2个藏起来呢？'",
      interactionType: "choice-question"
    },
    chip: {
      script: "分不清因数倍数？记住一招：求总数，用倍数；求分组，用因数！这道题糖果是总数，无脑锁定公倍数。3、4、5的最小公倍数是60。不管怎么分都剩2个，说明总数比完美的整除多了2个。我们直接加上这个小尾巴：60+2=62个！这叫多退少补法。",
      modelType: "lcm-tail",
      modelDesc: "小红书卡通手账风。3个圈、4个圈、5个圈的集合图，重叠交汇处是最小公倍数60，旁边单独画出2颗闪闪发光的糖果。",
      modelVisual: {
        type: "canvas-interactive",
        component: "lcm-remainder"
      }
    },
    exams: [
      "2024年北京海淀期末真题数论压轴题",
      "黄冈密卷公因数公倍数综合",
      "小升初数论专项：余数问题"
    ],
    examCodes: ["MATH-5A-08-01"],
    keywords: ["公倍数", "公因数", "余数问题", "多退少补"]
  },

  // ============== 五年级语文 ==============
  {
    id: "CHI-05-001",
    grade: 5,
    subject: "语文",
    category: "阅读理解",
    title: "非连续性文本不会提取对比信息",
    icon: "📊",
    painPoint: "给出药品说明书或两家快递公司价格对比图表，问：小明要寄5公斤行李选哪家划算？孩子长篇大论写废话，却拿不到对比分。",
    aiDiagnosis: {
      trigger: "答题时内置",
      action: "答题框分裂为双栏'对比雷达槽'，强制孩子填入：[A公司价格算式] vs [B公司价格算式] → [最终结论]",
      interactionType: "dual-slot-fill"
    },
    chip: {
      script: "做图表说明题，千万别当抒情文写！阅卷老师只看两个核心：数字对比和条件对应。第一步，在图表里把小明的核心条件（5公斤）圈出来；第二步，列出A、B两家公司的纯数字算式；第三步，得出结论。用数字说话，一字不多，一字不少，这就是满分标准！",
      modelType: "comparison-radar",
      modelDesc: "洋葱反差图。左边密密麻麻的文字说明书，右边被AI提炼成一根红色放大镜，直击两个关键数据的对比连线。",
      modelVisual: {
        type: "dual-slot-interactive",
        component: "comparison-chart"
      }
    },
    exams: [
      "2025年江苏苏系统考期末真题非连续性文本阅读",
      "2024年北京海淀期末说明书阅读",
      "全国统考非连续文本专项"
    ],
    examCodes: ["CN-5A-05-04"],
    keywords: ["非连续性文本", "图表阅读", "数字对比", "条件对应"]
  },
  {
    id: "CHI-05-002",
    grade: 5,
    subject: "语文",
    category: "考场作文",
    title: "写人只会堆砌外貌千人一面",
    icon: "📸",
    painPoint: "写《一个XX的人》或《我想对您说》，描写妈妈只会写：妈妈很辛苦，头上有了白发……阅卷老师直接判为三类文。",
    aiDiagnosis: {
      trigger: "作文输入检测",
      action: "检测到'大大的眼睛、高高的鼻子'时，系统强制触发'视觉熔断'，弹出警告：'检测到千篇一律外貌词，请启动特写镜头换词器！'",
      interactionType: "alert-replace"
    },
    chip: {
      script: "写外貌，不许写五官全景，要写特征特写！满头白发太老套，学霸怎么写？'妈妈在灯下帮我检查作业，有一根银丝在她的黑发里任性地翘着，怎么藏也藏不住。' 别写全身，只抓一根头发、一个老茧、或者一个标志性的苦笑。用局部特写代替全景扫描，画面感瞬间高级！",
      modelType: "closeup-lens",
      modelDesc: "电影镜头感图示。一个远景全身人像被画上大红叉，一个聚焦在'手部厚茧'或'微笑时眼角细纹'的特写镜头高亮放大。",
      modelVisual: {
        type: "verb-burst-interactive",
        component: "closeup-camera",
        original: "妈妈很辛苦，头上有了白发",
        expanded: [
          { verb: "翘", desc: "有一根银丝在她的黑发里任性地翘着" },
          { verb: "藏", desc: "怎么藏也藏不住" },
          { verb: "查", desc: "灯下帮我检查作业" },
          { verb: "映", desc: "灯光映在她眼角的细纹上" }
        ]
      }
    },
    exams: [
      "五年级必考作文《一个饱含深情的人》",
      "五年级必考作文《我想对您说》高分芯片",
      "全国统考写人作文特写素材库"
    ],
    examCodes: ["CN-5A-05-05"],
    keywords: ["特写镜头", "局部描写", "心理视差", "写人作文"]
  },

  // ============== 五年级英语 ==============
  {
    id: "ENG-05-001",
    grade: 5,
    subject: "英语",
    category: "时态逻辑",
    title: "分不清一般过去时和现在完成时",
    icon: "⚡",
    painPoint: "I _____ (lose) my key yesterday vs I _____ (lose) my key. I can't get into the room now. 孩子全填 lost，完全不知道区别。",
    aiDiagnosis: {
      trigger: "做错时降下",
      action: "降下一柄'时空手术刀'，将过去和现在切开，追问：'学霸，昨天丢的钥匙和现在进不去屋，哪一个对此时此刻的你造成了肉体暴击？'",
      interactionType: "timeline-split"
    },
    chip: {
      script: "一般过去时是'死去的历史'，只发生在过去，和现在没关系（昨天丢了，可能今天找到了，无所谓）；而现在完成时是'过去射向现在的一支箭'，它发生在过去，但重点在对现在的后果！因为丢了钥匙，导致我现在'进不去屋'。后果还热乎着呢，必须用现在完成时 have lost！",
      modelType: "time-arrow",
      modelDesc: "动态时间轴。一般过去时是一个孤立在Past的黑点；现在完成时是一根从Past延伸出来、狠狠扎进Present（现在）的红色闪电链。",
      modelVisual: {
        type: "timeline-interactive",
        component: "past-vs-perfect"
      }
    },
    exams: [
      "2025年浙江杭州期末语法单选压轴题",
      "小升初时态易错专项",
      "2024年北京海淀期末时态辨析"
    ],
    examCodes: ["EN-5A-06-02"],
    keywords: ["现在完成时", "一般过去时", "时空手术刀", "后果箭"]
  },
  {
    id: "ENG-05-002",
    grade: 5,
    subject: "英语",
    category: "情态动词",
    title: "情态动词must/can/may全凭翻译瞎猜",
    icon: "💡",
    painPoint: "The light is on. He _____ be at home. 选项：must/can/may。孩子觉得填'可能'、'必须'都说得通，随便盲选。",
    aiDiagnosis: {
      trigger: "卡住时弹出",
      action: "弹出'学霸证据量化条'，让孩子通过蛛丝马迹来滑拉证据百分比",
      interactionType: "slider-evidence"
    },
    chip: {
      script: "别用中文翻译去套！学霸眼里只有证据的百分比！题目第一句说了什么？The light is on（灯亮着呢）。既然灯亮着，他家在家的可能性就是100%稳了，这时候必须用 must（一定，表示百分之百的笃定）；如果没有任何证据，只是瞎猜，才用 may（可能）。做英语题就是看证据给百分比！",
      modelType: "evidence-bar",
      modelDesc: "视觉进度条。0%对应can't（绝对不可能），50%对应may（也许吧），100%对应must（绝对铁证）。",
      modelVisual: {
        type: "slider-interactive",
        component: "evidence-meter"
      }
    },
    exams: [
      "2024年山东济南期末真题完形填空",
      "小升初情态动词辨析专项",
      "2025年全国统考语法选择题"
    ],
    examCodes: ["EN-5A-06-03"],
    keywords: ["情态动词", "must/can/may", "证据百分比", "推测语气"]
  },

  // ============== 六年级数学 ==============
  {
    id: "MATH-06-001",
    grade: 6,
    subject: "数学",
    category: "小升初经典行程",
    title: "流水行船帽子丢了模型",
    icon: "🚢",
    painPoint: "甲乙两船在河中相向而行，甲顺水乙逆水，擦身而过时帽子从甲船掉入水中。20分钟后甲船掉头追帽子，问追上需要多少分钟？孩子把所有速度列出来设未知数，算到天荒地老。",
    aiDiagnosis: {
      trigger: "卡住时一键降维",
      action: "把水流速度直接清零，追问：'如果你坐在一辆往前开的扶梯上，这时候你把帽子掉在扶梯上了，扶梯的速度会影响你一回头捡起帽子的时间吗？'",
      interactionType: "dimension-reduce"
    },
    chip: {
      script: "孩子们，这就是吓退无数人的'帽子丢了模型'。别去管那该死的水流速度！水流就像是一个会移动的舞台，甲船、乙船、帽子都在这个舞台上。水流让甲船变快，同时也让帽子往前漂，这两者的效果是完全抵消的！所以在'舞台内部'，甲船开走20分钟再回头追，永远只需要耗费一模一样的20分钟就能追上！水速就是个烟雾弹，无脑秒杀！",
      modelType: "stage-model",
      modelDesc: "动态Canvas演示：拉动一个大水流背景。当水流拼命往右冲时，孩子会发现，船和帽子的相对距离红线，拉伸和缩短的速度完全没有变化。",
      modelVisual: {
        type: "canvas-interactive",
        component: "river-stage"
      }
    },
    exams: [
      "全国小升初毕业统考真题行船压轴题",
      "黄冈小升初金卷流水行船专项",
      "2025年北京海淀小升初分班考行程题"
    ],
    examCodes: ["MATH-6A-07-05"],
    keywords: ["流水行船", "帽子模型", "相对速度", "降维秒杀"]
  },
  {
    id: "MATH-06-002",
    grade: 6,
    subject: "数学",
    category: "小升初立体几何",
    title: "圆柱剪开圆锥旋转空间崩塌",
    icon: "🌀",
    painPoint: "一个直角三角形，直角边分别为3厘米和4厘米，以3厘米的边为轴旋转一周，求得到的立体图形体积。孩子分不清底面半径是3还是4。",
    aiDiagnosis: {
      trigger: "做错时触发",
      action: "前端屏幕触发3D WebGL引擎，让三角形像陀螺一样绕着轴疯狂旋转3秒钟，在空中拉出一个完美的实体3D圆锥",
      interactionType: "3d-rotate"
    },
    chip: {
      script: "立体几何旋转，就看'谁定谁动'！以3厘米的边为轴，说明这根3厘米的边死锁在中心当旋转定海神针，它就是圆锥的高！而另外那根在外面拼命跑圈的4厘米直角边，跑出来的轨迹就是底面的圆形，所以它就是底面半径！锁定 h=3, r=4，直接套公式 V=⅓πr²h 解决！",
      modelType: "3d-cone",
      modelDesc: "3D动态转换图。左边是一个静态直角三角形（红轴蓝边），右边随着转动，逐渐虚化出底面半径r和高的高亮连线。",
      modelVisual: {
        type: "3d-interactive",
        component: "cone-rotation"
      }
    },
    exams: [
      "小升初立体几何专项真题",
      "徐汇区毕业考压轴卷旋转体",
      "2024年黄冈密卷圆柱圆锥综合"
    ],
    examCodes: ["MATH-6A-06-04"],
    keywords: ["旋转体", "圆锥体积", "谁定谁动", "立体几何"]
  },
  {
    id: "MATH-06-003",
    grade: 6,
    subject: "数学",
    category: "小升初抽屉原理",
    title: "抽屉原理至少保证数数数漏",
    icon: "🎁",
    painPoint: "口袋里有红、黄、蓝三种颜色的球各10个，闭着眼睛往外拿，至少摸出多少个球才能保证有3个球颜色一样？孩子全凭感觉猜4个、7个。",
    aiDiagnosis: {
      trigger: "卡住时弹出",
      action: "弹出无情追问：'学霸，你想保底成功？那你就必须做好准备，去迎接这个世界上最倒霉、最非酋的极限状况！'",
      interactionType: "choice-question"
    },
    chip: {
      script: "记住，抽屉原理的突破动作就四个字：'倒霉透顶'！题目要3个球颜色一样，最倒霉的状况是什么？是你拿了2个红的、2个黄的、2个蓝的，完美避开了所有大满贯！此时你手里已经有了2×3=6个球。这时候哪怕天塌下来，你再随便摸1个球，不管摸出什么颜色，都一定会和手里的某一种颜色凑成3个！所以：答案 = (目标数−1)×颜色数+1 = 7个！",
      modelType: "drawer-pigeonhole",
      modelDesc: "小红书卡通手账风。三个彩色的抽屉（红黄蓝），每个抽屉里不情不愿地塞了2个球，此时天空中掉下一个闪光的金色球（标记：+1），落入任何一个抽屉都会打破平衡。",
      modelVisual: {
        type: "canvas-interactive",
        component: "pigeonhole-drawer"
      }
    },
    exams: [
      "北京海淀小升初分班考数论压轴题",
      "2025年上海徐汇毕业考抽屉原理",
      "黄冈密卷鸽巢问题专项"
    ],
    examCodes: ["MATH-6A-08-02"],
    keywords: ["抽屉原理", "鸽巢问题", "倒霉透顶法", "保底计算"]
  },

  // ============== 六年级语文 ==============
  {
    id: "CHI-06-001",
    grade: 6,
    subject: "语文",
    category: "文言文突破",
    title: "课外文言文一句话都看不懂",
    icon: "📜",
    painPoint: "小升初课外文言文阅读，给出一段墨子或战国策的故事，问主人公什么品质。孩子连字面意思都翻译不出来。",
    aiDiagnosis: {
      trigger: "文本框高亮",
      action: "触发'古今映射手术刀'，把不认识的单音节字自动剥离，提示：'用双音节组词法去翻译它！'",
      interactionType: "text-highlight"
    },
    chip: {
      script: "看课外文言文别害怕，学霸通关就两招！第一招：单字变双字。文言文里的一个字，就是现代汉语里的一个词。文中的'夺'就是'争夺'，'走'就是'奔跑'，'恐'就是'恐怕/害怕'。第二招：看结局推品质。故事里的主角最后如果是悲剧，九成在歌颂他的忠诚或坚贞；最后如果是喜剧，九成在夸他的聪明和智慧。顺着结局反推，答案虽不中亦不远矣！",
      modelType: "ancient-modern-map",
      modelDesc: "左侧古文单字卡片，右侧被一根链条拉开，膨胀变成双字词语。",
      modelVisual: {
        type: "slot-interactive",
        component: "ancient-modern",
        slots: [
          { color: "#FDCB6E", label: "单字→双字组词", hint: "夺→争夺，走→奔跑，恐→恐怕" },
          { color: "#6C5CE7", label: "看结局推品质", hint: "悲剧→忠诚/坚贞；喜剧→聪明/智慧" },
          { color: "#FF6B35", label: "首尾夹击主旨", hint: "中心思想藏在第一段结尾或最后一段议论句" }
        ]
      }
    },
    exams: [
      "2025年全国统考小升初语文大阅读真题文言文专项",
      "2024年北京海淀毕业考课外文言文",
      "黄冈密卷文言文阅读压轴"
    ],
    examCodes: ["CN-6A-05-06"],
    keywords: ["文言文", "单字变双字", "看结局推品质", "古今映射"]
  },
  {
    id: "CHI-06-002",
    grade: 6,
    subject: "语文",
    category: "满分作文",
    title: "结尾只会喊口号空洞煽情",
    icon: "🌅",
    painPoint: "写抒情或成长作文（如《那些年，我们一起走过》），结尾只会写：我们要好好学习，不辜负老师的期望，啊！明天真美好！阅卷老师直接扣分。",
    aiDiagnosis: {
      trigger: "作文结尾检测",
      action: "检测到'我们要、应该、啊'等口号词时，系统重度提示：'警告！口号式结尾将让作文瞬间贬值，请一键开启以景结情学霸芯片！'",
      interactionType: "alert-replace"
    },
    chip: {
      script: "孩子们，聪明的学霸在作文结尾从来不喊口号，他们都在写天气、写风景！你想表达你的不舍和难过，不要写'我很舍不得大家'。写成：'夕阳把操场上孤单的单杠拉得老长，风吹过来，凤凰花落了一地，红得像一团火，又像是一场盛大的告别。' 记住：把你的千言万语，藏进考场最后那一眼的风景里，这叫以景结情，高级至极！",
      modelType: "scene-ending",
      modelDesc: "视觉大字报，左边是一个喇叭在喊口号（打红叉），右边是一扇窗户，夕阳西下，树影斑驳，意境拉满（打绿勾）。",
      modelVisual: {
        type: "verb-burst-interactive",
        component: "scene-ending",
        original: "我们要好好学习，啊！明天真美好！",
        expanded: [
          { verb: "拉", desc: "夕阳把操场上孤单的单杠拉得老长" },
          { verb: "吹", desc: "风吹过来" },
          { verb: "落", desc: "凤凰花落了一地" },
          { verb: "红", desc: "红得像一团火，又像是一场盛大的告别" }
        ]
      }
    },
    exams: [
      "小升初满分作文选",
      "六毕业考特等文收录",
      "全国统考抒情作文以景结情专项"
    ],
    examCodes: ["CN-6A-05-07"],
    keywords: ["以景结情", "口号式结尾", "满分作文", "卒章显志"]
  },

  // ============== 六年级英语 ==============
  {
    id: "ENG-06-001",
    grade: 6,
    subject: "英语",
    category: "被动语态核心",
    title: "被动语态永远漏掉be动词",
    icon: "🔄",
    painPoint: "The web platform ______ (build) by the IT team tomorrow. 孩子看到 tomorrow 习惯性盲填 will build 导致全错。",
    aiDiagnosis: {
      trigger: "做错时降下",
      action: "降下'主被动身份互换仪'，追问：'主语是网站平台，网站能自己拔腿去建自己吗？'",
      interactionType: "role-swap"
    },
    chip: {
      script: "做这种题，先问问主语是人还是物！主语是 The web platform（网站平台），网站能自己拔腿去建自己吗？绝对不能！它必须'被建设'！只要确定了是被动，无脑锁定黄金公式：被动 = be + 过去分词（Vpp）！因为有 tomorrow（明天），所以 be 动词变成 will be。合起来就是 will be built！不加 be 动词的被动语态，都是在耍流氓！",
      modelType: "passive-formula",
      modelDesc: "结构代换图。动作发出者（IT team）和承受者（Web platform）位置互换，中间高亮弹出红色的 be + Vpp 核心卡槽。",
      modelVisual: {
        type: "slot-interactive",
        component: "passive-voice",
        slots: [
          { color: "#55EFC4", label: "判定：主语是人or物", hint: "物→被动，人→可能主动" },
          { color: "#6C5CE7", label: "锁定公式：be + Vpp", hint: "will be built" },
          { color: "#FF6B35", label: "时态决定be变形", hint: "tomorrow → will be" }
        ]
      }
    },
    exams: [
      "2025年全国外国语学校小升初选拔英语易错专项",
      "2024年北京海淀毕业考语法压轴",
      "小升初被动语态辨析专项"
    ],
    examCodes: ["EN-6A-06-04"],
    keywords: ["被动语态", "be+Vpp", "主被动互换", "时态变形"]
  },
  {
    id: "ENG-06-002",
    grade: 6,
    subject: "英语",
    category: "终极短文填空",
    title: "首字母填空全凭语感毫无章法",
    icon: "🔎",
    painPoint: "小升初压轴题：一段长短文挖出10个空只给首字母，要求填入正确形式。孩子全凭语感猜词。",
    aiDiagnosis: {
      trigger: "卡住时启动",
      action: "启动'词性侦探雷达'，强迫孩子执行动作：[看左邻右舍判定词性] → [看全篇时态判定变形]",
      interactionType: "radar-scan"
    },
    chip: {
      script: "首字母填空是小升初的第一大坑，但学霸做题有铁律！第一步：看左邻右舍定词性。如果空格前面是 a/an/the，后面没东西了，那这里百分之百填名词；如果前面是 can/should，这里百分之百填动词原形。第二步：看全篇定变形。如果是名词，想想用不用加 s（变复数）；如果是动词，看看全篇是过去（加 ed）还是现在（加 s）。两步走，把瞎猜变成推理！",
      modelType: "word-type-radar",
      modelDesc: "小红书侦探手账风。放大镜聚焦在一个单词空格上，左边雷达扫描到 the，右边扫描到 in the park，中间锁定必须填复数名词。",
      modelVisual: {
        type: "slot-interactive",
        component: "word-type-detective",
        slots: [
          { color: "#55EFC4", label: "第一步：看左邻右舍定词性", hint: "a/an/the→名词；can/should→动词原形" },
          { color: "#6C5CE7", label: "第二步：看全篇定变形", hint: "名词→加s？动词→加ed/s？" },
          { color: "#FF6B35", label: "铁律：两步走把瞎猜变推理", hint: "不再凭语感，用逻辑锁死答案" }
        ]
      }
    },
    exams: [
      "2024年北京、上海、广州小升初毕业英语试卷原题",
      "2025年全国外国语学校选拔首字母填空",
      "黄冈密卷小升初英语压轴综合"
    ],
    examCodes: ["EN-6A-06-05"],
    keywords: ["首字母填空", "词性侦探", "左邻右舍", "变形判定"]
  },
  // ============== 四年级数学扩展（Batch-002 AI教研组长生产） ==============
  {
    id: "MATH-04-009",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "年龄问题几年后永远搞反",
    icon: "🎂",
    painPoint: "小明今年8岁，妈妈今年36岁，几年后妈妈的年龄是小明的3倍？孩子总是直接拿 36÷3=12，然后说4年后，完全忘了妈妈也在变老！",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出动态追问：'学霸，再过3年，妈妈就只长了1岁吗？还是妈妈跟你一样也在变老？'",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子们，年龄问题有个铁律：你长1岁，妈妈也长1岁，你们之间的年龄差永远不变！小明8岁，妈妈36岁，差了28岁，这个28岁是一辈子锁死的！你要找的3倍关系，是指几年后妈妈的年龄 = 小明的年龄 × 3。别担心，用跷跷板模型一想就通：左边是妈妈的年龄，右边是小明的3倍，它们要平衡！一句话口诀：年龄差永不变，倍数关系找时间！",
      modelType: "seesaw",
      modelDesc: "画一个跷跷板，左边坐着妈妈（标注36+X岁），右边坐着3个小明叠在一起（每个标注8+X岁）。跷跷板平衡时，36+X = 3×(8+X)。X用滑块可以拖动，拖到X=6时跷跷板平衡。",
      modelVisual: { type: "canvas-interactive", component: "seesaw-balance" }
    },
    exams: [
      "2024年北京西城期末真题《爸爸和儿子的年龄倍数问题》",
      "2025年黄冈密卷《年龄差不变的变形题》",
      "2024年南京期末真题《祖孙三代的年龄推算》"
    ],
    examCodes: ["MATH-4A-08-01"],
    keywords: ["年龄问题", "年龄差不变", "倍数关系", "跷跷板模型"]
  },
  {
    id: "MATH-04-010",
    grade: 4,
    subject: "数学",
    category: "数论与巧算思维",
    title: "植树问题端点要不要算总搞混",
    icon: "🌳",
    painPoint: "一条100米长的路一边种树，每隔5米种一棵，两头都种，一共种多少棵？孩子直接 100÷5=20，忘了两头都要种！或者路是环形的，孩子还是+1！",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出胶卷交互：'这棵树是第一棵，下一棵在第5米的位置...你数数，两端都种的时候，树比间隔多了几个？'",
      interactionType: "canvas-draw"
    },
    chip: {
      script: "学霸们，植树问题就是数间隔和数树的关系！别担心，记住三句话：两头都种，树比间隔多1（+1）；只种一头，树=间隔（不加不减）；两头都不种，树比间隔少1（-1）；环形路，树=间隔！就像排队，10个人排一排，中间9个间隔，但如果头尾都要站人，人就比间隔多1个。一句话口诀：两端都种加1，环形不加不减，两端不种减1！",
      modelType: "film-strip",
      modelDesc: "画一条直线路上种树，每隔5米一棵。用胶卷式交互：点击播放，树木逐棵出现，旁边实时显示间隔数和树的数量。可以切换'两端都种/只种一头/环形'三种模式，对比数量变化。",
      modelVisual: { type: "canvas-interactive", component: "film-strip-period" }
    },
    exams: [
      "2025年北京海淀期末真题《马路两旁植树（两端都种）》",
      "2024年上海期末真题《圆形花坛周围种花》",
      "2025年广州天河期末真题《楼梯台阶问题》"
    ],
    examCodes: ["MATH-4A-09-01"],
    keywords: ["植树问题", "间隔数", "端点", "环形植树"]
  },
  {
    id: "MATH-04-011",
    grade: 4,
    subject: "数学",
    category: "几何与空间思维",
    title: "角的两条边延长角会变大吗",
    icon: "📐",
    painPoint: "老师问：一个角的两条边延长后，角的大小变不变？孩子回答'变大了'，因为两条边看起来更长了！但角的大小跟边长没关系啊！",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出Canvas交互：'拖动角的两条边，让它们变长或变短，看看中间那个开口会不会变？'",
      interactionType: "canvas-draw"
    },
    chip: {
      script: "孩子们，角的大小就像嘴巴张开的大小——你嘴巴张多大声，跟你嘴唇多长有关系吗？没有！角只看两条边张开的角度，不看边有多长。你以为边越长角越大，其实角只看开口大小！就像手电筒，光柱照得再远，张角还是那么大。一句话口诀：角看开口不看边，边长延长角不变！",
      modelType: "overlap-area",
      modelDesc: "画一个角，两条边可以拖动延长或缩短。中间用扇形填充颜色表示角的大小。拖动边长时，扇形面积不变，用动画直观展示'边变长、角不变'的效果。",
      modelVisual: { type: "canvas-interactive", component: "angle-stretch" }
    },
    exams: [
      "2024年北京朝阳期末真题《判断题：角的两边延长角变大》",
      "2025年武汉期末真题《用三角尺拼角》",
      "2024年深圳期末真题《比较角的大小》"
    ],
    examCodes: ["MATH-4A-10-01"],
    keywords: ["角的大小", "边长无关", "开口角度", "几何直觉"]
  },
  {
    id: "MATH-04-012",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "和差问题谁大谁小分不清",
    icon: "⚖️",
    painPoint: "两个数的和是48，差是12，求这两个数。孩子看到'差'就慌了，不知道是大的减小的还是小的减大的，列算式更是乱七八糟。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出数轴交互：'学霸，和是48，差是12。你先把两个数放在数轴上，看看大的在左边还是小的在左边？'",
      interactionType: "canvas-draw"
    },
    chip: {
      script: "学霸们，和差问题就一个秘诀：大数 =（和+差）÷2，小数 =（和-差）÷2！别担心，想想跷跷板：和是两个数加起来，差是两个数减出来的。你把和加上差，就等于两个大数，除以2就是一个大数！把和减去差，就等于两个小数，除以2就是一个小数！一句话口诀：和加差除2得大，和减差除2得小！",
      modelType: "number-axis",
      modelDesc: "画一个数轴，标出小数和大数的位置。小数在左，大数在右。用红线标注'差'（两数之间的距离），用蓝线标注'和'（从0到两数之和的距离）。拖动滑块调整和与差，数轴实时更新。",
      modelVisual: { type: "canvas-interactive", component: "number-axis-sum-diff" }
    },
    exams: [
      "2025年北京海淀期末真题《两数之和与差求两数》",
      "2024年杭州期末真题《书架上上下两层书》",
      "2025年成都期末真题《两筐苹果的重量问题》"
    ],
    examCodes: ["MATH-4A-11-01"],
    keywords: ["和差问题", "大数小数", "跷跷板模型", "数轴"]
  },
  {
    id: "MATH-04-013",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "归一问题先求什么后求什么搞乱了",
    icon: "🔑",
    painPoint: "3台拖拉机5天耕地120亩，4台拖拉机7天耕地多少亩？孩子不知道先算1台1天耕多少，直接 120÷3÷4÷7 乱除一通，结果完全不对。",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出动态追问：'学霸，3台5天干了120亩，你能不能先告诉我1台1天干了多少？这就叫归一——找到那个1！'",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子们，归一问题就像找钥匙——先把'1台1天'这个最小单位算出来！别担心，3台5天干了120亩，1台5天就是 120÷3=40亩，1台1天就是 40÷5=8亩。找到这把钥匙（8亩/台/天），后面随便开锁：4台7天 = 8×4×7 = 224亩！你以为要一步一步想好几个量，其实只要先找到'1个单位'，剩下的就是乘法！一句话口诀：归一先找1个量，剩下全是乘法账！",
      modelType: "seesaw",
      modelDesc: "画一个跷跷板模型：左边放3台拖拉机和5天的图标，右边放120亩。先点击'归一'按钮，跷跷板缩放为1台1天=8亩。然后再点击'扩展'按钮，换为4台7天，跷跷板自动算出224亩。",
      modelVisual: { type: "canvas-interactive", component: "seesaw-unit" }
    },
    exams: [
      "2024年北京东城期末真题《5台织布机8小时织布》",
      "2025年重庆期末真题《工人修路归一问题》",
      "2024年长沙期末真题《汽车运货归一扩展》"
    ],
    examCodes: ["MATH-4A-12-01"],
    keywords: ["归一问题", "单位量", "先归一再扩展", "乘法链"]
  },
  {
    id: "MATH-04-014",
    grade: 4,
    subject: "数学",
    category: "几何与空间思维",
    title: "平行四边形拉动变成长方形面积到底变不变",
    icon: "🔄",
    painPoint: "一个长方形框架，拉成平行四边形后，面积变了吗？孩子说'没变，还是那根框子'，但面积明明变小了！因为底没变但高变了啊！",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出Canvas交互：'拖动平行四边形的顶点，让它越来越歪，你看看里面涂色的面积是不是越来越小？'",
      interactionType: "canvas-draw"
    },
    chip: {
      script: "学霸们，想象你的手电筒从正上方照下来：长方形的时候，光照的面积最大。你把它一歪变成平行四边形，底边没变，但'光柱的高度'矮了！你以为框子没断面积就不变，其实面积 = 底×高，高变小了面积肯定变小！就像你斜着切面包，切面看起来变长了，但面包片变薄了！一句话口诀：框子没断不算数，底乘高才是面积的根！",
      modelType: "overlap-area",
      modelDesc: "画一个长方形，可以拖动顶点使其变为平行四边形。底边固定不变，高用虚线标注。拖动时高会缩短，面积颜色从绿色变红色表示减小。右侧实时显示底、高、面积数值变化。",
      modelVisual: { type: "canvas-interactive", component: "parallelogram-stretch" }
    },
    exams: [
      "2025年北京海淀期末真题《长方形拉成平行四边形面积变化》",
      "2024年天津期末真题《判断题：周长不变面积就不变》",
      "2025年南京期末真题《平行四边形与长方形面积比较》"
    ],
    examCodes: ["MATH-4A-13-01"],
    keywords: ["平行四边形", "面积变化", "底乘高", "高变小面积变小"]
  }
];

// ============== 按年级科目分组索引 ==============
const SUBJECT_MAP = {
  "数学": { color: "#6C5CE7", lightColor: "#A29BFE", icon: "📐", bg: "rgba(108,92,231,0.08)" },
  "语文": { color: "#FF6B35", lightColor: "#FDCB6E", icon: "📖", bg: "rgba(255,107,53,0.08)" },
  "英语": { color: "#00B894", lightColor: "#55EFC4", icon: "🇬🇧", bg: "rgba(0,184,148,0.08)" }
};

const GRADE_MAP = {
  4: { label: "四年级", color: "#FF6B6B", lightColor: "#FFA8A8", bgGrad: "linear-gradient(135deg, #FF6B6B, #FFE66D)" },
  5: { label: "五年级", color: "#4ECDC4", lightColor: "#A8E6CF", bgGrad: "linear-gradient(135deg, #4ECDC4, #55EFC4)" },
  6: { label: "六年级", color: "#6C5CE7", lightColor: "#A29BFE", bgGrad: "linear-gradient(135deg, #6C5CE7, #A29BFE)" }
};

// 首页痛点按钮映射
const PAIN_BUTTONS = {
  4: {
    "数学": [
      { label: "应用题题目太长，读完后面忘前面", chipId: "MATH-04-001" },
      { label: "鸡兔同笼/划船/得分扣分换个壳就不会", chipId: "MATH-04-001" },
      { label: "盈亏问题多多少少搞不清", chipId: "MATH-04-004" },
      { label: "周期循环余数不知道对应谁", chipId: "MATH-04-002" },
      { label: "几何剪拼重叠面积不会算", chipId: "MATH-04-003" },
      { label: "乘法分配律总是漏乘", chipId: "MATH-04-005" },
      { label: "小数加减竖式小数点不对齐", chipId: "MATH-04-006" },
      { label: "三角形三边内角和总记错", chipId: "MATH-04-007" },
      { label: "平移格数数错不是数对应点", chipId: "MATH-04-008" },
      { label: "年龄问题几年后永远搞反", chipId: "MATH-04-009" },
      { label: "植树问题端点要不要算总搞混", chipId: "MATH-04-010" },
      { label: "角的两条边延长角会变大吗", chipId: "MATH-04-011" },
      { label: "和差问题谁大谁小分不清", chipId: "MATH-04-012" },
      { label: "归一问题先求什么后求什么搞乱了", chipId: "MATH-04-013" },
      { label: "平行四边形拉动面积到底变不变", chipId: "MATH-04-014" }
    ],
    "语文": [
      { label: "阅读理解写了一大堆，老师只给1分", chipId: "CHI-04-001" },
      { label: "作文像流水账，干巴巴写不长", chipId: "CHI-04-002" },
      { label: "词句赏析只会写'生动形象'", chipId: "CHI-04-001" }
    ],
    "英语": [
      { label: "连词成句总是漏单词、语序颠倒", chipId: "ENG-04-001" },
      { label: "单三动词永远忘加s或ing", chipId: "ENG-04-001" },
      { label: "完形填空看懂了也选错", chipId: "ENG-04-003" },
      { label: "介词in/on/at换个场景就瞎猜", chipId: "ENG-04-002" }
    ]
  },
  5: {
    "数学": [
      { label: "梯形阴影面积毫无头绪", chipId: "MATH-05-001" },
      { label: "列车过桥路程总漏车长", chipId: "MATH-05-002" },
      { label: "公因数公倍数分不清该求哪个", chipId: "MATH-05-003" }
    ],
    "语文": [
      { label: "图表说明题不会提取对比信息", chipId: "CHI-05-001" },
      { label: "写人只会堆砌外貌千人一面", chipId: "CHI-05-002" }
    ],
    "英语": [
      { label: "分不清一般过去时和现在完成时", chipId: "ENG-05-001" },
      { label: "情态动词must/can/may全凭翻译瞎猜", chipId: "ENG-05-002" }
    ]
  },
  6: {
    "数学": [
      { label: "流水行船帽子丢了算到崩溃", chipId: "MATH-06-001" },
      { label: "圆锥旋转分不清半径和高", chipId: "MATH-06-002" },
      { label: "抽屉原理至少保证数数数漏", chipId: "MATH-06-003" }
    ],
    "语文": [
      { label: "课外文言文一句话都看不懂", chipId: "CHI-06-001" },
      { label: "作文结尾只会喊口号空洞煽情", chipId: "CHI-06-002" }
    ],
    "英语": [
      { label: "被动语态永远漏掉be动词", chipId: "ENG-06-001" },
      { label: "首字母填空全凭语感毫无章法", chipId: "ENG-06-002" }
    ]
  }
};

// Global export for browser script tag