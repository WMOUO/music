// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  [
    {
      rules: {
        'no-const-assign': 'error',
        camelcase: ['error',{"properties": 'always'}],
        'consistent-this': ['error', 'that'],
        curly: ['error', 'all'],
        eqeqeq: ['error', 'always'],
        'no-empty':'error'
      }
    }
  ]
)
