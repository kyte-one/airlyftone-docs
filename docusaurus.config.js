// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AirLyft Documentation",
  tagline:
    "Welcome to AirLyft! This documentation website is for Projects as well as Community members.",
  url: "https://docs.airlyft.one",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kyteone", // Usually your GitHub org/user name.
  projectName: "airlyft-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/kyte-one/airlyftone-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "AirLyft Docs",
        logo: {
          alt: "AirLyft",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "doc",
          //   to: "docs/overview",
          //   docId: 'overview/index',
          //   activeBasePath: 'docs/overview/',
          //   position: "left",
          //   label: "Overview",
          // },
          {
            type: "doc",
            to: "docs/guides",
            docId: 'guides/index',
            activeBasePath: 'docs/guides/',
            position: "left",
            label: "Guides",
          },
          // {
          //   type: "doc",
          //   to: "docs/users",
          //   docId: 'users/index',
          //   activeBasePath: 'docs/users/',
          //   position: "left",
          //   label: "Users",
          // },
          {
            href: "https://github.com/kyte-one/airlyftone-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/kyteone",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/kyteone",
              },
              {
                label: "Discord",
                href: "https://discord.gg/jtyMknRY",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "AirLyft App",
                to: "https://www.airlyft.one",
              },
              {
                label: "GitHub",
                href: "https://github.com/kyte-one",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KyteOne`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
