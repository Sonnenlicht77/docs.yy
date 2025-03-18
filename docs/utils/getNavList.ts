/*
 * @Author: yangyang993 sonnenlicht@foxmail.com
 */
import { DefaultTheme } from 'vitepress'
import fs from 'fs'
import path from 'path'

// 工具函数：获取目录下的导航项
// 创建缓存对象
const navCache = new Map<string, any>()

// 带缓存的导航项获取
export function getCachedNavItems(basePath: string, categoryPath: string) {
  const cacheKey = `${basePath}-${categoryPath}`

  if (!navCache.has(cacheKey)) {
    const result = getNavItems(basePath, categoryPath)
    navCache.set(cacheKey, result)
    return result
  }

  return navCache.get(cacheKey)
}

// 原始获取导航项函数（稍作调整）
function getNavItems(basePath: string, categoryPath: string) {
  const fullPath = path.join(process.cwd(), 'docs/pages', basePath)

  try {
    return fs
      .readdirSync(fullPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => processDirectory(dirent, fullPath, categoryPath))
  } catch (e) {
    console.error(`读取目录失败: ${fullPath}`, e)
    return []
  }
}

// 处理单个目录
function processDirectory(dirent: fs.Dirent, fullPath: string, categoryPath: string) {
  const subDir = dirent.name
  const subDirPath = path.join(fullPath, subDir)

  const files = fs
    .readdirSync(subDirPath)
    .filter((file) => file.endsWith('.md'))
    .sort(sortByNumberPrefix)

  return {
    text: cleanNumberPrefix(subDir),
    link: generateLink(categoryPath, subDir, files),
    items: generateFileItems(categoryPath, subDir, files),
  }
}

// 工具函数
const sortByNumberPrefix = (a: string, b: string) =>
  parseInt(a.match(/^\d+/)?.[0] || '0') - parseInt(b.match(/^\d+/)?.[0] || '0')

const cleanNumberPrefix = (str: string) => str.replace(/^\d+\./, '')

const generateLink = (categoryPath: string, subDir: string, files: string[]) =>
  `${categoryPath}/${subDir}/${files[0]?.replace('.md', '')}`

const generateFileItems = (categoryPath: string, subDir: string, files: string[]) =>
  files.map((file) => ({
    text: cleanNumberPrefix(file.replace('.md', '')),
    link: `${categoryPath}/${subDir}/${file.replace('.md', '')}`,
  }))

// 开发环境监听文件变化
if (process.env.NODE_ENV === 'development') {
  const watcher = fs.watch(path.join(process.cwd(), 'docs/pages'), { recursive: true }, (eventType, filename) => {
    if (eventType === 'change' || eventType === 'rename') {
      console.log(`检测到文件变化: ${filename}，清空导航缓存`)
      navCache.clear()
    }
  })

  // 关闭监听
  process.on('SIGINT', () => {
    watcher.close()
    process.exit()
  })
}
