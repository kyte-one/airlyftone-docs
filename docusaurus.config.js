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
          editUrl: "https://github.com/kyte-one/airlyftone-docs/tree/main/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-BDVRPXL5C7",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "AirLyft Docs",
        logo: {
          alt: "AirLyft",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            to: "docs",
            docId: "overview/index",
            position: "left",
            label: "Documentation",
          },
          {
            to: "templates",
            position: "left",
            label: "Templates",
          },
          {
            type: "html",
            position: "right",
            value:
              '<a target="_blank" href="https://app.airlyft.one" class="link-button">Go App <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#eef2ff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="40" y="72" width="144" height="144" rx="8" opacity="0.2"></rect><polyline points="216 100 216 40 156 40" fill="none" stroke="#eef2ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="144" y1="112" x2="216" y2="40" fill="none" stroke="#eef2ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64" fill="none" stroke="#eef2ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg></a>',
          },
          {
            type: "html",
            position: "right",
            value:
              '<a target="_blank" href="https://github.com/kyte-one/airlyftone-docs" class="link-button">Github <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#eef2ff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z" opacity="0.2"></path><path d="M84,240a23.9,23.9,0,0,0,24-24V168" fill="none" stroke="#eef2ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M172,240a23.9,23.9,0,0,1-24-24V168" fill="none" stroke="#eef2ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24" fill="none" stroke="#eef2ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24" fill="none" stroke="#eef2ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z" fill="none" stroke="#eef2ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg></a>',
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/overview",
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
                href: "https://twitter.com/airlyftone",
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
                label: "Home Page",
                to: "https://www.airlyft.one",
              },
              {
                label: "AirLyft App",
                to: "https://app.airlyft.one",
              },
              {
                label: "Project Dashboard",
                to: "https://account.airlyft.one",
              },
              {
                label: "GitHub",
                href: "https://github.com/kyte-one",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KyteOne`,
        logo: {
          alt: "Meta Open Source Logo",
          src: "img/logo.svg",
          href: "https://opensource.fb.com",
          width: 160,
          height: 51,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
