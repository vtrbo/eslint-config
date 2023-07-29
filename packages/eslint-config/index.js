const { defineConfig } = require('eslint-define-config')
const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
const VUE = isPackageExists('vue')
const SVELTE = isPackageExists('svelte')

const EXTENDS = []

if (!VUE && !SVELTE) {
  if (TS)
    EXTENDS.push('@vtrbo/eslint-config-ts')
  else
    EXTENDS.push('@vtrbo/eslint-config-basic')
}

module.exports = defineConfig({
  extends: [
    ...EXTENDS,
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
