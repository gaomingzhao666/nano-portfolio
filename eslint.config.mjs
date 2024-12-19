// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Your custom configs here
  rules: {
    'vue/html-self-closing': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-use-v-else-with-v-for': 'off',
  },
})
// Your custom configs here
