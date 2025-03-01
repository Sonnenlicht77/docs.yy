import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs.yy/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Guide',
        items: [
          {
            text: 'guide',
            link: '/guide/vp'
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
            { text: 'markdown使用', link: '/guide/vp' },
            { text: 'vitepress中md使用', link: '/guide/vp/01.vpmd' },
            { text: 'md中frontmatter使用', link: '/guide/vp/02.fm' },
          ]
        },
        {
          text: '其他',
          items: [
            {
              text: 'demo', link: '/guide/others/01.demo'
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
