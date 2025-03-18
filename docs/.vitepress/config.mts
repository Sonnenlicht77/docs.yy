/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */

import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebarConfig from './config/siderbar'
// 自动生成侧边栏

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '💖 个人知识库',
  description: '坚持记录',
  base: '/docs.yy/',
  appearance: false,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    nav: nav,
    sidebar: sidebarConfig,

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
  vite: {},
})
