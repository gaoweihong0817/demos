<template>
  <div class="gwh_index">
    <el-container>
      <el-header>
        <h1>Element</h1>
        <el-menu
          default-active
          class="el-menu-demo"
          mode="horizontal"
          background-color="#b3c0d1"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/index/ind">首页</el-menu-item>
          <el-menu-item index="/index/edit">订单</el-menu-item>
          <el-menu-item index="/index/goods">商品</el-menu-item>
          <el-menu-item>游戏</el-menu-item>
          <el-submenu>
            <template slot="title">个人</template>
            <el-menu-item @click="logout">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //退出
    logout() {
      this.$confirm("此操作将退出首页, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          window.localStorage.removeItem("token");
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  }
};
</script>

<style scoped lang='scss'>
.gwh_index {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  position: relative;
  .el-menu {
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0;
}
</style>
