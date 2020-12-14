<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/edit/editChild">订单列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
div {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside {
  background-color: #545c64;
  color: #fff;
  text-align: center;
  border: none;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>