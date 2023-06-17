// 引入项目中全部的全局组件
import SvgIcon from "./SvgIcon/index.vue";

// 全局对象
const allGloablComponent = { SvgIcon };

// 对外暴露插件对象
export default {
  // 必须叫做install方法
  // @ts-ignore
  install(app) {
    // 注册项目的全部的全局组件
    Object.keys(allGloablComponent).forEach((key) => {
      // 注册为全局组件
      // @ts-ignore
      app.component(key, allGloablComponent[key]);
    });
  },
};
