<template>
  <div>
    <h1>{{ helloworld }}</h1>
  </div>
</template>

<script setup lang="ts">
const helloworld = ref('helloworld')
</script>

<style lang="scss" scoped>
h1{
  color: $main-color;
  text-align: center;
}
</style>
