<template>
  <el-container>
    <el-aside width="auto">
      <commonAside></commonAside>
    </el-aside>
    <el-container>
      <el-header>
        <commonHeader></commonHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAside from '../src/components/commonAside.vue'
import commonHeader from '../src/components/commonHeader'
export default {
  name: 'Main',
  components: {
    commonAside,
    commonHeader
  }
}
</script>

<style>
.el-header {
  background-color: #333;
  width: 100%;
}
.el-main {
  padding-top: 0;
}
</style>