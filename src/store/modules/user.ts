// 创建用户相关的小仓库
import { defineStore } from "pinia";
// 创建用户小仓库
let useUserStore = defineStore('User',{
    // 小仓库存储数据的地方
    state: ()=> {
        return {}
    },
    // 处理异步逻辑的地方
    actions: {

    },
    getters: {

    }
})

// 对外暴露获取小仓库的方法
export default useUserStore;