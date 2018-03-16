<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      dic: {
        'assets': '资产管理',
        'update': '修改',
        'change': '变更记录',
        'check': '盘点',
        'checkError': '盘点错误'
      },
      pathDic: {
        'assets': '资产管理',
        'update': '修改',
        'change': '变更记录',
        'check': '盘点',
        'checkError': '盘点错误'
      }
    }
  },
  computed: {
      route: function () {
        var routeArr = this.$route.path.split('/');
        routeArr.shift();
        return routeArr;
      }
    },
  methods: {}
}
</script>

<style scoped>

</style>
