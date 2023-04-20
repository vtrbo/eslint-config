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
      TS ? '@vtrbo/eslint-config-ts' : '@vtrbo/eslint-config-basic',
    ],
    rules: {
      'svelte/html-closing-bracket-spacing': [
        'error',
        {
          startTag: 'never',
          endTag: 'never',
          selfClosingTag: 'always',
        },
      ],
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
      'svelte/html-self-closing': [
        'error',
        'all',
      ],
      'svelte/indent': [
        'error',
        {
          indent: 2,
          ignoredNodes: [],
          switchCase: 1,
          alignAttributesVertically: false,
        },
      ],
      'svelte/sort-attributes': [
        'error',
        {
          order: [
            'this',
            'bind:this',
            'id',
            'name',
            'slot',
            { match: '/^--/u', sort: 'alphabetical' },
            ['style', '/^style:/u'],
            'class',
            { match: '/^class:/u', sort: 'alphabetical' },
            {
              match: ['!/:/u', '!/^(?:this|id|name|style|class)$/u', '!/^--/u'],
              sort: 'alphabetical',
            },
            ['/^bind:/u', '!bind:this', '/^on:/u'],
            { match: '/^use:/u', sort: 'alphabetical' },
            { match: '/^transition:/u', sort: 'alphabetical' },
            { match: '/^in:/u', sort: 'alphabetical' },
            { match: '/^out:/u', sort: 'alphabetical' },
            { match: '/^animate:/u', sort: 'alphabetical' },
            { match: '/^let:/u', sort: 'alphabetical' },
          ],
        },
      ],
      'svelte/prefer-class-directive': 'error',
      'svelte/prefer-style-directive': 'error',
    },
  })
