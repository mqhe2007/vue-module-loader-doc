const path = require("path");
module.exports = {
  base: "/vue-module-loader-doc/",
  title: "vue-module-loader",
  dest: path.resolve(__dirname, "../../docs"),
  description: "专注 Vue 生态的微前端模块加载器",
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      {
        text: "教程",
        link: "/guide/",
      },
      {
        text: "API",
        link: "/api/",
      },
      {
        text: "github",
        link: "https://github.com/mqhe2007/vue-module-loader/tree/next",
      },
    ],
    sidebar: {
      "/guide/": [""],
      "/api/": [""],
    },
  },
};
