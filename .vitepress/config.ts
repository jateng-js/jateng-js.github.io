import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Jateng JS",
  description: "Central Java JavaScript Community",
  cleanUrls: true,
  lang: "en-US",
  srcExclude: ["README.md"],
  head: [
    ["meta", { name: "theme-color", content: "#101014" }],
    [
      "meta",
      {
        name: "description",
        content:
          "Jateng JS is a Central Java community for JavaScript developers, inspired by communities like SurabayaJS and JogjaJS."
      }
    ]
  ],
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Jateng JS",
    nav: [
      { text: "About", link: "/#about" },
      { text: "Programs", link: "/#what-we-do" },
      { text: "Join", link: "/#join" }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/jateng-js" }
    ],
    footer: {
      message: "Built by and for JavaScript developers in Central Java.",
      copyright: "Copyright © 2026 Jateng JS"
    },
    search: {
      provider: "local"
    }
  }
});
