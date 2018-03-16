<template>
  <div>
    <el-breadcrumb class="breadcrumb">
      <el-breadcrumb-item class="breadcrumb-item" :to="{name: 'assets'}" :replace="true">资产管理</el-breadcrumb-item>
      <el-breadcrumb-item class="breadcrumb-item">变更记录</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      ref="singleTable"
      :border="true"
      v-loading="isLoading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="tableData"
      highlight-current-row
      :fit="true"
      style="width: 100%"
    >
      <el-table-column
        property="deviceNo"
        label="资产编号"
      >
      </el-table-column>
      <el-table-column
        property="qrcode"
        label="二维码编号"
      >
      </el-table-column>
      <el-table-column
        property="userno"
        label="用户工号"
      >
      </el-table-column>
      <el-table-column
        property="create_time"
        label="用户工号"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { deviceChange } from 'api/assets';

  export default {
    name: 'assets',
    data() {
      return {
        tableData: [],
        // 搜索查询数据
        isLoading: true
      }
    },
    methods: {
      deviceChange(data) {
        var me = this;
        me.isLoading = true;
        data = data || '';
        deviceChange(data).then(function (res) {
          if (res.code == 200) {
            me.tableData = res.data;
            console.log(me.tableData)
          }
          me.isLoading = false;
        });
      }
    },
    created () {
      var id = this.$route.query.id;
      this.deviceChange(id);
    }
  }
</script>

<style scoped>
  .pagination {
    margin-top: 10px;
  }
</style>
