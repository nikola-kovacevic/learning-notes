/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Learning notes",
  tagline: "Nikola Kovacevic's learning notes",
  url: "https://learning-notes.kovacevic.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  favicon: "img/favicon.ico",
  projectName: "learning-notes",
  themeConfig: {
    navbar: {
      title: "[Learning Notes]",
      logo: {
        alt: "Learning Notes",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://kovacevic.dev",
          label: "About me",
          position: "right",
        },
        {
          href: "https://twitter.com/CtrlArchiDel",
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
    "@docusaurus/plugin-ideal-image",
    require.resolve("docusaurus-lunr-search"),
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
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
