# @vtrbo/eslint-config

[![npm](https://img.shields.io/npm/v/@vtrbo/eslint-config?color=444&label=npm)](https://npmjs.com/package/@vtrbo/eslint-config)

> Forked from [@antfu/eslint-config](https://github.com/antfu/eslint-config)

> Support vue, svelte, js, ts, markdown, json...

## Usage

### Install

```bash
pnpm add -D eslint @vtrbo/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@vtrbo"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### VS Code support (auto fix)

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `settings.json`:

```jsonc
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },

  // The following is optional.
  // It's better to put under project setting `.vscode/settings.json`
  // to avoid conflicts with working with different eslint configs
  // that does not support all formats.
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "svelte",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

### TypeScript Aware Rules

Type aware rules are enabled when a `tsconfig.eslint.json` is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no `tsconfig.eslint.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env.

```js
// .eslintrc.js
const process = require('node:process')

process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@vtrbo'
}
```

### Lint Staged

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

and then

```bash
pnpm add -D lint-staged simple-git-hooks
```

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Victor Bo](https://github.com/vtrbo)
