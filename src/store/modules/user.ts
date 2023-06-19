// 创建用户相关的小仓库
import { defineStore } from "pinia";
// 引入接口
import { reqLogin } from "@/api/user";
// 引入数据类型
import { loginForm,loginResponseData } from "@/api/user/type";
// 引入本地存取数据方法
import {SET_TOKEN,GET_TOKEN} from "@/utils/token"
import {UseState} from './types/type'
// 创建用户小仓库
let useUserStore = defineStore("User", {
  // 小仓库存储数据的地方
  state: ():UseState => {
    return {
        // 用户唯一标识
        token: GET_TOKEN()
    };
  },
  // 处理异步逻辑的地方
  actions: {
    // 用户登录方法
     async userLogin(data: loginForm) {
        // 登录请求
        let result:loginResponseData = await reqLogin(data);
        // 登录成功： 200 -> token
        // 登录失败： 201 -》失败信息
        if(result.code == 200) {
            // pinia仓库保存一下token
            this.token = (result.data.token as string);
            // 本地存储持久化存储一份
            SET_TOKEN((result.data.token as string))
            // 能保证当前async函数返回一个成功的primese
            return 'ok';
        } else {
          return Promise.reject(new Error(result.data.message));
        }
    }
  },
  getters: {},
});

// 对外暴露获取小仓库的方法
export  {useUserStore};
