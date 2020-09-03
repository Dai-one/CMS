<!--  -->
<template>
  <el-container class="container">
    <!-- 头部 -->
    <el-header class="header">
      <div class="logo">
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1426117495,2816876964&fm=26&gp=0.jpg"
        />
      </div>
      <div class="cms-title">后台用户管理系统</div>
      <div class="user-login">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <span @click="handleSignOut">
              <el-dropdown-item icon="el-icon-circle-check">退出登录</el-dropdown-item>
            </span>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边导航开始 -->
      <el-aside width="200px" class="aside">
        <el-col :span="24">
          <!-- 用户管理 -->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

          <!-- 权限管理 -->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

          <!-- 商品管理 -->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

          <!-- 订单管理 -->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

          <!-- 数据统计 -->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <!-- 侧边导航结束 -->

      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //退出登录
    handleSignOut(){
      //清除token
      localStorage.clear()
      //提示
      this.$message.success('退出成功')
      //返回登录页面
      this.$router.push({name:'Login'})
    }
  },
  beforeCreate() {
    //获取token，判断是否有，有就说明登陆了，没有就返回登录页
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ name: "Login" });
    }
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
#app {
  .container {
    height: 100%;
    .header {
      display: flex;
      width: 100%;
      background: rgb(238,239,243);
      .logo {
        width: 200px;
        height: 100%;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .cms-title {
        margin: 0 auto;
        line-height: 60px;
        font-size: 24px;
        font-weight: bold;
      }
      .user-login {
        display: flex;
        align-items: center;
        margin-right: 20px;
        .el-dropdown-link {
          cursor: pointer;
          color: #409eff;
        }
        .el-icon-arrow-down {
          font-size: 12px;
        }
        .demonstration {
          display: block;
          color: #8492a6;
          font-size: 14px;
          margin-bottom: 20px;
        }
      }
    }
    .aside {
      background: #545c64;
    }
    .main {
      height: 100%;
      background: #f9f871;
    }
  }
}
</style>
