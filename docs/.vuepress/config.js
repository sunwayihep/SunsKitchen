/*
 * @Description:
 * @version: 1.0
 * @Author: Wei Sun
 * @Date: 2020-03-17 20:47:32
 * @LastEditors: Wei Sun
 * @LastEditTime: 2020-03-26 15:41:42
 */
module.exports = {
  title: "Sun's Kitchen",
  description: "Live Long and Prosper",
  dest: "public",
  base: "/sunskitchen/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/image/myicon.png"
      }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date"
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/sunwayihep",
            icon: "reco-github"
          }
        ]
      }
    ],
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category"
      },
      tag: {
        location: 3,
        text: "Tag"
      }
    },
    friendLink: [
      {
        title: "Vuepress",
        desc: "Static site generator based on vue.js.",
        link: "https://vuepress.vuejs.org/"
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress theme used by this site.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    logo: "/image/mylogo.png",
    search: true,
    searchMaxSuggestions: 10,
    sidebar: "auto",
    lastUpdated: "Last Updated",
    author: "Sunway",
    authorAvatar: "/image/myphoto.jpeg",
    // record: "xxxx",
    startYear: "2020"
  },
  markdown: {
    lineNumbers: true
  }
};
