import en from '@/i18n/lang/en.json'
import jp from '@/i18n/lang/jp.json'
import cn from '@/i18n/lang/cn.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',

  messages: {
    en,
    jp,
    cn,
  },
}))
