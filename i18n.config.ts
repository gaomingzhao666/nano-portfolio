import en from '~/Internationalization/lang/en.json'
import jp from '~/Internationalization/lang/jp.json'
import cn from '~/Internationalization/lang/cn.json'

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',

	messages: {
		en,
		jp,
		cn,
	},
}))
