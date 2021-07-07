# API

## 默认导出

`function(app: App, Vue: Context["Vue"]) => void`

vue-module-loader 的默认导出函数通常被命名为 `vml`，作为 vue3 插件使用。

```js
import vml from "vue-module-loader";
app.use(vml);
```

## 模块对象

模块对象，模块打包入口文件默认导出。

- ### name

  `string`

  模块名必须与`package.name`，`vite.config.build.lib.name`保持一致。

- ### install

  `(context: Context) => any`

  模块加载安装时钩子，函数接收一个上下文对象，可以在此钩子内部自由发挥。另外，比较关键的一点是，此函数支持返回 Promise。

- ### uninstall

  `(context: Context) => any`

  模块卸载时钩子，函数接收一个上下文对象，可以再次做一些模块卸载善后工作。另外，比较关键的一点是，此函数也支持返回 Promise。

## 具名方法

从 `vue-module-loader` 包导入

### useModule

`function useModule(moduleData: string | ModuleOptions, Vue?: Context["Vue"]): Promise<void>`

动态加载一个微前端模块，参数支持两种方式：

- 模块远程 url 地址

```js
import { useModule } from "vue-module-loader";
useModule("http://static.mengqinghe.com/vml/module/vue-module-module.iife.js");
```

- 本地 ESM

```javascript
import localModule from "./module";
useModule(localModule);
```

:::warning 注意：
当应用没有以插件方式安装 `vue-module-loader` 时，首次使用 `useModule` 必须传入第二个参数。
:::

### uninstall

`async function uninstall(moduleName: string)`

卸载一个动态模块，此方法返回 Promise。

### clear

`async function clear()`

卸载所有动态加载的模块，此方法返回 Promise。

### listUnistaller

`function listUnistaller()`

列出当前运行时已加载的模块清单，需要注意的是，返回 map 的 value 是模块的卸载器方法，不是整个模块对象。
