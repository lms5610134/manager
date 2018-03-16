<template>
  <el-aside width="200px">
    <el-menu
      :default-active="$route.path"
      router>
      <el-menu-item index="/assets" :route="{name: 'assets'}">
        <i class="el-icon-location"></i>
        <span slot="title">资产管理</span>
      </el-menu-item>
      <el-menu-item index="/check" :route="{name: 'check'}">
        <i class="el-icon-menu"></i>
        <span slot="title">盘点记录</span>
      </el-menu-item>
      <el-menu-item index="/checkError" :route="{name: 'checkError'}">
        <i class="el-icon-document"></i>
        <span slot="title">盘点异常记录</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: 'slide'
  }
</script>

<style scoped>
  .el-menu {
    width: 200px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
  }
</style>
