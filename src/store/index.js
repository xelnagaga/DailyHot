import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      // 系统主题
      siteTheme: "light",
      siteThemeAuto: true,
      // 新闻类别
      newsArr: [
        {
          label: "抖音",
          value: "douyin",
          order: 0,
          show: true,
        },
        {
          label: "微博",
          value: "weibo",
          order: 1,
          show: true,
        },
        {
          label: "哔哩哔哩",
          value: "bilibili",
          order: 2,
          show: true,
        },
        {
          label: "小红书",
          value: "xiaohongshu",
          order: 3,
          show: true,
        },
        {
          label: "知乎",
          value: "zhihu",
          order: 4,
          show: true,
        },
        {
          label: "微信",
          value: "weixin",
          order: 5,
          show: true,
        },
        {
          label: "快手",
          value: "kuaishou",
          order: 6,
          show: true
        },
        
        
        {
          label: "今日头条",
          value: "toutiao",
          order: 7,
          show: true,
        },
        {
          label: "凤凰新闻",
          value: "fenghuang",
          order: 8,
          show: true,
        },
        {
          label: "网易",
          value: "netease",
          order: 9,
          show: true,
        },
        {
          label: "腾讯新闻",
          value: "newsqq",
          order: 10,
          show: true,
        },
        {
          label: "百度热搜",
          value: "baidu",
          order: 11,
          show: true,
        },
        {
          label: "搜狗热榜",
          value: "sougou",
          order: 12,
          show: true,
        },
        {
          label: "小红书热搜",
          value: "xhshotsearch",
          order: 13,
          show: true,
        },
        {
          label: "抽屉新热榜",
          value: "chouti",
          order: 14,
          show: true,
        },
        {
          label: "36氪",
          value: "36kr",
          order: 15,
          show: true,
        },
        {
          label: "虎嗅",
          value: "huxiu",
          order: 16,
          show: true,
        },
        {
          label: "少数派",
          value: "sspai",
          order: 17,
          show: true,
        },
        {
          label: "澎湃新闻",
          value: "thepaper",
          order: 18,
          show: true,
        },
        
        
        
        {
          label: "雪球",
          value: "xueqiu",
          order: 19,
          show: true,
        },
        {
          label: "每日经济新闻",
          value: "nbd",
          order: 19,
          show: true,
        },
        
        {
          label: "财新网",
          value: "caixin",
          order: 20,
          show: true
    },
    {
      label: "新浪财经",
      value: "sinafin",
      order: 21,
      show: true,
    },
    {
      label: "东方财富热议",
      value: "dfguba",
      order: 22,
      show: true,
    },
    {
      label: "票房排行榜",
      value: "piaofang",
      order: 22,
      show: true,
    },
    {
      label: "百度贴吧",
      value: "tieba",
      order: 23,
      show: true,
    },
    
    {
      label: "豆瓣新片榜",
      value: "douban_new",
      order: 24,
      show: true
    },
  
    {
      label: "微信读书",
      value: "weread",
      order: 25,
      show: true
    },
    {
      label: "网易云音乐",
      value: "music163",
      order: 26,
      show: true
    },

  
    {
      label: "52破解",
      value: "52pojie",
      order: 28,
      show: true
    },
    {
      label: "博客园",
      value: "cnblogs",
      order: 29,
      show: true
    },
    
    {
      label: "稀土掘金",
      value: "juejin",
      order: 30,
      show: true,
    },
    {
      label: "广告狂人",
      value: "madman",
      order: 30,
      show: true,
    },
    {
      label: "flipboard",
      value: "flipboard",
      order: 30,
      show: true,
    },
    {
      label: "人人都是产品经理",
      value: "woshipm",
      order: 30,
      show: true,
    }
      ],
      // 链接跳转方式
      linkOpenType: "open",
      // 页头固定
      headerFixed: true,
      // 时间数据
      timeData: null,
    };
  },
  getters: {},
  actions: {
    // 更改系统主题
    setSiteTheme(val) {
      $message.info(`已切换至${val === "dark" ? "深色模式" : "浅色模式"}`, {
        showIcon: false,
      });
      this.siteTheme = val;
      this.siteThemeAuto = false;
    },
  },
  persist: [
    {
      storage: localStorage,
      paths: [
        "siteTheme",
        "siteThemeAuto",
        "newsArr",
        "linkOpenType",
        "headerFixed",
      ],
    },
  ],
});
