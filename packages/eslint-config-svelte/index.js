const { defineConfig } = require('eslint-define-config')
const { isPackageExists } = require('local-pkg')

const SVELTE = isPackageExists('svelte')
const TS = isPackageExists('typescript')

module.exports = !SVELTE
  ? {}
  : defineConfig({
    overrides: [
      {
        files: ['*.svelte'],
        parser: 'svelte-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
        },
        rules: {
          'no-unused-vars': 'off',
          'no-undef': 'off',
          ...(TS
            ? { '@typescript-eslint/no-unused-vars': 'off' }
            : null),
          'import/no-mutable-exports': 'off',
          'unused-imports/no-unused-vars': 'off',
        },
      },
    ],
    extends: [
      'plugin:svelte/recommended',
      TS
        ? '@vtrbo/eslint-config-ts'
        : '@vtrbo/eslint-config-basic',
    ].filter(Boolean),
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
