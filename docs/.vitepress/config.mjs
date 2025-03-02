import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
// #e89abe
export default defineConfig({
  base: '/docs.yy/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }]
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
        text: 'Guide',
        items: [
          {
            text: 'guide',
            link: '/guide/mdlearn'
          }
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: 'demo1',
            link: '/guide/others/01.demo'
          }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: 'markdown使用', link: '/guide/mdlearn' },
            { text: 'vitepress中md使用', link: '/guide/mdlearn/01.vpmd' },
            { text: 'md中frontmatter使用', link: '/guide/mdlearn/02.fm' },
          ]
        },
        {
          text: '其他',
          items: [
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
          ]
        }
      ],
      '/guide/front/': [
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
              text: '设计模式',
              link: '/guide/front/jsk/modeldesign/'
            }
          ]
        }
      ]

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sonnenlicht77/docs.yy' }
    ]
  }
})
