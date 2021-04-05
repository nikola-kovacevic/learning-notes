/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Learning notes",
  tagline: "Nikola Kovacevic's learning notes",
  url: "https://nk-learning-notes.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  projectName: "learning-notes",
  themeConfig: {
    // algolia: {
    //   apiKey: "YOUR_API_KEY",
    //   indexName: "YOUR_INDEX_NAME",
    // },
    navbar: {
      title: "[Learning Notes]",
      logo: {
        alt: "Learning Notes",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://twitter.com/nkovacevic88",
          label: "Twitter",
          position: "right",
        },
        {
          href: "https://github.com/nikola-kovacevic",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `This work is licensed under a MIT license. Copyright © ${new Date().getFullYear()} Nikola Kovacevic.`,
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-sitemap",
      {
        changefreq: "weekly",
        priority: 0.5,
        trailingSlash: false,
      },
    ],
    "@docusaurus/plugin-ideal-image",
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
