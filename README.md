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
> 
```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 开源许可证

[MIT](./LICENSE) License &copy; 2022-PRESENT [Victor Bo](https://github.com/vtrbo)
