/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
import { DefaultTheme } from 'vitepress'
import { getCachedNavItems } from '../../utils/getNavList'

// 动态生成导航配置
// 最终导航配置（使用缓存版本）
const nav: DefaultTheme.Config['nav'] = [
  {
    text: '基础核心',
    items: getCachedNavItems('01.core', '/pages/01.core'),
    activeMatch: '/pages/01.core/',
  },
  {
    text: '框架/工程化',
    items: getCachedNavItems('02.frameworks', '/pages/02.frameworks'),
    activeMatch: '/pages/02.frameworks/',
  },
  {
    text: '项目开发',
    items: getCachedNavItems('03.projects', '/pages/03.projects'),
    activeMatch: '/pages/03.projects/',
  },
  {
    text: '问题库',
    items: getCachedNavItems('04.issues', '/pages/04.issues'),
    activeMatch: '/pages/04.issues/',
  },
]

export default nav
