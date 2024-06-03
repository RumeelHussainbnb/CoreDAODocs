/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  learnSidebar: [
    {
      type: 'category',
      label: '📖 All About Core Chain',
      link: {type: 'doc', id: 'intro'},
      items:[
          {
            type: 'category',
            collapsed: true,
            label: 'Introduction',
            items: ['Learn/introduction/what-is-core-chain',
                    'Learn/introduction/why-core-chain',
                    'Learn/introduction/quickstart',
                    {
                      type: 'link',
                      label: 'Whitepaper', 
                      href: 'https://docs.coredao.org/core-white-paper-v1.0.7', 
                    },
                  ]
          },
          {
            type: 'category',
            collapsed: true,
            label: 'Core Concepts',
            link: {
              type: 'generated-index',
              title: 'Core Concepts',
              description: 'Learn about the Nuts and Bolts of the Core Chain Ecossytem!',
              slug: '/category/core-concepts',
            },
            items: ['Learn/core-concepts/overview', 'Learn/core-concepts/architecture',
                      {
                        type: 'category',
                        collapsed: true,
                        label: 'Satoshi Plus Consensus',
                        items: [
                          'Learn/core-concepts/satoshi-plus-consensus/components',
                          'Learn/core-concepts/satoshi-plus-consensus/DPoW',
                          'Learn/core-concepts/satoshi-plus-consensus/DPoS',
                          'Learn/core-concepts/satoshi-plus-consensus/validator-election',
                          'Learn/core-concepts/satoshi-plus-consensus/rewards', 
                          'Learn/core-concepts/satoshi-plus-consensus/security',
                          ]
                      },
                  ]
          },
          'Learn/governance',
          {
            type: 'category',
              collapsed: true,
              label: 'Economics',
              items: [
                  // {
                  //   type: 'category',
                  //     collapsed: true,
                  //     label: 'CORE Token',
                  //     items: [
                  //       'Learn/economics/core-token/token-utility',
                  //       'Learn/economics/core-token/tokenomics',
                  //       'Learn/economics/core-token/incentives'
                  //     ]
                  // },
                  'Learn/economics/core-token/tokenomics-and-utility',
                  // 'Learn/economics/gas-and-fees',
              ]
          },
          {
            type: 'category',
              collapsed: true,
              label: 'Products',
              link: {
                type: 'generated-index',
                title: 'Exploring Core Chain: Pioneering DeFi Solutions for Bitcoin',
                description: 'Learn about the different innovative products offered by Core Chain that are helping in unclocking the DeFi landscape for Bitcoin!',
                slug: '/category/products',
              },
              items: [
                {
                  type: 'category',
                    collapsed: true,
                    label: 'BTC Native Staking',
                    items: [
                      'Learn/products/btc-staking/overview',
                      'Learn/products/btc-staking/design',
                      {
                        type: 'category',
                          collapsed: true,
                          label: 'How To Guides',
                          items: [
                            'Learn/products/btc-staking/stake-btc-guide',
                            'Learn/products/btc-staking/Redeeming-Guide',
                          ]
                      },
                      
                    ]
                },
                {
                  type: 'category',
                    collapsed: true,
                    label: 'coreBTC',
                    items: [
                      'Learn/products/coreBTC/overview',
                      'Learn/products/coreBTC/design',
                      // 'Learn/products/coreBTC/architecture',
                      'Learn/products/coreBTC/how-to-guides',
                    ]
                },
                // {
                //   type: 'category',
                //     collapsed: true,
                //     label: 'HTLC Atomic Swap',
                //     items: [
                //       'Learn/products/htlc-atomic-swap/overview',
                //       'Learn/products/htlc-atomic-swap/design',
                //       // 'Learn/products/htlc-atomic-swap/architecture',
                //       'Learn/products/htlc-atomic-swap/how-to-guides',
                //     ]
                // },
                // {
                //   type: 'category',
                //     collapsed: true,
                //     label: 'Liquid Staking stCore',
                //     items: [
                //       'Learn/products/lst-stCore/overview',
                //       'Learn/products/lst-stCore/design',
                //       // 'Learn/products/lst-stCore/architecture',
                //       'Learn/products/lst-stCore/how-to-guides',
                //     ]
                // },
              ]
          },
          {type: 'doc', id: 'Learn/audit', label:'Audit'},
          // {
          //   type: 'category',
          //     collapsed: true,
          //     label: 'Audits',
          //     items: [
          //         'Learn/audit'
          //     ]
          // }
    ]
    },
  ],
  devGuideSidebar: [
    {
      type: 'category',
      collapsed: true,
      label: '💻 Core Chain for Developers',
      items: [
      {
        type: 'category',
        collapsed: true,
        label: 'Connecting to Core',
        items: ['Dev-Guide/dev-tools','Dev-Guide/network-config',
        {
          type: 'category',
          collapsed: true,
          label: 'RPC Endpoints',
          link: {type: 'doc', id: 'Dev-Guide/rpc-list'},
          items: ['Dev-Guide/rpc-cli', 'Dev-Guide/rpc-postman']
        },
        // 'Dev-Guide/rpc'
      ]
      },
      {
        type: 'category',
        collapsed: true,
        label: 'Wallet Configurations',
        items: ['Dev-Guide/core-faucet', 'Dev-Guide/core-testnet-wallet-config',
        'Dev-Guide/core-mainnet-wallet-config']
      },
      'Dev-Guide/precompile-addresses',
      'Dev-Guide/core-explorer', 
      // {
      //   type: 'category',
      //   collapsed: true,
      //   label: 'Token Swapping',
      //   items: ['Dev-Guide/token-swapping']
      // },
      {
        type: 'category',
        collapsed: true,
        label: 'Developer Guides',
        link: {
          type: 'generated-index',
          title: 'Developer Guides: Mastering Core Chain Essentials',
          description: 'Unlock Your Potential: Detailed Developer Guides for Building on Core Chain',
          slug: '/category/dev-guides',
        },
        items: [
          'Dev-Guide/smart-contract-guidelines',
          'Dev-Guide/remix', 'Dev-Guide/hardhat', 
          'Dev-Guide/contract-verify', 
          'Dev-Guide/erc20-tokens', 
          'Dev-Guide/erc721-tokens',
          'Dev-Guide/dapp-on-core-copy',]
      },
      {
        type: 'category',
        collapsed: true,
        label: 'Bridging with Core',
        items: ['Dev-Guide/bridge-with-layerzero',
          'Dev-Guide/core-bridge-resources', ]
      },
      'Dev-Guide/core-subgraph',
       ]
    },
  ],
  communitySidebar: [
    {
      type: 'category',
      collapsed: true,
      label: '📝 Community',
      items: ['Community/contribution', 'Community/join-core-dao']
    },
  ],
  faqSidebar: [
    {
      type: 'category',
      collapsed: true,
      label: '🤔 FAQs',
      items: ['FAQs/core-faqs', 'FAQs/core-node-faqs',
              'FAQs/validator-faqs', 'FAQs/delegator-faqs', 
              'FAQs/btc-staking-faqs', 'FAQs/coreBTC-faqs',
              // 'FAQs/htlc-atomic-swap-faqs',
              // 'FAQs/LST-stCore-faqs', 
              'FAQs/core-api-faqs' ]
    },
  ],
  nodeSidebar:[ 
    {
      type: 'category',
      collapsed: true,
      label: '🔮 Running Core Nodes',
      items: ['Node/overview',    
      {
        type: 'category',
        collapsed: true,
        label: 'Node Configurations',
        items: ['Node/config/validator-node-config', 'Node/config/rpc-node-config',
        'Node/config/archive-node-config', 'Node/config/snapshot-node-config']
      },
      // {
      //   type: 'category',
      //   collapsed: true,
      //   label: 'Syncing Nodes',
      //   items: ['Node/sync/block-sync', 
      //   'Node/sync/state-sync', 'Node/sync/snapshot-sync']
      // },
     
      {
        type: 'category',
        collapsed: true,
        label: 'Running Full Node',
        items: [
        'Node/Full-Node/on-testnet', 
        'Node/Full-Node/on-mainnet']
      },
      'Node/sync/snapshot-sync',

      {
        type: 'category',
        collapsed: true,
        label: 'Become a Validator',
        items: ['Node/validator/overview',
        'Node/validator/validator-register', 
        'Node/validator/running-validator',
        'Node/validator/validator-election',
        'Node/validator/rewards',
        {
          type: 'category',
          collapsed: true,
          label: 'Slashing',
          items: ['Node/slashing/overview', 'Node/slashing/slashing-fee'
          //  'Node/slashing/jail-and-unjail',
          // 'Node/slashing/slashing-fee', 'Node/slashing/submit-evidence'
        ]
        },
      ],
      },
      {
        type: 'category',
        collapsed: true,
        label: 'Node Maintenance',
        items: ['Node/maintenance/maintenance','Node/maintenance/network-upgrade', 
        // 'Node/maintenance/node-monitoring',
        // 'Node/maintenance/restore-node', 
        'Node/maintenance/security-practices']
      },
      //'Node/known-issues-and-errors',
    ]
    },
  ],
  stakeDelegateSidebar:[
    {
      type: 'category',
      collapsed: true,
      label: '💸 Staking',
      items: ['stake-and-delegate/staking-overview']
    },
    {
      type: 'category',
      collapsed: true,
      label: '💰 Become a Delegator',
      items: ['stake-and-delegate/delegators', 'stake-and-delegate/delegating-core',
      'stake-and-delegate/delegating-hash']
    },
  ],

 apiSidebar:[
    {
      type: 'category',
      collapsed: true,
      label: '🔗 Connect with CORE API',
      items: ['API/corescan']
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
