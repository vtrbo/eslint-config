const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: [
    '@vtrbo/eslint-config-vue',
    '@vtrbo/eslint-config-svelte',
  ],
})