import en from '@/i18n/lang/en.json'
import jp from '@/i18n/lang/jp.json'
import cn from '@/i18n/lang/cn.json'
import seoEN from '@/i18n/seo/en.json'
import seoJP from '@/i18n/seo/jp.json'
import seoCN from '@/i18n/seo/cn.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',

  messages: {
    en: {
      ...en,
      ...seoEN,
    },
    jp: {
      ...jp,
      ...seoJP,
    },
    cn: {
      ...cn,
      ...seoCN,
    },
  },
}))
