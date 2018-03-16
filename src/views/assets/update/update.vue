<template>
  <div class="tanchuang">
    <el-breadcrumb class="breadcrumb">
      <el-breadcrumb-item class="breadcrumb-item" :to="{name: 'assets'}" :replace="true">资产管理</el-breadcrumb-item>
      <el-breadcrumb-item class="breadcrumb-item">修改</el-breadcrumb-item>
    </el-breadcrumb>
      <el-form ref="form" :model="assetsItem" label-width="80px">
        <el-form-item label="用户工号">
          <el-input v-model="assetsItem.userno"></el-input>
        </el-form-item>
        <el-form-item label="资产名称">
          <el-input v-model="assetsItem.name"></el-input>
        </el-form-item>
        <el-form-item label="品牌">
          <el-input v-model="assetsItem.brand"></el-input>
        </el-form-item>
        <el-form-item label="型号">
          <el-input v-model="assetsItem.model"></el-input>
        </el-form-item>
        <el-form-item label="到货日期">
          <el-input v-model="assetsItem.arrival_date"></el-input>
        </el-form-item>
        <el-form-item label="财务编号">
          <el-input v-model="assetsItem.affairs_no"></el-input>
        </el-form-item>
        <el-form-item label="入库员">
          <el-input v-model="assetsItem.create_no"></el-input>
        </el-form-item>
        <el-form-item label="责任人">
          <el-input v-model="assetsItem.username"></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-input v-model="assetsItem.dept"></el-input>
        </el-form-item>
        <el-form-item label="办公地点">
          <el-input v-model="assetsItem.office"></el-input>
        </el-form-item>
        <el-form-item label="公司">
          <el-input v-model="assetsItem.company"></el-input>
        </el-form-item>
        <el-form-item label="设备状态">
          <el-input v-model="assetsItem.status"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="assetsItem.remark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" :disabled="submit">确认修改</el-button>
          <el-button @click="onCancel" :disabled="submit">取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { deviceUpdate } from 'api/assets'
export default {
  data () {
    return {
      submit: false
    }
  },
  computed: {
    ...mapGetters(['assetsItem'])
  },
  methods: {
    onSubmit (e) {
      var me = this;
      me.submit = true;
      deviceUpdate(this.assetsItem).then(function (res) {
        console.log(res)
        console.log(res.code === 200 && res.message === 'success')
        if (res.code === 200 && res.message === 'success') {
          me.$message({
            message: '修改成功',
            type: 'success',
            duration: 2000
          });
          setTimeout(function () {
            me.$router.push({name: 'assets'})
          }, 2000)
        } else {
          me.$message.error('修改失败，' + res.message);
          me.submit = false;
        }
      })
    },
    onCancel () {
      this.$router.push({name: 'assets'})
    }
  }
}
</script>

<style>

</style>
