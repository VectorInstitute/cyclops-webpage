// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CyclOps',
  tagline:
    'Cyclical development towards Operationalizing ML models for healthcare',
  url: 'https://vectorinstitute.github.io',
  baseUrl: '/cyclops/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VectorInstitute', // Usually your GitHub org/user name.
  projectName: 'cyclops', // Usually your repo name.
  deploymentBranch: 'github_pages', // Branch that GitHub pages will deploy from.

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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'CyclOps Logo',
          src: 'img/cyclops_logo-dark.png',
        },
        items: [
          {
            to: 'https://vectorinstitute.github.io/cyclops/api',
            label: 'API',
            target: '_self',
          },
          {
            label: 'Tutorial',
            to: 'https://vectorinstitute.github.io/cyclops/api/tutorials',
            target: '_self',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/VectorInstitute/cyclops',
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
                label: 'API',
                to: 'https://vectorinstitute.github.io/cyclops/api',
                target: '_self',
              },
              {
                label: 'Tutorial',
                to: 'https://vectorinstitute.github.io/cyclops/api/tutorials',
                target: '_self',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/VectorInstitute/cyclops',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CyclOps, built by AI Engineering @ Vector Institute`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
};

module.exports = config;
