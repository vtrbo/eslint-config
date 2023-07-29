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
          parser: {
            ts: '@typescript-eslint/parser',
            js: 'espree',
            typescript: '@typescript-eslint/parser',
          },
          extraFileExtensions: ['.svelte'],
          rules: {
            'no-unused-vars': 'off',
            'no-undef': 'off',
            ...(TS ? { '@typescript-eslint/no-unused-vars': 'off' } : null),
          },
        },
      },
    ],
    extends: [
      'plugin:svelte/recommended',
      // TS
      //   ? '@vtrbo/eslint-config-ts'
      //   : '@vtrbo/eslint-config-basic',
    ],
    rules: {
      'svelte/max-attributes-per-line': 'off',
      'svelte/no-at-html-tags': 'off',
      'import/no-mutable-exports': 'off',

      'svelte/no-dupe-on-directives': 'error',
      'svelte/no-dupe-use-directives': 'error',

      'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
      'svelte/no-reactive-reassign': 'off',
      'svelte/no-store-async': 'error',
      'svelte/valid-prop-names-in-kit-pages': 'error',
      'svelte/no-target-blank': 'off',
      'svelte/no-useless-mustaches': 'error',
      'svelte/derived-has-same-inputs-outputs': 'error',
      'svelte/html-closing-bracket-spacing': 'error',
      'svelte/html-quotes': [
        'error',
        {
          prefer: 'double',
          dynamic: {
            quoted: false,
            avoidInvalidUnquotedInHTML: false,
          },
        },
      ],
      'svelte/html-self-closing': 'error',
      'svelte/indent': 'error',
      'svelte/mustache-spacing': 'error',
      'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
      'svelte/prefer-class-directive': 'error',
      'svelte/prefer-style-directive': 'error',
      'svelte/sort-attributes': 'error',
      'svelte/spaced-html-comment': 'error',
      'svelte/no-trailing-spaces': 'error',
    },
  })
