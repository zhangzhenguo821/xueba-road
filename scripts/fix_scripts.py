#!/usr/bin/env python3
"""Replace 93 placeholder scripts in data.js with real problem-solving content."""

import re

# Map chip_id -> new script content
REPLACEMENTS = {
    # ====== MATH ======
    "MATH-06-019": "浓度三公式要记死：浓度=溶质÷溶液×100%，溶质=溶液×浓度，溶液=溶质÷浓度。稀释问题——加溶剂(水)，溶质质量不变！浓缩问题——蒸发溶剂或加溶质。做题先找'不变量'！",
    "MATH-05-014": "长方体正方体就三步：第一步，分清长宽高（正方体都一样）；第二步，表面积=六个面面积加起来，体积=长×宽×高（正方体=a³）；第三步，注意单位！面积用平方，体积用立方！",
    "MATH-06-021": "列方程解应用题万能三步：第一步，找等量关系——题目里'比''是''共''一共'这些词后面就是等式！第二步，设未知数，哪个不知道就设哪个为x。第三步，根据等量关系列方程，解出来！",
    "MATH-05-016": "异分母分数加减法三步走：第一步，找两个分母的最小公倍数做公分母(通分)；第二步，分子对应扩大后相加减；第三步，结果能约分的约分，能化带分数的化带分数！",
    "MATH-06-020": "利润问题就四个数：成本(进价)、售价(卖价)、利润、利润率。死记两个公式：利润=售价-成本，利润率=利润÷成本×100%。打几折就是原价×百分之几十！",
    "MATH-05-015": "分数意义就记住两件事：第一，真分数分子<分母（＜1），假分数分子≥分母（≥1），带分数=整数+真分数；第二，分数的分子分母同乘同除一个数（不为0），分数大小不变！",
    "MATH-05-013": "因数和倍数四句口诀：一个数的因数成对找，最小1最大是自己；一个数的倍数无限多，最小是自己没最大；2的倍数看个位(0/2/4/6/8)；3的倍数各位和是3的倍数；5的倍数个位0或5。质数只有1和自己两个因数！",
    "MATH-06-007": "比就三件事：第一，比=除法=分数，比的前项÷后项=比值；第二，化简比就是找前后项的最大公因数同时除，比的前后项必须互质；第三，按比分配——先用总量÷总份数=每份量，再分别乘起来！",
    "MATH-04-018": "除数是两位数的除法，试商是关键！试商口诀：用四舍五入法把除数看成整十数，然后试商。商大了就减1再试，商小了就加1再试。试好后别忘了把商和除数乘一遍验证！",
    "MATH-06-016": "总复习就按四块来：数与代数（计算+方程+比和比例），图形与几何（面积体积+位置方向），统计与概率（图表+平均数），综合应用（应用题归类）。每块先理概念再刷题！",
    "MATH-06-011": "数形结合解题三步：第一步，根据题意画图（线段图、方格图、或表格）；第二步，在图上标出已知数和未知数，找规律；第三步，从图里读出关系式，列算式。画图=解题成功一半！",
    "MATH-04-023": "小数定义牢记住：十分位=0.1，百分位=0.01，千分位=0.001。比较大小——先比整数部分，相同的比十分位，再比百分位，逐位比！小数点移动——向右移×10^n，向左移÷10^n。",
    "MATH-04-020": "优化问题万能原则：能同时做的事一起做（比如烧水时洗茶杯），不能同时做的排好顺序。画流程图分析，哪个环节等待时间最长就先优化哪个！",
    "MATH-05-018": "找次品记死三分法：每次把物品平均分三堆（不能平均则让最多堆和最少堆差1），天平称一次就能锁定次品在哪堆！称n次最多能从3^n个中找出次品。三个物品称一次，9个两次，27个三次！",
    "MATH-04-016": "量角器使用三步：第一步，量角器的中心点对准角的顶点；第二步，0刻度线和角的一条边重合；第三步，读取另一条边对应的刻度（注意看内圈还是外圈）！",
    "MATH-04-024": "小数加减法核心就是对齐！小数点对齐=相同数位对齐，然后像整数一样从最低位开始加减，最后的结果里别忘了点上小数点。进位退位和整数一模一样！",
    "MATH-04-021": "四则运算就一个规则：先乘除，后加减，有小括号的先算小括号里的。还有中括号？先小括号再中括号，最后才算括号外面的。运算顺序错了全盘皆输！",
    "MATH-04-017": "三位数乘两位数竖式秘诀：用两位数的个位和十位分别去乘三位数，个位乘的结果末位对个位，十位乘的结果末位对十位，两行结果末位对齐后加起来。别忘了补0占位！",
    "MATH-05-012": "三视图还原立体图形顺口溜：从上面看形状（整体布局），从前面看列数（每列有几个），从侧面看层数（最高几层）。先根据上面视图摆出平面位置，再根据前面和侧面确定每列高度！",
    "MATH-06-012": "负数记住三点：第一，0是分界线，负数＜0＜正数；第二，数轴上越往右数越大，越往左数越小；第三，比较负数大小——数轴上靠右的更大，-1＞-5！",
    "MATH-04-029": "观察物体看三视图：从上面看→确定物体的平面形状（俯视图），从前面看→确定每列有几层（正视图），从侧面看→确定每行有几层（侧视图）。三视图合作才能还原立体！",
    "MATH-04-027": "平均数=所有数据的总和÷数据的个数。条形统计图四要素不能少：标题、横轴（类别）、纵轴（数量+单位）、直条宽度一致。复式条形统计图用不同颜色区分两组数据！",
    "MATH-05-019": "旋转三要素缺一不可：旋转中心（绕哪个点转）、旋转方向（顺时针还是逆时针）、旋转角度（转多少度，通常90°或180°）。作图时先连中心点的线，再用量角器量出角度画新线！",
    "MATH-06-010": "扇形统计图解读三步骤：第一步，整个圆=100%；第二步，扇形圆心角÷360°=该部分百分比；第三步，数量=总量×百分比。选统计图原则：比较多少→条形，看趋势→折线，看占比→扇形！",
    "MATH-04-028": "轴对称三步：第一步，找出对称轴（关键点连线的中垂线）；第二步，看对称轴两边图形是否完全重合；第三步，补全轴对称图形时，对称点连线垂直对称轴且等距。平移两要素：方向（上下左右）+距离（几格）！",
    "MATH-04-030": "营养午餐综合实践四步：第一步，收集数据（统计同学们爱吃的菜）；第二步，整理数据（用表格分类汇总）；第三步，描述数据（画统计图）；第四步，分析数据（看营养是否均衡，提出建议）。",
    "MATH-05-007": "可能性就三级：一定发生（概率=1）、可能发生（0＜概率＜1）、不可能发生（概率=0）。计算可能性=有利的情况数÷所有可能的情况总数。骰子题画个表全写出来就不乱了！",
    "MATH-06-005": "用方向和距离确定位置三要素：第一，观测点（从哪出发）；第二，方向（哪个方位，偏多少度）；第三，距离（多少米/千米）。描述时顺序固定：从观测点出发，沿XX方向XX角度，走XX距离到达目标点。",
    "MATH-04-019": "条形统计图绘制四步：第一步，定标题（写清楚统计什么）；第二步，画横轴（类别）和纵轴（数量+单位），标刻度；第三步，根据数据画直条（宽度一样、间距均匀）；第四步，在每个直条上标数据！",
    "MATH-05-005": "数对=位置坐标，格式是(列,行)。关键口诀：先列后行，列从左往右数第几，行从下往上数第几。点A(3,5)=第3列第5行。(0,0)在原点坐标。两个数对如果列相同则在同一条竖线上！",
    "MATH-05-017": "折线统计图看三步：第一步，看标题和横轴（什么时间）、纵轴（什么数据+单位）；第二步，看点——每个点代表一个数据；第三步，看线——上升=增加，下降=减少，平着=不变。对比两组复用复式折线图！",
    "MATH-05-011": "数字编码规则就记身份证：前6位=地区码，7-14位=出生日期(YYYYMMDD)，15-16位=派出所码，17位=性别(奇数男偶数女)，18位=校验码。邮政编码=省+市+区，学号=入学年份+班级+序号！",
    "MATH-04-022": "五大运算定律背到脱口而出：加法交换律a+b=b+a，加法结合律(a+b)+c=a+(b+c)，乘法交换律a×b=b×a，乘法结合律(a×b)×c=a×(b×c)，乘法分配律(a+b)×c=a×c+b×c！分配律最容易错——括号外面的数要和括号里每一个数都乘！",
    "MATH-05-022": "比就是除法就是分数。比的前项=除法里的被除数=分数的分子，比的后项=除数=分母，比值=商=分数值。化简比三步：找前后项最大公因数→前后项同时除以它→写成最简整数比。按比例分配：总份数=前后项之和，每份量=总量÷总份数！",

    # ====== CHINESE ======
    "CHI-04-010": "写人作文万能五段法：第一段开门见山（写谁，什么特点）；第二段外貌描写（抓1-2个最突出的特征，不要面面俱到）；第三段写一件事（有起因经过结果）；第四段通过这件事体现品质（如勤劳、善良）；第五段结尾点题（这个人给你什么影响）。",
    "CHI-05-012": "写景作文三步：第一步，定点观察，从远到近/从外到内/从上到下，选择一种顺序；第二步，每个地方写1-2句话，用上比喻+拟人+五感；第三步，结尾加上感受或联想！状物作文=外形（大小颜色形状）+功能（有什么用）+情感（为什么喜欢）。读后感=引（原文写了什么）+议（你的观点）+联（联系生活）+结（总结感悟）。",
    "CHI-06-006": "记叙文阅读万能解题公式：第一，概括主要内容=谁+在什么情况下+做了什么事+结果怎样（六要素串起来）；第二，找中心思想=文章写了什么+表达了什么感情/说明了什么道理（中心句一般在开头或结尾段！）；第三，分析人物=抓住语言、动作、神态、心理四种描写。",
    "CHI-06-012": "命题作文=题目给你了，照着写就行；半命题作文=先把题目补充完整再写（选自己最拿手的补）；话题作文=围绕话题自由拟题。审题三读：一读题目要求（写什么文体/多少字），二读范围限制（时间/地点/人称），三读关键词（题眼在哪里）。",
    "CHI-06-004": "句型转换四种必考：第一，双重否定变肯定——'不得不'='必须'，'没有不'='都'；第二，反问变陈述——去掉'难道''怎能'，把问号改句号，意思不变；第三，直接引语变间接引语——改人称、改时态；第四，缩句——去掉修饰只留主干(谁干什么/什么怎么样)。",
    "CHI-06-014": "小升初语文复习分三块：第一块基础知识（字词+句子+标点+古诗词），每天30分钟背记；第二块阅读理解（记叙文+说明文+非连续性文本），每种文体练5篇掌握套路；第三块作文（写人/记事/写景/想象），每类写2篇+修改。错题本分类记录，考前翻一翻！",
    "CHI-05-004": "段落结构四种类型速记：总分结构=第一句是中心句，后面展开解释（找段落首句！）；分总结构=前面摆事实，最后一句总结（找段落尾句！）；总分总=首尾呼应（找首句和尾句是否一致）；并列结构=没有总起句，分几个方面各说各的（过渡词提示：第一/第二/另外）。",
    "CHI-06-007": "说明文阅读三件套：第一，判断说明方法——举例子(如/例如/比如)、列数字(有具体数字)、打比方(像/好像/仿佛)、作比较(比/而/相对于)；第二，答作用——这个说明方法+说明了什么+使说明更具体/生动/准确；第三，分析说明顺序——时间顺序(有年月日)、空间顺序(方位词)、逻辑顺序(因为所以/首先其次)。",
    "CHI-05-005": "说明顺序就三种+识别口诀：时间顺序——有具体时间词（首先/然后/最后，古代/现代）；空间顺序——有方位词（上/下/左/右/东/南/西/北/里/外）；逻辑顺序——因果关系（因为所以）、主次关系（主要/次要）、从现象到本质（表面/实际上）。做题先圈时间词和方位词，都不是就是逻辑顺序！",
    "CHI-05-003": "词语理解三步法：第一步——联系上下文，把词语放到句子里读两三遍，猜大概意思（90%的题都能用这招！）；第二步——拆词法，先把两个字拆开分别解释再合起来；第三步——找近反义词，用会的词类推出不会的词的意思。",
    "CHI-04-013": "同音字辨析看偏旁部首！偏旁相同含义相关（'清/晴/情'都有青，清=氵水→清澈，晴=日→天晴，情=忄心→感情）。形近字差一笔意思天差地别（'己/已/巳'：己自己不出头，已已经半出头，巳巳时全封口）。用联想法记差别最快！",
    "CHI-04-015": "观察日记写作三招：第一，连续观察同一个东西（植物/动物/天气）至少3天，每天记录变化；第二，五感法描写——眼看（颜色形状大小变化）+手摸（触感）+鼻闻（气味）+耳听（声音）+心想（看到变化时的想法）；第三，格式=日期+天气+正文，开头写'今天我观察到……'。",
    "CHI-06-010": "关联词八种关系口诀：因为……所以……（因果，前因后果）；虽然……但是……（转折，前后相反）；如果……就……（假设，假如怎样就怎样）；不但……而且……（递进，更进一步）；不是……就是……（选择，二中选一）；只要……就……（条件，满足条件就出结果）；一……就……（承接，先后发生）；宁可……也不……（取舍，选前者舍后者）。做题先读句子判断前后是啥关系！",
    "CHI-04-009": "小学生必会三种标点：引号（''或\"\"）——引用别人说的话、表示特殊含义、强调重点；省略号（……6个点）——话没说完、表示省略、说话断断续续；破折号（——占两格）——解释说明、意思转折、声音延长。口诀：话用引号括，没完用省略，解释用破折！",
    "CHI-04-003": "多音字记法——根据字义区分读音（长cháng=长度，zhǎng=生长）。近义词——意思相近但用法可能不同（美丽/漂亮，前者书面后者口语）。反义词——找相反意思（高/矮，快/慢）。成语——要记完整不要只背意思，考试常考补写成语的其中一个字！",
    "CHI-04-014": "句子排序三步法：第一步，找第一句——通常是介绍时间/地点/人物的句子，或总起句；第二步，找连接词——'首先/接着/然后/最后''第一/第二'这些词能锁定顺序；第三步，找逻辑链——时间先后的按时间排，事情发展的按因果排，空间描写的按方位排。排好后读一遍验证通不通！",
    "CHI-05-009": "小学生标点综合检查五处易错：第一，一句话说完用句号（。），不要一逗到底！第二，分号（；）只用在并列的分句之间；第三，书名号（《》）只用书名篇名，活动/课程不用；第四，引号（''）里再有引号用双引号（\"\"）；第五，顿号（、）用在并列词语之间，逗号（，）用在分句之间。",
    "CHI-04-012": "非连续性文本三读法：第一读——先看标题，知道这材料在讲什么；第二读——看图表（图表的标题、横轴纵轴代表什么、图例说明）；第三读——看文字（说明书/广告找关键信息：时间/地点/价格/要求）。做题时回到材料中找证据，不能用猜的！",
    "CHI-05-014": "名著阅读三步法：第一步，了解背景（作者是谁、什么朝代、写的是什么故事）；第二步，抓住主要人物（做人物卡片：姓名+称号+主要事件+性格特点）；第三步，读关键情节（回目/章节的标题往往就是本回主要内容）。写作时结合人物+事件+自己的感悟三点写！",
    "CHI-06-013": "中外名著阅读三步：中国古典名著（四大名著）——了解朝代背景+理清人物关系（画人物关系图）+每天读一回；外国名著——先看译者序了解背景+记住外国人名特点+关注情节发展。写人物分析=人物+事件+性格+引用原文句子证明！",
    "CHI-06-011": "非连续性文本综合四步：第一步，快速浏览所有材料（图文表都有），看标题统领；第二步，逐个材料提取关键信息（人名/数字/时间/结论）；第三步，找材料之间的关系（互相补充还是对比）；第四步，综合信息答题——答案可能分散在不同材料里，要汇总！",
    "CHI-06-003": "字词综合三板斧：第一，易错字——把容易写错笔画的字单独抄写，对比正确和错误写法；第二，成语/谚语/歇后语——分类记忆（数字成语、动物成语、天气谚语、谐音歇后语）；第三，多义字——一个字在不同词语里意思不一样（如'深'：水深/夜深/感情深），考试选意思要放回句子里判断！",
    "CHI-05-013": "口语交际四类速成：辩论——先亮观点+给出两个理由（首先/其次）+举例证明+总结；演讲——开头用问题或故事吸引人+主体分2-3点展开+结尾号召行动；调查报告——标题+调查目的+调查方法+数据/发现+结论建议；讨论——认真听别人说完再发言，先说'我同意/补充一下'再表达。",

    # ====== ENGLISH ======
    "ENG-05-011": "一般将来时两个句型随便用：will + 动词原形（I will go）或 be going to + 动词原形（I am going to go）。时间标志词：tomorrow, next week/month/year, in the future, soon。变否定句will后加not→won't，be动词后加not。变疑问句will和be动词提前！",
    "ENG-04-011": "人称代词主格（做主语）：I/you/he/she/it/we/they放动词前面。宾格（做宾语）：me/you/him/her/it/us/them放动词或介词后面。物主代词=my/your/his/her/its/our/their + 名词。口诀：主格动词前，宾格动词后，my+名词=mine能单用！",
    "ENG-06-012": "Last Weekend核心是过去时：What did you do last weekend? I + 过去式动词(watched TV/played football/cleaned my room/washed clothes)。时间标志词：yesterday, last night/Saturday/weekend, the day before yesterday。动词过去式规律：一般+ed，以e结尾+d，辅音+y改i+ed，重读闭音节双写+ed。不规则的要背！",
    "ENG-06-016": "情态动词三条铁律：第一，can(能/会/可以)→could(过去式)，must(必须)→mustn't(禁止)，should(应该)；第二，情态动词后永远接动词原形！(can do不是can does)；第三，变否定直接加not(cannot→can't, must not→mustn't)，变疑问情态动词提前。",
    "ENG-06-017": "Wh-疑问词七兄弟：What(什么→问事物)，Where(哪里→问地点)，When(什么时候→问时间)，Who(谁→问人)，Why(为什么→问原因，用because回答)，Which(哪个→有范围选择)，How(怎样→问方式/程度)。公式：疑问词+一般疑问句=特殊疑问句！",
    "ENG-05-007": "There Be就近原则：离be动词最近的名词决定用is还是are。There is a book and two pens(book单数→用is)。There are two pens and a book(pens复数→用are)。There be否定=be后加not(There isn't/aren't)。疑问=be提前(Is there/Are there)。回答用Yes, there is/are. No, there isn't/aren't。",
    "ENG-06-006": "第三人称单数问句：Does + 主语(he/she) + 动词原形？回答：Yes, he does. / No, he doesn't。注意：问句里动词变回原形(Does she likes × → Does she like ✓)。陈述句三单动词+s/es(She likes drawing pictures and going hiking)。爱好表达：like + 动词ing！",
    "ENG-04-010": "名词复数规则变化三条：第一，一般+s(book→books)；第二，s/x/sh/ch结尾+es(bus→buses, watch→watches)；第三，辅音字母+y结尾，改y为i+es(baby→babies)。不规则变化必背：man→men, woman→women, child→children, foot→feet, tooth→teeth, mouse→mice, sheep→sheep(不变), fish→fish(不变)。",
    "ENG-06-005": "将来时be going to：主语+be(am/is/are)+going to+动词原形。I am going to read books. He is going to visit grandparents. 问句：What are you going to do? / Where is he going? 时间标志词：tomorrow, this weekend, next week。",
    "ENG-05-013": "冠词a/an/the用法速记：a+辅音音素开头的词(a book/a dog)；an+元音音素开头的词(an apple/an hour注意hour的h不发音！)；the表示特指——说话双方都知道的东西(the sun太阳独一无二)、再次提到、序数词/最高级前，乐器前(play the piano)。不用冠词：三餐/球类/交通工具(by bus)。",
    "ENG-04-005": "描述朋友三句式：He/She is + 形容词(He is tall and strong/She is quiet and friendly)。He/She has + 外貌特征(He has short hair/big eyes/glasses)。介绍朋友Who is he/she? His/Her name is... 注意区分：He is/has是描述，He likes是爱好！",
    "ENG-04-019": "介词in/on/at/under用法口诀：in在……里面/在年月季节(in the box/in 2024/in summer)；on在……上面有接触/在星期日期(on the desk/on Monday)；at在……点/在具体地点(at 7 o'clock/at school)；under在……正下方(under the desk)；near在……附近(near the window)；between在……之间(between the two trees)。",
    "ENG-06-014": "Then and Now 过去与现在对比：过去式用was/were/went/did/could等，现在式用am/is/are/go/do/can等。对比句式：Before, I was short. Now, I am tall. 时间词：then=那时候，now=现在，before=以前。关键提醒：描述过去的事动词一定要变过去式！",
    "ENG-06-013": "过去时问答句型：问——Where did you go? What did you do? How did you go? Who did you go with? 答——I went to + 地点，I + 过去式动词。不规则过去式：go→went, see→saw, eat→ate, buy→bought, take→took, ride→rode, swim→swam。",
    "ENG-06-011": "比较级就一个句型：A + am/is/are + 形容词比较级 + than + B。规则：短词+er(tall→taller, short→shorter)；以e结尾+r(nice→nicer)；重读闭音节双写+er(big→bigger, thin→thinner)；辅音+y改i+er(heavy→heavier)。最高级+est前面加the。必背三个不规则：good→better→best, bad→worse→worst, many/much→more→most。",
    "ENG-06-007": "问职业两种问法：What does he/she do? = What is his/her job? 回答都用 He/She is a/an + 职业(teacher/doctor/nurse/farmer/policeman)。第三人称单数助动词用does！Where does he work? He works in a hospital. How does he go to work? He goes by car。注意三单动词+s/es！",
    "ENG-06-003": "问路万能模板：问——Excuse me, how can I get to the...? / Where is the...?；指路——Go straight(直走) → Turn left/right at the...(在……左转/右转) → It's on your left/right(在你左/右边) → It's near/behind/in front of...(在……附近/后面/前面)。关键介词：crossing交叉口，traffic lights红绿灯。",
    "ENG-06-004": "交通方式两种表达：by + 交通工具(by bus/by car/by bike/by subway/by plane)，on foot特殊(走路)。How do you go to school? I go to school by bus. = I take a bus to school. 注意：I walk to school. = I go to school on foot. 频度副词在动词前：I usually walk. Sometimes I go by bus。",
    "ENG-04-013": "时间表达两种方法：顺读法——先说小时再说分钟(six thirty=6:30, seven fifteen=7:15)；逆读法——分钟≤30用past(过)：ten past six=6:10，half past six=6:30；分钟>30用to(差)：ten to seven=6:50(差10分到7点)。问时间：What time is it? It's... 问活动时间：What time do you...? I... at...",
    "ENG-04-017": "购物对话万能模板：店员——Can I help you? / What can I do for you? 顾客——I want a/an/some... / Can I try it on? / How much is it? 价格——It's... yuan. / They're... yuan. 决定购买——I'll take it. / Here's the money. 注意：How much问价钱(不可数)，How many问数量(可数)。",
    "ENG-05-006": "能力表达can句型：问——What can you do? / Can you + 动词原形？ 答——I can + 动词原形(sing English songs/play the pipa/do kung fu/draw cartoons)。can后永远用动词原形！否定=can't(cannot)，Can you...? 答：Yes, I can. / No, I can't。注意乐器前加the(play the piano)，球类前不加(play football)。",
    "ENG-04-004": "There be句型教室场景：There is a/an + 单数物体 + 地点(There is a blackboard in the classroom)。There are + 复数物体 + 地点(There are many desks and chairs)。Where is the...? It's near the window. 方位词：in/on/under/near/in front of/behind。名词单数前加a/an！",
    "ENG-04-007": "食物与请求句型：问想吃什么——What would you like? I'd like some... (rice/chicken/vegetables/soup)。礼貌请求——Would you like a knife and fork? Yes, please. / No, thanks。餐具词汇：chopsticks筷子, knife刀, fork叉, spoon勺, bowl碗。Help yourself!(随便吃！)不可数名词用some：some beef/soup/rice。",
    "ENG-05-004": "星期与课程表达：What do you have on Mondays? I have Chinese/English/maths/music/PE/art/science。频度副词排序（从多到少）：always(总是)＞usually(通常)＞often(经常)＞sometimes(有时)＞never(从不)。位置口诀：be后实前——I am always happy. / I always play football on Sundays。",
    "ENG-04-008": "介绍家庭成员：How many people are there in your family? There are...(数字)。我家有...口人。Who are they? They are my parents/grandparents/uncle/aunt/cousin...。问职业：What's your father's/mother's job? He/She is a/an + 职业。注意：parents=父母两人，father/mother=单个。",
    "ENG-04-014": "天气问答模板：What's the weather like today/in Beijing? It's + 天气词(sunny晴/cloudy多云/rainy下雨/windy刮风/snowy下雪/hot热/cold冷/warm暖和/cool凉爽)。温度：It's... degrees(度)。注意区分：rain(n.雨)→rainy(adj.下雨的)，snow(n.雪)→snowy(adj.下雪的)。",
    "ENG-05-003": "描述人物两个维度：外貌——He/She is tall/short/young/old。He/She has + 外貌特征。性格——He/She is kind/strict/friendly/hard-working/clever/shy/polite/helpful。问：What's he/she like? (问性格/外貌) 答：He/She is... 注意区分：What's he like?(他怎样) vs What does he like?(他喜欢什么)！",
    "ENG-05-005": "点餐对话模板：服务员——What would you like to eat/drink? / Can I help you? 顾客——I'd like some/a/an... (sandwich/hamburger/salad/ice cream/juice/tea/milk)。问别人想吃——What would you like? / Would you like some...? 答：Yes, please. / No, thank you. I'd like... My favourite food is... 因为It's delicious/healthy/sweet。",
    "ENG-04-016": "服装+所有格问答：Whose + 单数名词 + is this? It's + 人名's/物主代词。Whose + 复数名词 + are these? They're + ... 例句：Whose coat is this? It's Amy's. / Whose pants are these? They're your father's。服饰词：hat/cap/dress/skirt/shirt/coat/sweater/jacket/shorts/pants/shoes/socks。注意复数服饰(glasses/pants/shorts/shoes/socks)用are！",
    "ENG-04-012": "学校场所词汇+楼层表达：Where is the library/playground/gym/canteen/computer room? It's on the first/second/third floor。英式：ground floor=一楼，first floor=二楼！美式：first floor=一楼。建议用美式说法更简单。方位：next to(紧挨着), near(附近), opposite(对面)。",
    "ENG-05-008": "自然公园场景问答：Is there a river/lake/forest/hill/mountain in the park? Yes, there is./No, there isn't。Are there any birds/animals/trees/flowers? Yes, there are./No, there aren't。注意：any用在疑问句和否定句中(Are there any...? There aren't any...)。陈述肯定用some(There are some...)。自然词汇：bridge桥,village村庄,house房屋,building建筑。",
    "ENG-04-015": "农场动物和蔬菜表达：These/Those are + 复数名词(These are cows/horses/sheep/hens/ducks)。问：What are these/those? They're... 注意：these(这些，指近处), those(那些，指远处)。蔬菜：tomato→tomatoes, potato→potatoes(以o结尾有生命+es！)。Are they...? Yes, they are./No, they aren't。数动物：How many + 复数 + do you see?",
    "ENG-06-015": "小升初英语四维复习法：维度一词汇——按话题分类背(学校/家庭/食物/天气/动物)，每天15个；维度二语法——整理时态表格（一般现在/现在进行/一般过去/一般将来）+名词复数+比较级；维度三阅读——做阅读题先看问题再读文章找答案，勾画关键词；维度四写作——背5个万能开头句+5个连接词+3个结尾句。",
    "ENG-04-006": "My Home房间场景问答：Where is the kitchen/bedroom/living room/bathroom/study? It's on the...floor。Where is your mother/father? He/She is in the kitchen/living room/study。方位词：in the kitchen在厨房里, on the sofa在沙发上, under the table在桌子下, near the window在窗户旁。问具体位置：Is she in the...? Yes, she is./No, she isn't。",
    "ENG-06-004": "交通方式两种表达：by + 交通工具(by bus/car/train/plane) = take + a/an/the + 交通工具（I go by bus = I take a bus）。on foot特殊：I walk to school = I go on foot。How do you go to school? I usually/often/sometimes go... 频度副词放动词前面！注意：主语是he/she时，go→goes, walk→walks。",
    "ENG-04-005": ""  # duplicate placeholder - skip
}

# Remove empty entries
REPLACEMENTS = {k: v for k, v in REPLACEMENTS.items() if v}

with open('/Users/zhang/WorkBuddy/2026-06-12-10-19-38/xueba-road-clean/data.js', 'r') as f:
    content = f.read()

# Track replacements
replaced = 0
not_found = []

for chip_id, new_script in REPLACEMENTS.items():
    # Find chip block containing this id
    # Pattern: "id": "XXX" ... "script": "old content"
    # Find the chip block for this id
    pattern = r'("id":\s*"' + re.escape(chip_id) + r'".*?"script":\s*)"([^"]*)"'
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        old_full = match.group(0)
        new_full = match.group(1) + '"' + new_script + '"'
        content = content.replace(old_full, new_full, 1)
        replaced += 1
        print(f"OK: {chip_id}")
    else:
        not_found.append(chip_id)
        print(f"MISS: {chip_id}")

print(f"\n=== Summary ===")
print(f"Replaced: {replaced}")
print(f"Not found: {len(not_found)}")
if not_found:
    for nf in not_found:
        print(f"  - {nf}")

# Write back
with open('/Users/zhang/WorkBuddy/2026-06-12-10-19-38/xueba-road-clean/data.js', 'w') as f:
    f.write(content)

print("\nDone! File written.")
