<template>
  <div>
    <el-container>
      <slide></slide>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import slide from './Slide'
export default {
  name: 'Home',
  components: {
    slide
  },
  data() {
    return {}
  },
  methods: {

  },
  created () {
    console.log(this.$route.path)
  }
}
</script>

<style scoped>
  .el-main {
    padding-top: 5px;
  }

</style>
