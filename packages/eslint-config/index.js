const { defineConfig } = require('eslint-define-config')
const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

module.exports = defineConfig({
  extends: [
    TS ? '@vtrbo/eslint-config-ts' : '@vtrbo/eslint-config-basic',
    '@vtrbo/eslint-config-vue',
    '@vtrbo/eslint-config-svelte',
  ],
  ignorePatterns: [
    '~/',
    '**/~/',
    'node_modules/',
    '**/node_modules/',
  ],
})
