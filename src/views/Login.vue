<template>
  <div>
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
      <h3 class="loginTitle">系统登录</h3>
      <!--  Username  -->
      <el-form-item prop="username">
        <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <!--  Password  -->
      <el-form-item prop="password">
        <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <!--  验证码  -->
      <el-form-item prop="code">
        <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击更换验证码" style="width: 250px; margin-right: 5px"></el-input>
        <!--  验证码图片 -->
        <img :src="captchaUrl" />
      </el-form-item>
      <!--  记住我&登录  -->
      <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
      <el-button type="primary" @click="submitLogin" style="width: 100%">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      captchaUrl: "",
      loginForm: {
        username: "admin",
        password: "123",
        code: "",
      },
      checked: true,
      // 验证规则
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    }
  },
  // 登录按钮的点击事件
  methods: {
    submitLogin() {
       this.$refs.loginForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            this.$message.error('请输入所有字段！');
            return false;
          }
        });
    }
  }
}
</script>

<style>
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  /*background-image: url('');*/
}
/* 登录框整体 */
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
/* ”系统登录“ */
.loginTitle {
  margin: 0px auto 40px auto;
  text-align: center;
}
/*记住我*/
.loginRemember {
  text-align: left;
  margin: 0px 0px 15px 0px;
}
</style>