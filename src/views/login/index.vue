<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" class="login_btn" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive,ref } from "vue";
// 引入用户相关的小仓库
import  {useUserStore } from "@/store/modules/user"
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import {getTime} from "@/utils/time"
// 定义变量控制按钮加载效果
let loading = ref(false)
let useStore = useUserStore()
// 收集表单数据
let loginForm = reactive({
  username: "admin",
  password: "1111111",
});
// 获取路由器
let $router = useRouter();
// 登录回调
const login = async ()=> {
  // 加载效果显示
  loading.value = true;
// 点击登录按钮以后干什么？
// 通知仓库发送登录请求
// 请求成功-》跳转首页展示数据的地方
// 请求失败-》弹出登录失败信息
 try{
     await useStore.userLogin(loginForm)
    //  编程式导航跳转到展示数据首页
     $router.push('/');
    //  登录成功提示信息
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `Hi,${getTime()}好`
    });
    // 加载效果消失
    loading.value = false
 }catch(error){
  loading.value = false

  // 登录失败提示信息
  ElNotification({
    type: 'error',
    message: (error as Error).message
  })
 }
 
}
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    top: 30vh;
    width: 80%;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 40px;
    background: url("@/assets/images/login_form.png") no-repeat;
    h1 {
      color: #fff;
      font-size: 40px;
    }
    h2 {
      color: #fff;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
