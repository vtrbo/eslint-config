const { defineConfig } = require('eslint-define-config')
const { isPackageExists } = require('local-pkg')

const SVELTE = isPackageExists('svelte')
const TS = isPackageExists('typescript')

module.exports = !SVELTE
  ? {}
  : defineConfig({
    extends: [
      TS
        ? '@vtrbo/eslint-config-ts'
        : '@vtrbo/eslint-config-basic',
      TS
        ? 'plugin:@typescript-eslint/recommended'
        : {},
      'plugin:svelte/recommended',
    ],
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      extraFileExtensions: ['.svelte'],
    },
    env: {
      browser: true,
      es2017: true,
      node: true,
    },
    overrides: [
      {
        files: ['*.svelte'],
        parser: 'svelte-eslint-parser',
        plugins: TS ? ['@typescript-eslint'] : [],
        parserOptions: TS
          ? {
              parser: '@typescript-eslint/parser',
            }
          : {},
      },
    ],
    rules: {
      '@typescript-eslint/nk-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'svelte/nk-at-html-tags': 'off',
      'svelte/valid-compile': 'off',
      '@typescript-eslint/nk-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'svelte/no-at-html-tags': 'off',
    },
  })
