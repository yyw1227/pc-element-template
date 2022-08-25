# pc-element-template（PC端模板）




## 简介

+ 使用Vue3 + Pinia + TypeScript + Vite3 + element-plus；

+ vue、 vue-router 、element-plus相关API自动引入，组件自动引入；

  

## Node支持

Vite3不再支持 Node 12 / 13 / 15，因为上述版本已经进入了 EOL 阶段。现在你必须使用 Node 14.18+ / 16+ 版本。



## 使用规范

+ 本地创建后修改`package.json`中的`name`为自己项目名称
+ 类型声明文件请放在 `src/types`目录下；
+ 环境变量类型声明在 `env.d.ts` 声明文件中对 `ImportMetaEnv` 类型进行完善；
+ 常量统一放到`src/constants`目录下；
+ 若要使用页面缩放，请用`<ScreenAdapter></ScreenAdapter>`组件包裹



## VSCode使用
### VSCode请在配置文件`settings.json`中

*** 删除*** 

```json
{
  "editor.defaultFormatter": "xxxxx"
}
```
*** 同时新增(或覆盖)***

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

然后你会看到用于发布的 `dist` 文件夹被生成。
