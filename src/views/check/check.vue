<template>
  <div>
    <el-breadcrumb class="breadcrumb">
      <el-breadcrumb-item class="breadcrumb-item">盘点记录</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="toolbar" :gutter="20">
      <el-col :span="6">
        <el-input
          placeholder="资产编号"
          v-model="findData.deviceNo"
        >
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-input
          placeholder="用户工号"
          v-model="findData.userno"
        >
        </el-input>
      </el-col>
      <el-col :span="12">
        <div class="tool-btns">
          <el-button type="primary" @click="search" plain>查询</el-button>
        </div>
      </el-col>
    </el-row>
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
        property="pdUserno"
        label="盘点人工号"
      >
      </el-table-column>
      <el-table-column
        property="create_time"
        label="盘点时间"
      >
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageFindData.currentPage"
        :page-sizes="[10, 15, 20, 50, 100]"
        :page-size="pageFindData.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {pandianQuery} from 'api/pandian';
  export default {
    name: 'assets',
    data() {
      return {
        tableData: [],
        // 翻页查询数据
        pageFindData: {
          pageSize: 10,
          currentPage: 1
        },
        // 搜索查询数据
        findData: {
          userno: '',
          deviceNo: ''
        },
        total: 0,
        fileList3: [],
        isLoading: true,
        dialogVisible: false
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.pageFindData.currentPage = val;
        this.pandianQuery(this.pageFindData)
      },
      handleSizeChange(val) {
        this.pageFindData.pageSize = val;
        this.pandianQuery(this.pageFindData)
      },
      search() {
        this.pageFindData = {
          ...this.pageFindData,
          ...this.findData
        };
        this.pandianQuery(this.findData)
      },
      pandianQuery(data) {
        var me = this;
        me.isLoading = true;
        data = data || {};
        pandianQuery(data).then(function (res) {
          if (res.code == 200) {
            data = res.data;
            me.tableData = data.list;
            me.total = data.total;
          }
          me.isLoading = false;
        });
      }
    },
    created() {
      this.pandianQuery();
    }
  }
</script>

<style scoped>
  .pagination {
    margin-top: 10px;
  }

  .el-form-item {
    margin-bottom: 10px;
  }
</style>
