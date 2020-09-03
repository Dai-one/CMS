<!-- 登录 -->
<template>
  <div class="login-page">
    <div class="login-box">
      <el-input placeholder="请输入账号" v-model="formdata.username" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="formdata.password" show-password></el-input>
      <el-button @click="handleLogin" type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      formdata: {
        username: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    //登录请求
    async handleLogin() {
      const res = await this.$http.Login(this.formdata);
      if (res.token) {
        //登录成功，保存token值
        localStorage.setItem("token", res.token);
        this.successTip();
        this.$router.push({name:'Home'})
      }
    },
    successTip() {
      this.$message({
        message: "恭喜你，登陆成功",
        type: "success",
        duration: 2000,
      });
    },
    errorTip() {
      this.$message({
        showClose: true,
        message: "用户名或密码错误！",
        type: "error",
        duration: 2000,
      });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  background: #007ed9;
  display: block;
  .login-box {
    width: 400px;
    height: 300px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding-top: 40px;
    background: #ffe5ff;
    border-radius: 10px;
    .el-input {
      width: 300px;
      margin: 20px auto;
      display: block;
    }
    .el-button {
      width: 300px;
      margin: auto;
      display: block;
    }
  }
}
</style>