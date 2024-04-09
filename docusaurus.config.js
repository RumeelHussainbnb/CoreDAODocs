// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Core DAO Official Documentation',
  tagline: 'Core DAO Official Developer Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/CoreDAODocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RumeelHussainbnb', // Usually your GitHub org/user name.
  projectName: 'CoreDAODocs', // Usually your repo name.
  deploymentBranch:'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  staticDirectories: ['public', 'static'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Core DAO Documentation',
        logo: {
          alt: 'Core DAO Logo',
          src: 'img/core.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'learnSidebar',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devGuideSidebar',
            position: 'left',
            label: 'Developer Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'nodeSidebar',
            position: 'left',
            label: 'Run a Node',
          },
          {
            type: 'docSidebar',
            sidebarId: 'stakeDelegateSidebar',
            position: 'left',
            label: 'Staking & Delegation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'learnSidebar',
            position: 'left',
            label: 'Core API',
          },
          {
            type: 'docSidebar',
            sidebarId: 'faqSidebar',
            position: 'left',
            label: 'FAQs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'communitySidebar',
            position: 'left',
            label: 'Community',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://medium.com/@core_dao',
            label: 'Blog',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        // logo: {
        //   alt: 'Core DAO Logo',
        //   src: 'img/core-logo.jpeg',
        //   //href: 'https://coredao.org/',
        //   width: 160,
        //   height: 51,
        // },
        links: [
          {
            label: 'Core DAO',
            href: 'https://coredao.org/',
          },
          {
            label: 'Docs',
            to: '/docs/intro',
          },
          {
            label: 'Explorer',
            href: 'https://scan.coredao.org/'
          },
          {
           label: 'Blog',
           href: 'https://medium.com/@core_dao',
          },
          {
            label:'Discord',
            href:'https://discord.com/invite/coredaoofficial'
          },
          {
            label:'X (formerly Twitter)',
            href:'https://twitter.com/Coredao_Org'
          },
          {
            label:'Telegram',
            href:'https://t.me/CoreDAOTelegram'
          },
          // {
          //   label: 'Terms',
          //   href: 'https://discordapp.com/invite/docusaurus',
          // },
          // {
          //       label: 'Privacy Policy',
          //       href: 'https://twitter.com/docusaurus',
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Core DAO`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,

        
      },
    }),
};

export default config;
