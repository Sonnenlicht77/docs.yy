/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
import { DefaultTheme } from 'vitepress'
import { generateAutoIndex, getCachedSidebar } from '../../utils/getSiderBarList'

// 在配置中添加：
// sidebarConfig['/pages/'] = generateAutoIndex()

// 动态生成侧边栏配置
const pageURL = '/pages'
const sidebarConfig: DefaultTheme.Config['sidebar'] = {
  [`${pageURL}/01.core/`]: [
    {
      text: '基础核心',
      collapsed: false,
      items: getCachedSidebar('01.core', `${pageURL}/01.core`),
    },
  ],
  [`${pageURL}/02.frameworks/`]: [
    {
      text: '框架/工程化',
      collapsed: false,
      items: getCachedSidebar('02.frameworks', `${pageURL}/02.frameworks`),
    },
  ],
  [`${pageURL}/03.projects/`]: [
    {
      text: '项目开发',
      collapsed: false,
      items: getCachedSidebar('03.projects', `${pageURL}/03.projects`),
    },
  ],
  [`${pageURL}/04.issues/`]: [
    {
      text: '问题库',
      collapsed: false,
      items: getCachedSidebar('04.issues', `${pageURL}/04.issues`),
    },
  ],
}

export default sidebarConfig
