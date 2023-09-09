const { defineConfig } = require('eslint-define-config')
const { isPackageExists } = require('local-pkg')

const SVELTE = isPackageExists('svelte')
const TS = isPackageExists('typescript')

module.exports = !SVELTE
  ? {}
  : defineConfig({
    overrides: [
      TS
        ? {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
              parser: '@typescript-eslint/parser',
            },
            rules: {
              'no-unused-vars': 'off',
              'no-undef': 'off',
              ...(TS ? { '@typescript-eslint/no-unused-vars': 'off' } : {}),
            },
          }
        : {},
    ],
    extends: [
      TS
        ? '@vtrbo/eslint-config-ts'
        : '@vtrbo/eslint-config-basic',
      TS ? 'plugin:@typescript-eslint/recommended' : {},
      'plugin:svelte/recommended',
    ],
    parser: TS ? '@typescript-eslint/parser' : '',
    plugins: TS ? ['@typescript-eslint'] : [],
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
