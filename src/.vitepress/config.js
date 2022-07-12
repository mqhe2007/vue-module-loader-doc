export default {
  base: "/vue-module-loader-doc/",
  title: "VueModuleLoader",
  description: "专注 Vue 生态的微前端模块加载器",
  lastUpdated: true,
  themeConfig: {
    logo: "/VML.svg",
    siteTitle: false,
    sidebarDepth: 2,
    nav: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "API",
        link: "/api/",
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/mqhe2007/vue-module-loader/",
      },
    ],
    sidebar: [
      {
        items: [
          { text: "指南", link: "/guide/" },
          { text: "API", link: "/api/" },
        ]
      }
    ],
    footer: {
      message: 'VueModuleLoader 文档由 VitePress 生成',
      copyright: 'Copyright © 2019-今年 mengqinghe.com'
    }
  },
};
