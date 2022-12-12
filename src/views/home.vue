<template>
  <div>
    <el-col :span="12"><div class="grid-content bg-purple">   <el-button type="primary">Primary</el-button></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">  <el-button type="success">Success</el-button></div></el-col>
  </div>
</template>

<script setup lang="ts">
// import { login } from '../api/remote/user'
// login({ password: '12321', username: '3213' }).then(res => {
//   console.log('res', res.data.username)
// })
</script>

<style lang="scss" scoped>
.bottom-box {
  position: absolute;
  bottom:0;
  left: 50%;
}
</style>
