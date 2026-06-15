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
    title: "鸡兔同笼倒扣分问题·两分钟掌握解题方法",
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
      video: {
      source: "Bilibili",
        bvid: "BV1zK4y1G7Ys",
        title: "鸡兔同笼系列的倒扣分问题，两分钟教你掌握解题方法",
        duration: "3:5",
      searchKeyword: "小学四年级数学得分扣分题换个壳就不会讲解"
    },
      video2: {
        bvid: "BV1Yr4y137mh",
        title: "三年级数学培优：鸡兔同笼拓展题，得分扣分你能正确理解吗",
        duration: "4:9",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "周期循环余数问题·有余数的除法",
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
      video: {
      source: "Bilibili",
        bvid: "BV1EE411T7eQ",
        title: "用余数解决周期性问题",
        duration: "23:22",
      searchKeyword: "小学四年级数学周期循环问题余数对应讲解"
    },
      video2: {
        bvid: "BV1yGAfzFELV",
        title: "最新特等奖！二年级下册数学《有余数的除法》公开课【小学数学新课标任务群】有余数的除法优质课配套视频课件教案逐字稿有余数除法，有余数的除法二年级，周期问题",
        duration: "41:41",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "重叠问题·长方形剪拼重叠面积",
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
      video: {
      source: "Bilibili",
        bvid: "BV1RYdPBrEoD",
        title: "小学面积重难点：长方形正方形重叠面积差",
        duration: "1:9",
      searchKeyword: "小学四年级数学长方形剪拼与重叠面积讲解"
    },
      video2: {
        bvid: "BV16Q4y197fq",
        title: "三年级周长进阶题！ 注意两个长方形有重叠的部分哦！",
        duration: "1:59",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "盈亏问题·四年级奥数精讲",
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
      video: {
      source: "Bilibili",
        bvid: "BV1tx411V7oB",
        title: "小学奥数三年级  基本盈亏问题",
        duration: "1:28",
      searchKeyword: "小学四年级数学盈亏问题多多少少搞不清讲解"
    },
      video2: {
        bvid: "BV11NtAe5Ese",
        title: "L3-16盈亏问题",
        duration: "28:23",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "乘法分配律七大题型·四年级数学",
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
      video: {
      source: "Bilibili",
        bvid: "BV1qt4y1X7Bq",
        title: "【教师招聘】小学数学《乘法分配律》示范课",
        duration: "9:4",
      searchKeyword: "小学四年级数学乘法分配律正向逆向全考讲解"
    },
      video2: {
        bvid: "BV13V411Y7xy",
        title: "三招打败乘法分配律",
        duration: "10:20",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "小数加减法·小数点对齐",
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
      video: {
      source: "Bilibili",
        bvid: "BV1CvcwzcEyM",
        title: "为什么小数点要对齐？90% 孩子只背规则不懂原理",
        duration: "2:6",
      searchKeyword: "小学四年级数学小数加减竖式小数点不对齐讲解"
    },
      video2: {
        bvid: "BV1rp42117ZM",
        title: "第六单元圆柱与圆锥~05-小数加减法中的看错算错问题#四年级下#~看动画~学数学#小学数学（人教版）",
        duration: "5:55",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "三角形的内角和·说课讲解",
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
      video: {
      source: "Bilibili",
        bvid: "BV1ow411776m",
        title: "一下就记住了三角形内角和是180",
        duration: "0:13",
      searchKeyword: "小学四年级数学三角形三边关系内角和总记错讲解"
    },
      video2: {
        bvid: "BV1584y1b7M4",
        title: "三角形的内角和（人教四下P67）",
        duration: "8:14",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "平移格数·对应点移动",
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
      video: {
      source: "Bilibili",
        bvid: "BV19y421a7gC",
        title: "小学数学四年级下册 2023最新人教版  第7单元 轴对称平移 动画教学课件【全集】",
        duration: "35:14",
      searchKeyword: "小学四年级数学平移格数数对应点不是数间距讲解"
    },
      video2: {
        bvid: "BV1xjG1zpEBw",
        title: "平移法VS标向法四年级求周长",
        duration: "1:13",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "小学语文阅读理解·10种说明方法",
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
      video: {
      source: "Bilibili",
        bvid: "BV15u4y1S7VC",
        title: "【明明白白17】说明文题目不会做？记不住说明方法？分析不出说明方法的作用？这个词语能不能删掉？一次性解决说明文阅读写作所有问题！（小学初中使用）",
        duration: "36:59",
      searchKeyword: "小学四年级语文词句赏析题只会写'生动形象'教学方法"
    },
      video2: {
        bvid: "BV1eh411u7ZA",
        title: "小学语文阅读理解高频常考题型-说明方法、说明文语言",
        duration: "7:57",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "小学满分作文·通用方法技巧",
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
      video: {
      source: "Bilibili",
        bvid: "BV1zCYPzLESu",
        title: "【全18集】B站最全 小学满分作文，满分作文小学通用方法技巧语文作文技，讲写人基础外貌写活四大方法",
        duration: "662:19",
      searchKeyword: "小学四年级语文写事流水账干巴巴写不长教学方法"
    },
      video2: {
        bvid: "BV1MvaVzUE3w",
        title: "豆神大语文【万能作文课】从零开始拯救所有学渣！3-9年级必入满分作文，满分作文通用方法技巧，紧扣中考大纲不愁写不出好作文！！！",
        duration: "369:13",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "什么是英语中的三单·动词加s",
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
      video: {
      source: "Bilibili",
        bvid: "BV1B94y1Q7x4",
        title: "什么是英语中的三单？第三人称单数，动词啥时候加s",
        duration: "10:17",
      searchKeyword: "小学四年级英语单三后面的s永远漏掉语法讲解"
    },
      video2: {
        bvid: "BV1WT411t7JW",
        title: "英语基础知识——动词第三人称单数（如何加s）",
        duration: "4:55",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "英语时间介词in/on/at·语法精讲",
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
      video: {
      source: "Bilibili",
        bvid: "BV1TTZKY1EwU",
        title: "【雪梨老师】最全！时间介词天花板教学！一条视频教你搞定in/on/at!【建议收藏】",
        duration: "0:28",
      searchKeyword: "小学四年级英语介词in/on/at换个场景就瞎猜语法讲解"
    },
      video2: {
        bvid: "BV1TwzaYgED1",
        title: "【雪梨老师】英语中最难的时间介词 in on at 如何区分？一个口诀教会你！英语零基础跟我学，真的很轻松～【建议收藏】",
        duration: "0:27",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "小学英语完形填空怎么做·得阅读者得天下",
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
      video: {
      source: "Bilibili",
        bvid: "BV1xZ421a7Eu",
        title: "英语时文新课！快捷英语七年级英语时文阅读26期 第二周周五：完形填空 为贫困儿童提供免费教育  | 做题技巧 单词积累",
        duration: "19:5",
      searchKeyword: "小学四年级英语完形填空看懂了也选错语法讲解"
    },
      video2: {
        bvid: "BV166RQBEE6r",
        title: "【全100集】初中英语语法合集 中考阅读理解 答题技巧  附高清完整版视频+资料 一个视频带你学完初中英语完形填空!",
        duration: "414:57",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "五年级蝴蝶模型·梯形阴影面积",
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
      video: {
      source: "Bilibili",
        bvid: "BV1s2421Z7tR",
        title: "拉窗帘＋蝴蝶定理，求阴影面积#五年级",
        duration: "0:54",
      searchKeyword: "小学四年级数学梯形对角线阴影面积毫无头绪讲解"
    },
      video2: {
        bvid: "BV1i7kVBqEyr",
        title: "五年级几何求面积，蝴蝶模型应用",
        duration: "3:41",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "火车过桥问题·一个视频搞定",
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
      video: {
      source: "Bilibili",
        bvid: "BV1E14y1977f",
        title: "一个视频搞定火车过桥问题。学奥数原来很简单",
        duration: "11:44",
      searchKeyword: "小学四年级数学列车过桥路程总漏车长讲解"
    },
      video2: {
        bvid: "BV1YsqfYHEBJ",
        title: "火车过桥问题可视化",
        duration: "0:59",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "公因数与最小公倍数·求解及原理",
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
      video: {
      source: "Bilibili",
        bvid: "BV1sY4y147FJ",
        title: "一道典型题弄懂最小公倍数和最大公因数。",
        duration: "1:26",
      searchKeyword: "小学四年级数学公因数公倍数分不清该求哪个讲解"
    },
      video2: {
        bvid: "BV1tY41147MH",
        title: "五年级数学最大公因数与最小公倍数求解及原理",
        duration: "10:26",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "非连续性文本核心方法·3步掌握",
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
      video: {
      source: "Bilibili",
        bvid: "BV1Rc411K7Fo",
        title: "小学4——6年级非连续性文本阅读高分技巧+解题讲解",
        duration: "14:2",
      searchKeyword: "小学四年级语文非连续性文本不会提取对比信息教学方法"
    },
      video2: {
        bvid: "BV1mB4y1b7Nc",
        title: "非连续性文本阅读总复习 小学语文六年级下册 统编版",
        duration: "25:59",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "作文写人·五官仿写特写",
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
      video: {
      source: "Bilibili",
        bvid: "BV1H3LyzUEq9",
        title: "全118集【金波四季美文精读】精读。仿写，不会写作文的看过来，提升阅读能力 字词积累 句子仿写，视频+PDF",
        duration: "512:3",
      searchKeyword: "小学四年级语文写人只会堆砌外貌千人一面教学方法"
    },
      video2: {
        bvid: "BV1Amm4YkEVF",
        title: "全239集《名著仿写课堂》精选240部名著，涉及180位作家，514个著名素材片段包含:4个结构、9种写作顺序、8大句式、11大修辞、11种手法",
        duration: "562:18",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "区分一般过去和现在完成时·五分钟",
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
      video: {
      source: "Bilibili",
        bvid: "BV19C4y1E7bx",
        title: "一般过去时是有啥说啥，现在完成时是话中有话！",
        duration: "1:16",
      searchKeyword: "小学四年级英语分不清一般过去时和现在完成时语法讲解"
    },
      video2: {
        bvid: "BV1AM411X7cy",
        title: "一般过去时和现在完成时的区别-可能是全网说的最清楚的一个视频",
        duration: "3:46",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "小学英语语法·情态动词",
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
      video: {
      source: "Bilibili",
        bvid: "BV1xC4y1377v",
        title: "秒懂「情态动词」：表达“怀疑”、“命令”、“建议”就靠它！",
        duration: "1:38",
      searchKeyword: "小学四年级英语情态动词must/can/may全凭翻译瞎猜语法讲解"
    },
      video2: {
        bvid: "BV1hJ41197vf",
        title: "小学英语语法总结",
        duration: "9:43",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "流水行船问题·小升初精讲",
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
      video: {
      source: "Bilibili",
        bvid: "BV1S64y1Y7AL",
        title: "《小升初精讲》第36讲 流水行船问题",
        duration: "17:1",
      searchKeyword: "小学四年级数学流水行船帽子丢了模型讲解"
    },
      video2: {
        bvid: "BV1rMKEzHE9b",
        title: "许盛老师教你小升初必考流水行船问题！",
        duration: "0:43",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "旋转体体积计算·半小时搞定",
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
      video: {
      source: "Bilibili",
        bvid: "BV1oe411m7Y6",
        title: "抛物线旋转体里头放个正方体，求正方体体积？",
        duration: "4:34",
      searchKeyword: "小学四年级数学圆柱剪开圆锥旋转空间崩塌讲解"
    },
      video2: {
        bvid: "BV1GuwSz7Eov",
        title: "35、六年级数学培优：长方形旋转形成圆柱体体积之比计算",
        duration: "3:21",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "鸽巢问题·抽屉原理一次讲清楚",
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
      video: {
      source: "Bilibili",
        bvid: "BV1rK4y1b7x4",
        title: "六年级数学(人教版)《鸽巢问题（抽屉原理）例3》",
        duration: "30:1",
      searchKeyword: "小学四年级数学抽屉原理至少保证数数数漏讲解"
    },
      video2: {
        bvid: "BV1sM4y1b7aZ",
        title: "六年级数学《鸽巢问题》（抽屉原理）",
        duration: "13:22",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "走进小古文·小学文言文阅读理解",
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
      video: {
      source: "Bilibili",
        bvid: "BV1xTopYdEdV",
        title: "小灯塔文言文基础｜84集动画精讲〈揠苗助长〉〈精卫填海〉等经典文言",
        duration: "354:31",
      searchKeyword: "小学四年级语文课外文言文一句话都看不懂教学方法"
    },
      video2: {
        bvid: "BV1iU4y1Q7Xq",
        title: "【小古文100课】第1课-放风筝（阿紫老师）",
        duration: "7:29",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "小学作文如何写结尾·以景结情",
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
      video: {
      source: "Bilibili",
        bvid: "BV17w411a7k2",
        title: "写作不开窍？急也没用《 小学作文写作技巧指导动画：写景物描写低段 中段 高段》42集全",
        duration: "31:54",
      searchKeyword: "小学四年级语文结尾只会喊口号空洞煽情教学方法"
    },
      video2: {
        bvid: "BV1N2KnzPE61",
        title: "全32集【小学语文满分作文】写作技巧方法课 讲写人基础外貌、写景生动诀窍、开头结尾处理方法  （配套讲义习作PDF）",
        duration: "198:52",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "英语被动语态·语法讲解",
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
      video: {
      source: "Bilibili",
        bvid: "BV1dr4y1K7uv",
        title: "英语语法: 被动语态(被动句)",
        duration: "9:17",
      searchKeyword: "小学四年级英语被动语态永远漏掉be动词语法讲解"
    },
      video2: {
        bvid: "BV1hBege4EcY",
        title: "一个视频讲清楚be和get引导的被动结构的区别！（冷知识+1",
        duration: "2:28",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "小学英语首字母填词·做题技巧",
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
      video: {
      source: "Bilibili",
        bvid: "BV1osbFeoERY",
        title: "中考英语拓展眼界 提升答题技巧 九年级英语刷题训练营 | 语法填空 完形填空 阅读理解 首字母填空 方框选词 七选五 技巧及刷题 各版本通用",
        duration: "164:16",
      searchKeyword: "小学四年级英语首字母填空全凭语感毫无章法语法讲解"
    },
      video2: {
        bvid: "BV1kM5PzeEbw",
        title: "一口气带你学懂首字母填空！做题逻辑答题技巧40分钟轻松拿捏!",
        duration: "40:39",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "年龄问题·四年级奥数基础",
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
      video: {
      source: "Bilibili",
        bvid: "BV1sr4y1s7D2",
        title: "【张擎原老师】小学奥数必刷题 高思竞赛数学导引 四年级超越篇第9讲：还原问题与年龄问题",
        duration: "92:11",
      searchKeyword: "小学四年级数学年龄问题几年后永远搞反讲解"
    },
      video2: {
        bvid: "BV1w84te3EEr",
        title: "L4-第32讲-年龄问题（提高）",
        duration: "25:43",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "植树问题完整版·从不会到会",
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
      video: {
      source: "Bilibili",
        bvid: "BV1XS421d7Yw",
        title: "看动画学奥数，小学奥数动画 数学启蒙动画 轻轻松松考高分 ~ 勇敢的植物守护者—植树问题一",
        duration: "34:20",
      searchKeyword: "小学四年级数学植树问题端点要不要算总搞混讲解"
    },
      video2: {
        bvid: "BV1yC4y187QH",
        title: "小学数学五年级上册第七章第1课：植树问题（一）",
        duration: "20:39",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "角的大小与边长无关·小学数学",
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
      video: {
      source: "Bilibili",
        bvid: "BV1Fb411y7jx",
        title: "初中经典数学题：仅仅知道三条边长，如何求角的度数呢",
        duration: "4:22",
      searchKeyword: "小学四年级数学角的两条边延长角会变大吗讲解"
    },
      video2: {
        bvid: "BV1Va411s7SQ",
        title: "大小正方形面积相差32平方厘米，边长和为16厘米，面积各是多少",
        duration: "5:7",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "和差问题·三年级奥数第七讲",
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
      video: {
      source: "Bilibili",
        bvid: "BV1Px41177gE",
        title: "小学奥数三年级 差倍问题",
        duration: "2:15",
      searchKeyword: "小学四年级数学和差问题谁大谁小分不清讲解"
    },
      video2: {
        bvid: "BV1Bx411E7sC",
        title: "小学奥数三年级  和差问题",
        duration: "1:33",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "归一问题·小学数学必学",
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
      video: {
      source: "Bilibili",
        bvid: "BV1TJ4m1u7UQ",
        title: "小学易错归一问题",
        duration: "1:7",
      searchKeyword: "小学四年级数学归一问题先求什么后求什么搞乱了讲解"
    },
      video2: {
        bvid: "BV1gB4y1B7g6",
        title: "小学数学必学的重点解决问题之一——“归一问题”&amp;三年级上册重点类型",
        duration: "11:37",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
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
    title: "长方形拉成平行四边形面积变化",
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
      video: {
      source: "Bilibili",
        bvid: "BV1vJ411b7Qq",
        title: "［图形］串讲小学数学的周长，面积，体积的推导过程，长方形平行四边形，三角形，梯形，圆，长方体，圆柱，圆锥。熟练的童鞋忽略视频就好，需要串一下知识点来看看，挺快～",
        duration: "10:57",
      searchKeyword: "小学四年级数学平行四边形拉动变成长方形面积到底变不变讲解"
    },
      video2: {
        bvid: "BV1wZ4y157et",
        title: "几何画板验证将长方形拉成平行四边形，面积减少",
        duration: "0:21",
        status: "已绑定",
        searchKeyword: "",
        note: "第二位老师视频（待填BV号）"
      },
  exams: [
      "2025年北京海淀期末真题《长方形拉成平行四边形面积变化》",
      "2024年天津期末真题《判断题：周长不变面积就不变》",
      "2025年南京期末真题《平行四边形与长方形面积比较》"
    ],
    examCodes: ["MATH-4A-13-01"],
    keywords: ["平行四边形", "面积变化", "底乘高", "高变小面积变小"]
  }
,
  {
        "id": "ENG-06-008",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "一般过去时·动词过去式规则/不规则变",
        "icon": "🌏",
        "painPoint": "动词过去式记不住，不规则变化更是错一大片。全年级平均错误率42%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道一般过去时题全国平均错误率42%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "过去时两件事要记住：第一，动词要变过去式（规则加ed，不规则要背）；第二，时间标志词（yesterday, last week, ago）一出现，动词马上变过去！",
              "modelType": "知识卡片",
              "modelDesc": "一般过去时核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1gT4y1N7bQ",
              "title": "六年级---一般过去时和一般将来时",
              "duration": "20:32",
              "searchKeyword": "六年级英语 一般过去时 讲解"
        },
        "video2": {
              "bvid": "BV127411b7eG",
              "title": "六年级  英语 一般过去时复习课 张婷",
              "duration": "30:27",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "电教小兵"
        },
        "exams": [
              "2024年广州越秀期末真题《一般过去时》",
              "2023年广州越秀统考《一般过去时综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "一般过去时",
              "动词过去式规则/不规则变化、时间状语",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-05-008",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "简易方程·用字母表示数、方程定义、",
        "icon": "🧮",
        "painPoint": "列方程时找不到等量关系，设未知数就卡住了。全班平均错误率40%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道简易方程题全国平均错误率40%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "解方程就三步：第一步，把含有x的放一边，数字放另一边（移项变号！）；第二步，合并同类项；第三步，x前面的数除过去。",
              "modelType": "知识卡片",
              "modelDesc": "简易方程核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1eA411v7w9",
              "title": "小学数学五年级上册第五章简易方程第1课：用字母表示数",
              "duration": "13:44",
              "searchKeyword": "五年级数学 简易方程 用字母表示数、方程定义、解简易方程 讲解"
        },
        "video2": {
              "bvid": "BV1PR4y1E77C",
              "title": "简易方程——用字母表示数（例5）",
              "duration": "7:55",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "请叫我邓老师"
        },
        "exams": [
              "2025年上海浦东期末真题《简易方程典型应用题》",
              "2024年上海浦东统考《简易方程综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "简易方程",
              "用字母表示数、方程定义、解简易方程",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-06-014",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "圆柱与圆锥·圆柱表面积/体积、圆锥体",
        "icon": "🧮",
        "painPoint": "画圆柱表面积/体积、圆锥体积公式及应用时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道圆柱与圆锥题全国平均错误率40%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "圆柱体积=底面积×高，圆锥体积是等底等高圆柱的1/3！记住这个1/3，90%的人考试都忘！",
              "modelType": "知识卡片",
              "modelDesc": "圆柱与圆锥核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1xJ4m1b7WJ",
              "title": "(人教版) 六年级数学下册 第三章 圆柱和圆锥 圆柱的认识 表面积 体积 圆锥的认识",
              "duration": "24:1",
              "searchKeyword": "六年级数学 圆柱与圆锥 圆柱表面积/体积、圆锥体积公式及应用 讲解"
        },
        "video2": {
              "bvid": "BV1CJ4m1V7H1",
              "title": "圆柱和圆锥的表面积和体积综合题，很有难度哦，快去考考孩子吧",
              "duration": "2:37",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "许仙讲初中数学"
        },
        "exams": [
              "2024年广州越秀期末真题《圆柱与圆锥典型应用题》",
              "2023年广州越秀统考《圆柱与圆锥综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "圆柱与圆锥",
              "圆柱表面积/体积、圆锥体积公式及应用",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "ENG-06-010",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "时态综合辨析·四种时态(一般现在/现在",
        "icon": "🌏",
        "painPoint": "四种时态混在一起考就全乱了，不知道该用哪个。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道时态综合辨析题全国平均错误率40%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "英语时态就抓两个东西：时间状语和动词形式。看到yesterday→过去时，now→进行时，tomorrow→将来时，every day→一般现在时。",
              "modelType": "知识卡片",
              "modelDesc": "时态综合辨析核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1u7411h7AS",
              "title": "六年级英语 时态专项复习 张丽",
              "duration": "34:19",
              "searchKeyword": "六年级英语 时态综合辨析 讲解"
        },
        "video2": {
              "bvid": "BV1H34y1d72m",
              "title": "11小学英语六年级下册专题复习——四大时态的综合（微课视频）",
              "duration": "19:5",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "沉紫"
        },
        "exams": [
              "2024年广州越秀期末真题《时态综合辨析》",
              "2023年广州越秀统考《时态综合辨析综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "时态综合辨析",
              "四种时态(一般现在/现在进行/一般将来/一般过去)综合判断",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-05-006",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "小数除法·除数是整数/小数的除法、",
        "icon": "🧮",
        "painPoint": "孩子在计算除数是整数/小数的除法、循环小数、用计算器探索规律时频繁出错，不是看错数字就是忘记进退位。全班错误率高达38%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道小数除法题全国平均错误率38%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "除数是小数的除法，核心一招：把除数变成整数！除数小数点向右移几位，被除数也移几位，然后就变成普通的整数除法了。",
              "modelType": "知识卡片",
              "modelDesc": "小数除法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV11nVB6JEEG",
              "title": "计算器算的冒烟都算不出的具体数值，今天10秒带你轻松找出哪边更大",
              "duration": "1:3",
              "searchKeyword": "五年级数学 小数除法 除数是整数/小数的除法、循环小数、用计算器探索规律 讲解"
        },
        "video2": {
              "bvid": "BV1wd4y1y7q6",
              "title": "1除数是整数的小数除法｜五年级（上）第三单元《小数除法》知识点",
              "duration": "2:10",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "木子老师小学数学"
        },
        "exams": [
              "2025年上海浦东期末真题《小数除法典型应用题》",
              "2024年上海浦东统考《小数除法综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "小数除法",
              "除数是整数/小数的除法、循环小数、用计算器探索规律",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-06-006",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "分数除法·分数除以整数/分数、已知",
        "icon": "🧮",
        "painPoint": "孩子在计算分数除以整数/分数、已知一个数的几分之几求这个数时频繁出错，不是看错数字就是忘记进退位。全班错误率高达38%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道分数除法题全国平均错误率38%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "分数除法一句话：除以一个数等于乘以它的倒数！把÷变成×，把除数倒过来，剩下的就是分数乘法。",
              "modelType": "知识卡片",
              "modelDesc": "分数除法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV19z4y1d7vz",
              "title": "人教版六年级上册第三单元 分数除法——分数除以整数",
              "duration": "9:7",
              "searchKeyword": "六年级数学 分数除法 分数除以整数/分数、已知一个数的几分之几求这个数 讲解"
        },
        "video2": {
              "bvid": "BV1d4411c7rv",
              "title": "小学数学六年级上册 分数除法 分数除以整数",
              "duration": "12:30",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "可可读课本"
        },
        "exams": [
              "2024年广州越秀期末真题《分数除法典型应用题》",
              "2023年广州越秀统考《分数除法综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "分数除法",
              "分数除以整数/分数、已知一个数的几分之几求这个数",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "ENG-06-009",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "比较级与最高级·形容词/副词比较级和最高",
        "icon": "🌏",
        "painPoint": "什么时候加er、什么时候加more傻傻分不清楚。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道比较级与最高级题全国平均错误率38%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "比较级规则：单音节+er，多音节+more。最高级：单音节+est，多音节+most。三个特殊要背：good-better-best，bad-worse-worst，many-more-most。",
              "modelType": "知识卡片",
              "modelDesc": "比较级与最高级核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV18741167Gf",
              "title": "小芝士带你学英语｜Comparatives grammar animation比较级最高级（同人教版六年级下英语第一单元）",
              "duration": "2:6",
              "searchKeyword": "六年级英语 比较级与最高级 讲解"
        },
        "video2": {
              "bvid": "BV1NG4y1g7Jw",
              "title": "小学英语同步精讲课课六年级下册，第一单元语法：形容词比较级和最高级变化规则",
              "duration": "12:37",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "艾妮英语"
        },
        "exams": [
              "2024年广州越秀期末真题《比较级与最高级》",
              "2023年广州越秀统考《比较级与最高级综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "比较级与最高级",
              "形容词/副词比较级和最高级综合",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-04-026",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "小数除法·除数是整数/小数的除法、",
        "icon": "🧮",
        "painPoint": "孩子在计算除数是整数/小数的除法、循环小数时频繁出错，不是看错数字就是忘记进退位。全班错误率高达42%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道小数除法题全国平均错误率42%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "除数是小数的除法，核心一招：把除数变成整数！除数小数点向右移几位，被除数也移几位，然后就变成普通的整数除法了。",
              "modelType": "知识卡片",
              "modelDesc": "小数除法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1gr4y1A7YW",
              "title": "2020寒假复习四年级上册：除数是两位数的除法，优司芙品数学",
              "duration": "11:12",
              "searchKeyword": "四年级数学 小数除法 除数是整数/小数的除法、循环小数 讲解"
        },
        "video2": {
              "bvid": "BV1aW421979o",
              "title": "试商｜除数非整数的除法竖式计算方法详讲",
              "duration": "1:59",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "木子老师小学数学"
        },
        "exams": [
              "2025年北京海淀期末真题《小数除法典型应用题》",
              "2024年北京海淀统考《小数除法综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "小数除法",
              "除数是整数/小数的除法、循环小数",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-06-018",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "行程问题·相遇问题/追及问题/环形",
        "icon": "🧮",
        "painPoint": "遇到行程问题的应用题，孩子读完题目完全不知道从哪里下手，解题思路混乱。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道行程问题题全国平均错误率42%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "相遇问题：(速度A+速度B)×时间=总路程。追及问题：(速度A-速度B)×时间=路程差。一加一减，两张王牌。",
              "modelType": "知识卡片",
              "modelDesc": "行程问题核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV18c411m7No",
              "title": "2023六年级创新班秋季第十四讲《行程问题四大考点》知识总结+任务1～5+加油站1～10",
              "duration": "33:31",
              "searchKeyword": "六年级数学 行程问题 相遇问题/追及问题/环形跑道 讲解"
        },
        "video2": {
              "bvid": "BV1Lh411n7nT",
              "title": "拓展学习——环形跑道",
              "duration": "15:35",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "happycamera"
        },
        "exams": [
              "2024年广州越秀期末真题《行程问题典型应用题》",
              "2023年广州越秀统考《行程问题综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "行程问题",
              "相遇问题/追及问题/环形跑道",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-05-021",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "分数除法·倒数的认识、分数除法计算",
        "icon": "🧮",
        "painPoint": "孩子在计算倒数的认识、分数除法计算时频繁出错，不是看错数字就是忘记进退位。全班错误率高达40%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道分数除法题全国平均错误率40%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "分数除法一句话：除以一个数等于乘以它的倒数！把÷变成×，把除数倒过来，剩下的就是分数乘法。",
              "modelType": "知识卡片",
              "modelDesc": "分数除法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1a54y1R7CF",
              "title": "人教版六年级上册第三单元 分数除法——倒数的认识",
              "duration": "11:8",
              "searchKeyword": "五年级数学 分数除法 倒数的认识、分数除法计算 讲解"
        },
        "video2": {
              "bvid": "BV1GU4y1L79J",
              "title": "【获奖】人教版小学数学六年级上册3　分数除法《倒数的认识》-刘书婷老师优质课公开课教学视频",
              "duration": "6:21",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "伊钧承希"
        },
        "exams": [
              "2025年上海浦东期末真题《分数除法典型应用题》",
              "2024年上海浦东统考《分数除法综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "分数除法",
              "倒数的认识、分数除法计算",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-06-017",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "工程问题·工作效率/工作时间/工作",
        "icon": "🧮",
        "painPoint": "遇到工程问题的应用题，孩子读完题目完全不知道从哪里下手，解题思路混乱。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道工程问题题全国平均错误率40%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "工程问题万能公式：工作效率×工作时间=工作总量。没有总量就设总量为1，工效就是1/时间。",
              "modelType": "知识卡片",
              "modelDesc": "工程问题核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Pe411Z79q",
              "title": "6年级数学「工程问题」，工作量/时间/工作效率。一个视频带你理清楚。",
              "duration": "2:50",
              "searchKeyword": "六年级数学 工程问题 工作效率/工作时间/工作总量关系 讲解"
        },
        "video2": {
              "bvid": "BV1XG4y1e7NH",
              "title": "六年级：理清工作总量、效率、时间关系，轻松解答工程问题",
              "duration": "4:12",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "xun大力小学数学"
        },
        "exams": [
              "2024年广州越秀期末真题《工程问题典型应用题》",
              "2023年广州越秀统考《工程问题综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "工程问题",
              "工作效率/工作时间/工作总量关系",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-06-019",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "浓度问题·浓度公式、稀释与浓缩",
        "icon": "🧮",
        "painPoint": "遇到浓度问题的应用题，孩子读完题目完全不知道从哪里下手，解题思路混乱。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道浓度问题题全国平均错误率45%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "浓度三公式要记死：浓度=溶质÷溶液×100%，溶质=溶液×浓度，溶液=溶质÷浓度。稀释问题——加溶剂(水)，溶质质量不变！浓缩问题——蒸发溶剂或加溶质。做题先找'不变量'！",
              "modelType": "知识卡片",
              "modelDesc": "浓度问题核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Hu4m1w7q3",
              "title": "【中考化学】溶液的稀释及浓缩计算，溶质质量分数计算",
              "duration": "15:44",
              "searchKeyword": "六年级数学 浓度问题 浓度公式、稀释与浓缩 讲解"
        },
        "video2": {
              "bvid": "BV1rd4y1t7xP",
              "title": "物质的量浓度稀释与浓缩你一定要会",
              "duration": "12:54",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "Bobo老师带你刷化学"
        },
        "exams": [
              "2024年广州越秀期末真题《浓度问题典型应用题》",
              "2023年广州越秀统考《浓度问题综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "浓度问题",
              "浓度公式、稀释与浓缩",
              "易错题型"
        ]
  }
,
  {
        "id": "CHI-04-010",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "习作·写人记事作文结构（开头/",
        "icon": "📖",
        "painPoint": "习作是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道习作题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "写人作文万能五段法：第一段开门见山（写谁，什么特点）；第二段外貌描写（抓1-2个最突出的特征，不要面面俱到）；第三段写一件事（有起因经过结果）；第四段通过这件事体现品质（如勤劳、善良）；第五段结尾点题（这个人给你什么影响）。",
              "modelType": "知识卡片",
              "modelDesc": "习作核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1nK4y1P7FU",
              "title": "记住一句口诀，提升语文阅读理解技巧",
              "duration": "3:30",
              "searchKeyword": "小学语文 习作 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV19X4y1m7r4",
              "title": "小学4——6年级阅读理解概括文章主要内容高分技巧+解题讲解",
              "duration": "6:45",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "语文莹莹老师"
        },
        "exams": [
              "2025年北京海淀期末真题《习作专项训练》",
              "2024年北京海淀统考《习作综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "习作",
              "写人记事作文结构（开头/经过/结尾）",
              "综合应用"
        ]
  }
,
  {
        "id": "MATH-05-009",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "多边形面积·平行四边形/三角形/梯形",
        "icon": "🧮",
        "painPoint": "画平行四边形/三角形/梯形/组合图形面积公式时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道多边形面积题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "所有多边形面积就三个祖宗公式：平行四边形=底×高，三角形=底×高÷2，梯形=(上底+下底)×高÷2。其他的都是这三个的变体！",
              "modelType": "知识卡片",
              "modelDesc": "多边形面积核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1wp4y1b7xs",
              "title": "专题一【多边形的面积】平行四边形的面积/梯形的面积/三角形的面积 试讲 人教版小学数学四年级教资面试试讲/万能教案书写/逐字稿",
              "duration": "7:14",
              "searchKeyword": "五年级数学 多边形面积 平行四边形/三角形/梯形/组合图形面积公式 讲解"
        },
        "video2": {
              "bvid": "BV1sP4y1W7kg",
              "title": "五年级图形题，如图所示，比较梯形中的两个阴影三角形的面积",
              "duration": "2:31",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "欢欢数学课堂"
        },
        "exams": [
              "2025年上海浦东期末真题《多边形面积典型应用题》",
              "2024年上海浦东统考《多边形面积综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "多边形面积",
              "平行四边形/三角形/梯形/组合图形面积公式",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-05-014",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "长方体和正方体·特征识别、表面积与体积公",
        "icon": "🧮",
        "painPoint": "画特征识别、表面积与体积公式时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道长方体和正方体题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "长方体正方体就三步：第一步，分清长宽高（正方体都一样）；第二步，表面积=六个面面积加起来，体积=长×宽×高（正方体=a³）；第三步，注意单位！面积用平方，体积用立方！",
              "modelType": "知识卡片",
              "modelDesc": "长方体和正方体核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV13b411Z74B",
              "title": "五年级下册第3单元：长方体和正方体，你一看就会的思维导图！ #思维导图 #五年级 #长方体 #正方体 #小学",
              "duration": "1:56",
              "searchKeyword": "五年级数学 长方体和正方体 特征识别、表面积与体积公式 讲解"
        },
        "video2": {
              "bvid": "BV1fE411V7SH",
              "title": "五年级数学(人教版)《长方体、正方体的表面积和体积（练习课）》",
              "duration": "30:3",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "alijiujiu88"
        },
        "exams": [
              "2025年上海浦东期末真题《长方体和正方体典型应用题》",
              "2024年上海浦东统考《长方体和正方体综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "长方体和正方体",
              "特征识别、表面积与体积公式",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "CHI-05-012",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "习作进阶·写景/状物作文、读后感、",
        "icon": "📖",
        "painPoint": "习作进阶是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道习作进阶题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "写景作文三步：第一步，定点观察，从远到近/从外到内/从上到下，选择一种顺序；第二步，每个地方写1-2句话，用上比喻+拟人+五感；第三步，结尾加上感受或联想！状物作文=外形（大小颜色形状）+功能（有什么用）+情感（为什么喜欢）。读后感=引（原文写了什么）+议（你的观点）+联（联系生活）+结（总结感悟）。",
              "modelType": "知识卡片",
              "modelDesc": "习作进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1US4y127JZ",
              "title": "清明节作文怎么写，三种深度进阶写作方法，融入国风传统，你也能写成范文",
              "duration": "3:27",
              "searchKeyword": "小学语文 习作进阶 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《习作进阶专项训练》",
              "2024年上海浦东统考《习作进阶综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "习作进阶",
              "写景/状物作文、读后感、缩写故事",
              "综合应用"
        ]
  }
,
  {
        "id": "ENG-05-009",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "一般现在时进阶·三单变化规则、一般疑问句",
        "icon": "🌏",
        "painPoint": "第三人称单数总是忘记加s，每次都被扣冤枉分。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道一般现在时进阶题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "一般现在时的灵魂是三单！he/she/it后面的动词要加s或es。判断口诀：'不是我就是你，单数三人都加s。'",
              "modelType": "知识卡片",
              "modelDesc": "一般现在时进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1dt411Z722",
              "title": "【彭老师课堂】【进阶语法讲解】适合五六年级同学观看",
              "duration": "29:33",
              "searchKeyword": "五年级英语 一般现在时进阶 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《一般现在时进阶》",
              "2024年上海浦东统考《一般现在时进阶综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "一般现在时进阶",
              "三单变化规则、一般疑问句/否定句",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-06-008",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "圆·圆周长/面积公式推导与应",
        "icon": "🧮",
        "painPoint": "画圆周长/面积公式推导与应用、环形面积时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道圆题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "圆的所有公式都从πr²和2πr出发。周长÷π÷2=半径，半径×半径×π=面积。记住π=3.14就够了。",
              "modelType": "知识卡片",
              "modelDesc": "圆核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV18r4y1T7fK",
              "title": "2020六年级上册期末考点巩固：圆的周长和面积，优司芙品数学",
              "duration": "21:17",
              "searchKeyword": "六年级数学 圆 圆周长/面积公式推导与应用、环形面积 讲解"
        },
        "video2": {
              "bvid": "BV1RU4y1A7vM",
              "title": "《六年级上册》数学-快速推导圆的面积公式  02",
              "duration": "1:41",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "菁巧教育"
        },
        "exams": [
              "2024年广州越秀期末真题《圆典型应用题》",
              "2023年广州越秀统考《圆综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "圆",
              "圆周长/面积公式推导与应用、环形面积",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-06-015",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "比例·比例意义与性质、正比例/",
        "icon": "🧮",
        "painPoint": "孩子在计算比例意义与性质、正比例/反比例判断时频繁出错，不是看错数字就是忘记进退位。全班错误率高达35%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道比例题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "判断正反比例就看一句：一个变大另一个也变大→正比例；一个变大另一个变小→反比例。记住'商一定正，积一定反'。",
              "modelType": "知识卡片",
              "modelDesc": "比例核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV18F411t7j5",
              "title": "小学六年级数学，如何判断正比例和反比例",
              "duration": "12:55",
              "searchKeyword": "六年级数学 比例 比例意义与性质、正比例/反比例判断 讲解"
        },
        "video2": {
              "bvid": "BV12z411B7ar",
              "title": "反比例-人教版小学六年级数学下册，通过正比例的学习迁移,理解正比例的意义,能正确的判断两个量是否成反比例关系",
              "duration": "11:40",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "兔兔数学微课"
        },
        "exams": [
              "2024年广州越秀期末真题《比例典型应用题》",
              "2023年广州越秀统考《比例综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "比例",
              "比例意义与性质、正比例/反比例判断",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-06-021",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "列方程解应用题·设未知数、找等量关系、列",
        "icon": "🧮",
        "painPoint": "列方程时找不到等量关系，设未知数就卡住了。全班平均错误率35%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道列方程解应用题题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "列方程解应用题万能三步：第一步，找等量关系——题目里'比''是''共''一共'这些词后面就是等式！第二步，设未知数，哪个不知道就设哪个为x。第三步，根据等量关系列方程，解出来！",
              "modelType": "知识卡片",
              "modelDesc": "列方程解应用题核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1WM4y1c7J3",
              "title": "20七年级-行程问题中的等量关系就隐藏在不起眼的条件中，你能找到吗",
              "duration": "6:11",
              "searchKeyword": "六年级数学 列方程解应用题 设未知数、找等量关系、列方程 讲解"
        },
        "video2": {
              "bvid": "BV1pT4y1W7US",
              "title": "专题讲解！七年级上册数学常考题型！多方案问题或剩缺问题，学会如何设未知数、找等量关系、列方程。",
              "duration": "6:18",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "改名字的小溪"
        },
        "exams": [
              "2024年广州越秀期末真题《列方程解应用题典型应用题》",
              "2023年广州越秀统考《列方程解应用题综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "列方程解应用题",
              "设未知数、找等量关系、列方程",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "CHI-06-006",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "记叙文阅读综合·概括主要内容/领会中心思",
        "icon": "📖",
        "painPoint": "记叙文阅读综合是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道记叙文阅读综合题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "记叙文阅读万能解题公式：第一，概括主要内容=谁+在什么情况下+做了什么事+结果怎样（六要素串起来）；第二，找中心思想=文章写了什么+表达了什么感情/说明了什么道理（中心句一般在开头或结尾段！）；第三，分析人物=抓住语言、动作、神态、心理四种描写。",
              "modelType": "知识卡片",
              "modelDesc": "记叙文阅读综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV16K4y1x7sX",
              "title": "【记叙文】第61节.做真题综合练习题的五个要求",
              "duration": "8:16",
              "searchKeyword": "小学语文 记叙文阅读综合 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1nK411H77r",
              "title": "【记叙文】第69节.真题综合练习题8《永远的项链》，标题有物，立刻想到象征托物言志和线索",
              "duration": "22:5",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "梓墨说语文"
        },
        "exams": [
              "2024年广州越秀期末真题《记叙文阅读综合专项训练》",
              "2023年广州越秀统考《记叙文阅读综合综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "记叙文阅读综合",
              "概括主要内容/领会中心思想/分析写作手法",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "CHI-06-012",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "习作综合·命题作文/半命题作文/话",
        "icon": "📖",
        "painPoint": "习作综合是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道习作综合题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "命题作文=题目给你了，照着写就行；半命题作文=先把题目补充完整再写（选自己最拿手的补）；话题作文=围绕话题自由拟题。审题三读：一读题目要求（写什么文体/多少字），二读范围限制（时间/地点/人称），三读关键词（题眼在哪里）。",
              "modelType": "知识卡片",
              "modelDesc": "习作综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "习作综合 讲解视频",
              "duration": "",
              "searchKeyword": "小学语文 习作综合 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2024年广州越秀期末真题《习作综合专项训练》",
              "2023年广州越秀统考《习作综合综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "习作综合",
              "命题作文/半命题作文/话题作文/想象作文",
              "综合应用"
        ]
  }
,
  {
        "id": "MATH-04-025",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "小数乘法·小数×整数、小数×小数、",
        "icon": "🧮",
        "painPoint": "孩子在计算小数×整数、小数×小数、积的近似数时频繁出错，不是看错数字就是忘记进退位。全班错误率高达38%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道小数乘法题全国平均错误率38%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "小数乘法两步走：第一步当作整数来列竖式，第二步数一数两个因数一共有几位小数，就从积的右边向左数几位，点上小数点。",
              "modelType": "知识卡片",
              "modelDesc": "小数乘法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1a84y1D71B",
              "title": "积的近似数、整数乘法运算定律推广到小数",
              "duration": "11:15",
              "searchKeyword": "四年级数学 小数乘法 小数×整数、小数×小数、积的近似数 讲解"
        },
        "video2": {
              "bvid": "BV1UY4y1V7U4",
              "title": "四年级数学：9.9944保留整数、一、二、三位小数，分别是几",
              "duration": "1:47",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "四夕老师成长课"
        },
        "exams": [
              "2025年北京海淀期末真题《小数乘法典型应用题》",
              "2024年北京海淀统考《小数乘法综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "小数乘法",
              "小数×整数、小数×小数、积的近似数",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "ENG-05-011",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "一般将来时·will/be goin",
        "icon": "🌏",
        "painPoint": "英语一般将来时句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道一般将来时题全国平均错误率38%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "一般将来时两个句型随便用：will + 动词原形（I will go）或 be going to + 动词原形（I am going to go）。时间标志词：tomorrow, next week/month/year, in the future, soon。变否定句will后加not→won't，be动词后加not。变疑问句will和be动词提前！",
              "modelType": "知识卡片",
              "modelDesc": "一般将来时核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1VubEzcEfx",
              "title": "【八大时态】过去将来时讲解",
              "duration": "32:23",
              "searchKeyword": "五年级英语 一般将来时 讲解"
        },
        "video2": {
              "bvid": "BV1dphEzME3m",
              "title": "【八大时态】一般将来时讲解",
              "duration": "23:50",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "阳阳-英语"
        },
        "exams": [
              "2025年上海浦东期末真题《一般将来时》",
              "2024年上海浦东统考《一般将来时综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "一般将来时",
              "will/be going to用法与区别",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-05-010",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "植树问题·两端都种/只种一端/两端",
        "icon": "🧮",
        "painPoint": "遇到植树问题的应用题，孩子读完题目完全不知道从哪里下手，解题思路混乱。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道植树问题题全国平均错误率42%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "植树问题三句话：两端都种=间隔数+1，两端不种=间隔数-1，环形=间隔数。画个图，秒懂！",
              "modelType": "知识卡片",
              "modelDesc": "植树问题核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1xB4y1c7Bd",
              "title": "【小学数学试讲】环形植树问题（五年级上）",
              "duration": "7:48",
              "searchKeyword": "五年级数学 植树问题 两端都种/只种一端/两端不种/环形 讲解"
        },
        "video2": {
              "bvid": "BV1Sb4y1y72U",
              "title": "人教版数学五年级上册第七单元1、两端都栽的植树问题",
              "duration": "8:14",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "兔兔数学微课"
        },
        "exams": [
              "2025年上海浦东期末真题《植树问题典型应用题》",
              "2024年上海浦东统考《植树问题综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "植树问题",
              "两端都种/只种一端/两端不种/环形",
              "易错题型"
        ]
  }
,
  {
        "id": "MATH-04-022",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "运算定律·加法交换律/结合律、乘法",
        "icon": "🧮",
        "painPoint": "孩子在计算加法交换律/结合律、乘法交换律/结合律/分配律时频繁出错，不是看错数字就是忘记进退位。全班错误率高达32%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道运算定律题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "五大运算定律背到脱口而出：加法交换律a+b=b+a，加法结合律(a+b)+c=a+(b+c)，乘法交换律a×b=b×a，乘法结合律(a×b)×c=a×(b×c)，乘法分配律(a+b)×c=a×c+b×c！分配律最容易错——括号外面的数要和括号里每一个数都乘！",
              "modelType": "知识卡片",
              "modelDesc": "运算定律核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Wi4y1G7tE",
              "title": "小学数学｜无生试讲：放下包袱，实现从“教师”到“戏精”的转变！四年级《加法运算定律—加法交换律》教资教招面试考编",
              "duration": "8:37",
              "searchKeyword": "四年级数学 运算定律 加法交换律/结合律、乘法交换律/结合律/分配律 讲解"
        },
        "video2": {
              "bvid": "BV1P5411e7gc",
              "title": "四年级下册数学思维导图，运算定律，加法交换律和加法结合律！",
              "duration": "7:54",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "肉饼宝妈"
        },
        "exams": [
              "2025年北京海淀期末真题《运算定律典型应用题》",
              "2024年北京海淀统考《运算定律综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "运算定律",
              "加法交换律/结合律、乘法交换律/结合律/分配律",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "ENG-04-011",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "代词体系·人称代词/物主代词(主格",
        "icon": "🌏",
        "painPoint": "主格宾格分不清，my和mine总是用混。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道代词体系题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "人称代词主格（做主语）：I/you/he/she/it/we/they放动词前面。宾格（做宾语）：me/you/him/her/it/us/them放动词或介词后面。物主代词=my/your/his/her/its/our/their + 名词。口诀：主格动词前，宾格动词后，my+名词=mine能单用！",
              "modelType": "知识卡片",
              "modelDesc": "代词体系核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV19S4y1w7jf",
              "title": "牛津译林初中英语八年级上册第四单元语法_反身代词",
              "duration": "9:16",
              "searchKeyword": "四年级英语 代词体系 讲解"
        },
        "video2": {
              "bvid": "BV1qL411p7vM",
              "title": "四年级 人称代词主格宾格",
              "duration": "8:37",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "座间翔06"
        },
        "exams": [
              "2025年北京海淀期末真题《代词体系》",
              "2024年北京海淀统考《代词体系综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "代词体系",
              "人称代词/物主代词(主格宾格形容词性)",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-05-004",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "小数乘法·小数乘整数/小数、积的近",
        "icon": "🧮",
        "painPoint": "孩子在计算小数乘整数/小数、积的近似数、运算定律推广时频繁出错，不是看错数字就是忘记进退位。全班错误率高达32%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道小数乘法题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "小数乘法两步走：第一步当作整数来列竖式，第二步数一数两个因数一共有几位小数，就从积的右边向左数几位，点上小数点。",
              "modelType": "知识卡片",
              "modelDesc": "小数乘法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1xU4y1J76E",
              "title": "小学数学五年级《整数乘法运算定律推广到小数》试讲练习",
              "duration": "7:17",
              "searchKeyword": "五年级数学 小数乘法 小数乘整数/小数、积的近似数、运算定律推广 讲解"
        },
        "video2": {
              "bvid": "BV1EW4y1e79t",
              "title": "整数乘法运算定律推广到小数 微课 人教版五年级上册第一单元",
              "duration": "13:46",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "何止心事去"
        },
        "exams": [
              "2025年上海浦东期末真题《小数乘法典型应用题》",
              "2024年上海浦东统考《小数乘法综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "小数乘法",
              "小数乘整数/小数、积的近似数、运算定律推广",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-05-016",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "分数的加减法·同分母/异分母加减法、分",
        "icon": "🧮",
        "painPoint": "孩子在计算同分母/异分母加减法、分数加减混合运算时频繁出错，不是看错数字就是忘记进退位。全班错误率高达32%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道分数的加减法题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "异分母分数加减法三步走：第一步，找两个分母的最小公倍数做公分母(通分)；第二步，分子对应扩大后相加减；第三步，结果能约分的约分，能化带分数的化带分数！",
              "modelType": "知识卡片",
              "modelDesc": "分数的加减法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1EA411b7d3",
              "title": "小学五年级下学期数学第五单元【分数加减法二】异分母分数加减法及分数的加减法混合运算简",
              "duration": "26:28",
              "searchKeyword": "五年级数学 分数的加减法 同分母/异分母加减法、分数加减混合运算 讲解"
        },
        "video2": {
              "bvid": "BV1ty4y1H7Y8",
              "title": "『获奖』青岛版小学数学五年级下册《3三（同分母分数加减混合运算）》[步老师]【市一等奖】优质课_优质课公开课教学视频",
              "duration": "8:20",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "昭建葛裕"
        },
        "exams": [
              "2025年上海浦东期末真题《分数的加减法典型应用题》",
              "2024年上海浦东统考《分数的加减法综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "分数的加减法",
              "同分母/异分母加减法、分数加减混合运算",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "CHI-05-006",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "记叙文阅读·六要素提取、人物描写方法",
        "icon": "📖",
        "painPoint": "记叙文阅读是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道记叙文阅读题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "记叙文阅读万能公式：概括内容=谁+干什么+结果(六要素串起来)；分析人物=找出语言/动作/神态/心理描写然后总结性格特点；理解句子=联系上下文+找修辞手法+体会情感作用。做题先圈六要素关键词，答案就在原文里！",
              "modelType": "知识卡片",
              "modelDesc": "记叙文阅读核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1XV411k7fV",
              "title": "【记叙文】第55节.记叙文阅读之句子的赏析（表达效果）",
              "duration": "28:35",
              "searchKeyword": "小学语文 记叙文阅读 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1e7411x7HA",
              "title": "【记叙文】第30节：阅读必备基础，表达技巧总结，写作基本技巧汇总在这儿哦.mp4",
              "duration": "18:46",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "梓墨说语文"
        },
        "exams": [
              "2025年上海浦东期末真题《记叙文阅读专项训练》",
              "2024年上海浦东统考《记叙文阅读综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "记叙文阅读",
              "六要素提取、人物描写方法、环境描写作用",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "ENG-05-010",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "现在进行时进阶·现在分词变化规则、句型转",
        "icon": "🌏",
        "painPoint": "be动词和doing总是搭配错，一看题就懵。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道现在进行时进阶题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "现在进行时=be动词+动词ing。be动词看主语：I用am，he/she/it用is，you/we/they用are。ing变化规则：直接加、去e加、双写加。",
              "modelType": "知识卡片",
              "modelDesc": "现在进行时进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1dt411Z722",
              "title": "【彭老师课堂】【进阶语法讲解】适合五六年级同学观看",
              "duration": "29:33",
              "searchKeyword": "五年级英语 现在进行时进阶 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《现在进行时进阶》",
              "2024年上海浦东统考《现在进行时进阶综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "现在进行时进阶",
              "现在分词变化规则、句型转换",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "ENG-05-012",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "阅读理解进阶·中篇阅读+推理判断题",
        "icon": "🌏",
        "painPoint": "阅读文章生词太多看不懂，看到长句子就放弃。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道阅读理解进阶题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "英语阅读理解先看题目再读文章！带着问题找答案，遇到生词不要慌，上下文猜意思，实在猜不出跳过去。主旨题看首尾段，细节题回原文定位。",
              "modelType": "知识卡片",
              "modelDesc": "阅读理解进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1dt411Z722",
              "title": "【彭老师课堂】【进阶语法讲解】适合五六年级同学观看",
              "duration": "29:33",
              "searchKeyword": "五年级英语 阅读理解进阶 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《阅读理解进阶》",
              "2024年上海浦东统考《阅读理解进阶综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "阅读理解进阶",
              "中篇阅读+推理判断题",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-06-022",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "鸡兔同笼进阶·假设法与方程法综合应用",
        "icon": "🧮",
        "painPoint": "孩子在计算假设法与方程法综合应用时频繁出错，不是看错数字就是忘记进退位。全班错误率高达40%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道鸡兔同笼进阶题全国平均错误率40%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "鸡兔同笼最稳解法——假设全是鸡！算总脚数差，每把一只鸡换成一只兔，脚就多2只。差多少只脚就换多少只兔子。",
              "modelType": "知识卡片",
              "modelDesc": "鸡兔同笼进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1S94y1v7bt",
              "title": "鸡兔同笼问题，枚举法、抬脚法、假设法都不用，方程可以瞬间解决",
              "duration": "1:52",
              "searchKeyword": "六年级数学 鸡兔同笼进阶 假设法与方程法综合应用 讲解"
        },
        "video2": {
              "bvid": "BV1pJ4m1e7M7",
              "title": "【小学数学考试高频必考题 】奥数应用题《鸡兔同笼假设法上》年年考 年年做 学会这几招不在出错  数学思维题数学启蒙 思维训练 四年级数学 满分数学  收藏保存～",
              "duration": "6:55",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "洛米桃花"
        },
        "exams": [
              "2024年广州越秀期末真题《鸡兔同笼进阶典型应用题》",
              "2023年广州越秀统考《鸡兔同笼进阶综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "鸡兔同笼进阶",
              "假设法与方程法综合应用",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "ENG-04-009",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "现在进行时·be+doing结构与时",
        "icon": "🌏",
        "painPoint": "be动词和doing总是搭配错，一看题就懵。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道现在进行时题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "现在进行时=be动词+动词ing。be动词看主语：I用am，he/she/it用is，you/we/they用are。ing变化规则：直接加、去e加、双写加。",
              "modelType": "知识卡片",
              "modelDesc": "现在进行时核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1wd4y1v7Xk",
              "title": "人教版英语九年级Unit13 Grammar：现在进行时语法讲解与练习",
              "duration": "4:47",
              "searchKeyword": "四年级英语 现在进行时 讲解"
        },
        "video2": {
              "bvid": "BV1pT4y1E789",
              "title": "小学英语四年级现在进行时",
              "duration": "6:18",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "Lisa丽莎莎"
        },
        "exams": [
              "2025年北京海淀期末真题《现在进行时》",
              "2024年北京海淀统考《现在进行时综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "现在进行时",
              "be+doing结构与时间标志词",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-05-020",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "分数乘法·分数×整数、分数×分数、",
        "icon": "🧮",
        "painPoint": "孩子在计算分数×整数、分数×分数、运算定律时频繁出错，不是看错数字就是忘记进退位。全班错误率高达35%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道分数乘法题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "分数乘法最简单——分子乘分子，分母乘分母。但先别急着乘！先约分再乘，数字变小，出错率降一半。",
              "modelType": "知识卡片",
              "modelDesc": "分数乘法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1ka4y1j7jN",
              "title": "小学数学六年级上册第一章第5课：整数乘法运算定律推广到分数",
              "duration": "15:41",
              "searchKeyword": "五年级数学 分数乘法 分数×整数、分数×分数、运算定律 讲解"
        },
        "video2": {
              "bvid": "BV1xU4y1J76E",
              "title": "小学数学五年级《整数乘法运算定律推广到小数》试讲练习",
              "duration": "7:17",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "软软yyyyy"
        },
        "exams": [
              "2025年上海浦东期末真题《分数乘法典型应用题》",
              "2024年上海浦东统考《分数乘法综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "分数乘法",
              "分数×整数、分数×分数、运算定律",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-05-023",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "圆·圆的认识、周长与面积公式",
        "icon": "🧮",
        "painPoint": "画圆的认识、周长与面积公式时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道圆题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "圆的所有公式都从πr²和2πr出发。周长÷π÷2=半径，半径×半径×π=面积。记住π=3.14就够了。",
              "modelType": "知识卡片",
              "modelDesc": "圆核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV15H4y197Nn",
              "title": "圆的周长、圆的面积",
              "duration": "12:5",
              "searchKeyword": "五年级数学 圆 圆的认识、周长与面积公式 讲解"
        },
        "video2": {
              "bvid": "BV1U5411Y7fb",
              "title": "苏教版数学五下第六单元——圆面积公式的推导",
              "duration": "6:53",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "小学数学同步课堂"
        },
        "exams": [
              "2025年上海浦东期末真题《圆典型应用题》",
              "2024年上海浦东统考《圆综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "圆",
              "圆的认识、周长与面积公式",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "ENG-05-014",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "形容词比较级·规则变化与-er/mor",
        "icon": "🌏",
        "painPoint": "什么时候加er、什么时候加more傻傻分不清楚。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道形容词比较级题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "比较级规则：单音节+er，多音节+more。最高级：单音节+est，多音节+most。三个特殊要背：good-better-best，bad-worse-worst，many-more-most。",
              "modelType": "知识卡片",
              "modelDesc": "形容词比较级核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV19L4y1b794",
              "title": "人教版英语八年级上册Unit3-4形容词副词比较级最高级变化规则用法讲解",
              "duration": "6:4",
              "searchKeyword": "五年级英语 形容词比较级 讲解"
        },
        "video2": {
              "bvid": "BV1vJ411Q71E",
              "title": "【陈老师语法小课堂】仁爱版初中英语语法！八年级上册第四单元第二话题，形容词比较级&amp;最高级详解【2】比较级和最高级的用法！～",
              "duration": "7:1",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "Ms_Chen姝羽"
        },
        "exams": [
              "2025年上海浦东期末真题《形容词比较级》",
              "2024年上海浦东统考《形容词比较级综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "形容词比较级",
              "规则变化与-er/more than句型",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-06-020",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "利润问题·成本/售价/利润/利润率",
        "icon": "🧮",
        "painPoint": "遇到利润问题的应用题，孩子读完题目完全不知道从哪里下手，解题思路混乱。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道利润问题题全国平均错误率38%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "利润问题就四个数：成本(进价)、售价(卖价)、利润、利润率。死记两个公式：利润=售价-成本，利润率=利润÷成本×100%。打几折就是原价×百分之几十！",
              "modelType": "知识卡片",
              "modelDesc": "利润问题核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1FK411B7RG",
              "title": "六年级数学 利润 成本 利润率 售价",
              "duration": "27:18",
              "searchKeyword": "六年级数学 利润问题 成本/售价/利润/利润率关系 讲解"
        },
        "video2": {
              "bvid": "BV1a341177rU",
              "title": "小学六年级利润问题-理清成本、定价、实际售价、亏损之间关系",
              "duration": "1:53",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "数趣生辉"
        },
        "exams": [
              "2024年广州越秀期末真题《利润问题典型应用题》",
              "2023年广州越秀统考《利润问题综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "利润问题",
              "成本/售价/利润/利润率关系",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-04-006",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "阅读理解·概括段意、理解关键句、体",
        "icon": "📖",
        "painPoint": "读完文章脑子里一片空白，概括主要内容总是抓不住重点，扣分严重。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道阅读理解题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "阅读理解三步走：第一步，标自然段、圈关键句；第二步，看题目，带着问题回文章找答案；第三步，概括题用'谁+干什么+结果'公式。",
              "modelType": "知识卡片",
              "modelDesc": "阅读理解核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1xg411m7y1",
              "title": "小学语文阅读理解答题技巧精讲",
              "duration": "31:41",
              "searchKeyword": "小学语文 阅读理解 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《阅读理解专项训练》",
              "2024年北京海淀统考《阅读理解综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "阅读理解",
              "概括段意、理解关键句、体会思想感情",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-05-015",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "分数的意义和性质·分数意义、真分数假分数、",
        "icon": "🧮",
        "painPoint": "孩子在计算分数意义、真分数假分数、分数基本性质时频繁出错，不是看错数字就是忘记进退位。全班错误率高达30%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道分数的意义和性质题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "分数意义就记住两件事：第一，真分数分子<分母（＜1），假分数分子≥分母（≥1），带分数=整数+真分数；第二，分数的分子分母同乘同除一个数（不为0），分数大小不变！",
              "modelType": "知识卡片",
              "modelDesc": "分数的意义和性质核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1YE411G7in",
              "title": "【五年级数学下】分数的意义和性质-分数的基本性质",
              "duration": "23:23",
              "searchKeyword": "五年级数学 分数的意义和性质 分数意义、真分数假分数、分数基本性质 讲解"
        },
        "video2": {
              "bvid": "BV1JE411g7a9",
              "title": "【五年级数学下】分数的意义和性质-真分数与假分数",
              "duration": "25:17",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "bili_25350248524"
        },
        "exams": [
              "2025年上海浦东期末真题《分数的意义和性质典型应用题》",
              "2024年上海浦东统考《分数的意义和性质综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "分数的意义和性质",
              "分数意义、真分数假分数、分数基本性质",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-06-004",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "分数乘法·分数乘分数、分数混合运算",
        "icon": "🧮",
        "painPoint": "孩子在计算分数乘分数、分数混合运算与简便计算时频繁出错，不是看错数字就是忘记进退位。全班错误率高达30%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道分数乘法题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "分数乘法最简单——分子乘分子，分母乘分母。但先别急着乘！先约分再乘，数字变小，出错率降一半。",
              "modelType": "知识卡片",
              "modelDesc": "分数乘法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1MG4ZeNEGA",
              "title": "花一节课讲分数简便计算",
              "duration": "15:38",
              "searchKeyword": "六年级数学 分数乘法 分数乘分数、分数混合运算与简便计算 讲解"
        },
        "video2": {
              "bvid": "BV1Rb4y1v7Q4",
              "title": "人教版数学六年级上册 第一单元 6、分数乘法的混合运算及简便运算",
              "duration": "12:55",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "兔兔数学微课"
        },
        "exams": [
              "2024年广州越秀期末真题《分数乘法典型应用题》",
              "2023年广州越秀统考《分数乘法综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "分数乘法",
              "分数乘分数、分数混合运算与简便计算",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-06-013",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "百分数(二)·折扣/成数/税率/利率应",
        "icon": "🧮",
        "painPoint": "孩子在计算折扣/成数/税率/利率应用题时频繁出错，不是看错数字就是忘记进退位。全班错误率高达30%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道百分数(二)题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "百分数就是分母为100的分数。折扣=现价÷原价，税率=税额÷收入，利率=利息÷本金。三个公式，一通百通。",
              "modelType": "知识卡片",
              "modelDesc": "百分数(二)核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Fw4m1175z",
              "title": "百分数常考知识点，折扣成数易错应用题，量率对应求出单位1",
              "duration": "1:45",
              "searchKeyword": "六年级数学 百分数(二) 折扣/成数/税率/利率应用题 讲解"
        },
        "video2": {
              "bvid": "BV1BT4y1h77u",
              "title": "(人教版) 六年级数学下册 第二章 百分数(二)  打折 折扣 成数 几成  税率 利息 利率 本金 本息",
              "duration": "20:32",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "学习5分钟贪玩两小时"
        },
        "exams": [
              "2024年广州越秀期末真题《百分数(二)典型应用题》",
              "2023年广州越秀统考《百分数(二)综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "百分数(二)",
              "折扣/成数/税率/利率应用题",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-06-005",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "修改病句综合·八种病句类型综合辨析与修",
        "icon": "📖",
        "painPoint": "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次凭感觉选。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道修改病句综合题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "改病句四步法：一读（读句子）、二找（找病因）、三改（对症改）、四查（查通顺）。记住八大病因：成分残缺、搭配不当、重复啰嗦、前后矛盾、指代不明、语序不当、不合逻辑、用词不当。",
              "modelType": "知识卡片",
              "modelDesc": "修改病句综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1zP411q7G9",
              "title": "【明明白白01】不会修改病句？从语法词性开始带你解决所有病句难题！（小初高都适用）的语病讲解",
              "duration": "31:31",
              "searchKeyword": "小学语文 修改病句综合 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1NV411L7Q8",
              "title": "小学语文必看（强烈推荐） 修改病句专项训练 小学生中高年级语文修改病句技巧方法",
              "duration": "22:44",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "豆豆智慧育儿"
        },
        "exams": [
              "2024年广州越秀期末真题《修改病句综合专项训练》",
              "2023年广州越秀统考《修改病句综合综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "修改病句综合",
              "八种病句类型综合辨析与修改",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "ENG-06-015",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "小升初英语总复习·词汇/语法/阅读/写作四",
        "icon": "🌏",
        "painPoint": "英语小升初英语总复习句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道小升初英语总复习题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "小升初英语四维复习法：维度一词汇——按话题分类背(学校/家庭/食物/天气/动物)，每天15个；维度二语法——整理时态表格（一般现在/现在进行/一般过去/一般将来）+名词复数+比较级；维度三阅读——做阅读题先看问题再读文章找答案，勾画关键词；维度四写作——背5个万能开头句+5个连接词+3个结尾句。",
              "modelType": "知识卡片",
              "modelDesc": "小升初英语总复习核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1EZ4y1u7rt",
              "title": "RECYCLE 1  课堂同步【PEP小学英语】六年级（下册）上半学期总复习RECYCLE1",
              "duration": "12:10",
              "searchKeyword": "六年级英语 小升初英语总复习 讲解"
        },
        "video2": {
              "bvid": "BV1fF411T7Ai",
              "title": "Join in六年级下册小升初模拟测试题讲解",
              "duration": "14:46",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "酷玩桥段"
        },
        "exams": [
              "2024年广州越秀期末真题《小升初英语总复习》",
              "2023年广州越秀统考《小升初英语总复习综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "小升初英语总复习",
              "词汇/语法/阅读/写作四大板块综合",
              "小升初核心"
        ]
  }
,
  {
        "id": "CHI-04-005",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "修改病句·成分残缺/搭配不当/重复",
        "icon": "📖",
        "painPoint": "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次凭感觉选。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道修改病句题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "改病句四步法：一读（读句子）、二找（找病因）、三改（对症改）、四查（查通顺）。记住八大病因：成分残缺、搭配不当、重复啰嗦、前后矛盾、指代不明、语序不当、不合逻辑、用词不当。",
              "modelType": "知识卡片",
              "modelDesc": "修改病句核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1zP411q7G9",
              "title": "【明明白白01】不会修改病句？从语法词性开始带你解决所有病句难题！（小初高都适用）的语病讲解",
              "duration": "31:31",
              "searchKeyword": "小学语文 修改病句 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1NV411L7Q8",
              "title": "小学语文必看（强烈推荐） 修改病句专项训练 小学生中高年级语文修改病句技巧方法",
              "duration": "22:44",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "豆豆智慧育儿"
        },
        "exams": [
              "2025年北京海淀期末真题《修改病句专项训练》",
              "2024年北京海淀统考《修改病句综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "修改病句",
              "成分残缺/搭配不当/重复啰嗦/前后矛盾",
              "易错题型"
        ]
  }
,
  {
        "id": "ENG-06-012",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "Last Weekend·过去时综合应用与叙述",
        "icon": "🌏",
        "painPoint": "英语Last Weekend句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道Last Weekend题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "Last Weekend核心是过去时：What did you do last weekend? I + 过去式动词(watched TV/played football/cleaned my room/washed clothes)。时间标志词：yesterday, last night/Saturday/weekend, the day before yesterday。动词过去式规律：一般+ed，以e结尾+d，辅音+y改i+ed，重读闭音节双写+ed。不规则的要背！",
              "modelType": "知识卡片",
              "modelDesc": "Last Weekend核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1E7411j7PV",
              "title": "PEP小学英语六年级下册第二单元第二课时微课Unit2 Last weekend PartA Let&#x27;s learn&amp;Do a survey &amp; report",
              "duration": "13:11",
              "searchKeyword": "六年级英语 Last Weekend 讲解"
        },
        "video2": {
              "bvid": "BV147411c7cW",
              "title": "PEP小学英语六年级下册第二单元第三课时微课Unit2 Last weekend PartB Let&#x27;s try &amp; let&#x27;s talk",
              "duration": "16:6",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "红伟老师"
        },
        "exams": [
              "2024年广州越秀期末真题《Last Weekend》",
              "2023年广州越秀统考《Last Weekend综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "Last Weekend",
              "过去时综合应用与叙述",
              "高频考点"
        ]
  }
,
  {
        "id": "ENG-06-016",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "情态动词综合·can/must/sho",
        "icon": "🌏",
        "painPoint": "英语情态动词综合句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道情态动词综合题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "情态动词三条铁律：第一，can(能/会/可以)→could(过去式)，must(必须)→mustn't(禁止)，should(应该)；第二，情态动词后永远接动词原形！(can do不是can does)；第三，变否定直接加not(cannot→can't, must not→mustn't)，变疑问情态动词提前。",
              "modelType": "知识卡片",
              "modelDesc": "情态动词综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1bi4y1d7Ms",
              "title": "PEP小学英语六年级上册复习《一般将来时及情态动词回顾》",
              "duration": "19:3",
              "searchKeyword": "六年级英语 情态动词综合 讲解"
        },
        "video2": {
              "bvid": "BV1WK411U7rS",
              "title": "小学英语语法：现在进行时第一段，同步教学视频",
              "duration": "7:46",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "清道夫秋风td"
        },
        "exams": [
              "2024年广州越秀期末真题《情态动词综合》",
              "2023年广州越秀统考《情态动词综合综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "情态动词综合",
              "can/must/should/may/will用法辨析",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "MATH-05-013",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "因数和倍数·因数/倍数概念、2/3/",
        "icon": "🧮",
        "painPoint": "孩子在计算因数/倍数概念、2/3/5的倍数特征、质数合数时频繁出错，不是看错数字就是忘记进退位。全班错误率高达28%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道因数和倍数题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "因数和倍数四句口诀：一个数的因数成对找，最小1最大是自己；一个数的倍数无限多，最小是自己没最大；2的倍数看个位(0/2/4/6/8)；3的倍数各位和是3的倍数；5的倍数个位0或5。质数只有1和自己两个因数！",
              "modelType": "知识卡片",
              "modelDesc": "因数和倍数核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1kz421D7We",
              "title": "小学数学总复习：数的认识---整数、自然数、正数、负数，与整数有关的概念讲解1",
              "duration": "10:26",
              "searchKeyword": "五年级数学 因数和倍数 因数/倍数概念、2/3/5的倍数特征、质数合数 讲解"
        },
        "video2": {
              "bvid": "BV1gx4y1874i",
              "title": "12.质数与合数（人教五下清华附小出品）",
              "duration": "3:36",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "每月精选"
        },
        "exams": [
              "2025年上海浦东期末真题《因数和倍数典型应用题》",
              "2024年上海浦东统考《因数和倍数综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "因数和倍数",
              "因数/倍数概念、2/3/5的倍数特征、质数合数",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-05-008",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "古诗文进阶·五年级必背古诗+文言文理",
        "icon": "📖",
        "painPoint": "古诗背了又忘，默写总写错别字，诗句意思理解不透彻。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道古诗文进阶题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "古诗学习三件套：先读准字音，再解关键字词，最后翻译整句。默写之前先理解意思，死记硬背改不了错别字！",
              "modelType": "知识卡片",
              "modelDesc": "古诗文进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "古诗文进阶 讲解视频",
              "duration": "",
              "searchKeyword": "小学语文 古诗文进阶 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《古诗文进阶专项训练》",
              "2024年上海浦东统考《古诗文进阶综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "古诗文进阶",
              "五年级必背古诗+文言文理解与翻译",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-06-007",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "比·比的基本性质、化简比、按",
        "icon": "🧮",
        "painPoint": "孩子在计算比的基本性质、化简比、按比分配应用题时频繁出错，不是看错数字就是忘记进退位。全班错误率高达28%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道比题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "比就三件事：第一，比=除法=分数，比的前项÷后项=比值；第二，化简比就是找前后项的最大公因数同时除，比的前后项必须互质；第三，按比分配——先用总量÷总份数=每份量，再分别乘起来！",
              "modelType": "知识卡片",
              "modelDesc": "比核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1kG4y1r7xb",
              "title": "人教版数学六年级上册 第四单元2 比的基本性质和化简",
              "duration": "10:48",
              "searchKeyword": "六年级数学 比 比的基本性质、化简比、按比分配应用题 讲解"
        },
        "video2": {
              "bvid": "BV1wS4y1A7FW",
              "title": "六上 比的基本性质与化简比",
              "duration": "10:47",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "逢考必过6868"
        },
        "exams": [
              "2024年广州越秀期末真题《比典型应用题》",
              "2023年广州越秀统考《比综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "比",
              "比的基本性质、化简比、按比分配应用题",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-06-004",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "句子综合·句型转换(含双重否定)、",
        "icon": "📖",
        "painPoint": "句子综合是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道句子综合题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "句型转换四种必考：第一，双重否定变肯定——'不得不'='必须'，'没有不'='都'；第二，反问变陈述——去掉'难道''怎能'，把问号改句号，意思不变；第三，直接引语变间接引语——改人称、改时态；第四，缩句——去掉修饰只留主干(谁干什么/什么怎么样)。",
              "modelType": "知识卡片",
              "modelDesc": "句子综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1bh4y1f7Y1",
              "title": "【明明白白16】语文阅读理解不会做？理解词语句子？概括段落大意？分析语段作用？谈谈你的看法？四大题型答题技巧一次性全部解决！",
              "duration": "18:7",
              "searchKeyword": "小学语文 句子综合 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1NV411L7Q8",
              "title": "小学语文必看（强烈推荐） 修改病句专项训练 小学生中高年级语文修改病句技巧方法",
              "duration": "22:44",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "豆豆智慧育儿"
        },
        "exams": [
              "2024年广州越秀期末真题《句子综合专项训练》",
              "2023年广州越秀统考《句子综合综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "句子综合",
              "句型转换(含双重否定)、仿写句子",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-06-008",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "古诗文综合·六年级必背+小学段总复习",
        "icon": "📖",
        "painPoint": "古诗背了又忘，默写总写错别字，诗句意思理解不透彻。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道古诗文综合题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "古诗学习三件套：先读准字音，再解关键字词，最后翻译整句。默写之前先理解意思，死记硬背改不了错别字！",
              "modelType": "知识卡片",
              "modelDesc": "古诗文综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Mm4y1o74D",
              "title": "小学语文诗句翻译方法，句子理解题答题技巧",
              "duration": "1:57",
              "searchKeyword": "小学语文 古诗文综合 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV13fWweyEzt",
              "title": "BV1Dw4m1i7mR全148集】初中文言文动画解题技巧，涵盖文言文解题技巧，常考实词虚词，古诗词阅读解题技巧 掌握阅读与答题技巧，暑假提升不再难",
              "duration": "6:59",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "难就做9次"
        },
        "exams": [
              "2024年广州越秀期末真题《古诗文综合专项训练》",
              "2023年广州越秀统考《古诗文综合综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "古诗文综合",
              "六年级必背+小学段总复习、文言文翻译技巧",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-06-014",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "小升初语文总复习·基础知识/阅读理解/作文",
        "icon": "📖",
        "painPoint": "小升初语文总复习是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道小升初语文总复习题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "小升初语文复习分三块：第一块基础知识（字词+句子+标点+古诗词），每天30分钟背记；第二块阅读理解（记叙文+说明文+非连续性文本），每种文体练5篇掌握套路；第三块作文（写人/记事/写景/想象），每类写2篇+修改。错题本分类记录，考前翻一翻！",
              "modelType": "知识卡片",
              "modelDesc": "小升初语文总复习核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1jf421X7RL",
              "title": "六下期末总复习课内bi考点",
              "duration": "10:38",
              "searchKeyword": "小学语文 小升初语文总复习 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1Af421Q794",
              "title": "五下期末总复习重点押题快速拿下20分！",
              "duration": "6:48",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "语文莹莹老师"
        },
        "exams": [
              "2024年广州越秀期末真题《小升初语文总复习专项训练》",
              "2023年广州越秀统考《小升初语文总复习综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "小升初语文总复习",
              "基础知识/阅读理解/作文三大板块综合",
              "小升初核心"
        ]
  }
,
  {
        "id": "ENG-06-017",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "疑问词综合·Wh-疑问词(what/",
        "icon": "🌏",
        "painPoint": "英语疑问词综合句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道疑问词综合题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "Wh-疑问词七兄弟：What(什么→问事物)，Where(哪里→问地点)，When(什么时候→问时间)，Who(谁→问人)，Why(为什么→问原因，用because回答)，Which(哪个→有范围选择)，How(怎样→问方式/程度)。公式：疑问词+一般疑问句=特殊疑问句！",
              "modelType": "知识卡片",
              "modelDesc": "疑问词综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV17t4y1F7cK",
              "title": "小学六年级英语：五大句型一般特殊疑问句第1段，必考题型",
              "duration": "8:1",
              "searchKeyword": "六年级英语 疑问词综合 讲解"
        },
        "video2": {
              "bvid": "BV1dB6cYTEmq",
              "title": "小学三至六年级英语词汇分类读和记  30  特殊疑问词和缩略词",
              "duration": "5:3",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "中小学英语学习"
        },
        "exams": [
              "2024年广州越秀期末真题《疑问词综合》",
              "2023年广州越秀统考《疑问词综合综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "疑问词综合",
              "Wh-疑问词(what/when/where/why/who/how)综合辨析",
              "高频考点"
        ]
  }
,
  {
        "id": "ENG-04-018",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "阅读理解入门·短篇阅读理解与信息提取",
        "icon": "🌏",
        "painPoint": "阅读文章生词太多看不懂，看到长句子就放弃。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道阅读理解入门题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "英语阅读理解先看题目再读文章！带着问题找答案，遇到生词不要慌，上下文猜意思，实在猜不出跳过去。主旨题看首尾段，细节题回原文定位。",
              "modelType": "知识卡片",
              "modelDesc": "阅读理解入门核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1oT4m1U7VT",
              "title": "从零开始学英语：译林版四年级下册第一单元，让你轻松入门！",
              "duration": "14:36",
              "searchKeyword": "四年级英语 阅读理解入门 讲解"
        },
        "video2": {
              "bvid": "BV19V4y1x7rH",
              "title": "小学生英语入门怎么学  四年级学生如何学好英语  怎样学习成人英语",
              "duration": "24:6",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "三地贸易"
        },
        "exams": [
              "2025年北京海淀期末真题《阅读理解入门》",
              "2024年北京海淀统考《阅读理解入门综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "阅读理解入门",
              "短篇阅读理解与信息提取",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "CHI-05-004",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "段落结构分析·总分/分总/总分总、过渡",
        "icon": "📖",
        "painPoint": "段落结构分析是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道段落结构分析题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "段落结构四种类型速记：总分结构=第一句是中心句，后面展开解释（找段落首句！）；分总结构=前面摆事实，最后一句总结（找段落尾句！）；总分总=首尾呼应（找首句和尾句是否一致）；并列结构=没有总起句，分几个方面各说各的（过渡词提示：第一/第二/另外）。",
              "modelType": "知识卡片",
              "modelDesc": "段落结构分析核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1ou4y1D7Mr",
              "title": "教你划分文章层次结构",
              "duration": "5:21",
              "searchKeyword": "小学语文 段落结构分析 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1qU4y1m7cu",
              "title": "小学语文公式阅读法-09段落结构分析-01总分结构（一）",
              "duration": "5:1",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "摘星星的蝎子"
        },
        "exams": [
              "2025年上海浦东期末真题《段落结构分析专项训练》",
              "2024年上海浦东统考《段落结构分析综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "段落结构分析",
              "总分/分总/总分总、过渡句作用",
              "高频考点"
        ]
  }
,
  {
        "id": "ENG-05-007",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "There Be句型进阶·There be就近原则",
        "icon": "🌏",
        "painPoint": "英语There Be句型进阶句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道There Be句型进阶题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "There Be就近原则：离be动词最近的名词决定用is还是are。There is a book and two pens(book单数→用is)。There are two pens and a book(pens复数→用are)。There be否定=be后加not(There isn't/aren't)。疑问=be提前(Is there/Are there)。回答用Yes, there is/are. No, there isn't/aren't。",
              "modelType": "知识卡片",
              "modelDesc": "There Be句型进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1zK411V7nb",
              "title": "五年级：There be句型",
              "duration": "7:6",
              "searchKeyword": "五年级英语 There Be句型进阶 讲解"
        },
        "video2": {
              "bvid": "BV1a34y197yN",
              "title": "PEP小学英语五年级上册复习《There be 句型及冠词回顾 》",
              "duration": "19:5",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "红伟老师"
        },
        "exams": [
              "2025年上海浦东期末真题《There Be句型进阶》",
              "2024年上海浦东统考《There Be句型进阶综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "There Be句型进阶",
              "There be就近原则与各种句式转换",
              "易错题型"
        ]
  }
,
  {
        "id": "CHI-06-007",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "说明文阅读综合·辨析说明方法作用、评价说",
        "icon": "📖",
        "painPoint": "说明文阅读综合是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道说明文阅读综合题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "说明文阅读三件套：第一，判断说明方法——举例子(如/例如/比如)、列数字(有具体数字)、打比方(像/好像/仿佛)、作比较(比/而/相对于)；第二，答作用——这个说明方法+说明了什么+使说明更具体/生动/准确；第三，分析说明顺序——时间顺序(有年月日)、空间顺序(方位词)、逻辑顺序(因为所以/首先其次)。",
              "modelType": "知识卡片",
              "modelDesc": "说明文阅读综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Ek4y1C7HH",
              "title": "第7节.阅读理解，说明方法（上）这些区别方法不会，就不会做阅读",
              "duration": "16:12",
              "searchKeyword": "小学语文 说明文阅读综合 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1RV411171u",
              "title": "第6节.说明文的顺序（下）这如此简单解题方法，别说我没有讲到哦！",
              "duration": "24:33",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "梓墨说语文"
        },
        "exams": [
              "2024年广州越秀期末真题《说明文阅读综合专项训练》",
              "2023年广州越秀统考《说明文阅读综合综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "说明文阅读综合",
              "辨析说明方法作用、评价说明语言",
              "高频考点"
        ]
  }
,
  {
        "id": "ENG-06-006",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "I Have a Pen Pal·兴趣爱好词汇与第三人称单",
        "icon": "🌏",
        "painPoint": "英语I Have a Pen Pal句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道I Have a Pen Pal题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "第三人称单数问句：Does + 主语(he/she) + 动词原形？回答：Yes, he does. / No, he doesn't。注意：问句里动词变回原形(Does she likes × → Does she like ✓)。陈述句三单动词+s/es(She likes drawing pictures and going hiking)。爱好表达：like + 动词ing！",
              "modelType": "知识卡片",
              "modelDesc": "I Have a Pen Pal核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1WZ4y1V7vA",
              "title": "FishingPEP六年级上册Unit 4 I have a pen pal",
              "duration": "16:2",
              "searchKeyword": "六年级英语 I Have a Pen Pal 讲解"
        },
        "video2": {
              "bvid": "BV1nA411n7vn",
              "title": "PEP(人教版)小学英语六年级上册Unit4 I have a pen pal 课文动画和歌谣",
              "duration": "6:0",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "PEP小学英语打卡"
        },
        "exams": [
              "2024年广州越秀期末真题《I Have a Pen Pal》",
              "2023年广州越秀统考《I Have a Pen Pal综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "I Have a Pen Pal",
              "兴趣爱好词汇与第三人称单数一般现在时",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "ENG-04-010",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "名词复数·规则变化与常见不规则变化",
        "icon": "🌏",
        "painPoint": "英语名词复数句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道名词复数题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "名词复数规则变化三条：第一，一般+s(book→books)；第二，s/x/sh/ch结尾+es(bus→buses, watch→watches)；第三，辅音字母+y结尾，改y为i+es(baby→babies)。不规则变化必背：man→men, woman→women, child→children, foot→feet, tooth→teeth, mouse→mice, sheep→sheep(不变), fish→fish(不变)。",
              "modelType": "知识卡片",
              "modelDesc": "名词复数核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Yv411T7vK",
              "title": "外研社六年级上册Module 7重点知识讲解",
              "duration": "33:20",
              "searchKeyword": "四年级英语 名词复数 讲解"
        },
        "video2": {
              "bvid": "BV1bG4y1v7B1",
              "title": "三下-可数名词变复数的规则",
              "duration": "1:41",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "丽莎讲英语"
        },
        "exams": [
              "2025年北京海淀期末真题《名词复数》",
              "2024年北京海淀统考《名词复数综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "名词复数",
              "规则变化与常见不规则变化",
              "易错题型"
        ]
  }
,
  {
        "id": "MATH-05-022",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "比·比的意义、化简比、按比例",
        "icon": "🧮",
        "painPoint": "孩子在计算比的意义、化简比、按比例分配时频繁出错，不是看错数字就是忘记进退位。全班错误率高达28%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道比题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "比就是除法就是分数。比的前项=除法里的被除数=分数的分子，比的后项=除数=分母，比值=商=分数值。化简比三步：找前后项最大公因数→前后项同时除以它→写成最简整数比。按比例分配：总份数=前后项之和，每份量=总量÷总份数！",
              "modelType": "知识卡片",
              "modelDesc": "比核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1H11kYGE7r",
              "title": "比和比例②比的性质、化简比",
              "duration": "15:16",
              "searchKeyword": "五年级数学 比 比的意义、化简比、按比例分配 讲解"
        },
        "video2": {
              "bvid": "BV1D14y187sW",
              "title": "六年级数学比和比例问题，化简连比问题，掌握方法，轻松搞定，",
              "duration": "4:35",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "陪伴学习的小小曾"
        },
        "exams": [
              "2025年上海浦东期末真题《比典型应用题》",
              "2024年上海浦东统考《比综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "比",
              "比的意义、化简比、按比例分配",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-05-005",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "说明文阅读进阶·说明顺序(时间/空间/逻",
        "icon": "📖",
        "painPoint": "说明文阅读进阶是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道说明文阅读进阶题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "说明顺序就三种+识别口诀：时间顺序——有具体时间词（首先/然后/最后，古代/现代）；空间顺序——有方位词（上/下/左/右/东/南/西/北/里/外）；逻辑顺序——因果关系（因为所以）、主次关系（主要/次要）、从现象到本质（表面/实际上）。做题先圈时间词和方位词，都不是就是逻辑顺序！",
              "modelType": "知识卡片",
              "modelDesc": "说明文阅读进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Ek4y1C7HH",
              "title": "第7节.阅读理解，说明方法（上）这些区别方法不会，就不会做阅读",
              "duration": "16:12",
              "searchKeyword": "小学语文 说明文阅读进阶 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1TS4y1m7Q4",
              "title": "语文阅读理解答题技巧说明文阅读理解小学初中说明文阅读理解考试题型",
              "duration": "5:26",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "刘冬梅爱读书"
        },
        "exams": [
              "2025年上海浦东期末真题《说明文阅读进阶专项训练》",
              "2024年上海浦东统考《说明文阅读进阶综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "说明文阅读进阶",
              "说明顺序(时间/空间/逻辑)、说明语言准确性",
              "高频考点"
        ]
  }
,
  {
        "id": "ENG-06-005",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "My Weekend Plan·将来时be going ",
        "icon": "🌏",
        "painPoint": "英语My Weekend Plan句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道My Weekend Plan题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "将来时be going to：主语+be(am/is/are)+going to+动词原形。I am going to read books. He is going to visit grandparents. 问句：What are you going to do? / Where is he going? 时间标志词：tomorrow, this weekend, next week。",
              "modelType": "知识卡片",
              "modelDesc": "My Weekend Plan核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1AZ4y1T7ve",
              "title": "PEP(人教版)小学英语六年级上册Unit3 My weekend plan课文动画和歌谣",
              "duration": "5:29",
              "searchKeyword": "六年级英语 My Weekend Plan 讲解"
        },
        "video2": {
              "bvid": "BV1tP411M75i",
              "title": "人教PEP六年级上册U3 My weekend plan 复习课",
              "duration": "20:2",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "RYANGOT7"
        },
        "exams": [
              "2024年广州越秀期末真题《My Weekend Plan》",
              "2023年广州越秀统考《My Weekend Plan综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "My Weekend Plan",
              "将来时be going to+动词短语",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-04-018",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "除数是两位数的除法·试商技巧与验算",
        "icon": "🧮",
        "painPoint": "孩子在计算试商技巧与验算时频繁出错，不是看错数字就是忘记进退位。全班错误率高达25%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道除数是两位数的除法题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "除数是两位数的除法，试商是关键！试商口诀：用四舍五入法把除数看成整十数，然后试商。商大了就减1再试，商小了就加1再试。试好后别忘了把商和除数乘一遍验证！",
              "modelType": "知识卡片",
              "modelDesc": "除数是两位数的除法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1pq4y1p7ge",
              "title": "1三年级数学上册第四单元 除法的验算",
              "duration": "17:42",
              "searchKeyword": "四年级数学 除数是两位数的除法 试商技巧与验算 讲解"
        },
        "video2": {
              "bvid": "BV1ba4y1p7od",
              "title": "除数是一位数的除法（笔算）补充：当没有余数时，可以用商和除数相乘来验算",
              "duration": "8:34",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "史努比小可爱呀"
        },
        "exams": [
              "2025年北京海淀期末真题《除数是两位数的除法典型应用题》",
              "2024年北京海淀统考《除数是两位数的除法综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "除数是两位数的除法",
              "试商技巧与验算",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-05-003",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "词语理解进阶·联系上下文理解词语、感情",
        "icon": "📖",
        "painPoint": "词语理解进阶是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道词语理解进阶题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "词语理解三步法：第一步——联系上下文，把词语放到句子里读两三遍，猜大概意思（90%的题都能用这招！）；第二步——拆词法，先把两个字拆开分别解释再合起来；第三步——找近反义词，用会的词类推出不会的词的意思。",
              "modelType": "知识卡片",
              "modelDesc": "词语理解进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1bh4y1f7Y1",
              "title": "【明明白白16】语文阅读理解不会做？理解词语句子？概括段落大意？分析语段作用？谈谈你的看法？四大题型答题技巧一次性全部解决！",
              "duration": "18:7",
              "searchKeyword": "小学语文 词语理解进阶 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1jv421i7M8",
              "title": "03.小学语文阅读理解答题技巧：词语解释",
              "duration": "16:7",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "优选课程导航"
        },
        "exams": [
              "2025年上海浦东期末真题《词语理解进阶专项训练》",
              "2024年上海浦东统考《词语理解进阶综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "词语理解进阶",
              "联系上下文理解词语、感情色彩辨析",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-06-009",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "百分数(一)·百分数意义、百分数/分数",
        "icon": "🧮",
        "painPoint": "孩子在计算百分数意义、百分数/分数/小数互化时频繁出错，不是看错数字就是忘记进退位。全班错误率高达25%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道百分数(一)题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "百分数就是分母为100的分数。折扣=现价÷原价，税率=税额÷收入，利率=利息÷本金。三个公式，一通百通。",
              "modelType": "知识卡片",
              "modelDesc": "百分数(一)核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Pf4y1x7Fx",
              "title": "百分数和分数、小数的互化",
              "duration": "12:58",
              "searchKeyword": "六年级数学 百分数(一) 百分数意义、百分数/分数/小数互化 讲解"
        },
        "video2": {
              "bvid": "BV1w341167iy",
              "title": "【15】 百分数和分数、小数互化【鸡娃网】六年级天天练 乐乐课堂动画知识点讲解 六年级奥数 举一反三 视频课程 巧算 速算 高思奥数引导超越 数学思维课",
              "duration": "3:26",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "爱学习电子教辅"
        },
        "exams": [
              "2024年广州越秀期末真题《百分数(一)典型应用题》",
              "2023年广州越秀统考《百分数(一)综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "百分数(一)",
              "百分数意义、百分数/分数/小数互化",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-06-016",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "总复习·数与代数/图形与几何/统",
        "icon": "🧮",
        "painPoint": "孩子在计算数与代数/图形与几何/统计与概率/综合应用时频繁出错，不是看错数字就是忘记进退位。全班错误率高达25%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道总复习题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "总复习就按四块来：数与代数（计算+方程+比和比例），图形与几何（面积体积+位置方向），统计与概率（图表+平均数），综合应用（应用题归类）。每块先理概念再刷题！",
              "modelType": "知识卡片",
              "modelDesc": "总复习核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Z3bBz8ERZ",
              "title": "小学数学 青岛版数学 六年级上册数学 图形与几何统计与概率总复习PPT课件 新版数学 优质公开课教案 精品数学课件",
              "duration": "1:34",
              "searchKeyword": "六年级数学 总复习 数与代数/图形与几何/统计与概率/综合应用 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2024年广州越秀期末真题《总复习典型应用题》",
              "2023年广州越秀统考《总复习综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "总复习",
              "数与代数/图形与几何/统计与概率/综合应用",
              "小升初核心"
        ]
  }
,
  {
        "id": "MATH-06-011",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "数学广角——数与形·数形结合思想、找规律",
        "icon": "🧮",
        "painPoint": "画数形结合思想、找规律时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道数学广角——数与形题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "数形结合解题三步：第一步，根据题意画图（线段图、方格图、或表格）；第二步，在图上标出已知数和未知数，找规律；第三步，从图里读出关系式，列算式。画图=解题成功一半！",
              "modelType": "知识卡片",
              "modelDesc": "数学广角——数与形核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1384y167wh",
              "title": "人教版小学数学六年级上册数学广角数与形课时一",
              "duration": "19:5",
              "searchKeyword": "六年级数学 数学广角——数与形 数形结合思想、找规律 讲解"
        },
        "video2": {
              "bvid": "BV1of4y1N7v3",
              "title": "小学数学六年级上册第八章第1课：数学广角-数与形例1",
              "duration": "18:53",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "易慧课堂"
        },
        "exams": [
              "2024年广州越秀期末真题《数学广角——数与形典型应用题》",
              "2023年广州越秀统考《数学广角——数与形综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "数学广角——数与形",
              "数形结合思想、找规律",
              "易错题型"
        ]
  }
,
  {
        "id": "MATH-04-023",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "小数的意义和性质·小数读写、大小比较、小数",
        "icon": "🧮",
        "painPoint": "孩子在计算小数读写、大小比较、小数点移动时频繁出错，不是看错数字就是忘记进退位。全班错误率高达27%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道小数的意义和性质题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "小数定义牢记住：十分位=0.1，百分位=0.01，千分位=0.001。比较大小——先比整数部分，相同的比十分位，再比百分位，逐位比！小数点移动——向右移×10^n，向左移÷10^n。",
              "modelType": "知识卡片",
              "modelDesc": "小数的意义和性质核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1qD421L7fU",
              "title": "第四单元小数的意义和性质~10-利用小数点的移动求原数#四年级下#~看动画~学数学#小学数学（人教版）",
              "duration": "6:54",
              "searchKeyword": "四年级数学 小数的意义和性质 小数读写、大小比较、小数点移动 讲解"
        },
        "video2": {
              "bvid": "BV196421F7zq",
              "title": "第四单元小数的意义和性质~09-小数点移动的奥秘#四年级下#~看动画~学数学#小学数学（人教版）",
              "duration": "2:46",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "一课数学"
        },
        "exams": [
              "2025年北京海淀期末真题《小数的意义和性质典型应用题》",
              "2024年北京海淀统考《小数的意义和性质综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "小数的意义和性质",
              "小数读写、大小比较、小数点移动",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-04-020",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "数学广角——优化·沏茶问题与对策论",
        "icon": "🧮",
        "painPoint": "画沏茶问题与对策论时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道数学广角——优化题全国平均错误率40%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "优化问题万能原则：能同时做的事一起做（比如烧水时洗茶杯），不能同时做的排好顺序。画流程图分析，哪个环节等待时间最长就先优化哪个！",
              "modelType": "知识卡片",
              "modelDesc": "数学广角——优化核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1664y1o7KP",
              "title": "数学四年级上册第八单元《数学广角——优化》：沏茶问题",
              "duration": "13:23",
              "searchKeyword": "四年级数学 数学广角——优化 沏茶问题与对策论 讲解"
        },
        "video2": {
              "bvid": "BV1VK4y1G7S1",
              "title": "【获奖】人教版小学数学四年级上册8　数学广角──优化《沏茶问题》-姜老师优质课公开课教学视频",
              "duration": "7:43",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "舒梁韵鸣"
        },
        "exams": [
              "2025年北京海淀期末真题《数学广角——优化典型应用题》",
              "2024年北京海淀统考《数学广角——优化综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "数学广角——优化",
              "沏茶问题与对策论",
              "易错题型"
        ]
  }
,
  {
        "id": "CHI-05-010",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "修改病句进阶·指代不明/语序不当/不合",
        "icon": "📖",
        "painPoint": "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次凭感觉选。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道修改病句进阶题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "改病句四步法：一读（读句子）、二找（找病因）、三改（对症改）、四查（查通顺）。记住八大病因：成分残缺、搭配不当、重复啰嗦、前后矛盾、指代不明、语序不当、不合逻辑、用词不当。",
              "modelType": "知识卡片",
              "modelDesc": "修改病句进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1NV411L7Q8",
              "title": "小学语文必看（强烈推荐） 修改病句专项训练 小学生中高年级语文修改病句技巧方法",
              "duration": "22:44",
              "searchKeyword": "小学语文 修改病句进阶 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1bK4y1W7iC",
              "title": "语文知识：修改病句技巧分享，三年级语文考点",
              "duration": "1:44",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "寇老师的语文课堂"
        },
        "exams": [
              "2025年上海浦东期末真题《修改病句进阶专项训练》",
              "2024年上海浦东统考《修改病句进阶综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "修改病句进阶",
              "指代不明/语序不当/不合逻辑",
              "易错题型"
        ]
  }
,
  {
        "id": "CHI-05-014",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "名著阅读·四大名著节选阅读、人物形",
        "icon": "📖",
        "painPoint": "名著阅读是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道名著阅读题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "名著阅读三步法：第一步，了解背景（作者是谁、什么朝代、写的是什么故事）；第二步，抓住主要人物（做人物卡片：姓名+称号+主要事件+性格特点）；第三步，读关键情节（回目/章节的标题往往就是本回主要内容）。写作时结合人物+事件+自己的感悟三点写！",
              "modelType": "知识卡片",
              "modelDesc": "名著阅读核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1RCNiz4Ev4",
              "title": "五下期末考点—名著阅读",
              "duration": "1:27",
              "searchKeyword": "小学语文 名著阅读 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1nFwdzmEr4",
              "title": "五下第二单元四大名著知识点总结，14个必考题型答题技巧",
              "duration": "6:37",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "刘安妮博士语文"
        },
        "exams": [
              "2025年上海浦东期末真题《名著阅读专项训练》",
              "2024年上海浦东统考《名著阅读综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "名著阅读",
              "四大名著节选阅读、人物形象分析",
              "高频考点"
        ]
  }
,
  {
        "id": "ENG-05-013",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "冠词用法·a/an/the用法与零",
        "icon": "🌏",
        "painPoint": "英语冠词用法句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道冠词用法题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "冠词a/an/the用法速记：a+辅音音素开头的词(a book/a dog)；an+元音音素开头的词(an apple/an hour注意hour的h不发音！)；the表示特指——说话双方都知道的东西(the sun太阳独一无二)、再次提到、序数词/最高级前，乐器前(play the piano)。不用冠词：三餐/球类/交通工具(by bus)。",
              "modelType": "知识卡片",
              "modelDesc": "冠词用法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1a34y197yN",
              "title": "PEP小学英语五年级上册复习《There be 句型及冠词回顾 》",
              "duration": "19:5",
              "searchKeyword": "五年级英语 冠词用法 讲解"
        },
        "video2": {
              "bvid": "BV15ZNnepEng",
              "title": "初中英语核心语法：冠词 | 定冠词 不定冠词 零冠词 知识点及应用 |新沪教牛津版英语课本 2025春季牛津版英语七年级下册 1单元 单元语法精讲",
              "duration": "33:2",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "英语盖老师"
        },
        "exams": [
              "2025年上海浦东期末真题《冠词用法》",
              "2024年上海浦东统考《冠词用法综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "冠词用法",
              "a/an/the用法与零冠词",
              "易错题型"
        ]
  }
,
  {
        "id": "CHI-06-013",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "名著阅读综合·中外名著阅读方法与人物分",
        "icon": "📖",
        "painPoint": "名著阅读综合是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道名著阅读综合题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "中外名著阅读三步：中国古典名著（四大名著）——了解朝代背景+理清人物关系（画人物关系图）+每天读一回；外国名著——先看译者序了解背景+记住外国人名特点+关注情节发展。写人物分析=人物+事件+性格+引用原文句子证明！",
              "modelType": "知识卡片",
              "modelDesc": "名著阅读综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1RCNiz4Ev4",
              "title": "五下期末考点—名著阅读",
              "duration": "1:27",
              "searchKeyword": "小学语文 名著阅读综合 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1nFwdzmEr4",
              "title": "五下第二单元四大名著知识点总结，14个必考题型答题技巧",
              "duration": "6:37",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "刘安妮博士语文"
        },
        "exams": [
              "2024年广州越秀期末真题《名著阅读综合专项训练》",
              "2023年广州越秀统考《名著阅读综合综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "名著阅读综合",
              "中外名著阅读方法与人物分析",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-05-018",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "找次品·用天平找次品的最优策略(",
        "icon": "🧮",
        "painPoint": "孩子在计算用天平找次品的最优策略(三分法)时频繁出错，不是看错数字就是忘记进退位。全班错误率高达38%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道找次品题全国平均错误率38%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "找次品记死三分法：每次把物品平均分三堆（不能平均则让最多堆和最少堆差1），天平称一次就能锁定次品在哪堆！称n次最多能从3^n个中找出次品。三个物品称一次，9个两次，27个三次！",
              "modelType": "知识卡片",
              "modelDesc": "找次品核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1zf4y1w7Nu",
              "title": "用一台没有砝码的天平，只准称三次，找出哪个球是次品？",
              "duration": "1:14",
              "searchKeyword": "五年级数学 找次品 用天平找次品的最优策略(三分法) 讲解"
        },
        "video2": {
              "bvid": "BV1P44y1S78n",
              "title": "2上41用心突破计算 参考答案讲解",
              "duration": "6:17",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "山就在那里ING飞"
        },
        "exams": [
              "2025年上海浦东期末真题《找次品典型应用题》",
              "2024年上海浦东统考《找次品综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "找次品",
              "用天平找次品的最优策略(三分法)",
              "易错题型"
        ]
  }
,
  {
        "id": "CHI-04-004",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "句型转换·把字句/被字句、反问句/",
        "icon": "📖",
        "painPoint": "句型转换是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道句型转换题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "句型转换四种必考类型：把字句(主动句)→被字句(被动句)，口诀：把'把'字放后，把'被'字放前，动词不变；反问句→陈述句，去掉反问词(难道/怎么/哪里)，问号改句号，语气词反转(不是→是，是→不是)；肯定句→双重否定句：加'不得不/不能不'等，意思要和原来一样！",
              "modelType": "知识卡片",
              "modelDesc": "句型转换核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1CC4y147Cr",
              "title": "【句式转换】快速掌握陈述句与反问句的转换方法",
              "duration": "9:4",
              "searchKeyword": "小学语文 句型转换 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1c3411j75V",
              "title": "小学语文公式阅读法-03句式转换方法-04肯定句改双重否定句（一）",
              "duration": "6:11",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "摘星星的蝎子"
        },
        "exams": [
              "2025年北京海淀期末真题《句型转换专项训练》",
              "2024年北京海淀统考《句型转换综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "句型转换",
              "把字句/被字句、反问句/陈述句、扩句缩句",
              "高频考点+易错"
        ]
  }
,
  {
        "id": "ENG-04-005",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "My Friends·外貌/性格描述词汇与He",
        "icon": "🌏",
        "painPoint": "英语My Friends句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道My Friends题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "描述朋友三句式：He/She is + 形容词(He is tall and strong/She is quiet and friendly)。He/She has + 外貌特征(He has short hair/big eyes/glasses)。介绍朋友Who is he/she? His/Her name is...注意区分：He is/has是描述，He likes是爱好！形容词和名词中间要加a/an，例如a big nose, a small mouth。",
              "modelType": "知识卡片",
              "modelDesc": "My Friends核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1GZ4y1L7mo",
              "title": "PEP四年级上册 Unit3 My friends",
              "duration": "9:3",
              "searchKeyword": "四年级英语 My Friends 讲解"
        },
        "video2": {
              "bvid": "BV1gV411U75Z",
              "title": "PEP(人教版)小学英语四年级上册Unit3 My friends课文动画及歌谣",
              "duration": "5:21",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "PEP小学英语打卡"
        },
        "exams": [
              "2025年北京海淀期末真题《My Friends》",
              "2024年北京海淀统考《My Friends综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "My Friends",
              "外貌/性格描述词汇与He/She has...",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-06-009",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "修辞手法综合·八种修辞手法综合辨析与作",
        "icon": "📖",
        "painPoint": "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动形象'四个字。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道修辞手法综合题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "辨别修辞就背口诀：比喻像什么，拟人当人写，排比三句起，夸张往大说，设问自问自答，反问答在问中。",
              "modelType": "知识卡片",
              "modelDesc": "修辞手法综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Zg4y157zf",
              "title": "小学3—6年级修辞手法判断和作用高分答题框架+练习讲解",
              "duration": "7:44",
              "searchKeyword": "小学语文 修辞手法综合 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1g44y147wU",
              "title": "阅读理解｜修辞手法的作用｜老师教你万能答题模板！",
              "duration": "1:2",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "青知老师教语文"
        },
        "exams": [
              "2024年广州越秀期末真题《修辞手法综合专项训练》",
              "2023年广州越秀统考《修辞手法综合综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "修辞手法综合",
              "八种修辞手法综合辨析与作用分析",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-04-016",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "角的度量·量角器使用与角度计算",
        "icon": "🧮",
        "painPoint": "画量角器使用与角度计算时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道角的度量题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "量角器使用三步：第一步，量角器的中心点对准角的顶点；第二步，0刻度线和角的一条边重合；第三步，读取另一条边对应的刻度（注意看内圈还是外圈）！",
              "modelType": "知识卡片",
              "modelDesc": "角的度量核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1oh411b7gu",
              "title": "角度计算｜四年级《角的度量》重难点&amp;必考题型",
              "duration": "3:51",
              "searchKeyword": "四年级数学 角的度量 量角器使用与角度计算 讲解"
        },
        "video2": {
              "bvid": "BV19i4y1j7eh",
              "title": "北师大版数学四年级上册-第二单元线与角-2.6.1角的度量（二）（认识量角器）",
              "duration": "2:42",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "bili_我能行微课堂"
        },
        "exams": [
              "2025年北京海淀期末真题《角的度量典型应用题》",
              "2024年北京海淀统考《角的度量综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "角的度量",
              "量角器使用与角度计算",
              "易错题型"
        ]
  }
,
  {
        "id": "CHI-04-011",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "关联词语·因果/转折/条件/假设/",
        "icon": "📖",
        "painPoint": "不但……而且……还是虽然……但是……？选关联词全靠语感蒙。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道关联词语题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "关联词看逻辑：因为所以因果，虽然但是转折，如果就假设，不但而且递进，不是就是选择，只要就条件。",
              "modelType": "知识卡片",
              "modelDesc": "关联词语核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1gi4y1n7uk",
              "title": "三年级下册语文一至四单元综合复习四（关联词语等）",
              "duration": "26:7",
              "searchKeyword": "小学语文 关联词语 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1DZ4y137Lp",
              "title": "【小学语文】关联词语八大类型之一",
              "duration": "1:35",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "陪孩子读书呀"
        },
        "exams": [
              "2025年北京海淀期末真题《关联词语专项训练》",
              "2024年北京海淀统考《关联词语综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "关联词语",
              "因果/转折/条件/假设/递进/并列",
              "易错题型"
        ]
  }
,
  {
        "id": "ENG-04-019",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "介词用法·in/on/at/und",
        "icon": "🌏",
        "painPoint": "in、on、at到底用哪个？全靠蒙。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道介词用法题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "介词in/on/at/under用法口诀：in在……里面/在年月季节(in the box/in 2024/in summer)；on在……上面有接触/在星期日期(on the desk/on Monday)；at在……点/在具体地点(at 7 o'clock/at school)；under在……正下方(under the desk)；near在……附近(near the window)；between在……之间(between the two trees)。",
              "modelType": "知识卡片",
              "modelDesc": "介词用法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV16N4y1a7RW",
              "title": "介词用法探秘，介词 = 说话人的主观心态",
              "duration": "13:4",
              "searchKeyword": "四年级英语 介词用法 讲解"
        },
        "video2": {
              "bvid": "BV1Rm4y117Cq",
              "title": "学生超爱的英文歌曲方位介词 | pep三年级下册英语第四单元课前热身律动",
              "duration": "1:13",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "Heyiio-"
        },
        "exams": [
              "2025年北京海淀期末真题《介词用法》",
              "2024年北京海淀统考《介词用法综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "介词用法",
              "in/on/at/under/behind/between等",
              "易错题型"
        ]
  }
,
  {
        "id": "CHI-05-011",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "关联词语进阶·选择关系/取舍关系、多重",
        "icon": "📖",
        "painPoint": "不但……而且……还是虽然……但是……？选关联词全靠语感蒙。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道关联词语进阶题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "关联词看逻辑：因为所以因果，虽然但是转折，如果就假设，不但而且递进，不是就是选择，只要就条件。",
              "modelType": "知识卡片",
              "modelDesc": "关联词语进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1gi4y1n7uk",
              "title": "三年级下册语文一至四单元综合复习四（关联词语等）",
              "duration": "26:7",
              "searchKeyword": "小学语文 关联词语进阶 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1DZ4y137Lp",
              "title": "【小学语文】关联词语八大类型之一",
              "duration": "1:35",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "陪孩子读书呀"
        },
        "exams": [
              "2025年上海浦东期末真题《关联词语进阶专项训练》",
              "2024年上海浦东统考《关联词语进阶综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "关联词语进阶",
              "选择关系/取舍关系、多重复句",
              "易错题型"
        ]
  }
,
  {
        "id": "CHI-06-011",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "非连续性文本综合·多材料综合阅读与信息整合",
        "icon": "📖",
        "painPoint": "非连续性文本综合是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道非连续性文本综合题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "非连续性文本综合四步：第一步，快速浏览所有材料（图文表都有），看标题统领；第二步，逐个材料提取关键信息（人名/数字/时间/结论）；第三步，找材料之间的关系（互相补充还是对比）；第四步，综合信息答题——答案可能分散在不同材料里，要汇总！",
              "modelType": "知识卡片",
              "modelDesc": "非连续性文本综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1UNj3ziE4A",
              "title": "【中考阅读】3步掌握阅读非连续性文本核心方法",
              "duration": "19:34",
              "searchKeyword": "小学语文 非连续性文本综合 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1Rc411K7Fo",
              "title": "小学4——6年级非连续性文本阅读高分技巧+解题讲解",
              "duration": "14:2",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "语文莹莹老师"
        },
        "exams": [
              "2024年广州越秀期末真题《非连续性文本综合专项训练》",
              "2023年广州越秀统考《非连续性文本综合综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "非连续性文本综合",
              "多材料综合阅读与信息整合",
              "新题型"
        ]
  }
,
  {
        "id": "ENG-06-014",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "Then and Now·过去与现在的对比表达",
        "icon": "🌏",
        "painPoint": "英语Then and Now句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道Then and Now题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "Then and Now 过去与现在对比：过去式用was/were/went/did/could等，现在式用am/is/are/go/do/can等。对比句式：Before, I was short. Now, I am tall. 时间词：then=那时候，now=现在，before=以前。关键提醒：描述过去的事动词一定要变过去式！",
              "modelType": "知识卡片",
              "modelDesc": "Then and Now核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1xZ4y1F78o",
              "title": "PEP小学英语六年级下册Unit 4 Then and now",
              "duration": "14:44",
              "searchKeyword": "六年级英语 Then and Now 讲解"
        },
        "video2": {
              "bvid": "BV1SQ4y1P7Ji",
              "title": "PEP小学英语六年级下册第四单元第五课时微课 Unit 4 Then and now Part B Read and write 双语字幕版",
              "duration": "19:50",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "红伟老师"
        },
        "exams": [
              "2024年广州越秀期末真题《Then and Now》",
              "2023年广州越秀统考《Then and Now综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "Then and Now",
              "过去与现在的对比表达",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-06-003",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "字词综合·易错字辨析、成语/谚语/",
        "icon": "📖",
        "painPoint": "字词综合是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来字词综合这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "字词综合三板斧：第一，易错字——把容易写错笔画的字单独抄写，对比正确和错误写法；第二，成语/谚语/歇后语——分类记忆（数字成语、动物成语、天气谚语、谐音歇后语）；第三，多义字——一个字在不同词语里意思不一样（如'深'：水深/夜深/感情深），考试选意思要放回句子里判断！",
              "modelType": "知识卡片",
              "modelDesc": "字词综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Mx42127sE",
              "title": "基础生字词如何快速记住",
              "duration": "2:17",
              "searchKeyword": "小学语文 字词综合 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1Ha4y1q7z7",
              "title": "期末常考这个字词能不能删换高分框架",
              "duration": "2:37",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "语文莹莹老师"
        },
        "exams": [
              "2024年广州越秀期末真题《字词综合专项训练》",
              "2023年广州越秀统考《字词综合综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "字词综合",
              "易错字辨析、成语/谚语/歇后语积累",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-04-024",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "小数的加减法·竖式对齐与进退位",
        "icon": "🧮",
        "painPoint": "孩子在计算竖式对齐与进退位时频繁出错，不是看错数字就是忘记进退位。全班错误率高达24%。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来小数的加减法这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "小数加减法核心就是对齐！小数点对齐=相同数位对齐，然后像整数一样从最低位开始加减，最后的结果里别忘了点上小数点。进位退位和整数一模一样！",
              "modelType": "知识卡片",
              "modelDesc": "小数的加减法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV15h4y1X7QG",
              "title": "一年级连续退位减法到底费了我多少劲？？",
              "duration": "9:24",
              "searchKeyword": "四年级数学 小数的加减法 竖式对齐与进退位 讲解"
        },
        "video2": {
              "bvid": "BV1Zp4y1S7Zk",
              "title": "人教版三年级下数学小数的认识《小数加减法》竖式计算详细讲解：加法",
              "duration": "20:18",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "百分百酒精"
        },
        "exams": [
              "2025年北京海淀期末真题《小数的加减法典型应用题》",
              "2024年北京海淀统考《小数的加减法综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "小数的加减法",
              "竖式对齐与进退位",
              "易错题型"
        ]
  }
,
  {
        "id": "CHI-04-013",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "词语辨析·同音字/形近字/一词多义",
        "icon": "📖",
        "painPoint": "词语辨析是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来词语辨析这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "同音字辨析看偏旁部首！偏旁相同含义相关（'清/晴/情'都有青，清=氵水→清澈，晴=日→天晴，情=忄心→感情）。形近字差一笔意思天差地别（'己/已/巳'：己自己不出头，已已经半出头，巳巳时全封口）。用联想法记差别最快！",
              "modelType": "知识卡片",
              "modelDesc": "词语辨析核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Sq4y1P73q",
              "title": "【成考高升专】语文词语辨句辨析答题思路",
              "duration": "16:46",
              "searchKeyword": "小学语文 词语辨析 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1sU411m7ET",
              "title": "【字词】第231节：语文字词精讲，写作小技巧之少叙述多画面",
              "duration": "19:35",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "梓墨说语文"
        },
        "exams": [
              "2025年北京海淀期末真题《词语辨析专项训练》",
              "2024年北京海淀统考《词语辨析综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "词语辨析",
              "同音字/形近字/一词多义",
              "易错题型"
        ]
  }
,
  {
        "id": "CHI-04-015",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "观察日记与写作·连续观察、细节描写",
        "icon": "📖",
        "painPoint": "观察日记与写作是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道观察日记与写作题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "观察日记写作三招：第一，连续观察同一个东西（植物/动物/天气）至少3天，每天记录变化；第二，五感法描写——眼看（颜色形状大小变化）+手摸（触感）+鼻闻（气味）+耳听（声音）+心想（看到变化时的想法）；第三，格式=日期+天气+正文，开头写'今天我观察到……'。",
              "modelType": "知识卡片",
              "modelDesc": "观察日记与写作核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1BP4y1p7zw",
              "title": "四年级小学同步作文——写观察日记",
              "duration": "14:40",
              "searchKeyword": "小学语文 观察日记与写作 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1pe411T7Db",
              "title": "描写事物：五感观察法，写观察日记。同步作文四年级上册第3单元习作",
              "duration": "11:15",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "海豚老师的语文学堂"
        },
        "exams": [
              "2025年北京海淀期末真题《观察日记与写作专项训练》",
              "2024年北京海淀统考《观察日记与写作综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "观察日记与写作",
              "连续观察、细节描写",
              "综合应用"
        ]
  }
,
  {
        "id": "CHI-04-016",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "文言文入门·短小文言文理解与关键词解",
        "icon": "📖",
        "painPoint": "看到古文就头疼，关键实词的意思猜不对，翻译句子总是不通顺。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道文言文入门题全国平均错误率35%，你也是在这里卡住了？来，老师带你一步一步拆解。先告诉我，你做到哪一步开始不确定的？",
              "interactionType": "guided-step"
        },
        "chip": {
              "script": "文言文翻译口诀：'留删补换调'。人名地名保留，无义虚词删除，省略成分补上，单音词换双音词，倒装句调顺序。",
              "modelType": "知识卡片",
              "modelDesc": "文言文入门核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "文言文入门 讲解视频",
              "duration": "",
              "searchKeyword": "小学语文 文言文入门 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《文言文入门专项训练》",
              "2024年北京海淀统考《文言文入门综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "文言文入门",
              "短小文言文理解与关键词解释",
              "新题型"
        ]
  }
,
  {
        "id": "MATH-04-021",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "四则运算·加减乘除混合运算与括号规",
        "icon": "🧮",
        "painPoint": "孩子在计算加减乘除混合运算与括号规则时频繁出错，不是看错数字就是忘记进退位。全班错误率高达20%。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来四则运算这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "四则运算就一个规则：先乘除，后加减，有小括号的先算小括号里的。还有中括号？先小括号再中括号，最后才算括号外面的。运算顺序错了全盘皆输！",
              "modelType": "知识卡片",
              "modelDesc": "四则运算核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1aV4y197so",
              "title": "四年级数学：加减乘除的运算定律和运算顺序讲解",
              "duration": "7:16",
              "searchKeyword": "四年级数学 四则运算 加减乘除混合运算与括号规则 讲解"
        },
        "video2": {
              "bvid": "BV1iv411s7cx",
              "title": "二年级下册数学带括号的加减乘除混合运算",
              "duration": "4:52",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "闽南宝"
        },
        "exams": [
              "2025年北京海淀期末真题《四则运算典型应用题》",
              "2024年北京海淀统考《四则运算综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "四则运算",
              "加减乘除混合运算与括号规则",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-04-008",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "古诗文·四年级必背古诗理解与默写",
        "icon": "📖",
        "painPoint": "古诗背了又忘，默写总写错别字，诗句意思理解不透彻。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来古诗文这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "古诗学习三件套：先读准字音，再解关键字词，最后翻译整句。默写之前先理解意思，死记硬背改不了错别字！",
              "modelType": "知识卡片",
              "modelDesc": "古诗文核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Mm4y1o74D",
              "title": "小学语文诗句翻译方法，句子理解题答题技巧",
              "duration": "1:57",
              "searchKeyword": "小学语文 古诗文 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《古诗文专项训练》",
              "2024年北京海淀统考《古诗文综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "古诗文",
              "四年级必背古诗理解与默写",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-05-007",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "修辞手法进阶·设问/反问/对偶/反复的",
        "icon": "📖",
        "painPoint": "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动形象'四个字。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道修辞手法进阶题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "辨别修辞就背口诀：比喻像什么，拟人当人写，排比三句起，夸张往大说，设问自问自答，反问答在问中。",
              "modelType": "知识卡片",
              "modelDesc": "修辞手法进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1Zg4y157zf",
              "title": "小学3—6年级修辞手法判断和作用高分答题框架+练习讲解",
              "duration": "7:44",
              "searchKeyword": "小学语文 修辞手法进阶 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1g44y147wU",
              "title": "阅读理解｜修辞手法的作用｜老师教你万能答题模板！",
              "duration": "1:2",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "青知老师教语文"
        },
        "exams": [
              "2025年上海浦东期末真题《修辞手法进阶专项训练》",
              "2024年上海浦东统考《修辞手法进阶综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "修辞手法进阶",
              "设问/反问/对偶/反复的识别与作用",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-06-010",
        "grade": 6,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "关联词综合·八种关系综合辨析、选择填",
        "icon": "📖",
        "painPoint": "不但……而且……还是虽然……但是……？选关联词全靠语感蒙。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道关联词综合题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "关联词八种关系口诀：因为……所以……（因果，前因后果）；虽然……但是……（转折，前后相反）；如果……就……（假设，假如怎样就怎样）；不但……而且……（递进，更进一步）；不是……就是……（选择，二中选一）；只要……就……（条件，满足条件就出结果）；一……就……（承接，先后发生）；宁可……也不……（取舍，选前者舍后者）。做题先读句子判断前后是啥关系！",
              "modelType": "知识卡片",
              "modelDesc": "关联词综合核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1ES4y147PP",
              "title": "【阿甘】不一样的语文客观题答题技巧/经验方法分享/干货满满！/客观题做题思路引导！/附常用关联词表",
              "duration": "4:53",
              "searchKeyword": "小学语文 关联词综合 解题技巧 方法"
        },
        "video2": {
              "bvid": "BV1gh4111721",
              "title": "小学语文考点，关联词运用技巧，例句讲解",
              "duration": "3:21",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "寇老师的语文课堂"
        },
        "exams": [
              "2024年广州越秀期末真题《关联词综合专项训练》",
              "2023年广州越秀统考《关联词综合综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "关联词综合",
              "八种关系综合辨析、选择填空",
              "易错题型"
        ]
  }
,
  {
        "id": "ENG-06-013",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "Where Did You Go·假期活动词汇与过去时问答",
        "icon": "🌏",
        "painPoint": "英语Where Did You Go句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道Where Did You Go题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "过去时问答句型：问——Where did you go? What did you do? How did you go? Who did you go with? 答——I went to + 地点，I + 过去式动词。不规则过去式：go→went, see→saw, eat→ate, buy→bought, take→took, ride→rode, swim→swam。",
              "modelType": "知识卡片",
              "modelDesc": "Where Did You Go核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "BV1EE41137Re",
              "title": "PEP小学英语六年级下册第三单元第一课时微课Unit 3 Where did you go? Part A Let&#x27;s try &amp; Let&#x27;s talk",
              "duration": "13:5",
              "searchKeyword": "六年级英语 Where Did You Go 讲解"
        },
        "video2": {
              "bvid": "BV16p4y1h7Cp",
              "title": "FishingPEP六年级英语下册Unit 3 Where did you go?",
              "duration": "11:57",
              "status": "已绑定",
              "searchKeyword": "",
              "note": "Fishing英语辅导"
        },
        "exams": [
              "2024年广州越秀期末真题《Where Did You Go》",
              "2023年广州越秀统考《Where Did You Go综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "Where Did You Go",
              "假期活动词汇与过去时问答",
              "情景对话"
        ]
  }
,
  {
        "id": "MATH-04-015",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "大数的认识·亿以内数的读写与比较",
        "icon": "🧮",
        "painPoint": "孩子在计算亿以内数的读写与比较时频繁出错，不是看错数字就是忘记进退位。全班错误率高达22%。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来大数的认识这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "读大数，先分级！从右往左每四位画一道竖线，万级读完加个'万'，亿级读完加个'亿'。4 5 6 7 | 8 9 0 1 → 四千五百六十七万八千九百零一。记住：每一级的读法跟个级一模一样！",
              "modelType": "知识卡片",
              "modelDesc": "大数的认识核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "大数的认识 讲解视频",
              "duration": "",
              "searchKeyword": "四年级数学 大数的认识 亿以内数的读写与比较 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《大数的认识典型应用题》",
              "2024年北京海淀统考《大数的认识综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "大数的认识",
              "亿以内数的读写与比较",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-04-007",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "修辞手法·比喻、拟人、排比、夸张的",
        "icon": "📖",
        "painPoint": "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动形象'四个字。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来修辞手法这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "辨别修辞就背口诀：比喻像什么，拟人当人写，排比三句起，夸张往大说，设问自问自答，反问答在问中。",
              "modelType": "知识卡片",
              "modelDesc": "修辞手法核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "修辞手法 讲解视频",
              "duration": "",
              "searchKeyword": "小学语文 修辞手法 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《修辞手法专项训练》",
              "2024年北京海淀统考《修辞手法综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "修辞手法",
              "比喻、拟人、排比、夸张的识别与仿写",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-04-009",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "标点符号·引号/省略号/破折号的用",
        "icon": "📖",
        "painPoint": "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道标点符号题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "小学生必会三种标点：引号（''或""）——引用别人说的话、表示特殊含义、强调重点；省略号（……6个点）——话没说完、表示省略、说话断断续续；破折号（——占两格）——解释说明、意思转折、声音延长。口诀：话用引号括，没完用省略，解释用破折！",
              "modelType": "知识卡片",
              "modelDesc": "标点符号核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "标点符号 讲解视频",
              "duration": "",
              "searchKeyword": "小学语文 标点符号 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《标点符号专项训练》",
              "2024年北京海淀统考《标点符号综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "标点符号",
              "引号/省略号/破折号的用法",
              "基础题型"
        ]
  }
,
  {
        "id": "MATH-04-017",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "三位数乘两位数·竖式乘法与估算",
        "icon": "🧮",
        "painPoint": "孩子在计算竖式乘法与估算时频繁出错，不是看错数字就是忘记进退位。全班错误率高达18%。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来三位数乘两位数这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "三位数乘两位数竖式秘诀：用两位数的个位和十位分别去乘三位数，个位乘的结果末位对个位，十位乘的结果末位对十位，两行结果末位对齐后加起来。别忘了补0占位！",
              "modelType": "知识卡片",
              "modelDesc": "三位数乘两位数核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "三位数乘两位数 讲解视频",
              "duration": "",
              "searchKeyword": "四年级数学 三位数乘两位数 竖式乘法与估算 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《三位数乘两位数典型应用题》",
              "2024年北京海淀统考《三位数乘两位数综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "三位数乘两位数",
              "竖式乘法与估算",
              "高频考点"
        ]
  }
,
  {
        "id": "CHI-04-003",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "字词基础·多音字辨析、近反义词、成",
        "icon": "📖",
        "painPoint": "字词基础是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来字词基础这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "多音字记法——根据字义区分读音（长cháng=长度，zhǎng=生长）。近义词——意思相近但用法可能不同（美丽/漂亮，前者书面后者口语）。反义词——找相反意思（高/矮，快/慢）。成语——要记完整不要只背意思，考试常考补写成语的其中一个字！",
              "modelType": "知识卡片",
              "modelDesc": "字词基础核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "字词基础 讲解视频",
              "duration": "",
              "searchKeyword": "小学语文 字词基础 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《字词基础专项训练》",
              "2024年北京海淀统考《字词基础综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "字词基础",
              "多音字辨析、近反义词、成语积累",
              "高频考点"
        ]
  }
,
  {
        "id": "MATH-05-012",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "观察物体(三)·三视图初步——从三个方向",
        "icon": "🧮",
        "painPoint": "画三视图初步——从三个方向还原立体时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道观察物体(三)题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "三视图还原立体图形顺口溜：从上面看形状（整体布局），从前面看列数（每列有几个），从侧面看层数（最高几层）。先根据上面视图摆出平面位置，再根据前面和侧面确定每列高度！",
              "modelType": "知识卡片",
              "modelDesc": "观察物体(三)核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "观察物体(三) 讲解视频",
              "duration": "",
              "searchKeyword": "五年级数学 观察物体(三) 三视图初步——从三个方向还原立体 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《观察物体(三)典型应用题》",
              "2024年上海浦东统考《观察物体(三)综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "观察物体(三)",
              "三视图初步——从三个方向还原立体",
              "空间想象"
        ]
  }
,
  {
        "id": "ENG-04-006",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "My Home·房间词汇与Where i",
        "icon": "🌏",
        "painPoint": "英语My Home句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来My Home这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "My Home房间场景问答：Where is the kitchen/bedroom/living room/bathroom/study? It's on the...floor。Where is your mother/father? He/She is in the kitchen/living room/study。方位词：in the kitchen在厨房里, on the sofa在沙发上, under the table在桌子下, near the window在窗户旁。问具体位置：Is she in the...? Yes, she is./No, she isn't。",
              "modelType": "知识卡片",
              "modelDesc": "My Home核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "My Home 讲解视频",
              "duration": "",
              "searchKeyword": "四年级英语 My Home 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《My Home》",
              "2024年北京海淀统考《My Home综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "My Home",
              "房间词汇与Where is/are...问答",
              "基础句型"
        ]
  }
,
  {
        "id": "ENG-04-008",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "Meet My Family·家庭成员词汇与职业介绍",
        "icon": "🌏",
        "painPoint": "英语Meet My Family句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来Meet My Family这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "介绍家庭成员：How many people are there in your family? There are...(数字)。我家有...口人。Who are they? They are my parents/grandparents/uncle/aunt/cousin...。问职业：What's your father's/mother's job? He/She is a/an + 职业。注意：parents=父母两人，father/mother=单个。",
              "modelType": "知识卡片",
              "modelDesc": "Meet My Family核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "Meet My Family 讲解视频",
              "duration": "",
              "searchKeyword": "四年级英语 Meet My Family 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《Meet My Family》",
              "2024年北京海淀统考《Meet My Family综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "Meet My Family",
              "家庭成员词汇与职业介绍",
              "情景对话"
        ]
  }
,
  {
        "id": "ENG-04-013",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "What Time Is It·时间表达与日常活动描述",
        "icon": "🌏",
        "painPoint": "英语What Time Is It句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来What Time Is It这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "时间表达两种方法：顺读法——先说小时再说分钟(six thirty=6:30, seven fifteen=7:15)；逆读法——分钟≤30用past(过)：ten past six=6:10，half past six=6:30；分钟>30用to(差)：ten to seven=6:50(差10分到7点)。问时间：What time is it? It's... 问活动时间：What time do you...? I... at...",
              "modelType": "知识卡片",
              "modelDesc": "What Time Is It核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "What Time Is It 讲解视频",
              "duration": "",
              "searchKeyword": "四年级英语 What Time Is It 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《What Time Is It》",
              "2024年北京海淀统考《What Time Is It综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "What Time Is It",
              "时间表达与日常活动描述",
              "情景对话"
        ]
  }
,
  {
        "id": "ENG-04-017",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "Shopping·购物对话与How muc",
        "icon": "🌏",
        "painPoint": "英语Shopping句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来Shopping这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "购物对话万能模板：店员——Can I help you? / What can I do for you? 顾客——I want a/an/some... / Can I try it on? / How much is it? 价格——It's... yuan. / They're... yuan. 决定购买——I'll take it. / Here's the money. 注意：How much问价钱(不可数)，How many问数量(可数)。",
              "modelType": "知识卡片",
              "modelDesc": "Shopping核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "Shopping 讲解视频",
              "duration": "",
              "searchKeyword": "四年级英语 Shopping 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《Shopping》",
              "2024年北京海淀统考《Shopping综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "Shopping",
              "购物对话与How much...问答",
              "情景对话"
        ]
  }
,
  {
        "id": "ENG-05-006",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "What Can You Do·能力表达(can/can",
        "icon": "🌏",
        "painPoint": "英语What Can You Do句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来What Can You Do这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "能力表达can句型：问——What can you do? / Can you + 动词原形？ 答——I can + 动词原形(sing English songs/play the pipa/do kung fu/draw cartoons)。can后永远用动词原形！否定=can't(cannot)，Can you...? 答：Yes, I can. / No, I can't。注意乐器前加the(play the piano)，球类前不加(play football)。",
              "modelType": "知识卡片",
              "modelDesc": "What Can You Do核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "What Can You Do 讲解视频",
              "duration": "",
              "searchKeyword": "五年级英语 What Can You Do 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《What Can You Do》",
              "2024年上海浦东统考《What Can You Do综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "What Can You Do",
              "能力表达(can/can't)与动词短语",
              "基础句型"
        ]
  }
,
  {
        "id": "ENG-06-007",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "What Does He Do·职业词汇与第三人称单数问",
        "icon": "🌏",
        "painPoint": "英语What Does He Do句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来What Does He Do这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "问职业两种问法：What does he/she do? = What is his/her job? 回答都用 He/She is a/an + 职业(teacher/doctor/nurse/farmer/policeman)。第三人称单数助动词用does！Where does he work? He works in a hospital. How does he go to work? He goes by car。注意三单动词+s/es！",
              "modelType": "知识卡片",
              "modelDesc": "What Does He Do核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "What Does He Do 讲解视频",
              "duration": "",
              "searchKeyword": "六年级英语 What Does He Do 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2024年广州越秀期末真题《What Does He Do》",
              "2023年广州越秀统考《What Does He Do综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "What Does He Do",
              "职业词汇与第三人称单数问答",
              "基础句型"
        ]
  }
,
  {
        "id": "ENG-06-011",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "How Tall Are You·身高体重/比较级句型应用",
        "icon": "🌏",
        "painPoint": "英语How Tall Are You句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来How Tall Are You这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "比较级就一个句型：A + am/is/are + 形容词比较级 + than + B。规则：短词+er(tall→taller, short→shorter)；以e结尾+r(nice→nicer)；重读闭音节双写+er(big→bigger, thin→thinner)；辅音+y改i+er(heavy→heavier)。最高级+est前面加the。必背三个不规则：good→better→best, bad→worse→worst, many/much→more→most。",
              "modelType": "知识卡片",
              "modelDesc": "How Tall Are You核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "How Tall Are You 讲解视频",
              "duration": "",
              "searchKeyword": "六年级英语 How Tall Are You 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2024年广州越秀期末真题《How Tall Are You》",
              "2023年广州越秀统考《How Tall Are You综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "How Tall Are You",
              "身高体重/比较级句型应用",
              "基础句型"
        ]
  }
,
  {
        "id": "ENG-04-004",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "My Classroom·教室物品词汇与There",
        "icon": "🌏",
        "painPoint": "英语My Classroom句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来My Classroom这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "There be句型教室场景：There is a/an + 单数物体 + 地点(There is a blackboard in the classroom)。There are + 复数物体 + 地点(There are many desks and chairs)。Where is the...? It's near the window. 方位词：in/on/under/near/in front of/behind。名词单数前加a/an！",
              "modelType": "知识卡片",
              "modelDesc": "My Classroom核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "My Classroom 讲解视频",
              "duration": "",
              "searchKeyword": "四年级英语 My Classroom 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《My Classroom》",
              "2024年北京海淀统考《My Classroom综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "My Classroom",
              "教室物品词汇与There be句型",
              "基础句型"
        ]
  }
,
  {
        "id": "ENG-04-007",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "Dinner's Ready·食物词汇与Would y",
        "icon": "🌏",
        "painPoint": "英语Dinner's Ready句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来Dinner's Ready这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "食物与请求句型：问想吃什么——What would you like? I'd like some... (rice/chicken/vegetables/soup)。礼貌请求——Would you like a knife and fork? Yes, please. / No, thanks。餐具词汇：chopsticks筷子, knife刀, fork叉, spoon勺, bowl碗。Help yourself!(随便吃！)不可数名词用some：some beef/soup/rice。",
              "modelType": "知识卡片",
              "modelDesc": "Dinner's Ready核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "Dinner's Ready 讲解视频",
              "duration": "",
              "searchKeyword": "四年级英语 Dinner's Ready 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《Dinner's Ready》",
              "2024年北京海淀统考《Dinner's Ready综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "Dinner's Ready",
              "食物词汇与Would you like...句型",
              "情景对话"
        ]
  }
,
  {
        "id": "ENG-05-004",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "My Week·星期词汇与课程表达、频度",
        "icon": "🌏",
        "painPoint": "英语My Week句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来My Week这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "星期与课程表达：What do you have on Mondays? I have Chinese/English/maths/music/PE/art/science。频度副词排序（从多到少）：always(总是)＞usually(通常)＞often(经常)＞sometimes(有时)＞never(从不)。位置口诀：be后实前——I am always happy. / I always play football on Sundays。",
              "modelType": "知识卡片",
              "modelDesc": "My Week核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "My Week 讲解视频",
              "duration": "",
              "searchKeyword": "五年级英语 My Week 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《My Week》",
              "2024年上海浦东统考《My Week综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "My Week",
              "星期词汇与课程表达、频度副词",
              "基础句型"
        ]
  }
,
  {
        "id": "ENG-06-003",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "How Can I Get There·问路指路词汇与句型",
        "icon": "🌏",
        "painPoint": "英语How Can I Get There句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来How Can I Get There这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "问路万能模板：问——Excuse me, how can I get to the...? / Where is the...?；指路——Go straight(直走) → Turn left/right at the...(在……左转/右转) → It's on your left/right(在你左/右边) → It's near/behind/in front of...(在……附近/后面/前面)。关键介词：crossing交叉口，traffic lights红绿灯。",
              "modelType": "知识卡片",
              "modelDesc": "How Can I Get There核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "How Can I Get There 讲解视频",
              "duration": "",
              "searchKeyword": "六年级英语 How Can I Get There 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2024年广州越秀期末真题《How Can I Get There》",
              "2023年广州越秀统考《How Can I Get There综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "How Can I Get There",
              "问路指路词汇与句型",
              "情景对话"
        ]
  }
,
  {
        "id": "CHI-04-014",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "句子排序·按逻辑顺序排列句子",
        "icon": "📖",
        "painPoint": "句子排序是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来句子排序这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "句子排序三步法：第一步，找第一句——通常是介绍时间/地点/人物的句子，或总起句；第二步，找连接词——'首先/接着/然后/最后''第一/第二'这些词能锁定顺序；第三步，找逻辑链——时间先后的按时间排，事情发展的按因果排，空间描写的按方位排。排好后读一遍验证通不通！",
              "modelType": "知识卡片",
              "modelDesc": "句子排序核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "句子排序 讲解视频",
              "duration": "",
              "searchKeyword": "小学语文 句子排序 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《句子排序专项训练》",
              "2024年北京海淀统考《句子排序综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "句子排序",
              "按逻辑顺序排列句子",
              "逻辑思维"
        ]
  }
,
  {
        "id": "CHI-05-009",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "标点符号进阶·分号/书名号用法、标点综",
        "icon": "📖",
        "painPoint": "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来标点符号进阶这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "小学生标点综合检查五处易错：第一，一句话说完用句号（。），不要一逗到底！第二，分号（；）只用在并列的分句之间；第三，书名号（《》）只用书名篇名，活动/课程不用；第四，引号（''）里再有引号用双引号（""）；第五，顿号（、）用在并列词语之间，逗号（，）用在分句之间。",
              "modelType": "知识卡片",
              "modelDesc": "标点符号进阶核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "标点符号进阶 讲解视频",
              "duration": "",
              "searchKeyword": "小学语文 标点符号进阶 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《标点符号进阶专项训练》",
              "2024年上海浦东统考《标点符号进阶综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "标点符号进阶",
              "分号/书名号用法、标点综合辨析",
              "基础题型"
        ]
  }
,
  {
        "id": "CHI-04-012",
        "grade": 4,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "非连续性文本·图表/说明书/广告信息提",
        "icon": "📖",
        "painPoint": "非连续性文本是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道非连续性文本题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "非连续性文本三读法：第一读——先看标题，知道这材料在讲什么；第二读——看图表（图表的标题、横轴纵轴代表什么、图例说明）；第三读——看文字（说明书/广告找关键信息：时间/地点/价格/要求）。做题时回到材料中找证据，不能用猜的！",
              "modelType": "知识卡片",
              "modelDesc": "非连续性文本核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "非连续性文本 讲解视频",
              "duration": "",
              "searchKeyword": "小学语文 非连续性文本 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《非连续性文本专项训练》",
              "2024年北京海淀统考《非连续性文本综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "非连续性文本",
              "图表/说明书/广告信息提取",
              "新题型"
        ]
  }
,
  {
        "id": "ENG-04-014",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "Weather·天气词汇与What's ",
        "icon": "🌏",
        "painPoint": "英语Weather句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来Weather这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "天气问答模板：What's the weather like today/in Beijing? It's + 天气词(sunny晴/cloudy多云/rainy下雨/windy刮风/snowy下雪/hot热/cold冷/warm暖和/cool凉爽)。温度：It's... degrees(度)。注意区分：rain(n.雨)→rainy(adj.下雨的)，snow(n.雪)→snowy(adj.下雪的)。",
              "modelType": "知识卡片",
              "modelDesc": "Weather核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "Weather 讲解视频",
              "duration": "",
              "searchKeyword": "四年级英语 Weather 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《Weather》",
              "2024年北京海淀统考《Weather综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "Weather",
              "天气词汇与What's the weather like...",
              "情景对话"
        ]
  }
,
  {
        "id": "ENG-05-003",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "What's He Like·性格/外貌描述词汇与句型",
        "icon": "🌏",
        "painPoint": "英语What's He Like句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来What's He Like这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "描述人物两个维度：外貌——He/She is tall/short/young/old。He/She has + 外貌特征。性格——He/She is kind/strict/friendly/hard-working/clever/shy/polite/helpful。问：What's he/she like? (问性格/外貌) 答：He/She is... 注意区分：What's he like?(他怎样) vs What does he like?(他喜欢什么)！",
              "modelType": "知识卡片",
              "modelDesc": "What's He Like核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "What's He Like 讲解视频",
              "duration": "",
              "searchKeyword": "五年级英语 What's He Like 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《What's He Like》",
              "2024年上海浦东统考《What's He Like综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "What's He Like",
              "性格/外貌描述词汇与句型",
              "基础句型"
        ]
  }
,
  {
        "id": "ENG-05-005",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "What Would You Like·食物/饮料词汇与点餐对话",
        "icon": "🌏",
        "painPoint": "英语What Would You Like句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来What Would You Like这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "点餐对话模板：服务员——What would you like to eat/drink? / Can I help you? 顾客——I'd like some/a/an... (sandwich/hamburger/salad/ice cream/juice/tea/milk)。问别人想吃——What would you like? / Would you like some...? 答：Yes, please. / No, thank you. I'd like... My favourite food is... 因为It's delicious/healthy/sweet。",
              "modelType": "知识卡片",
              "modelDesc": "What Would You Like核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "What Would You Like 讲解视频",
              "duration": "",
              "searchKeyword": "五年级英语 What Would You Like 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《What Would You Like》",
              "2024年上海浦东统考《What Would You Like综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "What Would You Like",
              "食物/饮料词汇与点餐对话",
              "情景对话"
        ]
  }
,
  {
        "id": "ENG-06-004",
        "grade": 6,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "Ways to Go to School·交通方式词汇与How d",
        "icon": "🌏",
        "painPoint": "英语Ways to Go to School句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来Ways to Go to School这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "交通方式两种表达：by + 交通工具(by bus/car/train/plane) = take + a/an/the + 交通工具（I go by bus = I take a bus）。on foot特殊：I walk to school = I go on foot。How do you go to school? I usually/often/sometimes go... 频度副词放动词前面！注意：主语是he/she时，go→goes, walk→walks。",
              "modelType": "知识卡片",
              "modelDesc": "Ways to Go to School核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "Ways to Go to School 讲解视频",
              "duration": "",
              "searchKeyword": "六年级英语 Ways to Go to School 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2024年广州越秀期末真题《Ways to Go to School》",
              "2023年广州越秀统考《Ways to Go to School综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "Ways to Go to School",
              "交通方式词汇与How do you come...",
              "情景对话"
        ]
  }
,
  {
        "id": "ENG-04-016",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "My Clothes·服装词汇与Whose..",
        "icon": "🌏",
        "painPoint": "英语My Clothes句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来My Clothes这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "服装+所有格问答：Whose + 单数名词 + is this? It's + 人名's/物主代词。Whose + 复数名词 + are these? They're + ... 例句：Whose coat is this? It's Amy's. / Whose pants are these? They're your father's。服饰词：hat/cap/dress/skirt/shirt/coat/sweater/jacket/shorts/pants/shoes/socks。注意复数服饰(glasses/pants/shorts/shoes/socks)用are！",
              "modelType": "知识卡片",
              "modelDesc": "My Clothes核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "My Clothes 讲解视频",
              "duration": "",
              "searchKeyword": "四年级英语 My Clothes 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《My Clothes》",
              "2024年北京海淀统考《My Clothes综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "My Clothes",
              "服装词汇与Whose...is/are问答",
              "易错题型"
        ]
  }
,
  {
        "id": "MATH-06-012",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "负数·负数认识、数轴与负数比较",
        "icon": "🧮",
        "painPoint": "孩子在计算负数认识、数轴与负数比较时频繁出错，不是看错数字就是忘记进退位。全班错误率高达20%。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来负数这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "负数记住三点：第一，0是分界线，负数＜0＜正数；第二，数轴上越往右数越大，越往左数越小；第三，比较负数大小——数轴上靠右的更大，-1＞-5！",
              "modelType": "知识卡片",
              "modelDesc": "负数核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "负数 讲解视频",
              "duration": "",
              "searchKeyword": "六年级数学 负数 负数认识、数轴与负数比较 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2024年广州越秀期末真题《负数典型应用题》",
              "2023年广州越秀统考《负数综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "负数",
              "负数认识、数轴与负数比较",
              "基础题型"
        ]
  }
,
  {
        "id": "ENG-04-012",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "My School·学校场所词汇与楼层表达",
        "icon": "🌏",
        "painPoint": "英语My School句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来My School这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "学校场所词汇+楼层表达：Where is the library/playground/gym/canteen/computer room? It's on the first/second/third floor。英式：ground floor=一楼，first floor=二楼！美式：first floor=一楼。建议用美式说法更简单。方位：next to(紧挨着), near(附近), opposite(对面)。",
              "modelType": "知识卡片",
              "modelDesc": "My School核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "My School 讲解视频",
              "duration": "",
              "searchKeyword": "四年级英语 My School 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《My School》",
              "2024年北京海淀统考《My School综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "My School",
              "学校场所词汇与楼层表达",
              "基础句型"
        ]
  }
,
  {
        "id": "ENG-05-008",
        "grade": 5,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "In a Nature Park·自然景观词汇与Is th",
        "icon": "🌏",
        "painPoint": "英语In a Nature Park句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来In a Nature Park这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "自然公园场景问答：Is there a river/lake/forest/hill/mountain in the park? Yes, there is./No, there isn't。Are there any birds/animals/trees/flowers? Yes, there are./No, there aren't。注意：any用在疑问句和否定句中(Are there any...? There aren't any...)。陈述肯定用some(There are some...)。自然词汇：bridge桥,village村庄,house房屋,building建筑。",
              "modelType": "知识卡片",
              "modelDesc": "In a Nature Park核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "In a Nature Park 讲解视频",
              "duration": "",
              "searchKeyword": "五年级英语 In a Nature Park 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《In a Nature Park》",
              "2024年上海浦东统考《In a Nature Park综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "In a Nature Park",
              "自然景观词汇与Is there...问答",
              "情景对话"
        ]
  }
,
  {
        "id": "MATH-04-027",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "平均数与条形统计图·平均数含义与计算、复式条",
        "icon": "🧮",
        "painPoint": "画平均数含义与计算、复式条形统计图时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来平均数与条形统计图这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "平均数=所有数据的总和÷数据的个数。条形统计图四要素不能少：标题、横轴（类别）、纵轴（数量+单位）、直条宽度一致。复式条形统计图用不同颜色区分两组数据！",
              "modelType": "知识卡片",
              "modelDesc": "平均数与条形统计图核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "平均数与条形统计图 讲解视频",
              "duration": "",
              "searchKeyword": "四年级数学 平均数与条形统计图 平均数含义与计算、复式条形统计图 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《平均数与条形统计图典型应用题》",
              "2024年北京海淀统考《平均数与条形统计图综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "平均数与条形统计图",
              "平均数含义与计算、复式条形统计图",
              "基础题型"
        ]
  }
,
  {
        "id": "ENG-04-015",
        "grade": 4,
        "subject": "英语",
        "category": "词汇语法与阅读",
        "title": "At the Farm·动物/蔬菜词汇与Thes",
        "icon": "🌏",
        "painPoint": "英语At the Farm句型总是记不住，考试时不知道怎么回答。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来At the Farm这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "农场动物和蔬菜表达：These/Those are + 复数名词(These are cows/horses/sheep/hens/ducks)。问：What are these/those? They're... 注意：these(这些，指近处), those(那些，指远处)。蔬菜：tomato→tomatoes, potato→potatoes(以o结尾有生命+es！)。Are they...? Yes, they are./No, they aren't。数动物：How many + 复数 + do you see?",
              "modelType": "知识卡片",
              "modelDesc": "At the Farm核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "At the Farm 讲解视频",
              "duration": "",
              "searchKeyword": "四年级英语 At the Farm 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《At the Farm》",
              "2024年北京海淀统考《At the Farm综合》",
              "小升初模拟《同类题型冲刺》"
        ],
        "keywords": [
              "At the Farm",
              "动物/蔬菜词汇与These/Those are...",
              "基础句型"
        ]
  }
,
  {
        "id": "MATH-05-019",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "图形的运动(三)·旋转与旋转作图",
        "icon": "🧮",
        "painPoint": "画旋转与旋转作图时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来图形的运动(三)这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "旋转三要素缺一不可：旋转中心（绕哪个点转）、旋转方向（顺时针还是逆时针）、旋转角度（转多少度，通常90°或180°）。作图时先连中心点的线，再用量角器量出角度画新线！",
              "modelType": "知识卡片",
              "modelDesc": "图形的运动(三)核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "图形的运动(三) 讲解视频",
              "duration": "",
              "searchKeyword": "五年级数学 图形的运动(三) 旋转与旋转作图 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《图形的运动(三)典型应用题》",
              "2024年上海浦东统考《图形的运动(三)综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "图形的运动(三)",
              "旋转与旋转作图",
              "基础题型"
        ]
  }
,
  {
        "id": "MATH-06-010",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "扇形统计图·扇形统计图读图与信息提取",
        "icon": "🧮",
        "painPoint": "画扇形统计图读图与信息提取、选择合适的统计图时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来扇形统计图这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "扇形统计图解读三步骤：第一步，整个圆=100%；第二步，扇形圆心角÷360°=该部分百分比；第三步，数量=总量×百分比。选统计图原则：比较多少→条形，看趋势→折线，看占比→扇形！",
              "modelType": "知识卡片",
              "modelDesc": "扇形统计图核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "扇形统计图 讲解视频",
              "duration": "",
              "searchKeyword": "六年级数学 扇形统计图 扇形统计图读图与信息提取、选择合适的统计图 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2024年广州越秀期末真题《扇形统计图典型应用题》",
              "2023年广州越秀统考《扇形统计图综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "扇形统计图",
              "扇形统计图读图与信息提取、选择合适的统计图",
              "基础题型"
        ]
  }
,
  {
        "id": "MATH-04-029",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "观察物体(二)·从不同方向观察立体图形",
        "icon": "🧮",
        "painPoint": "画从不同方向观察立体图形时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道观察物体(二)题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "观察物体看三视图：从上面看→确定物体的平面形状（俯视图），从前面看→确定每列有几层（正视图），从侧面看→确定每行有几层（侧视图）。三视图合作才能还原立体！",
              "modelType": "知识卡片",
              "modelDesc": "观察物体(二)核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "观察物体(二) 讲解视频",
              "duration": "",
              "searchKeyword": "四年级数学 观察物体(二) 从不同方向观察立体图形 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《观察物体(二)典型应用题》",
              "2024年北京海淀统考《观察物体(二)综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "观察物体(二)",
              "从不同方向观察立体图形",
              "空间想象"
        ]
  }
,
  {
        "id": "CHI-05-013",
        "grade": 5,
        "subject": "语文",
        "category": "语言素养与读写",
        "title": "口语交际与综合性学习·辩论/演讲/调查报告",
        "icon": "📖",
        "painPoint": "口语交际与综合性学习是考试必考题型，孩子总是拿不到满分。关键技巧没掌握，反复错。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道口语交际与综合性学习题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "口语交际四类速成：辩论——先亮观点+给出两个理由（首先/其次）+举例证明+总结；演讲——开头用问题或故事吸引人+主体分2-3点展开+结尾号召行动；调查报告——标题+调查目的+调查方法+数据/发现+结论建议；讨论——认真听别人说完再发言，先说'我同意/补充一下'再表达。",
              "modelType": "知识卡片",
              "modelDesc": "口语交际与综合性学习核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "口语交际与综合性学习 讲解视频",
              "duration": "",
              "searchKeyword": "小学语文 口语交际与综合性学习 解题技巧 方法"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《口语交际与综合性学习专项训练》",
              "2024年上海浦东统考《口语交际与综合性学习综合检测》",
              "小升初预演《同类题型满分突破》"
        ],
        "keywords": [
              "口语交际与综合性学习",
              "辩论/演讲/调查报告",
              "拓展题型"
        ]
  }
,
  {
        "id": "MATH-04-028",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "图形的运动(二)·轴对称与平移",
        "icon": "🧮",
        "painPoint": "画轴对称与平移时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来图形的运动(二)这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "轴对称三步：第一步，找出对称轴（关键点连线的中垂线）；第二步，看对称轴两边图形是否完全重合；第三步，补全轴对称图形时，对称点连线垂直对称轴且等距。平移两要素：方向（上下左右）+距离（几格）！",
              "modelType": "知识卡片",
              "modelDesc": "图形的运动(二)核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "图形的运动(二) 讲解视频",
              "duration": "",
              "searchKeyword": "四年级数学 图形的运动(二) 轴对称与平移 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《图形的运动(二)典型应用题》",
              "2024年北京海淀统考《图形的运动(二)综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "图形的运动(二)",
              "轴对称与平移",
              "基础题型"
        ]
  }
,
  {
        "id": "MATH-04-030",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "营养午餐·综合实践：数据收集与方案",
        "icon": "🧮",
        "painPoint": "孩子在计算综合实践：数据收集与方案设计时频繁出错，不是看错数字就是忘记进退位。全班错误率高达30%。",
        "aiDiagnosis": {
              "trigger": "做错时弹出",
              "action": "这道营养午餐题你做错了。我们来看看是计算粗心还是方法没掌握？如果是粗心，下次检查就好；如果是方法问题，我教你一招。",
              "interactionType": "choice-question"
        },
        "chip": {
              "script": "营养午餐综合实践四步：第一步，收集数据（统计同学们爱吃的菜）；第二步，整理数据（用表格分类汇总）；第三步，描述数据（画统计图）；第四步，分析数据（看营养是否均衡，提出建议）。",
              "modelType": "知识卡片",
              "modelDesc": "营养午餐核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "营养午餐 讲解视频",
              "duration": "",
              "searchKeyword": "四年级数学 营养午餐 综合实践：数据收集与方案设计 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《营养午餐典型应用题》",
              "2024年北京海淀统考《营养午餐综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "营养午餐",
              "综合实践：数据收集与方案设计",
              "综合应用"
        ]
  }
,
  {
        "id": "MATH-05-007",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "可能性·事件确定性与不确定性、概",
        "icon": "🧮",
        "painPoint": "孩子在计算事件确定性与不确定性、概率大小判断时频繁出错，不是看错数字就是忘记进退位。全班错误率高达18%。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来可能性这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "可能性就三级：一定发生（概率=1）、可能发生（0＜概率＜1）、不可能发生（概率=0）。计算可能性=有利的情况数÷所有可能的情况总数。骰子题画个表全写出来就不乱了！",
              "modelType": "知识卡片",
              "modelDesc": "可能性核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "可能性 讲解视频",
              "duration": "",
              "searchKeyword": "五年级数学 可能性 事件确定性与不确定性、概率大小判断 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《可能性典型应用题》",
              "2024年上海浦东统考《可能性综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "可能性",
              "事件确定性与不确定性、概率大小判断",
              "基础题型"
        ]
  }
,
  {
        "id": "MATH-06-005",
        "grade": 6,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "位置与方向(二)·用方向和距离确定位置",
        "icon": "🧮",
        "painPoint": "孩子在计算用方向和距离确定位置时频繁出错，不是看错数字就是忘记进退位。全班错误率高达18%。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来位置与方向(二)这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "用方向和距离确定位置三要素：第一，观测点（从哪出发）；第二，方向（哪个方位，偏多少度）；第三，距离（多少米/千米）。描述时顺序固定：从观测点出发，沿XX方向XX角度，走XX距离到达目标点。",
              "modelType": "知识卡片",
              "modelDesc": "位置与方向(二)核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "位置与方向(二) 讲解视频",
              "duration": "",
              "searchKeyword": "六年级数学 位置与方向(二) 用方向和距离确定位置 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2024年广州越秀期末真题《位置与方向(二)典型应用题》",
              "2023年广州越秀统考《位置与方向(二)综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "位置与方向(二)",
              "用方向和距离确定位置",
              "基础题型"
        ]
  }
,
  {
        "id": "MATH-04-019",
        "grade": 4,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "条形统计图·数据整理与图表绘制",
        "icon": "🧮",
        "painPoint": "画数据整理与图表绘制时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来条形统计图这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "条形统计图绘制四步：第一步，定标题（写清楚统计什么）；第二步，画横轴（类别）和纵轴（数量+单位），标刻度；第三步，根据数据画直条（宽度一样、间距均匀）；第四步，在每个直条上标数据！",
              "modelType": "知识卡片",
              "modelDesc": "条形统计图核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "条形统计图 讲解视频",
              "duration": "",
              "searchKeyword": "四年级数学 条形统计图 数据整理与图表绘制 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年北京海淀期末真题《条形统计图典型应用题》",
              "2024年北京海淀统考《条形统计图综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "条形统计图",
              "数据整理与图表绘制",
              "基础题型"
        ]
  }
,
  {
        "id": "MATH-05-005",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "位置·数对表示位置(列,行)",
        "icon": "🧮",
        "painPoint": "孩子在计算数对表示位置(列,行)时频繁出错，不是看错数字就是忘记进退位。全班错误率高达15%。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来位置这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "数对=位置坐标，格式是(列,行)。关键口诀：先列后行，列从左往右数第几，行从下往上数第几。点A(3,5)=第3列第5行。(0,0)在原点坐标。两个数对如果列相同则在同一条竖线上！",
              "modelType": "知识卡片",
              "modelDesc": "位置核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "位置 讲解视频",
              "duration": "",
              "searchKeyword": "五年级数学 位置 数对表示位置(列,行) 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《位置典型应用题》",
              "2024年上海浦东统考《位置综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "位置",
              "数对表示位置(列,行)",
              "基础题型"
        ]
  }
,
  {
        "id": "MATH-05-017",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "折线统计图·单式/复式折线统计图读图",
        "icon": "🧮",
        "painPoint": "孩子在计算单式/复式折线统计图读图与绘制时频繁出错，不是看错数字就是忘记进退位。全班错误率高达15%。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来折线统计图这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "折线统计图看三步：第一步，看标题和横轴（什么时间）、纵轴（什么数据+单位）；第二步，看点——每个点代表一个数据；第三步，看线——上升=增加，下降=减少，平着=不变。对比两组复用复式折线图！",
              "modelType": "知识卡片",
              "modelDesc": "折线统计图核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "折线统计图 讲解视频",
              "duration": "",
              "searchKeyword": "五年级数学 折线统计图 单式/复式折线统计图读图与绘制 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《折线统计图典型应用题》",
              "2024年上海浦东统考《折线统计图综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "折线统计图",
              "单式/复式折线统计图读图与绘制",
              "基础题型"
        ]
  }
,
  {
        "id": "MATH-05-011",
        "grade": 5,
        "subject": "数学",
        "category": "计算与应用思维",
        "title": "数学广角——编码·数字编码与身份证号码",
        "icon": "🧮",
        "painPoint": "画数字编码与身份证号码时图形画反、公式记混，空间想象力跟不上，每次考试都丢分。",
        "aiDiagnosis": {
              "trigger": "卡住时提供",
              "action": "看起来数学广角——编码这里有点卡？别急，掌握一个小技巧就通了。你想先看讲解还是先自己试一次？",
              "interactionType": "dynamic-question"
        },
        "chip": {
              "script": "数字编码规则就记身份证：前6位=地区码，7-14位=出生日期(YYYYMMDD)，15-16位=派出所码，17位=性别(奇数男偶数女)，18位=校验码。邮政编码=省+市+区，学号=入学年份+班级+序号！",
              "modelType": "知识卡片",
              "modelDesc": "数学广角——编码核心解题方法与技巧"
        },
        "video": {
              "source": "Bilibili",
              "bvid": "",
              "title": "数学广角——编码 讲解视频",
              "duration": "",
              "searchKeyword": "五年级数学 数学广角——编码 数字编码与身份证号码 讲解"
        },
        "video2": {
              "bvid": "",
              "title": "",
              "duration": "",
              "status": "待绑定",
              "searchKeyword": "",
              "note": "第二位老师视频（待填BV号）"
        },
        "exams": [
              "2025年上海浦东期末真题《数学广角——编码典型应用题》",
              "2024年上海浦东统考《数学广角——编码综合》",
              "小升初预演《同类变式拓展题》"
        ],
        "keywords": [
              "数学广角——编码",
              "数字编码与身份证号码",
              "拓展题型"
        ]
  }
,

  // ============== 自动生成的 fallback 条目 (136条，待完善视频BV号) ==============
  {
    id: "MATH-04-026",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算小数×整数、小数×小数、积的近似数时频繁出…",
    icon: "🎯",
    painPoint: "孩子在计算小数×整数、小数×小数、积的近似数时频繁出…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算小数×整数、小数×小数、积的近似数时频繁出…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1gr4y1A7YW",
      title: "孩子在计算小数×整数、小数×小数、积的近似数时频繁出…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 孩子在计算小数×整数、小数×小数、积的近"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-26-26"],
    keywords: ["数学", "4年级", "孩子在计算小数×整数"]
  },
  {
    id: "MATH-04-025",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算加法交换律·结合律、乘法交换律·结合律·分…",
    icon: "🎯",
    painPoint: "孩子在计算加法交换律/结合律、乘法交换律/结合律/分…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算加法交换律/结合律、乘法交换律/结合律/分…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1a84y1D71B",
      title: "孩子在计算加法交换律/结合律、乘法交换律/结合律/分…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 孩子在计算加法交换律/结合律、乘法交换律"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-25-25"],
    keywords: ["数学", "4年级", "孩子在计算加法交换律"]
  },
  {
    id: "MATH-04-022",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算试商技巧与验算时频繁出错，不是看错数字就是…",
    icon: "🎯",
    painPoint: "孩子在计算试商技巧与验算时频繁出错，不是看错数字就是…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算试商技巧与验算时频繁出错，不是看错数字就是…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Wi4y1G7tE",
      title: "孩子在计算试商技巧与验算时频繁出错，不是看错数字就是…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 孩子在计算试商技巧与验算时频繁出错，不是"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-22-22"],
    keywords: ["数学", "4年级", "孩子在计算试商技巧与"]
  },
  {
    id: "MATH-04-018",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算小数读写、大小比较、小数点移动时频繁出错，…",
    icon: "🎯",
    painPoint: "孩子在计算小数读写、大小比较、小数点移动时频繁出错，…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算小数读写、大小比较、小数点移动时频繁出错，…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1pq4y1p7ge",
      title: "孩子在计算小数读写、大小比较、小数点移动时频繁出错，…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 孩子在计算小数读写、大小比较、小数点移动"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-18-18"],
    keywords: ["数学", "4年级", "孩子在计算小数读写、"]
  },
  {
    id: "MATH-04-023",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "画沏茶问题与对策论时图形画反、公式记混，空间想象力跟…",
    icon: "🎯",
    painPoint: "画沏茶问题与对策论时图形画反、公式记混，空间想象力跟…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画沏茶问题与对策论时图形画反、公式记混，空间想象力跟…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1qD421L7fU",
      title: "画沏茶问题与对策论时图形画反、公式记混，空间想象力跟…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 画沏茶问题与对策论时图形画反、公式记混，"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-23-23"],
    keywords: ["数学", "4年级", "画沏茶问题与对策论时"]
  },
  {
    id: "MATH-04-020",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "画量角器使用与角度计算时图形画反、公式记混，空间想象…",
    icon: "🎯",
    painPoint: "画量角器使用与角度计算时图形画反、公式记混，空间想象…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画量角器使用与角度计算时图形画反、公式记混，空间想象…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1664y1o7KP",
      title: "画量角器使用与角度计算时图形画反、公式记混，空间想象…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 画量角器使用与角度计算时图形画反、公式记"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-20-20"],
    keywords: ["数学", "4年级", "画量角器使用与角度计"]
  },
  {
    id: "MATH-04-016",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算竖式对齐与进退位时频繁出错，不是看错数字就…",
    icon: "🎯",
    painPoint: "孩子在计算竖式对齐与进退位时频繁出错，不是看错数字就…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算竖式对齐与进退位时频繁出错，不是看错数字就…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1oh411b7gu",
      title: "孩子在计算竖式对齐与进退位时频繁出错，不是看错数字就…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 孩子在计算竖式对齐与进退位时频繁出错，不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-16-16"],
    keywords: ["数学", "4年级", "孩子在计算竖式对齐与"]
  },
  {
    id: "MATH-04-024",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算加减乘除混合运算与括号规则时频繁出错，不是…",
    icon: "🎯",
    painPoint: "孩子在计算加减乘除混合运算与括号规则时频繁出错，不是…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算加减乘除混合运算与括号规则时频繁出错，不是…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV15h4y1X7QG",
      title: "孩子在计算加减乘除混合运算与括号规则时频繁出错，不是…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 孩子在计算加减乘除混合运算与括号规则时频"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-24-24"],
    keywords: ["数学", "4年级", "孩子在计算加减乘除混"]
  },
  {
    id: "MATH-04-021",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算亿以内数的读写与比较时频繁出错，不是看错数…",
    icon: "🎯",
    painPoint: "孩子在计算亿以内数的读写与比较时频繁出错，不是看错数…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算亿以内数的读写与比较时频繁出错，不是看错数…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1aV4y197so",
      title: "孩子在计算亿以内数的读写与比较时频繁出错，不是看错数…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 孩子在计算亿以内数的读写与比较时频繁出错"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-21-21"],
    keywords: ["数学", "4年级", "孩子在计算亿以内数的"]
  },
  {
    id: "MATH-04-015",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算竖式乘法与估算时频繁出错，不是看错数字就是…",
    icon: "🎯",
    painPoint: "孩子在计算竖式乘法与估算时频繁出错，不是看错数字就是…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算竖式乘法与估算时频繁出错，不是看错数字就是…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1X64y1Z7XG",
      title: "孩子在计算竖式乘法与估算时频繁出错，不是看错数字就是…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 孩子在计算竖式乘法与估算时频繁出错，不是"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-15-15"],
    keywords: ["数学", "4年级", "孩子在计算竖式乘法与"]
  },
  {
    id: "MATH-04-017",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "画平均数含义与计算、复式条形统计图时图形画反、公式记…",
    icon: "🎯",
    painPoint: "画平均数含义与计算、复式条形统计图时图形画反、公式记…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画平均数含义与计算、复式条形统计图时图形画反、公式记…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV17L4y1a7JN",
      title: "画平均数含义与计算、复式条形统计图时图形画反、公式记…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 画平均数含义与计算、复式条形统计图时图形"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-17-17"],
    keywords: ["数学", "4年级", "画平均数含义与计算、"]
  },
  {
    id: "MATH-04-027",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "画从不同方向观察立体图形时图形画反、公式记混，空间想…",
    icon: "🎯",
    painPoint: "画从不同方向观察立体图形时图形画反、公式记混，空间想…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画从不同方向观察立体图形时图形画反、公式记混，空间想…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1JP4y1P7qn",
      title: "画从不同方向观察立体图形时图形画反、公式记混，空间想…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 画从不同方向观察立体图形时图形画反、公式"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-27-27"],
    keywords: ["数学", "4年级", "画从不同方向观察立体"]
  },
  {
    id: "MATH-04-028",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算综合实践：数据收集与方案设计时频繁出错，不…",
    icon: "🎯",
    painPoint: "孩子在计算综合实践：数据收集与方案设计时频繁出错，不…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算综合实践：数据收集与方案设计时频繁出错，不…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1zS411w7r3",
      title: "孩子在计算综合实践：数据收集与方案设计时频繁出错，不…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 孩子在计算综合实践：数据收集与方案设计时"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-28-28"],
    keywords: ["数学", "4年级", "孩子在计算综合实践："]
  },
  {
    id: "MATH-04-030",
    grade: 4,
    subject: "数学",
    category: "计算与应用思维",
    title: "画数据整理与图表绘制时图形画反、公式记混，空间想象力…",
    icon: "🎯",
    painPoint: "画数据整理与图表绘制时图形画反、公式记混，空间想象力…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画数据整理与图表绘制时图形画反、公式记混，空间想象力…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Aq4y1n71x",
      title: "画数据整理与图表绘制时图形画反、公式记混，空间想象力…",
      duration: "约3分钟",
      searchKeyword: "数学小学4年级 画数据整理与图表绘制时图形画反、公式记混"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-4A-30-30"],
    keywords: ["数学", "4年级", "画数据整理与图表绘制"]
  },
  {
    id: "CHI-04-010",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "读完文章脑子里一片空白，概括主要内容总是抓不住重点，…",
    icon: "✏️",
    painPoint: "读完文章脑子里一片空白，概括主要内容总是抓不住重点，…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "读完文章脑子里一片空白，概括主要内容总是抓不住重点，…",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1nK4y1P7FU",
      title: "读完文章脑子里一片空白，概括主要内容总是抓不住重点，…",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 读完文章脑子里一片空白，概括主要内容总是"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-10-10"],
    keywords: ["语文", "4年级", "读完文章脑子里一片空"]
  },
  {
    id: "CHI-04-006",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次…",
    icon: "✏️",
    painPoint: "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次…",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1xg411m7y1",
      title: "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次…",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 看到病句题就发怵，分不清是成分残缺还是搭"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-06-06"],
    keywords: ["语文", "4年级", "看到病句题就发怵，分"]
  },
  {
    id: "CHI-04-005",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "句型转换是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "句型转换是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "句型转换是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1zP411q7G9",
      title: "句型转换是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 句型转换是考试必考题型，孩子总是拿不到满"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-05-05"],
    keywords: ["语文", "4年级", "句型转换是考试必考题"]
  },
  {
    id: "CHI-04-004",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "不但……而且……还是虽然……但是……",
    icon: "✏️",
    painPoint: "不但……而且……还是虽然……但是……",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "不但……而且……还是虽然……但是……",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1zP411q7G9",
      title: "不但……而且……还是虽然……但是……",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 不但……而且……还是虽然……但是……"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-04-04"],
    keywords: ["语文", "4年级", "不但……而且……还是"]
  },
  {
    id: "CHI-04-011",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "词语辨析是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "词语辨析是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "词语辨析是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1gi4y1n7uk",
      title: "词语辨析是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 词语辨析是考试必考题型，孩子总是拿不到满"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-11-11"],
    keywords: ["语文", "4年级", "词语辨析是考试必考题"]
  },
  {
    id: "CHI-04-013",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "观察日记与写作是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "观察日记与写作是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "观察日记与写作是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Sq4y1P73q",
      title: "观察日记与写作是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 观察日记与写作是考试必考题型，孩子总是拿"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-13-13"],
    keywords: ["语文", "4年级", "观察日记与写作是考试"]
  },
  {
    id: "CHI-04-015",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "看到古文就头疼，关键实词的意思猜不对，翻译句子总是不通顺",
    icon: "✏️",
    painPoint: "看到古文就头疼，关键实词的意思猜不对，翻译句子总是不通顺",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "看到古文就头疼，关键实词的意思猜不对，翻译句子总是不通顺",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1BP4y1p7zw",
      title: "看到古文就头疼，关键实词的意思猜不对，翻译句子总是不通顺",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 看到古文就头疼，关键实词的意思猜不对，翻"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-15-15"],
    keywords: ["语文", "4年级", "看到古文就头疼，关键"]
  },
  {
    id: "CHI-04-008",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
    icon: "✏️",
    painPoint: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Mm4y1o74D",
      title: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 比喻和拟人分不清，让分析修辞手法的作用就"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-08-08"],
    keywords: ["语文", "4年级", "比喻和拟人分不清，让"]
  },
  {
    id: "CHI-04-007",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆",
    icon: "✏️",
    painPoint: "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1eb4y1L7kZ",
      title: "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 引号和书名号乱用，逗号句号不分，作文里标"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-07-07"],
    keywords: ["语文", "4年级", "引号和书名号乱用，逗"]
  },
  {
    id: "CHI-04-009",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "字词基础是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "字词基础是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "字词基础是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1ME411j7M2",
      title: "字词基础是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 字词基础是考试必考题型，孩子总是拿不到满"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-09-09"],
    keywords: ["语文", "4年级", "字词基础是考试必考题"]
  },
  {
    id: "CHI-04-014",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "非连续性文本是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "非连续性文本是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "非连续性文本是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV17S9iBPEXN",
      title: "非连续性文本是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 非连续性文本是考试必考题型，孩子总是拿不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-14-14"],
    keywords: ["语文", "4年级", "非连续性文本是考试必"]
  },
  {
    id: "ENG-04-011",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "be动词和doing总是搭配错，一看题就懵",
    icon: "🇬🇧",
    painPoint: "be动词和doing总是搭配错，一看题就懵",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "be动词和doing总是搭配错，一看题就懵",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV19S4y1w7jf",
      title: "be动词和doing总是搭配错，一看题就懵",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 be动词和doing总是搭配错，一看题就"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-11-11"],
    keywords: ["英语", "4年级", "be动词和doing"]
  },
  {
    id: "ENG-04-009",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "阅读文章生词太多看不懂，看到长句子就放弃",
    icon: "🇬🇧",
    painPoint: "阅读文章生词太多看不懂，看到长句子就放弃",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "阅读文章生词太多看不懂，看到长句子就放弃",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1wd4y1v7Xk",
      title: "阅读文章生词太多看不懂，看到长句子就放弃",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 阅读文章生词太多看不懂，看到长句子就放弃"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-09-09"],
    keywords: ["英语", "4年级", "阅读文章生词太多看不"]
  },
  {
    id: "ENG-04-018",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语名词复数句型总是记不住，考试时不知道怎么回答",
    icon: "🇬🇧",
    painPoint: "英语名词复数句型总是记不住，考试时不知道怎么回答",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语名词复数句型总是记不住，考试时不知道怎么回答",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1oT4m1U7VT",
      title: "英语名词复数句型总是记不住，考试时不知道怎么回答",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语名词复数句型总是记不住，考试时不知道"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-18-18"],
    keywords: ["英语", "4年级", "英语名词复数句型总是"]
  },
  {
    id: "ENG-04-010",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语My Friends句型总是记不住，考试时不知道…",
    icon: "🇬🇧",
    painPoint: "英语My Friends句型总是记不住，考试时不知道…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语My Friends句型总是记不住，考试时不知道…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Yv411T7vK",
      title: "英语My Friends句型总是记不住，考试时不知道…",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语My Friends句型总是记不住，"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-10-10"],
    keywords: ["英语", "4年级", "英语My Frien"]
  },
  {
    id: "ENG-04-005",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "in、on、at到底用哪个",
    icon: "🇬🇧",
    painPoint: "in、on、at到底用哪个",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "in、on、at到底用哪个",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Yv411T7vK",
      title: "in、on、at到底用哪个",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 in、on、at到底用哪个"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-05-05"],
    keywords: ["英语", "4年级", "in、on、at到底"]
  },
  {
    id: "ENG-04-019",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语My Home句型总是记不住，考试时不知道怎么回答",
    icon: "🇬🇧",
    painPoint: "英语My Home句型总是记不住，考试时不知道怎么回答",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语My Home句型总是记不住，考试时不知道怎么回答",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV16N4y1a7RW",
      title: "英语My Home句型总是记不住，考试时不知道怎么回答",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语My Home句型总是记不住，考试时"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-19-19"],
    keywords: ["英语", "4年级", "英语My Home句"]
  },
  {
    id: "ENG-04-006",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语Meet My Family句型总是记不住，考试…",
    icon: "🇬🇧",
    painPoint: "英语Meet My Family句型总是记不住，考试…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语Meet My Family句型总是记不住，考试…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1uL4y1z736",
      title: "英语Meet My Family句型总是记不住，考试…",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语Meet My Family句型总是"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-06-06"],
    keywords: ["英语", "4年级", "英语Meet My "]
  },
  {
    id: "ENG-04-008",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语What Time Is It句型总是记不住，考…",
    icon: "🇬🇧",
    painPoint: "英语What Time Is It句型总是记不住，考…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语What Time Is It句型总是记不住，考…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1tP411g73v",
      title: "英语What Time Is It句型总是记不住，考…",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语What Time Is It句型总"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-08-08"],
    keywords: ["英语", "4年级", "英语What Tim"]
  },
  {
    id: "ENG-04-013",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语Shopping句型总是记不住，考试时不知道怎么回答",
    icon: "🇬🇧",
    painPoint: "英语Shopping句型总是记不住，考试时不知道怎么回答",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语Shopping句型总是记不住，考试时不知道怎么回答",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1zb4y1r7td",
      title: "英语Shopping句型总是记不住，考试时不知道怎么回答",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语Shopping句型总是记不住，考试"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-13-13"],
    keywords: ["英语", "4年级", "英语Shopping"]
  },
  {
    id: "ENG-04-017",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语My Classroom句型总是记不住，考试时不…",
    icon: "🇬🇧",
    painPoint: "英语My Classroom句型总是记不住，考试时不…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语My Classroom句型总是记不住，考试时不…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1sV411d7TG",
      title: "英语My Classroom句型总是记不住，考试时不…",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语My Classroom句型总是记不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-17-17"],
    keywords: ["英语", "4年级", "英语My Class"]
  },
  {
    id: "ENG-04-004",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语Dinner's Ready句型总是记不住，考试…",
    icon: "🇬🇧",
    painPoint: "英语Dinner's Ready句型总是记不住，考试…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语Dinner's Ready句型总是记不住，考试…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1jD4y12793",
      title: "英语Dinner's Ready句型总是记不住，考试…",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语Dinner's Ready句型总是"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-04-04"],
    keywords: ["英语", "4年级", "英语Dinner's"]
  },
  {
    id: "ENG-04-007",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语Weather句型总是记不住，考试时不知道怎么回答",
    icon: "🇬🇧",
    painPoint: "英语Weather句型总是记不住，考试时不知道怎么回答",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语Weather句型总是记不住，考试时不知道怎么回答",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1ax4y1t7jN",
      title: "英语Weather句型总是记不住，考试时不知道怎么回答",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语Weather句型总是记不住，考试时"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-07-07"],
    keywords: ["英语", "4年级", "英语Weather句"]
  },
  {
    id: "ENG-04-014",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语My Clothes句型总是记不住，考试时不知道…",
    icon: "🇬🇧",
    painPoint: "英语My Clothes句型总是记不住，考试时不知道…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语My Clothes句型总是记不住，考试时不知道…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1T7411d7Pt",
      title: "英语My Clothes句型总是记不住，考试时不知道…",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语My Clothes句型总是记不住，"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-14-14"],
    keywords: ["英语", "4年级", "英语My Cloth"]
  },
  {
    id: "ENG-04-016",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语My School句型总是记不住，考试时不知道怎…",
    icon: "🇬🇧",
    painPoint: "英语My School句型总是记不住，考试时不知道怎…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语My School句型总是记不住，考试时不知道怎…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV17i4y1K7HF",
      title: "英语My School句型总是记不住，考试时不知道怎…",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语My School句型总是记不住，考"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-16-16"],
    keywords: ["英语", "4年级", "英语My Schoo"]
  },
  {
    id: "ENG-04-012",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语At the Farm句型总是记不住，考试时不知…",
    icon: "🇬🇧",
    painPoint: "英语At the Farm句型总是记不住，考试时不知…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语At the Farm句型总是记不住，考试时不知…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1wi4y1K7GV",
      title: "英语At the Farm句型总是记不住，考试时不知…",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语At the Farm句型总是记不住"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-12-12"],
    keywords: ["英语", "4年级", "英语At the F"]
  },
  {
    id: "MATH-05-008",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算除数是整数·小数的除法、循环小数、用计算器…",
    icon: "🎯",
    painPoint: "孩子在计算除数是整数/小数的除法、循环小数、用计算器…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算除数是整数/小数的除法、循环小数、用计算器…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1eA411v7w9",
      title: "孩子在计算除数是整数/小数的除法、循环小数、用计算器…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算除数是整数/小数的除法、循环小"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-08-08"],
    keywords: ["数学", "5年级", "孩子在计算除数是整数"]
  },
  {
    id: "MATH-05-006",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算倒数的认识、分数除法计算时频繁出错，不是看…",
    icon: "🎯",
    painPoint: "孩子在计算倒数的认识、分数除法计算时频繁出错，不是看…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算倒数的认识、分数除法计算时频繁出错，不是看…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV11nVB6JEEG",
      title: "孩子在计算倒数的认识、分数除法计算时频繁出错，不是看…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算倒数的认识、分数除法计算时频繁"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-06-06"],
    keywords: ["数学", "5年级", "孩子在计算倒数的认识"]
  },
  {
    id: "MATH-05-021",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "画平行四边形·三角形·梯形·组合图形面积公式时图形画…",
    icon: "🎯",
    painPoint: "画平行四边形/三角形/梯形/组合图形面积公式时图形画…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画平行四边形/三角形/梯形/组合图形面积公式时图形画…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1a54y1R7CF",
      title: "画平行四边形/三角形/梯形/组合图形面积公式时图形画…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 画平行四边形/三角形/梯形/组合图形面积"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-21-21"],
    keywords: ["数学", "5年级", "画平行四边形/三角形"]
  },
  {
    id: "MATH-05-009",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "画特征识别、表面积与体积公式时图形画反、公式记混，空…",
    icon: "🎯",
    painPoint: "画特征识别、表面积与体积公式时图形画反、公式记混，空…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画特征识别、表面积与体积公式时图形画反、公式记混，空…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1wp4y1b7xs",
      title: "画特征识别、表面积与体积公式时图形画反、公式记混，空…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 画特征识别、表面积与体积公式时图形画反、"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-09-09"],
    keywords: ["数学", "5年级", "画特征识别、表面积与"]
  },
  {
    id: "MATH-05-014",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "遇到植树问题的应用题，孩子读完题目完全不知道从哪里下…",
    icon: "🎯",
    painPoint: "遇到植树问题的应用题，孩子读完题目完全不知道从哪里下…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "遇到植树问题的应用题，孩子读完题目完全不知道从哪里下…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV13b411Z74B",
      title: "遇到植树问题的应用题，孩子读完题目完全不知道从哪里下…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 遇到植树问题的应用题，孩子读完题目完全不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-14-14"],
    keywords: ["数学", "5年级", "遇到植树问题的应用题"]
  },
  {
    id: "MATH-05-010",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算小数乘整数·小数、积的近似数、运算定律推广…",
    icon: "🎯",
    painPoint: "孩子在计算小数乘整数/小数、积的近似数、运算定律推广…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算小数乘整数/小数、积的近似数、运算定律推广…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1xB4y1c7Bd",
      title: "孩子在计算小数乘整数/小数、积的近似数、运算定律推广…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算小数乘整数/小数、积的近似数、"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-10-10"],
    keywords: ["数学", "5年级", "孩子在计算小数乘整数"]
  },
  {
    id: "MATH-05-004",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算同分母·异分母加减法、分数加减混合运算时频…",
    icon: "🎯",
    painPoint: "孩子在计算同分母/异分母加减法、分数加减混合运算时频…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算同分母/异分母加减法、分数加减混合运算时频…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1xU4y1J76E",
      title: "孩子在计算同分母/异分母加减法、分数加减混合运算时频…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算同分母/异分母加减法、分数加减"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-04-04"],
    keywords: ["数学", "5年级", "孩子在计算同分母/异"]
  },
  {
    id: "MATH-05-016",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算分数×整数、分数×分数、运算定律时频繁出错…",
    icon: "🎯",
    painPoint: "孩子在计算分数×整数、分数×分数、运算定律时频繁出错…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算分数×整数、分数×分数、运算定律时频繁出错…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1EA411b7d3",
      title: "孩子在计算分数×整数、分数×分数、运算定律时频繁出错…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算分数×整数、分数×分数、运算定"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-16-16"],
    keywords: ["数学", "5年级", "孩子在计算分数×整数"]
  },
  {
    id: "MATH-05-020",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "画圆的认识、周长与面积公式时图形画反、公式记混，空间…",
    icon: "🎯",
    painPoint: "画圆的认识、周长与面积公式时图形画反、公式记混，空间…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画圆的认识、周长与面积公式时图形画反、公式记混，空间…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1ka4y1j7jN",
      title: "画圆的认识、周长与面积公式时图形画反、公式记混，空间…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 画圆的认识、周长与面积公式时图形画反、公"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-20-20"],
    keywords: ["数学", "5年级", "画圆的认识、周长与面"]
  },
  {
    id: "MATH-05-023",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算分数意义、真分数假分数、分数基本性质时频繁…",
    icon: "🎯",
    painPoint: "孩子在计算分数意义、真分数假分数、分数基本性质时频繁…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算分数意义、真分数假分数、分数基本性质时频繁…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV15H4y197Nn",
      title: "孩子在计算分数意义、真分数假分数、分数基本性质时频繁…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算分数意义、真分数假分数、分数基"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-23-23"],
    keywords: ["数学", "5年级", "孩子在计算分数意义、"]
  },
  {
    id: "MATH-05-015",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算因数·倍数概念、2·3·5的倍数特征、质数…",
    icon: "🎯",
    painPoint: "孩子在计算因数/倍数概念、2/3/5的倍数特征、质数…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算因数/倍数概念、2/3/5的倍数特征、质数…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1YE411G7in",
      title: "孩子在计算因数/倍数概念、2/3/5的倍数特征、质数…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算因数/倍数概念、2/3/5的倍"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-15-15"],
    keywords: ["数学", "5年级", "孩子在计算因数/倍数"]
  },
  {
    id: "MATH-05-013",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算比的意义、化简比、按比例分配时频繁出错，不…",
    icon: "🎯",
    painPoint: "孩子在计算比的意义、化简比、按比例分配时频繁出错，不…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算比的意义、化简比、按比例分配时频繁出错，不…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1kz421D7We",
      title: "孩子在计算比的意义、化简比、按比例分配时频繁出错，不…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算比的意义、化简比、按比例分配时"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-13-13"],
    keywords: ["数学", "5年级", "孩子在计算比的意义、"]
  },
  {
    id: "MATH-05-022",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算用天平找次品的最优策略(三分法)时频繁出错…",
    icon: "🎯",
    painPoint: "孩子在计算用天平找次品的最优策略(三分法)时频繁出错…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算用天平找次品的最优策略(三分法)时频繁出错…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1H11kYGE7r",
      title: "孩子在计算用天平找次品的最优策略(三分法)时频繁出错…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算用天平找次品的最优策略(三分法"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-22-22"],
    keywords: ["数学", "5年级", "孩子在计算用天平找次"]
  },
  {
    id: "MATH-05-018",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "画三视图初步——从三个方向还原立体时图形画反、公式记…",
    icon: "🎯",
    painPoint: "画三视图初步——从三个方向还原立体时图形画反、公式记…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画三视图初步——从三个方向还原立体时图形画反、公式记…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1zf4y1w7Nu",
      title: "画三视图初步——从三个方向还原立体时图形画反、公式记…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 画三视图初步——从三个方向还原立体时图形"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-18-18"],
    keywords: ["数学", "5年级", "画三视图初步——从三"]
  },
  {
    id: "MATH-05-012",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "画旋转与旋转作图时图形画反、公式记混，空间想象力跟不…",
    icon: "🎯",
    painPoint: "画旋转与旋转作图时图形画反、公式记混，空间想象力跟不…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画旋转与旋转作图时图形画反、公式记混，空间想象力跟不…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1R7411p7EM",
      title: "画旋转与旋转作图时图形画反、公式记混，空间想象力跟不…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 画旋转与旋转作图时图形画反、公式记混，空"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-12-12"],
    keywords: ["数学", "5年级", "画旋转与旋转作图时图"]
  },
  {
    id: "MATH-05-019",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算事件确定性与不确定性、概率大小判断时频繁出…",
    icon: "🎯",
    painPoint: "孩子在计算事件确定性与不确定性、概率大小判断时频繁出…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算事件确定性与不确定性、概率大小判断时频繁出…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Bs4y1C7pn",
      title: "孩子在计算事件确定性与不确定性、概率大小判断时频繁出…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算事件确定性与不确定性、概率大小"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-19-19"],
    keywords: ["数学", "5年级", "孩子在计算事件确定性"]
  },
  {
    id: "MATH-05-007",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算数对表示位置(列,行)时频繁出错，不是看错…",
    icon: "🎯",
    painPoint: "孩子在计算数对表示位置(列,行)时频繁出错，不是看错…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算数对表示位置(列,行)时频繁出错，不是看错…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1BRm1YSEV3",
      title: "孩子在计算数对表示位置(列,行)时频繁出错，不是看错…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算数对表示位置(列,行)时频繁出"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-07-07"],
    keywords: ["数学", "5年级", "孩子在计算数对表示位"]
  },
  {
    id: "MATH-05-005",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算单式·复式折线统计图读图与绘制时频繁出错，…",
    icon: "🎯",
    painPoint: "孩子在计算单式/复式折线统计图读图与绘制时频繁出错，…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算单式/复式折线统计图读图与绘制时频繁出错，…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1mWEr6kEM8",
      title: "孩子在计算单式/复式折线统计图读图与绘制时频繁出错，…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 孩子在计算单式/复式折线统计图读图与绘制"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-05-05"],
    keywords: ["数学", "5年级", "孩子在计算单式/复式"]
  },
  {
    id: "MATH-05-017",
    grade: 5,
    subject: "数学",
    category: "计算与应用思维",
    title: "画数字编码与身份证号码时图形画反、公式记混，空间想象…",
    icon: "🎯",
    painPoint: "画数字编码与身份证号码时图形画反、公式记混，空间想象…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画数字编码与身份证号码时图形画反、公式记混，空间想象…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1eD4y1D7EU",
      title: "画数字编码与身份证号码时图形画反、公式记混，空间想象…",
      duration: "约3分钟",
      searchKeyword: "数学小学5年级 画数字编码与身份证号码时图形画反、公式记"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-5A-17-17"],
    keywords: ["数学", "5年级", "画数字编码与身份证号"]
  },
  {
    id: "CHI-05-012",
    grade: 5,
    subject: "语文",
    category: "阅读与写作",
    title: "记叙文阅读是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "记叙文阅读是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "记叙文阅读是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1US4y127JZ",
      title: "记叙文阅读是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学5年级 记叙文阅读是考试必考题型，孩子总是拿不到"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-5A-12-12"],
    keywords: ["语文", "5年级", "记叙文阅读是考试必考"]
  },
  {
    id: "CHI-05-006",
    grade: 5,
    subject: "语文",
    category: "阅读与写作",
    title: "古诗背了又忘，默写总写错别字，诗句意思理解不透彻",
    icon: "✏️",
    painPoint: "古诗背了又忘，默写总写错别字，诗句意思理解不透彻",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "古诗背了又忘，默写总写错别字，诗句意思理解不透彻",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1XV411k7fV",
      title: "古诗背了又忘，默写总写错别字，诗句意思理解不透彻",
      duration: "约3分钟",
      searchKeyword: "语文小学5年级 古诗背了又忘，默写总写错别字，诗句意思理"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-5A-06-06"],
    keywords: ["语文", "5年级", "古诗背了又忘，默写总"]
  },
  {
    id: "CHI-05-008",
    grade: 5,
    subject: "语文",
    category: "阅读与写作",
    title: "段落结构分析是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "段落结构分析是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "段落结构分析是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1SEEX61Eg6",
      title: "段落结构分析是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学5年级 段落结构分析是考试必考题型，孩子总是拿不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-5A-08-08"],
    keywords: ["语文", "5年级", "段落结构分析是考试必"]
  },
  {
    id: "CHI-05-004",
    grade: 5,
    subject: "语文",
    category: "阅读与写作",
    title: "说明文阅读进阶是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "说明文阅读进阶是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "说明文阅读进阶是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1ou4y1D7Mr",
      title: "说明文阅读进阶是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学5年级 说明文阅读进阶是考试必考题型，孩子总是拿"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-5A-04-04"],
    keywords: ["语文", "5年级", "说明文阅读进阶是考试"]
  },
  {
    id: "CHI-05-005",
    grade: 5,
    subject: "语文",
    category: "阅读与写作",
    title: "词语理解进阶是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "词语理解进阶是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "词语理解进阶是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Ek4y1C7HH",
      title: "词语理解进阶是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学5年级 词语理解进阶是考试必考题型，孩子总是拿不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-5A-05-05"],
    keywords: ["语文", "5年级", "词语理解进阶是考试必"]
  },
  {
    id: "CHI-05-003",
    grade: 5,
    subject: "语文",
    category: "阅读与写作",
    title: "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次…",
    icon: "✏️",
    painPoint: "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次…",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1bh4y1f7Y1",
      title: "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次…",
      duration: "约3分钟",
      searchKeyword: "语文小学5年级 看到病句题就发怵，分不清是成分残缺还是搭"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-5A-03-03"],
    keywords: ["语文", "5年级", "看到病句题就发怵，分"]
  },
  {
    id: "CHI-05-010",
    grade: 5,
    subject: "语文",
    category: "阅读与写作",
    title: "名著阅读是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "名著阅读是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "名著阅读是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1NV411L7Q8",
      title: "名著阅读是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学5年级 名著阅读是考试必考题型，孩子总是拿不到满"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-5A-10-10"],
    keywords: ["语文", "5年级", "名著阅读是考试必考题"]
  },
  {
    id: "CHI-05-014",
    grade: 5,
    subject: "语文",
    category: "阅读与写作",
    title: "不但……而且……还是虽然……但是……",
    icon: "✏️",
    painPoint: "不但……而且……还是虽然……但是……",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "不但……而且……还是虽然……但是……",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1RCNiz4Ev4",
      title: "不但……而且……还是虽然……但是……",
      duration: "约3分钟",
      searchKeyword: "语文小学5年级 不但……而且……还是虽然……但是……"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-5A-14-14"],
    keywords: ["语文", "5年级", "不但……而且……还是"]
  },
  {
    id: "CHI-05-011",
    grade: 5,
    subject: "语文",
    category: "阅读与写作",
    title: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
    icon: "✏️",
    painPoint: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1gi4y1n7uk",
      title: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
      duration: "约3分钟",
      searchKeyword: "语文小学5年级 比喻和拟人分不清，让分析修辞手法的作用就"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-5A-11-11"],
    keywords: ["语文", "5年级", "比喻和拟人分不清，让"]
  },
  {
    id: "CHI-05-007",
    grade: 5,
    subject: "语文",
    category: "阅读与写作",
    title: "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆",
    icon: "✏️",
    painPoint: "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Zg4y157zf",
      title: "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆",
      duration: "约3分钟",
      searchKeyword: "语文小学5年级 引号和书名号乱用，逗号句号不分，作文里标"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-5A-07-07"],
    keywords: ["语文", "5年级", "引号和书名号乱用，逗"]
  },
  {
    id: "ENG-05-009",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "英语一般将来时句型总是记不住，考试时不知道怎么回答",
    icon: "🇬🇧",
    painPoint: "英语一般将来时句型总是记不住，考试时不知道怎么回答",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语一般将来时句型总是记不住，考试时不知道怎么回答",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1dt411Z722",
      title: "英语一般将来时句型总是记不住，考试时不知道怎么回答",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 英语一般将来时句型总是记不住，考试时不知"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-09-09"],
    keywords: ["英语", "5年级", "英语一般将来时句型总"]
  },
  {
    id: "ENG-05-011",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "be动词和doing总是搭配错，一看题就懵",
    icon: "🇬🇧",
    painPoint: "be动词和doing总是搭配错，一看题就懵",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "be动词和doing总是搭配错，一看题就懵",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1VubEzcEfx",
      title: "be动词和doing总是搭配错，一看题就懵",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 be动词和doing总是搭配错，一看题就"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-11-11"],
    keywords: ["英语", "5年级", "be动词和doing"]
  },
  {
    id: "ENG-05-010",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "阅读文章生词太多看不懂，看到长句子就放弃",
    icon: "🇬🇧",
    painPoint: "阅读文章生词太多看不懂，看到长句子就放弃",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "阅读文章生词太多看不懂，看到长句子就放弃",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1dt411Z722",
      title: "阅读文章生词太多看不懂，看到长句子就放弃",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 阅读文章生词太多看不懂，看到长句子就放弃"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-10-10"],
    keywords: ["英语", "5年级", "阅读文章生词太多看不"]
  },
  {
    id: "ENG-05-012",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "什么时候加er、什么时候加more傻傻分不清楚",
    icon: "🇬🇧",
    painPoint: "什么时候加er、什么时候加more傻傻分不清楚",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "什么时候加er、什么时候加more傻傻分不清楚",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1dt411Z722",
      title: "什么时候加er、什么时候加more傻傻分不清楚",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 什么时候加er、什么时候加more傻傻分"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-12-12"],
    keywords: ["英语", "5年级", "什么时候加er、什么"]
  },
  {
    id: "ENG-05-014",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "英语There Be句型进阶句型总是记不住，考试时不…",
    icon: "🇬🇧",
    painPoint: "英语There Be句型进阶句型总是记不住，考试时不…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语There Be句型进阶句型总是记不住，考试时不…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV19L4y1b794",
      title: "英语There Be句型进阶句型总是记不住，考试时不…",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 英语There Be句型进阶句型总是记不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-14-14"],
    keywords: ["英语", "5年级", "英语There Be"]
  },
  {
    id: "ENG-05-007",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "英语冠词用法句型总是记不住，考试时不知道怎么回答",
    icon: "🇬🇧",
    painPoint: "英语冠词用法句型总是记不住，考试时不知道怎么回答",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语冠词用法句型总是记不住，考试时不知道怎么回答",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1zK411V7nb",
      title: "英语冠词用法句型总是记不住，考试时不知道怎么回答",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 英语冠词用法句型总是记不住，考试时不知道"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-07-07"],
    keywords: ["英语", "5年级", "英语冠词用法句型总是"]
  },
  {
    id: "ENG-05-013",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "英语What Can You Do句型总是记不住，考…",
    icon: "🇬🇧",
    painPoint: "英语What Can You Do句型总是记不住，考…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语What Can You Do句型总是记不住，考…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1a34y197yN",
      title: "英语What Can You Do句型总是记不住，考…",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 英语What Can You Do句型总"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-13-13"],
    keywords: ["英语", "5年级", "英语What Can"]
  },
  {
    id: "ENG-05-006",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "英语My Week句型总是记不住，考试时不知道怎么回答",
    icon: "🇬🇧",
    painPoint: "英语My Week句型总是记不住，考试时不知道怎么回答",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语My Week句型总是记不住，考试时不知道怎么回答",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1FDEm6JEDm",
      title: "英语My Week句型总是记不住，考试时不知道怎么回答",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 英语My Week句型总是记不住，考试时"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-06-06"],
    keywords: ["英语", "5年级", "英语My Week句"]
  },
  {
    id: "ENG-05-004",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "英语What's He Like句型总是记不住，考试…",
    icon: "🇬🇧",
    painPoint: "英语What's He Like句型总是记不住，考试…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语What's He Like句型总是记不住，考试…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1NM4y1G7JC",
      title: "英语What's He Like句型总是记不住，考试…",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 英语What's He Like句型总是"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-04-04"],
    keywords: ["英语", "5年级", "英语What's H"]
  },
  {
    id: "ENG-05-003",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "英语What Would You Like句型总是记…",
    icon: "🇬🇧",
    painPoint: "英语What Would You Like句型总是记…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语What Would You Like句型总是记…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1HQ4y1Y7Ux",
      title: "英语What Would You Like句型总是记…",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 英语What Would You Lik"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-03-03"],
    keywords: ["英语", "5年级", "英语What Wou"]
  },
  {
    id: "ENG-05-005",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "英语In a Nature Park句型总是记不住，…",
    icon: "🇬🇧",
    painPoint: "英语In a Nature Park句型总是记不住，…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语In a Nature Park句型总是记不住，…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1FDEm6JEDm",
      title: "英语In a Nature Park句型总是记不住，…",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 英语In a Nature Park句型"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-05-05"],
    keywords: ["英语", "5年级", "英语In a Nat"]
  },
  {
    id: "MATH-06-014",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算分数除以整数·分数、已知一个数的几分之几求…",
    icon: "🎯",
    painPoint: "孩子在计算分数除以整数/分数、已知一个数的几分之几求…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算分数除以整数/分数、已知一个数的几分之几求…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1xJ4m1b7WJ",
      title: "孩子在计算分数除以整数/分数、已知一个数的几分之几求…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 孩子在计算分数除以整数/分数、已知一个数"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-14-14"],
    keywords: ["数学", "6年级", "孩子在计算分数除以整"]
  },
  {
    id: "MATH-06-006",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "遇到行程问题的应用题，孩子读完题目完全不知道从哪里下…",
    icon: "🎯",
    painPoint: "遇到行程问题的应用题，孩子读完题目完全不知道从哪里下…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "遇到行程问题的应用题，孩子读完题目完全不知道从哪里下…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV19z4y1d7vz",
      title: "遇到行程问题的应用题，孩子读完题目完全不知道从哪里下…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 遇到行程问题的应用题，孩子读完题目完全不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-06-06"],
    keywords: ["数学", "6年级", "遇到行程问题的应用题"]
  },
  {
    id: "MATH-06-018",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "遇到工程问题的应用题，孩子读完题目完全不知道从哪里下…",
    icon: "🎯",
    painPoint: "遇到工程问题的应用题，孩子读完题目完全不知道从哪里下…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "遇到工程问题的应用题，孩子读完题目完全不知道从哪里下…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV18c411m7No",
      title: "遇到工程问题的应用题，孩子读完题目完全不知道从哪里下…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 遇到工程问题的应用题，孩子读完题目完全不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-18-18"],
    keywords: ["数学", "6年级", "遇到工程问题的应用题"]
  },
  {
    id: "MATH-06-017",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "遇到浓度问题的应用题，孩子读完题目完全不知道从哪里下…",
    icon: "🎯",
    painPoint: "遇到浓度问题的应用题，孩子读完题目完全不知道从哪里下…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "遇到浓度问题的应用题，孩子读完题目完全不知道从哪里下…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Pe411Z79q",
      title: "遇到浓度问题的应用题，孩子读完题目完全不知道从哪里下…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 遇到浓度问题的应用题，孩子读完题目完全不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-17-17"],
    keywords: ["数学", "6年级", "遇到浓度问题的应用题"]
  },
  {
    id: "MATH-06-019",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "画圆周长·面积公式推导与应用、环形面积时图形画反、公…",
    icon: "🎯",
    painPoint: "画圆周长/面积公式推导与应用、环形面积时图形画反、公…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画圆周长/面积公式推导与应用、环形面积时图形画反、公…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Hu4m1w7q3",
      title: "画圆周长/面积公式推导与应用、环形面积时图形画反、公…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 画圆周长/面积公式推导与应用、环形面积时"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-19-19"],
    keywords: ["数学", "6年级", "画圆周长/面积公式推"]
  },
  {
    id: "MATH-06-008",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算比例意义与性质、正比例·反比例判断时频繁出…",
    icon: "🎯",
    painPoint: "孩子在计算比例意义与性质、正比例/反比例判断时频繁出…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算比例意义与性质、正比例/反比例判断时频繁出…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV18r4y1T7fK",
      title: "孩子在计算比例意义与性质、正比例/反比例判断时频繁出…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 孩子在计算比例意义与性质、正比例/反比例"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-08-08"],
    keywords: ["数学", "6年级", "孩子在计算比例意义与"]
  },
  {
    id: "MATH-06-015",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "列方程时找不到等量关系，设未知数就卡住了",
    icon: "🎯",
    painPoint: "列方程时找不到等量关系，设未知数就卡住了",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "列方程时找不到等量关系，设未知数就卡住了",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV18F411t7j5",
      title: "列方程时找不到等量关系，设未知数就卡住了",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 列方程时找不到等量关系，设未知数就卡住了"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-15-15"],
    keywords: ["数学", "6年级", "列方程时找不到等量关"]
  },
  {
    id: "MATH-06-021",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算假设法与方程法综合应用时频繁出错，不是看错…",
    icon: "🎯",
    painPoint: "孩子在计算假设法与方程法综合应用时频繁出错，不是看错…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算假设法与方程法综合应用时频繁出错，不是看错…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1WM4y1c7J3",
      title: "孩子在计算假设法与方程法综合应用时频繁出错，不是看错…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 孩子在计算假设法与方程法综合应用时频繁出"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-21-21"],
    keywords: ["数学", "6年级", "孩子在计算假设法与方"]
  },
  {
    id: "MATH-06-022",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "遇到利润问题的应用题，孩子读完题目完全不知道从哪里下…",
    icon: "🎯",
    painPoint: "遇到利润问题的应用题，孩子读完题目完全不知道从哪里下…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "遇到利润问题的应用题，孩子读完题目完全不知道从哪里下…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1S94y1v7bt",
      title: "遇到利润问题的应用题，孩子读完题目完全不知道从哪里下…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 遇到利润问题的应用题，孩子读完题目完全不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-22-22"],
    keywords: ["数学", "6年级", "遇到利润问题的应用题"]
  },
  {
    id: "MATH-06-020",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算分数乘分数、分数混合运算与简便计算时频繁出…",
    icon: "🎯",
    painPoint: "孩子在计算分数乘分数、分数混合运算与简便计算时频繁出…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算分数乘分数、分数混合运算与简便计算时频繁出…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1FK411B7RG",
      title: "孩子在计算分数乘分数、分数混合运算与简便计算时频繁出…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 孩子在计算分数乘分数、分数混合运算与简便"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-20-20"],
    keywords: ["数学", "6年级", "孩子在计算分数乘分数"]
  },
  {
    id: "MATH-06-004",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算折扣·成数·税率·利率应用题时频繁出错，不…",
    icon: "🎯",
    painPoint: "孩子在计算折扣/成数/税率/利率应用题时频繁出错，不…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算折扣/成数/税率/利率应用题时频繁出错，不…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1MG4ZeNEGA",
      title: "孩子在计算折扣/成数/税率/利率应用题时频繁出错，不…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 孩子在计算折扣/成数/税率/利率应用题时"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-04-04"],
    keywords: ["数学", "6年级", "孩子在计算折扣/成数"]
  },
  {
    id: "MATH-06-013",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算比的基本性质、化简比、按比分配应用题时频繁…",
    icon: "🎯",
    painPoint: "孩子在计算比的基本性质、化简比、按比分配应用题时频繁…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算比的基本性质、化简比、按比分配应用题时频繁…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Fw4m1175z",
      title: "孩子在计算比的基本性质、化简比、按比分配应用题时频繁…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 孩子在计算比的基本性质、化简比、按比分配"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-13-13"],
    keywords: ["数学", "6年级", "孩子在计算比的基本性"]
  },
  {
    id: "MATH-06-007",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算百分数意义、百分数·分数·小数互化时频繁出…",
    icon: "🎯",
    painPoint: "孩子在计算百分数意义、百分数/分数/小数互化时频繁出…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算百分数意义、百分数/分数/小数互化时频繁出…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1kG4y1r7xb",
      title: "孩子在计算百分数意义、百分数/分数/小数互化时频繁出…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 孩子在计算百分数意义、百分数/分数/小数"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-07-07"],
    keywords: ["数学", "6年级", "孩子在计算百分数意义"]
  },
  {
    id: "MATH-06-009",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算数与代数·图形与几何·统计与概率·综合应用…",
    icon: "🎯",
    painPoint: "孩子在计算数与代数/图形与几何/统计与概率/综合应用…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算数与代数/图形与几何/统计与概率/综合应用…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Pf4y1x7Fx",
      title: "孩子在计算数与代数/图形与几何/统计与概率/综合应用…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 孩子在计算数与代数/图形与几何/统计与概"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-09-09"],
    keywords: ["数学", "6年级", "孩子在计算数与代数/"]
  },
  {
    id: "MATH-06-016",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "画数形结合思想、找规律时图形画反、公式记混，空间想象…",
    icon: "🎯",
    painPoint: "画数形结合思想、找规律时图形画反、公式记混，空间想象…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画数形结合思想、找规律时图形画反、公式记混，空间想象…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Z3bBz8ERZ",
      title: "画数形结合思想、找规律时图形画反、公式记混，空间想象…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 画数形结合思想、找规律时图形画反、公式记"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-16-16"],
    keywords: ["数学", "6年级", "画数形结合思想、找规"]
  },
  {
    id: "MATH-06-011",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算负数认识、数轴与负数比较时频繁出错，不是看…",
    icon: "🎯",
    painPoint: "孩子在计算负数认识、数轴与负数比较时频繁出错，不是看…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算负数认识、数轴与负数比较时频繁出错，不是看…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1384y167wh",
      title: "孩子在计算负数认识、数轴与负数比较时频繁出错，不是看…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 孩子在计算负数认识、数轴与负数比较时频繁"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-11-11"],
    keywords: ["数学", "6年级", "孩子在计算负数认识、"]
  },
  {
    id: "MATH-06-012",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "画扇形统计图读图与信息提取、选择合适的统计图时图形画…",
    icon: "🎯",
    painPoint: "画扇形统计图读图与信息提取、选择合适的统计图时图形画…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "画扇形统计图读图与信息提取、选择合适的统计图时图形画…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1cm4y1d7su",
      title: "画扇形统计图读图与信息提取、选择合适的统计图时图形画…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 画扇形统计图读图与信息提取、选择合适的统"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-12-12"],
    keywords: ["数学", "6年级", "画扇形统计图读图与信"]
  },
  {
    id: "MATH-06-010",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算用方向和距离确定位置时频繁出错，不是看错数…",
    icon: "🎯",
    painPoint: "孩子在计算用方向和距离确定位置时频繁出错，不是看错数…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算用方向和距离确定位置时频繁出错，不是看错数…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1yjYbehEgU",
      title: "孩子在计算用方向和距离确定位置时频繁出错，不是看错数…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 孩子在计算用方向和距离确定位置时频繁出错"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-10-10"],
    keywords: ["数学", "6年级", "孩子在计算用方向和距"]
  },
  {
    id: "CHI-06-006",
    grade: 6,
    subject: "语文",
    category: "阅读与写作",
    title: "习作综合是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "习作综合是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "习作综合是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV16K4y1x7sX",
      title: "习作综合是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学6年级 习作综合是考试必考题型，孩子总是拿不到满"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-6A-06-06"],
    keywords: ["语文", "6年级", "习作综合是考试必考题"]
  },
  {
    id: "CHI-06-005",
    grade: 6,
    subject: "语文",
    category: "阅读与写作",
    title: "句子综合是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "句子综合是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "句子综合是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1zP411q7G9",
      title: "句子综合是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学6年级 句子综合是考试必考题型，孩子总是拿不到满"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-6A-05-05"],
    keywords: ["语文", "6年级", "句子综合是考试必考题"]
  },
  {
    id: "CHI-06-004",
    grade: 6,
    subject: "语文",
    category: "阅读与写作",
    title: "古诗背了又忘，默写总写错别字，诗句意思理解不透彻",
    icon: "✏️",
    painPoint: "古诗背了又忘，默写总写错别字，诗句意思理解不透彻",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "古诗背了又忘，默写总写错别字，诗句意思理解不透彻",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1bh4y1f7Y1",
      title: "古诗背了又忘，默写总写错别字，诗句意思理解不透彻",
      duration: "约3分钟",
      searchKeyword: "语文小学6年级 古诗背了又忘，默写总写错别字，诗句意思理"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-6A-04-04"],
    keywords: ["语文", "6年级", "古诗背了又忘，默写总"]
  },
  {
    id: "CHI-06-008",
    grade: 6,
    subject: "语文",
    category: "阅读与写作",
    title: "小升初语文总复习是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "小升初语文总复习是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "小升初语文总复习是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Mm4y1o74D",
      title: "小升初语文总复习是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学6年级 小升初语文总复习是考试必考题型，孩子总是"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-6A-08-08"],
    keywords: ["语文", "6年级", "小升初语文总复习是考"]
  },
  {
    id: "CHI-06-014",
    grade: 6,
    subject: "语文",
    category: "阅读与写作",
    title: "说明文阅读综合是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "说明文阅读综合是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "说明文阅读综合是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1jf421X7RL",
      title: "说明文阅读综合是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学6年级 说明文阅读综合是考试必考题型，孩子总是拿"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-6A-14-14"],
    keywords: ["语文", "6年级", "说明文阅读综合是考试"]
  },
  {
    id: "CHI-06-007",
    grade: 6,
    subject: "语文",
    category: "阅读与写作",
    title: "名著阅读综合是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "名著阅读综合是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "名著阅读综合是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Ek4y1C7HH",
      title: "名著阅读综合是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学6年级 名著阅读综合是考试必考题型，孩子总是拿不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-6A-07-07"],
    keywords: ["语文", "6年级", "名著阅读综合是考试必"]
  },
  {
    id: "CHI-06-013",
    grade: 6,
    subject: "语文",
    category: "阅读与写作",
    title: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
    icon: "✏️",
    painPoint: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1RCNiz4Ev4",
      title: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…",
      duration: "约3分钟",
      searchKeyword: "语文小学6年级 比喻和拟人分不清，让分析修辞手法的作用就"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-6A-13-13"],
    keywords: ["语文", "6年级", "比喻和拟人分不清，让"]
  },
  {
    id: "CHI-06-009",
    grade: 6,
    subject: "语文",
    category: "阅读与写作",
    title: "非连续性文本综合是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "非连续性文本综合是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "非连续性文本综合是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Zg4y157zf",
      title: "非连续性文本综合是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学6年级 非连续性文本综合是考试必考题型，孩子总是"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-6A-09-09"],
    keywords: ["语文", "6年级", "非连续性文本综合是考"]
  },
  {
    id: "CHI-06-011",
    grade: 6,
    subject: "语文",
    category: "阅读与写作",
    title: "字词综合是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "字词综合是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "字词综合是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1UNj3ziE4A",
      title: "字词综合是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学6年级 字词综合是考试必考题型，孩子总是拿不到满"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-6A-11-11"],
    keywords: ["语文", "6年级", "字词综合是考试必考题"]
  },
  {
    id: "CHI-06-003",
    grade: 6,
    subject: "语文",
    category: "阅读与写作",
    title: "不但……而且……还是虽然……但是……",
    icon: "✏️",
    painPoint: "不但……而且……还是虽然……但是……",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "不但……而且……还是虽然……但是……",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1Mx42127sE",
      title: "不但……而且……还是虽然……但是……",
      duration: "约3分钟",
      searchKeyword: "语文小学6年级 不但……而且……还是虽然……但是……"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-6A-03-03"],
    keywords: ["语文", "6年级", "不但……而且……还是"]
  },
  {
    id: "ENG-06-008",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "四种时态混在一起考就全乱了，不知道该用哪个",
    icon: "🇬🇧",
    painPoint: "四种时态混在一起考就全乱了，不知道该用哪个",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "四种时态混在一起考就全乱了，不知道该用哪个",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1gT4y1N7bQ",
      title: "四种时态混在一起考就全乱了，不知道该用哪个",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 四种时态混在一起考就全乱了，不知道该用哪"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-08-08"],
    keywords: ["英语", "6年级", "四种时态混在一起考就"]
  },
  {
    id: "ENG-06-010",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "什么时候加er、什么时候加more傻傻分不清楚",
    icon: "🇬🇧",
    painPoint: "什么时候加er、什么时候加more傻傻分不清楚",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "什么时候加er、什么时候加more傻傻分不清楚",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1u7411h7AS",
      title: "什么时候加er、什么时候加more傻傻分不清楚",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 什么时候加er、什么时候加more傻傻分"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-10-10"],
    keywords: ["英语", "6年级", "什么时候加er、什么"]
  },
  {
    id: "ENG-06-009",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语小升初英语总复习句型总是记不住，考试时不知道怎么回答",
    icon: "🇬🇧",
    painPoint: "英语小升初英语总复习句型总是记不住，考试时不知道怎么回答",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语小升初英语总复习句型总是记不住，考试时不知道怎么回答",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV18741167Gf",
      title: "英语小升初英语总复习句型总是记不住，考试时不知道怎么回答",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语小升初英语总复习句型总是记不住，考试"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-09-09"],
    keywords: ["英语", "6年级", "英语小升初英语总复习"]
  },
  {
    id: "ENG-06-015",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语Last Weekend句型总是记不住，考试时不…",
    icon: "🇬🇧",
    painPoint: "英语Last Weekend句型总是记不住，考试时不…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语Last Weekend句型总是记不住，考试时不…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1EZ4y1u7rt",
      title: "英语Last Weekend句型总是记不住，考试时不…",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语Last Weekend句型总是记不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-15-15"],
    keywords: ["英语", "6年级", "英语Last Wee"]
  },
  {
    id: "ENG-06-012",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语情态动词综合句型总是记不住，考试时不知道怎么回答",
    icon: "🇬🇧",
    painPoint: "英语情态动词综合句型总是记不住，考试时不知道怎么回答",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语情态动词综合句型总是记不住，考试时不知道怎么回答",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1E7411j7PV",
      title: "英语情态动词综合句型总是记不住，考试时不知道怎么回答",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语情态动词综合句型总是记不住，考试时不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-12-12"],
    keywords: ["英语", "6年级", "英语情态动词综合句型"]
  },
  {
    id: "ENG-06-016",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语疑问词综合句型总是记不住，考试时不知道怎么回答",
    icon: "🇬🇧",
    painPoint: "英语疑问词综合句型总是记不住，考试时不知道怎么回答",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语疑问词综合句型总是记不住，考试时不知道怎么回答",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1bi4y1d7Ms",
      title: "英语疑问词综合句型总是记不住，考试时不知道怎么回答",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语疑问词综合句型总是记不住，考试时不知"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-16-16"],
    keywords: ["英语", "6年级", "英语疑问词综合句型总"]
  },
  {
    id: "ENG-06-017",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语I Have a Pen Pal句型总是记不住，…",
    icon: "🇬🇧",
    painPoint: "英语I Have a Pen Pal句型总是记不住，…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语I Have a Pen Pal句型总是记不住，…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV17t4y1F7cK",
      title: "英语I Have a Pen Pal句型总是记不住，…",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语I Have a Pen Pal句型"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-17-17"],
    keywords: ["英语", "6年级", "英语I Have a"]
  },
  {
    id: "ENG-06-006",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语My Weekend Plan句型总是记不住，考…",
    icon: "🇬🇧",
    painPoint: "英语My Weekend Plan句型总是记不住，考…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语My Weekend Plan句型总是记不住，考…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1WZ4y1V7vA",
      title: "英语My Weekend Plan句型总是记不住，考…",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语My Weekend Plan句型总"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-06-06"],
    keywords: ["英语", "6年级", "英语My Weeke"]
  },
  {
    id: "ENG-06-005",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语Then and Now句型总是记不住，考试时不…",
    icon: "🇬🇧",
    painPoint: "英语Then and Now句型总是记不住，考试时不…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语Then and Now句型总是记不住，考试时不…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1AZ4y1T7ve",
      title: "英语Then and Now句型总是记不住，考试时不…",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语Then and Now句型总是记不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-05-05"],
    keywords: ["英语", "6年级", "英语Then and"]
  },
  {
    id: "ENG-06-014",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语Where Did You Go句型总是记不住，…",
    icon: "🇬🇧",
    painPoint: "英语Where Did You Go句型总是记不住，…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语Where Did You Go句型总是记不住，…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1xZ4y1F78o",
      title: "英语Where Did You Go句型总是记不住，…",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语Where Did You Go句型"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-14-14"],
    keywords: ["英语", "6年级", "英语Where Di"]
  },
  {
    id: "ENG-06-013",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语What Does He Do句型总是记不住，考…",
    icon: "🇬🇧",
    painPoint: "英语What Does He Do句型总是记不住，考…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语What Does He Do句型总是记不住，考…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1EE41137Re",
      title: "英语What Does He Do句型总是记不住，考…",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语What Does He Do句型总"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-13-13"],
    keywords: ["英语", "6年级", "英语What Doe"]
  },
  {
    id: "ENG-06-007",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语How Tall Are You句型总是记不住，…",
    icon: "🇬🇧",
    painPoint: "英语How Tall Are You句型总是记不住，…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语How Tall Are You句型总是记不住，…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1zdC3YjEbW",
      title: "英语How Tall Are You句型总是记不住，…",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语How Tall Are You句型"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-07-07"],
    keywords: ["英语", "6年级", "英语How Tall"]
  },
  {
    id: "ENG-06-011",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语How Can I Get There句型总是记…",
    icon: "🇬🇧",
    painPoint: "英语How Can I Get There句型总是记…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语How Can I Get There句型总是记…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1tHLn6CELd",
      title: "英语How Can I Get There句型总是记…",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语How Can I Get Ther"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-11-11"],
    keywords: ["英语", "6年级", "英语How Can "]
  },
  {
    id: "ENG-06-003",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语Ways to Go to School句型总是…",
    icon: "🇬🇧",
    painPoint: "英语Ways to Go to School句型总是…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语Ways to Go to School句型总是…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1p5411j7ec",
      title: "英语Ways to Go to School句型总是…",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语Ways to Go to Scho"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-03-03"],
    keywords: ["英语", "6年级", "英语Ways to "]
  },
  {
    id: "CHI-04-012",
    grade: 4,
    subject: "语文",
    category: "阅读与写作",
    title: "非连续性文本是考试必考题型，孩子总是拿不到满分",
    icon: "✏️",
    painPoint: "非连续性文本是考试必考题型，孩子总是拿不到满分",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "非连续性文本是考试必考题型，孩子总是拿不到满分",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1YKL86yE3w",
      title: "非连续性文本是考试必考题型，孩子总是拿不到满分",
      duration: "约3分钟",
      searchKeyword: "语文小学4年级 非连续性文本是考试必考题型，孩子总是拿不"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-4A-12-12"],
    keywords: ["语文", "4年级", "非连续性文本是考试必"]
  },
  {
    id: "ENG-04-015",
    grade: 4,
    subject: "英语",
    category: "语法与词汇",
    title: "英语At the Farm句型总是记不住，考试时不知…",
    icon: "🇬🇧",
    painPoint: "英语At the Farm句型总是记不住，考试时不知…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语At the Farm句型总是记不住，考试时不知…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1P97B6aExs",
      title: "英语At the Farm句型总是记不住，考试时不知…",
      duration: "约3分钟",
      searchKeyword: "英语小学4年级 英语At the Farm句型总是记不住"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-4A-15-15"],
    keywords: ["英语", "4年级", "英语At the F"]
  },
  {
    id: "ENG-05-008",
    grade: 5,
    subject: "英语",
    category: "语法与词汇",
    title: "英语In a Nature Park句型总是记不住，…",
    icon: "🇬🇧",
    painPoint: "英语In a Nature Park句型总是记不住，…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语In a Nature Park句型总是记不住，…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1FDEm6JEDm",
      title: "英语In a Nature Park句型总是记不住，…",
      duration: "约3分钟",
      searchKeyword: "英语小学5年级 英语In a Nature Park句型"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-5A-08-08"],
    keywords: ["英语", "5年级", "英语In a Nat"]
  },
  {
    id: "MATH-06-005",
    grade: 6,
    subject: "数学",
    category: "计算与应用思维",
    title: "孩子在计算用方向和距离确定位置时频繁出错，不是看错数…",
    icon: "🎯",
    painPoint: "孩子在计算用方向和距离确定位置时频繁出错，不是看错数…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "孩子在计算用方向和距离确定位置时频繁出错，不是看错数…",
      modelType: "通用",
      modelDesc: "此题考察数学核心能力，建议先理解题意再逐步分析。画图辅助理解，分步计算。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV12D4y1R7CT",
      title: "孩子在计算用方向和距离确定位置时频繁出错，不是看错数…",
      duration: "约3分钟",
      searchKeyword: "数学小学6年级 孩子在计算用方向和距离确定位置时频繁出错"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["MATH-6A-05-05"],
    keywords: ["数学", "6年级", "孩子在计算用方向和距"]
  },
  {
    id: "CHI-06-010",
    grade: 6,
    subject: "语文",
    category: "阅读与写作",
    title: "不但……而且……还是虽然……但是……",
    icon: "✏️",
    painPoint: "不但……而且……还是虽然……但是……",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "不但……而且……还是虽然……但是……",
      modelType: "通用",
      modelDesc: "此题考察语文核心能力，建议先理解题意再逐步分析。关注关键字词，理解上下文。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1ES4y147PP",
      title: "不但……而且……还是虽然……但是……",
      duration: "约3分钟",
      searchKeyword: "语文小学6年级 不但……而且……还是虽然……但是……"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["CHI-6A-10-10"],
    keywords: ["语文", "6年级", "不但……而且……还是"]
  },
  {
    id: "ENG-06-004",
    grade: 6,
    subject: "英语",
    category: "语法与词汇",
    title: "英语Ways to Go to School句型总是…",
    icon: "🇬🇧",
    painPoint: "英语Ways to Go to School句型总是…",
    aiDiagnosis: {
      trigger: "做错时弹出",
      action: "系统弹出追问引导孩子反思错误原因",
      interactionType: "dynamic-question"
    },
    chip: {
      script: "英语Ways to Go to School句型总是…",
      modelType: "通用",
      modelDesc: "此题考察英语核心能力，建议先理解题意再逐步分析。先确定时态和人称，再套用句型。",
      modelVisual: {
        type: "accordion",
        component: "generic"
      }
    },
    video: {
      source: "Bilibili",
      bvid: "BV1khEE6zEuN",
      title: "英语Ways to Go to School句型总是…",
      duration: "约3分钟",
      searchKeyword: "英语小学6年级 英语Ways to Go to Scho"
    },
    video2: {},
    exams: ["待补充真题"],
    examCodes: ["ENG-6A-04-04"],
    keywords: ["英语", "6年级", "英语Ways to "]
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
      { label: "投篮比赛，投中一球得5分，投错一球扣2分，共投10球…", chipId: "MATH-04-001" },
      { label: "一串彩灯按红、黄、黄、蓝、绿的顺序排列，第128盏灯…", chipId: "MATH-04-002" },
      { label: "两个长方形重叠在一起，已知重叠部分是个正方形，求组合…", chipId: "MATH-04-003" },
      { label: "学校买来一批图书，如果每班分8本则多出15本；如果每…", chipId: "MATH-04-004" },
      { label: "用简便方法计算：(40+4)×25，孩子只乘第一个数…", chipId: "MATH-04-005" },
      { label: "列竖式计算15.62+7.8，孩子末尾对齐而不是小数…", chipId: "MATH-04-006" },
      { label: "判断能否围成三角形：2,3,5不能", chipId: "MATH-04-007" },
      { label: "图形A向右平移5格再向下平移3格得到图形B，孩子数两…", chipId: "MATH-04-008" },
      { label: "小明今年8岁，妈妈今年36岁，几年后妈妈的年龄是小明…", chipId: "MATH-04-009" },
      { label: "一条100米长的路一边种树，每隔5米种一棵，两头都种…", chipId: "MATH-04-010" },
      { label: "老师问：一个角的两条边延长后，角的大小变不变", chipId: "MATH-04-011" },
      { label: "两个数的和是48，差是12，求这两个数", chipId: "MATH-04-012" },
      { label: "3台拖拉机5天耕地120亩，4台拖拉机7天耕地多少亩", chipId: "MATH-04-013" },
      { label: "一个长方形框架，拉成平行四边形后，面积变了吗", chipId: "MATH-04-014" },
      { label: "孩子在计算除数是整数/小数的除法、循环小数时频繁出错…", chipId: "MATH-04-026" },
      { label: "孩子在计算小数×整数、小数×小数、积的近似数时频繁出…", chipId: "MATH-04-025" },
      { label: "孩子在计算加法交换律/结合律、乘法交换律/结合律/分…", chipId: "MATH-04-022" },
      { label: "孩子在计算试商技巧与验算时频繁出错，不是看错数字就是…", chipId: "MATH-04-018" },
      { label: "孩子在计算小数读写、大小比较、小数点移动时频繁出错，…", chipId: "MATH-04-023" },
      { label: "画沏茶问题与对策论时图形画反、公式记混，空间想象力跟…", chipId: "MATH-04-020" },
      { label: "画量角器使用与角度计算时图形画反、公式记混，空间想象…", chipId: "MATH-04-016" },
      { label: "孩子在计算竖式对齐与进退位时频繁出错，不是看错数字就…", chipId: "MATH-04-024" },
      { label: "孩子在计算加减乘除混合运算与括号规则时频繁出错，不是…", chipId: "MATH-04-021" },
      { label: "孩子在计算亿以内数的读写与比较时频繁出错，不是看错数…", chipId: "MATH-04-015" },
      { label: "孩子在计算竖式乘法与估算时频繁出错，不是看错数字就是…", chipId: "MATH-04-017" },
      { label: "画平均数含义与计算、复式条形统计图时图形画反、公式记…", chipId: "MATH-04-027" },
      { label: "画轴对称与平移时图形画反、公式记混，空间想象力跟不上…", chipId: "MATH-04-028" },
      { label: "孩子在计算综合实践：数据收集与方案设计时频繁出错，不…", chipId: "MATH-04-030" },
    ],
    "语文": [
      { label: "结合上下文，体会'嫩绿的叶子在风中摇曳'中'摇曳'的意思", chipId: "CHI-04-001" },
      { label: "写《记一次游戏》，孩子写：他跑过来一脚把球踢进了球门…", chipId: "CHI-04-002" },
      { label: "习作是考试必考题型，孩子总是拿不到满分", chipId: "CHI-04-010" },
      { label: "读完文章脑子里一片空白，概括主要内容总是抓不住重点，…", chipId: "CHI-04-006" },
      { label: "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次…", chipId: "CHI-04-005" },
      { label: "句型转换是考试必考题型，孩子总是拿不到满分", chipId: "CHI-04-004" },
      { label: "不但……而且……还是虽然……但是……", chipId: "CHI-04-011" },
      { label: "词语辨析是考试必考题型，孩子总是拿不到满分", chipId: "CHI-04-013" },
      { label: "观察日记与写作是考试必考题型，孩子总是拿不到满分", chipId: "CHI-04-015" },
      { label: "古诗背了又忘，默写总写错别字，诗句意思理解不透彻", chipId: "CHI-04-008" },
      { label: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…", chipId: "CHI-04-007" },
      { label: "引号和书名号乱用，逗号句号不分，作文里标点错误一大堆", chipId: "CHI-04-009" },
      { label: "句子排序是考试必考题型，孩子总是拿不到满分", chipId: "CHI-04-014" },
      { label: "非连续性文本是考试必考题型，孩子总是拿不到满分", chipId: "CHI-04-012" },
    ],
    "英语": [
      { label: "He like_____ playing footb…", chipId: "ENG-04-001" },
      { label: "My mom is waiting for me _…", chipId: "ENG-04-002" },
      { label: "Mike was very ______, beca…", chipId: "ENG-04-003" },
      { label: "主格宾格分不清，my和mine总是用混", chipId: "ENG-04-011" },
      { label: "be动词和doing总是搭配错，一看题就懵", chipId: "ENG-04-009" },
      { label: "阅读文章生词太多看不懂，看到长句子就放弃", chipId: "ENG-04-018" },
      { label: "英语名词复数句型总是记不住，考试时不知道怎么回答", chipId: "ENG-04-010" },
      { label: "英语My Friends句型总是记不住，考试时不知道…", chipId: "ENG-04-005" },
      { label: "in、on、at到底用哪个", chipId: "ENG-04-019" },
      { label: "英语My Home句型总是记不住，考试时不知道怎么回答", chipId: "ENG-04-006" },
      { label: "英语Meet My Family句型总是记不住，考试…", chipId: "ENG-04-008" },
      { label: "英语What Time Is It句型总是记不住，考…", chipId: "ENG-04-013" },
      { label: "英语Shopping句型总是记不住，考试时不知道怎么回答", chipId: "ENG-04-017" },
      { label: "英语My Classroom句型总是记不住，考试时不…", chipId: "ENG-04-004" },
      { label: "英语Dinner's Ready句型总是记不住，考试…", chipId: "ENG-04-007" },
      { label: "英语Weather句型总是记不住，考试时不知道怎么回答", chipId: "ENG-04-014" },
      { label: "英语My Clothes句型总是记不住，考试时不知道…", chipId: "ENG-04-016" },
      { label: "英语My School句型总是记不住，考试时不知道怎…", chipId: "ENG-04-012" },
      { label: "英语At the Farm句型总是记不住，考试时不知…", chipId: "ENG-04-015" },
    ],
  },
  5: {
    "数学": [
      { label: "已知梯形面积，对角线交于点O，求左右两个小三角形的面…", chipId: "MATH-05-001" },
      { label: "一列火车长200米，以每秒20米的速度通过一座长80…", chipId: "MATH-05-002" },
      { label: "有一些糖果，3个一堆剩2个，4个一堆剩2个，5个一堆…", chipId: "MATH-05-003" },
      { label: "列方程时找不到等量关系，设未知数就卡住了", chipId: "MATH-05-008" },
      { label: "孩子在计算除数是整数/小数的除法、循环小数、用计算器…", chipId: "MATH-05-006" },
      { label: "孩子在计算倒数的认识、分数除法计算时频繁出错，不是看…", chipId: "MATH-05-021" },
      { label: "画平行四边形/三角形/梯形/组合图形面积公式时图形画…", chipId: "MATH-05-009" },
      { label: "画特征识别、表面积与体积公式时图形画反、公式记混，空…", chipId: "MATH-05-014" },
      { label: "遇到植树问题的应用题，孩子读完题目完全不知道从哪里下…", chipId: "MATH-05-010" },
      { label: "孩子在计算小数乘整数/小数、积的近似数、运算定律推广…", chipId: "MATH-05-004" },
      { label: "孩子在计算同分母/异分母加减法、分数加减混合运算时频…", chipId: "MATH-05-016" },
      { label: "孩子在计算分数×整数、分数×分数、运算定律时频繁出错…", chipId: "MATH-05-020" },
      { label: "画圆的认识、周长与面积公式时图形画反、公式记混，空间…", chipId: "MATH-05-023" },
      { label: "孩子在计算分数意义、真分数假分数、分数基本性质时频繁…", chipId: "MATH-05-015" },
      { label: "孩子在计算比的意义、化简比、按比例分配时频繁出错，不…", chipId: "MATH-05-022" },
      { label: "孩子在计算用天平找次品的最优策略(三分法)时频繁出错…", chipId: "MATH-05-018" },
      { label: "画三视图初步——从三个方向还原立体时图形画反、公式记…", chipId: "MATH-05-012" },
      { label: "画旋转与旋转作图时图形画反、公式记混，空间想象力跟不…", chipId: "MATH-05-019" },
      { label: "孩子在计算事件确定性与不确定性、概率大小判断时频繁出…", chipId: "MATH-05-007" },
      { label: "孩子在计算数对表示位置(列,行)时频繁出错，不是看错…", chipId: "MATH-05-005" },
      { label: "孩子在计算单式/复式折线统计图读图与绘制时频繁出错，…", chipId: "MATH-05-017" },
    ],
    "语文": [
      { label: "给出药品说明书或两家快递公司价格对比图表，问：小明要…", chipId: "CHI-05-001" },
      { label: "写《一个XX的人》或《我想对您说》，描写妈妈只会写：…", chipId: "CHI-05-002" },
      { label: "习作进阶是考试必考题型，孩子总是拿不到满分", chipId: "CHI-05-012" },
      { label: "记叙文阅读是考试必考题型，孩子总是拿不到满分", chipId: "CHI-05-006" },
      { label: "古诗背了又忘，默写总写错别字，诗句意思理解不透彻", chipId: "CHI-05-008" },
      { label: "段落结构分析是考试必考题型，孩子总是拿不到满分", chipId: "CHI-05-004" },
      { label: "说明文阅读进阶是考试必考题型，孩子总是拿不到满分", chipId: "CHI-05-005" },
      { label: "词语理解进阶是考试必考题型，孩子总是拿不到满分", chipId: "CHI-05-003" },
      { label: "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次…", chipId: "CHI-05-010" },
      { label: "名著阅读是考试必考题型，孩子总是拿不到满分", chipId: "CHI-05-014" },
      { label: "不但……而且……还是虽然……但是……", chipId: "CHI-05-011" },
      { label: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…", chipId: "CHI-05-007" },
    ],
    "英语": [
      { label: "I _____ (lose) my key yest…", chipId: "ENG-05-001" },
      { label: "The light is on. He _____ …", chipId: "ENG-05-002" },
      { label: "第三人称单数总是忘记加s，每次都被扣冤枉分", chipId: "ENG-05-009" },
      { label: "英语一般将来时句型总是记不住，考试时不知道怎么回答", chipId: "ENG-05-011" },
      { label: "be动词和doing总是搭配错，一看题就懵", chipId: "ENG-05-010" },
      { label: "阅读文章生词太多看不懂，看到长句子就放弃", chipId: "ENG-05-012" },
      { label: "什么时候加er、什么时候加more傻傻分不清楚", chipId: "ENG-05-014" },
      { label: "英语There Be句型进阶句型总是记不住，考试时不…", chipId: "ENG-05-007" },
      { label: "英语冠词用法句型总是记不住，考试时不知道怎么回答", chipId: "ENG-05-013" },
      { label: "英语What Can You Do句型总是记不住，考…", chipId: "ENG-05-006" },
      { label: "英语My Week句型总是记不住，考试时不知道怎么回答", chipId: "ENG-05-004" },
      { label: "英语What's He Like句型总是记不住，考试…", chipId: "ENG-05-003" },
      { label: "英语What Would You Like句型总是记…", chipId: "ENG-05-005" },
      { label: "英语In a Nature Park句型总是记不住，…", chipId: "ENG-05-008" },
    ],
  },
  6: {
    "数学": [
      { label: "甲乙两船在河中相向而行，甲顺水乙逆水，擦身而过时帽子…", chipId: "MATH-06-001" },
      { label: "一个直角三角形，直角边分别为3厘米和4厘米，以3厘米…", chipId: "MATH-06-002" },
      { label: "口袋里有红、黄、蓝三种颜色的球各10个，闭着眼睛往外…", chipId: "MATH-06-003" },
      { label: "画圆柱表面积/体积、圆锥体积公式及应用时图形画反、公…", chipId: "MATH-06-014" },
      { label: "孩子在计算分数除以整数/分数、已知一个数的几分之几求…", chipId: "MATH-06-006" },
      { label: "遇到行程问题的应用题，孩子读完题目完全不知道从哪里下…", chipId: "MATH-06-018" },
      { label: "遇到工程问题的应用题，孩子读完题目完全不知道从哪里下…", chipId: "MATH-06-017" },
      { label: "遇到浓度问题的应用题，孩子读完题目完全不知道从哪里下…", chipId: "MATH-06-019" },
      { label: "画圆周长/面积公式推导与应用、环形面积时图形画反、公…", chipId: "MATH-06-008" },
      { label: "孩子在计算比例意义与性质、正比例/反比例判断时频繁出…", chipId: "MATH-06-015" },
      { label: "列方程时找不到等量关系，设未知数就卡住了", chipId: "MATH-06-021" },
      { label: "孩子在计算假设法与方程法综合应用时频繁出错，不是看错…", chipId: "MATH-06-022" },
      { label: "遇到利润问题的应用题，孩子读完题目完全不知道从哪里下…", chipId: "MATH-06-020" },
      { label: "孩子在计算分数乘分数、分数混合运算与简便计算时频繁出…", chipId: "MATH-06-004" },
      { label: "孩子在计算折扣/成数/税率/利率应用题时频繁出错，不…", chipId: "MATH-06-013" },
      { label: "孩子在计算比的基本性质、化简比、按比分配应用题时频繁…", chipId: "MATH-06-007" },
      { label: "孩子在计算百分数意义、百分数/分数/小数互化时频繁出…", chipId: "MATH-06-009" },
      { label: "孩子在计算数与代数/图形与几何/统计与概率/综合应用…", chipId: "MATH-06-016" },
      { label: "画数形结合思想、找规律时图形画反、公式记混，空间想象…", chipId: "MATH-06-011" },
      { label: "孩子在计算负数认识、数轴与负数比较时频繁出错，不是看…", chipId: "MATH-06-012" },
      { label: "画扇形统计图读图与信息提取、选择合适的统计图时图形画…", chipId: "MATH-06-010" },
      { label: "孩子在计算用方向和距离确定位置时频繁出错，不是看错数…", chipId: "MATH-06-005" },
    ],
    "语文": [
      { label: "小升初课外文言文阅读，给出一段墨子或战国策的故事，问…", chipId: "CHI-06-001" },
      { label: "写抒情或成长作文（如《那些年，我们一起走过》），结尾…", chipId: "CHI-06-002" },
      { label: "记叙文阅读综合是考试必考题型，孩子总是拿不到满分", chipId: "CHI-06-006" },
      { label: "看到病句题就发怵，分不清是成分残缺还是搭配不当，每次…", chipId: "CHI-06-005" },
      { label: "句子综合是考试必考题型，孩子总是拿不到满分", chipId: "CHI-06-004" },
      { label: "古诗背了又忘，默写总写错别字，诗句意思理解不透彻", chipId: "CHI-06-008" },
      { label: "小升初语文总复习是考试必考题型，孩子总是拿不到满分", chipId: "CHI-06-014" },
      { label: "说明文阅读综合是考试必考题型，孩子总是拿不到满分", chipId: "CHI-06-007" },
      { label: "名著阅读综合是考试必考题型，孩子总是拿不到满分", chipId: "CHI-06-013" },
      { label: "比喻和拟人分不清，让分析修辞手法的作用就只会写'生动…", chipId: "CHI-06-009" },
      { label: "非连续性文本综合是考试必考题型，孩子总是拿不到满分", chipId: "CHI-06-011" },
      { label: "字词综合是考试必考题型，孩子总是拿不到满分", chipId: "CHI-06-003" },
      { label: "不但……而且……还是虽然……但是……", chipId: "CHI-06-010" },
    ],
    "英语": [
      { label: "The web platform ______ (b…", chipId: "ENG-06-001" },
      { label: "小升初压轴题：一段长短文挖出10个空只给首字母，要求…", chipId: "ENG-06-002" },
      { label: "动词过去式记不住，不规则变化更是错一大片", chipId: "ENG-06-008" },
      { label: "四种时态混在一起考就全乱了，不知道该用哪个", chipId: "ENG-06-010" },
      { label: "什么时候加er、什么时候加more傻傻分不清楚", chipId: "ENG-06-009" },
      { label: "英语小升初英语总复习句型总是记不住，考试时不知道怎么回答", chipId: "ENG-06-015" },
      { label: "英语Last Weekend句型总是记不住，考试时不…", chipId: "ENG-06-012" },
      { label: "英语情态动词综合句型总是记不住，考试时不知道怎么回答", chipId: "ENG-06-016" },
      { label: "英语疑问词综合句型总是记不住，考试时不知道怎么回答", chipId: "ENG-06-017" },
      { label: "英语I Have a Pen Pal句型总是记不住，…", chipId: "ENG-06-006" },
      { label: "英语My Weekend Plan句型总是记不住，考…", chipId: "ENG-06-005" },
      { label: "英语Then and Now句型总是记不住，考试时不…", chipId: "ENG-06-014" },
      { label: "英语Where Did You Go句型总是记不住，…", chipId: "ENG-06-013" },
      { label: "英语What Does He Do句型总是记不住，考…", chipId: "ENG-06-007" },
      { label: "英语How Tall Are You句型总是记不住，…", chipId: "ENG-06-011" },
      { label: "英语How Can I Get There句型总是记…", chipId: "ENG-06-003" },
      { label: "英语Ways to Go to School句型总是…", chipId: "ENG-06-004" },
    ],
  },
};

// Global export for browser script tag