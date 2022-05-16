<template>
  <div>
    <h1>{{ helloWorld }}</h1>
  </div>
</template>

<script setup lang="ts">
const helloWorld = ref('helloWorld')
</script>

<style lang="scss" scoped>
h1 {
  color: $main-color;
  text-align: center;
}
</style>
