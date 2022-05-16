# Vue 3 + TypeScript + Vite + element-plus


## 简介

+ vue、 vue-router 、vuex 、element-plus相关API自动引入，无需import；
+ element-plus 组件自动引入；
+ 将eslint以及prettier部分移入internal文件夹, 所需依赖不再主项目中依赖, 主项目只配置eslint指向其位置

vscode请在配置文件settings里
删除
```json
{
  "editor.defaultFormatter": "xxxxx"
}
```
并新增(或覆盖)此二条
```json lines
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 使用

### 安装依赖

执行以下命令(使用pnpm)


```bash
pnpm i
```

### 开发

只需要执行以下命令就可以在 localhost 中看到

```bash
pnpm dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm build
```

然后你会看到用于发布的 `build` 文件夹被生成。
