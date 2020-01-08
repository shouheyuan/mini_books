// 大分类
export const tabs = [
    { title: "All", kind: 1 },
    {
      title: "小说",
      kind: 100,
      child: [
        { kind: 100, title: "全部", parentKind: 100 },
        { kind: 113, title: "世界名著", parentKind: 100 },
        { kind: 114, title: "影视原著", parentKind: 100 },
        { kind: 115, title: "推理悬疑", parentKind: 100 },
        { kind: 116, title: "科幻", parentKind: 100 },
        { kind: 117, title: "言情", parentKind: 100 },
        { kind: 118, title: "青春", parentKind: 100 },
        { kind: 119, title: "都市", parentKind: 100 },
        { kind: 120, title: "幻想", parentKind: 100 },
        { kind: 121, title: "武侠", parentKind: 100 },
        { kind: 122, title: "历史", parentKind: 100 },
        { kind: 123, title: "官场", parentKind: 100 },
        { kind: 124, title: "军事战争", parentKind: 100 },
        { kind: 125, title: "中国古典", parentKind: 100 },
        { kind: 126, title: "中国现代", parentKind: 100 },
        { kind: 127, title: "中国当代", parentKind: 100 },
        { kind: 128, title: "外国现当代", parentKind: 100 },
        { kind: 129, title: "中短篇集", parentKind: 100 },
        { kind: 130, title: "其他", parentKind: 100 }
      ]
    },
    {
      title: "文学",
      kind: 101,
      child: [
        { kind: 101, title: "全部", parentKind: 101 },
        { kind: 131, title: "文学经典", parentKind: 101 },
        { kind: 132, title: "散文随笔", parentKind: 101 },
        { kind: 133, title: "日记书信", parentKind: 101 },
        { kind: 134, title: "演讲访谈", parentKind: 101 },
        { kind: 135, title: "纪实文学", parentKind: 101 },
        { kind: 136, title: "传记回忆", parentKind: 101 },
        { kind: 137, title: "诗歌及赏析", parentKind: 101 },
        { kind: 138, title: "戏剧曲艺", parentKind: 101 },
        { kind: 139, title: "寓言童话", parentKind: 101 },
        { kind: 140, title: "文学史", parentKind: 101 },
        { kind: 141, title: "文学理论与批评", parentKind: 101 },
        { kind: 142, title: "其他", parentKind: 101 }
      ]
    },
    {
      title: "人文社科",
      kind: 102,
      child: [
        { kind: 102, title: "全部", parentKind: 102 },
        { kind: 143, title: "经典著作", parentKind: 102 },
        { kind: 144, title: "心理学", parentKind: 102 },
        { kind: 145, title: "社会学", parentKind: 102 },
        { kind: 146, title: "人类学", parentKind: 102 },
        { kind: 147, title: "历史", parentKind: 102 },
        { kind: 148, title: "哲学", parentKind: 102 },
        { kind: 149, title: "文化", parentKind: 102 },
        { kind: 150, title: "宗教", parentKind: 102 },
        { kind: 151, title: "政治", parentKind: 102 },
        { kind: 152, title: "法律", parentKind: 102 },
        { kind: 153, title: "教育学", parentKind: 102 },
        { kind: 154, title: "新闻传播", parentKind: 102 },
        { kind: 155, title: "编辑出版", parentKind: 102 },
        { kind: 156, title: "考古", parentKind: 102 },
        { kind: 157, title: "人文地理", parentKind: 102 },
        { kind: 158, title: "语言文字", parentKind: 102 },
        { kind: 159, title: "军事", parentKind: 102 },
        { kind: 160, title: "其他", parentKind: 102 }
      ]
    },
    {
      title: "经济管理",
      kind: 103,
      child: [
        { kind: 103, title: "全部", parentKind: 103 },
        { kind: 161, title: "经典畅销", parentKind: 103 },
        { kind: 162, title: "创新创业", parentKind: 103 },
        { kind: 163, title: "市场营销", parentKind: 103 },
        { kind: 164, title: "企业经营", parentKind: 103 },
        { kind: 165, title: "投资理财", parentKind: 103 },
        { kind: 166, title: "领导力", parentKind: 103 },
        { kind: 167, title: "财务会计", parentKind: 103 },
        { kind: 168, title: "经济", parentKind: 103 },
        { kind: 169, title: "金融", parentKind: 103 },
        { kind: 170, title: "管理", parentKind: 103 },
        { kind: 171, title: "其他", parentKind: 103 }
      ]
    },
    {
      title: "科技科普",
      kind: 104,
      child: [
        { kind: 104, title: "全部", parentKind: 104 },
        { kind: 172, title: "科普百科", parentKind: 104 },
        { kind: 173, title: "数学", parentKind: 104 },
        { kind: 174, title: "物理", parentKind: 104 },
        { kind: 175, title: "化学", parentKind: 104 },
        { kind: 176, title: "天文", parentKind: 104 },
        { kind: 177, title: "生物", parentKind: 104 },
        { kind: 178, title: "医学", parentKind: 104 },
        { kind: 179, title: "自然地理", parentKind: 104 },
        { kind: 180, title: "城市建设", parentKind: 104 },
        { kind: 181, title: "工业技术", parentKind: 104 },
        { kind: 182, title: "农业技术", parentKind: 104 },
        { kind: 183, title: "其他", parentKind: 104 }
      ]
    },
    {
      title: "计算机与互联网",
      kind: 105,
      child: [
        { kind: 105, title: "全部", parentKind: 105 },
        { kind: 184, title: "行业趋势", parentKind: 105 },
        { kind: 185, title: "云计算与大数据", parentKind: 105 },
        { kind: 186, title: "移动互联网", parentKind: 105 },
        { kind: 187, title: "互联网营销", parentKind: 105 },
        { kind: 188, title: "办公软件指南", parentKind: 105 },
        { kind: 189, title: "编程语言", parentKind: 105 },
        { kind: 190, title: "软件开发与应用", parentKind: 105 },
        { kind: 191, title: "硬件开发", parentKind: 105 },
        { kind: 192, title: "网络安全", parentKind: 105 },
        { kind: 193, title: "人工智能", parentKind: 105 },
        { kind: 194, title: "其他", parentKind: 105 }
      ]
    },
    {
      title: "成功励志",
      kind: 106,
      child: [
        { kind: 106, title: "全部", parentKind: 106 },
        { kind: 195, title: "成功学", parentKind: 106 },
        { kind: 196, title: "励志", parentKind: 106 },
        { kind: 197, title: "情商与自我提升", parentKind: 106 },
        { kind: 198, title: "思维智力", parentKind: 106 },
        { kind: 199, title: "演讲口才", parentKind: 106 },
        { kind: 200, title: "职场", parentKind: 106 },
        { kind: 201, title: "人脉与人际关系", parentKind: 106 },
        { kind: 202, title: "其他", parentKind: 106 }
      ]
    },
    {
      title: "生活",
      kind: 107,
      child: [
        { kind: 107, title: "全部", parentKind: 107 },
        { kind: 203, title: "两性情感", parentKind: 107 },
        { kind: 204, title: "旅行", parentKind: 107 },
        { kind: 205, title: "美食与厨艺", parentKind: 107 },
        { kind: 206, title: "时尚美妆", parentKind: 107 },
        { kind: 207, title: "孕产育儿", parentKind: 107 },
        { kind: 208, title: "养生保健", parentKind: 107 },
        { kind: 209, title: "医学常识", parentKind: 107 },
        { kind: 210, title: "家庭医学", parentKind: 107 },
        { kind: 211, title: "体育健身", parentKind: 107 },
        { kind: 212, title: "星座占卜", parentKind: 107 },
        { kind: 213, title: "游戏娱乐", parentKind: 107 },
        { kind: 214, title: "宠物园艺", parentKind: 107 },
        { kind: 215, title: "其他", parentKind: 107 }
      ]
    },
    {
      title: "少儿",
      kind: 108,
      child: [
        { kind: 108, title: "全部", parentKind: 108 },
        { kind: 216, title: "家庭教育", parentKind: 108 },
        { kind: 217, title: "亲子阅读", parentKind: 108 },
        { kind: 218, title: "儿童文学", parentKind: 108 },
        { kind: 219, title: "启蒙读本", parentKind: 108 },
        { kind: 220, title: "少儿科普", parentKind: 108 },
        { kind: 221, title: "其他", parentKind: 108 }
      ]
    },
    {
      title: "艺术设计",
      kind: 109,
      child: [
        { kind: 109, title: "全部", parentKind: 109 },
        { kind: 222, title: "设计", parentKind: 109 },
        { kind: 223, title: "摄影", parentKind: 109 },
        { kind: 224, title: "电影", parentKind: 109 },
        { kind: 225, title: "音乐", parentKind: 109 },
        { kind: 226, title: "美术", parentKind: 109 },
        { kind: 227, title: "建筑", parentKind: 109 },
        { kind: 228, title: "其他", parentKind: 109 }
      ]
    },
    {
      title: "漫画绘本",
      kind: 110,
      child: [
        { kind: 110, title: "全部", parentKind: 110 },
        { kind: 229, title: "漫画", parentKind: 110 },
        { kind: 230, title: "绘本", parentKind: 110 },
        { kind: 231, title: "其他", parentKind: 110 }
      ]
    },
    {
      title: "教育考试",
      kind: 111,
      child: [
        { kind: 111, title: "全部", parentKind: 111 },
        { kind: 232, title: "外语学习", parentKind: 111 },
        { kind: 233, title: "教材教辅", parentKind: 111 },
        { kind: 234, title: "国外教材", parentKind: 111 },
        { kind: 235, title: "其他", parentKind: 111 }
      ]
    }
  ];
 