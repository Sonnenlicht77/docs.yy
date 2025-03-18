/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
import { DefaultTheme } from 'vitepress'
import fs from 'fs'
import path from 'path'

const sidebarCache = new Map<string, DefaultTheme.SidebarItem[]>()

export function getCachedSidebar(basePath: string, categoryPath: string) {
  const cacheKey = `${basePath}-${categoryPath}`
  if (!sidebarCache.has(cacheKey)) {
    sidebarCache.set(cacheKey, generateSidebarItems(basePath, categoryPath))
  }
  return sidebarCache.get(cacheKey)
}

// 工具函数：递归生成侧边栏项
function generateSidebarItems(
  basePath: string,
  categoryPath: string,
  currentDepth = 0,
  sortOptions?: SortOptions,
): DefaultTheme.SidebarItem[] {
  const fullPath = path.join(process.cwd(), 'docs/pages', basePath)

  return fs
    .readdirSync(fullPath, { withFileTypes: true })
    .sort((a, b) => {
      // 按数字前缀排序
      const numA = parseInt(a.name.match(/^\d+/)?.[0] || '0')
      const numB = parseInt(b.name.match(/^\d+/)?.[0] || '0')
      return numA - numB
    })
    .filter((dirent) => {
      // 过滤隐藏文件和不需要的目录
      return !dirent.name.startsWith('.') && !['assets', 'public'].includes(dirent.name)
    })
    .map((dirent) => {
      const itemPath = path.join(basePath, dirent.name)
      const itemName = dirent.name.replace(/^\d+\./, '')
      const linkPath = `${categoryPath}/${dirent.name}`

      // 处理目录
      if (dirent.isDirectory()) {
        const children = generateSidebarItems(itemPath, `${categoryPath}/${dirent.name}`, currentDepth + 1)

        return {
          text: formatTitle(itemName),
          collapsed: currentDepth > 0, // 二级以下默认折叠
          items: children.length > 0 ? children : undefined,
          // 添加默认链接（指向目录下的第一个文件）
          link: children[0]?.link,
        }
      }

      // 处理Markdown文件
      if (dirent.isFile() && dirent.name.endsWith('.md')) {
        return {
          text: formatTitle(dirent.name.replace(/\.md$/, '')),
          link: `${categoryPath}/${dirent.name.replace(/\.md$/, '')}`,
        }
      }

      return null
    })
    .filter(Boolean) as DefaultTheme.SidebarItem[]
}

// 格式化标题（可自定义规则）
function formatTitle(str: string): string {
  return str.replace(/(^\d+\.)|(-)/g, ' ').replace(/(?:^|\s)\S/g, (c) => c.toUpperCase())
}

if (process.env.NODE_ENV === 'development') {
  fs.watch(path.join(process.cwd(), 'docs/pages'), { recursive: true }, () => {
    sidebarCache.clear()
    console.log('Sidebar configuration updated')
  })
}

// 在 generateSidebarItems 中添加排序配置选项
interface SortOptions {
  order?: string[]
  priority?: Record<string, number>
}
export function generateAutoIndex() {
  return generateSidebarItems('', '/pages', 0)
}
