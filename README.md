# @vtrbo/eslint-config

[![npm](https://img.shields.io/npm/v/@vtrbo/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@vtrbo/eslint-config)

- 单引号
- 无行尾分号

## 使用说明

### 安装

```bash
pnpm add -D eslint @vtrbo/eslint-config
```

### 配置 `.eslintrc`

```json
{
  "extends": "@vtrbo"
}
```

> 通常你不需要 .eslintignore，因为它已经由预置提供了。

### 在 package.json 中添加脚本

例如：

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 配置 VS Code 自动修复

创建 `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 感谢

感谢@antfu，继承于@antfu/eslint-config，版本：0.23.0

## 开源许可证

MIT
