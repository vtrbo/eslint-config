# @vtrbo/eslint-config [![npm](https://img.shields.io/npm/v/@vtrbo/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@vtrbo/eslint-config)

Forked from [antfu/eslint-config](https://github.com/antfu/eslint-config)

### 安装
```shell
@vtrbo/eslint-config

npm install -D eslint @vtrbo/eslint-config
# or
# yarn install -D eslint @vtrbo/eslint-config
# pnpm install -D eslint @vtrbo/eslint-config
```
> 或者引入单独的规则配置
> - `@vtrbo/eslint-config-basic`
> - `@vtrbo/eslint-config-react`
> - `@vtrbo/eslint-config-vue`
> - `@vtrbo/eslint-config-ts`

### 配置
> `.eslintrc.json`
```json
{
  "extends": "@vtrbo",
  "rules": [
    // 你的规则
  ]
}
```

> 通常你不需要 .eslintignore，因为它已经由预置提供了。

### 脚本
> `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### VSCode
> `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### TypeScript 感知规则

- 在项目根目录中存在 `tsconfig.eslint.json` 时，将开启类型感知
- 修改 `ESLINT_TSCONFIG` env 变量，更改 tsconfig 名称

当在项目根目录中找到'  '时，类型感知规则被启用，这将为你的项目引入一些更严格的规则。如果你想在项目根目录中没有' tsconfig.eslint.json '的情况下启用它，你可以通过修改' ESLINT_TSCONFIG ' env来更改tsconfig名称

> `.eslintrc.js`

```js
process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@vtrbo'
}
```

## 开源许可证

[MIT](./LICENSE) License &copy; 2022-PRESENT [Victor Bo](https://github.com/vtrbo)
