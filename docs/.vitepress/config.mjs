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
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      //       '/examples/': [
      //         {
      //           text: 'Examples',
      //           items: [
      //             { text: 'Markdown Examples', link: '/markdown-examples' },
      //             { text: 'Runtime API Examples', link: '/api-examples' }
      // 
      //           ]
      //         }
      //       ],
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: 'markdown使用', link: '/guide/vp' },
            { text: 'vitepress中md使用', link: '/guide/vp/01.vpmd.md' },
            { text: 'md中frontmatter使用', link: '/guide/vp/02.fm.md' },
          ]
        },
        {
          text: '其他',
          items: [
            {
              text: 'demo', link: '/guide/others'
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
