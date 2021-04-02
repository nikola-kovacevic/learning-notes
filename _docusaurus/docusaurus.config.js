/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Learning notes",
  tagline: "Nikola Kovacevic's learning notes",
  url: "https://localhost:3000", // TODO: change this once hosted
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
      copyright: `Copyright © ${new Date().getFullYear()} Nikola Kovacevic.`,
    },
  },
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
