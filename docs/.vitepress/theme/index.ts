/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */

import { h } from 'vue'
import type { Theme } from 'vitepress'

// css
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 组件
import NotFound from './components/NotFound.vue'
import HomeLayout from './components/HomeLayout/index.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(NotFound),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // app.component('DateTodo', () => import('./components/DateTodo/index.vue'))
    app.component('HomeLayout', HomeLayout)
  },
} satisfies Theme
