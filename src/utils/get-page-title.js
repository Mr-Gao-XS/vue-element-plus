import defaultSettings from '@/settings'

const title = defaultSettings.title || '高先生的猫'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
