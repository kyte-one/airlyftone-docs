// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AirLyft Documentation',
  tagline:
    'Welcome to AirLyft! This documentation website is for Projects as well as Community memberssss.',
  url: 'https://docs.airlyft.one',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kyteone', // Usually your GitHub org/user name.
  projectName: 'airlyft-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/kyte-one/airlyftone-docs/tree/main/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-BDVRPXL5C7',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-ideal-image',
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
      navbar: {
        title: 'AirLyft Docs',
        logo: {
          alt: 'AirLyft',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'overview',
            position: 'left',
            label: 'Overview',
          },
          {
            to: 'account',
            position: 'left',
            label: 'Projects',
          },
          {
            to: 'templates',
            position: 'left',
            label: 'Templates',
          },
          {
            to: 'users',
            position: 'left',
            label: 'Users',
          },
          {
            to: 'docs',
            position: 'left',
            label: 'Misc.',
          },
          {
            href: 'https://app.airlyft.one',
            label: 'Use App',
            position: 'right',
          },
          {
            href: 'https://github.com/kyte-one/airlyftone-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/kyteone',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/kyteone',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/jtyMknRY',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'AirLyft App',
                to: 'https://www.airlyft.one',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kyte-one',
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
