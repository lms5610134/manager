<template>
  <div>
    <el-breadcrumb class="breadcrumb">
      <el-breadcrumb-item class="breadcrumb-item">资产管理</el-breadcrumb-item>
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
          <label>
            <span class="el-button el-button--primary is-plain" @click="upload" plain>导入</span>
            <input type="file" accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" @change="upload" hidden>
          </label>
          <el-button type="primary" plain>打印二维码</el-button>
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
        property="userno"
        label="用户工号"
      >
      </el-table-column>
      <el-table-column
        property="qrcode"
        label="二维码编号"
      >
      </el-table-column>
      <el-table-column
        property="name"
        label="资产名称"
      >
      </el-table-column>
      <el-table-column
        property="brand"
        label="品牌"
      >
      </el-table-column>
      <el-table-column
        property="model"
        label="型号"
      >
      </el-table-column>
      <el-table-column
        property="username"
        label="责任人"
      >
      </el-table-column>
      <el-table-column
        property="office"
        label="办公地点"
      >
      </el-table-column>
      <el-table-column
        property="status"
        label="资产状态"
      >
      </el-table-column>
      <el-table-column
        property="date"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button @click="update(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="seeChange(scope.row)" type="text" size="small">变更记录</el-button>
        </template>
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
  import {deviceQuery, deviceBatch} from 'api/assets';
  import {mapMutations} from 'vuex'

  export default {
    name: 'assets',
    data () {
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
        this.deviceQuery(this.pageFindData)
      },
      handleSizeChange(val) {
        this.pageFindData.pageSize = val;
        this.deviceQuery(this.pageFindData)
      },
      search() {
        this.pageFindData = {
          ...this.pageFindData,
          ...this.findData
        };
        this.deviceQuery(this.findData)
      },
      deviceQuery(data) {
        var me = this;
        me.isLoading = true;
        data = data || {};
        deviceQuery(data).then(function (res) {
          if (res.code == 200) {
            data = res.data;
            me.tableData = data.list;
            me.total = data.total;
          }
          me.isLoading = false;
        });
      },
      update(item) {
        this.setAssetsItem(item);
        this.$router.push({name: 'assetsUpdate'})
      },
      seeChange(item) {
        console.log(item.deviceNo);
        this.$router.push({name: 'assetsChange', query: {id: item.deviceNo}})
      },
      upload (e) {
        var me = this;
        if (e.target.files.length) {
          var file = e.target.files[0];
          deviceBatch(file).then(function (res) {
            if (res.code === 200) {
              me.$message({
                message: '导入成功',
                type: 'success',
                duration: 2000
              });
              me.deviceQuery();
            } else {
              me.$message.error('导入失败，' + res.message);
            }
          })
        }
      },
      ...mapMutations(['setAssetsItem'])
    },
    created() {
      this.deviceQuery();
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
