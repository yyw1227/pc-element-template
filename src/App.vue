<template>
  <el-config-provider :locale="zhCn">
    <ScreenAdapter>
      <RouterView />
    </ScreenAdapter>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { env } from '@/utils'
import { login } from '@/api/remote/user'
import ScreenAdapter from './components/screen-adapter/screen-adapter.vue'
// 使用转换后的环境变量
console.log('env', env)

// login({ username: '111', password: '22' }).then(res => {
//   console.log('res', res)
// })
</script>

<style lang="scss" scoped></style>
