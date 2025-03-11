import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
// #e89abe
export default defineConfig({
  base: '/docs.yy/',
  title: "知识库 🫳🏻 ",
  titleTemplate: ':title - 个人知识整理',
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/docs.yy/favicon.ico' }],
    // ['link', { rel: 'stylesheet', href: '/docs.yy/style.css' }],
    ['script', {}, `
      console.log("test");  
    `]
  ],
  markdown: {
    // lineNumbers: true

  },

  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '前端知识体系',
        items: [
          {
            text: 'HTML知识',
            link: '/guide/front/htmlk/'
          },
          {
            text: 'CSS知识',
            link: '/guide/front/cssk'
          }, {
            text: 'JavaScript知识',
            items: [
              {
                'text': '设计模式',
                link: '/guide/front/jsk'
              }
            ]
          }
        ]
      },
      {
        text: 'vp使用',
        items: [
          {
            text: 'markdown',
            link: '/guide/mdlearn'
          }
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: '架构',
            link: '/guide/others/architect/01.认知'
          }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: 'vitepress中md使用', link: '/guide/mdlearn/01.vpmd' },
            { text: 'md中frontmatter使用', link: '/guide/mdlearn/02.fm' },
            { text: '站点配置', link: '/guide/mdlearn/03.siteconfig' },
            { text: '使用vue', link: '/guide/mdlearn/04.usevue' },
            { text: '路由', link: '/guide/mdlearn/05.routerInVP' },
            {
              text: 'vitepress案例',
              items: [
                {
                  text: '搭建个人简历',
                  link: '/guide/mdlearn/vpdemo/01.resumeDoc'
                },
                {
                  text: '开发简历',
                  link: '/guide/mdlearn/vpdemo/02.demoKaiFa'
                }
              ]
            }
          ]
        }
      ],
      '/guide/front/': [

        {
          text: '前端',
          items: [
            {
              text: 'HTML知识',
              link: '/guide/front/htmlk/',
            },
            {
              text: 'CSS知识',
              link: '/guide/front/cssk/'
            },
            {
              text: 'JavaScript知识',
              items: [
                {
                  text: '基础知识',
                  items: [
                    {
                      text: 'this相关',
                      link: '/guide/front/jsk/base/01.thislearn'
                    },
                    {
                      text: '函数作用域',
                      link: '/guide/front/jsk/base/02.funcScope'
                    },
                  ]

                },
                {
                  text: '设计模式',
                  link: '/guide/front/jsk/modeldesign/'
                }
              ]
            },
            {
              text: '数据结构与算法',
              link: '/guide/front/algorithm'
            }
          ]
        }
      ],
      '/guide/others/': [
        {
          text: 'demo', link: '/guide/others/01.demo'
        },
        {
          text: '架构师',
          items: [
            {
              text: '01.认知篇', link: '/guide/others/architect/01.认知'
            }
          ]
        }
      ],

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sonnenlicht77/docs.yy' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Sonnenlicht77'
    },

    editLink: {
      pattern: 'https://github.com/Sonnenlicht77/docs.yy/tree/main/docs/:path',
      text: '编辑此页',
    },
    search: {
      provider: 'local'
    },
    // 广告
    // carbonAds: {
    //   code: 'CEBICK3N',
    //   placement: 'vitepress'
    // },

    // 上一页 下一页
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 外部链接
    externalLinkIcon: true,


  },
  vite: {
  },

  lastUpdated: {
    text: '最后更新时间',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  },
  appearance: false

})
