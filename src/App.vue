<template>
  <el-config-provider :locale="zhCn">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cacheList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const cacheList: string[] = []
</script>
