import { createApp } from "vue";
//@ts-ignore
import App from "./App.vue";
// 引入element-plus插件与样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 配置element-plus国际化
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// svg插件需要配置代码
import "virtual:svg-icons-register";
// 引入全局样式文件
import "@/styles/index.scss";
// 引入src/index.ts文件,通过app.use方法安装自定义插件
import gloablComponent from "./components/index";
// 引入路由
import router from "./router";
// 引入仓库
import pinia from "@/store/index"
// 获取应用实例对象
const app = createApp(App);
// 安装element-plus插件
app.use(ElementPlus, {
  // element-plus国际化配置
  locale: zhCn,
});
// 安装自定义插件
app.use(gloablComponent);
// 注册模板路由
app.use(router);
// 安装仓库
app.use(pinia)
// 将应用挂载到挂载点上
app.mount("#app");
