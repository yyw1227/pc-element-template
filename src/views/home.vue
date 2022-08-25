<template>
  <div>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <div class="bottom-box">
      <el-row class="mb-4">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </el-row>
    </div>
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
