<template>
  <div class="login_container">
   
<el-row>
     <el-col :span="12" :xs="0"></el-col>
     <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
              <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
              <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" class="login_btn">登录</el-button>
          </el-form-item>
        </el-form>
    </el-col>
    
</el-row>
  </div>
 
</template>

<script setup lang="ts">
import {User,Lock} from '@element-plus/icons-vue'
import {reactive} from 'vue'
// 收集表单数据
let loginForm = reactive({
  username: 'admin',
  password: '1111111'
})
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background:url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
    .login_form {
      position: relative;
      top: 30vh;
      width: 80%;
      border: 1px solid #fff;
      border-radius: 5px;
      padding: 40px;
      background: url('@/assets/images/login_form.png') no-repeat;
     h1{
      color: #fff;
      font-size: 40px
     };
     h2{
      color: #fff;
      margin: 20px 0;
     };
     .login_btn {
      width: 100%;
     }
    }
}
</style>
