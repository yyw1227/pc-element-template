<template>
  <div class="screen-adapter">
    <div class="screen-content-wrap" :style="style">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  w?: number
  h?: number
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  w: 1920,
  h: 1080,
  delay: 500
})

const style = reactive({
  width: `${props.w}px`,
  height: `${props.h}px`,
  transform: 'scale(1) translate(-50%, 0)' // 默认不缩放，垂直水平居中
})

const onResize = () => {
  let timer:any = null
  window.addEventListener('resize', function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      setScale()
    }, props.delay)
  })
}

// 获取缩放比例
// const getScale = () => {
//   console.log(window.innerHeight, window.innerWidth)
//   const w = window.innerWidth / props.w
//   const h = window.innerHeight / props.h
//   return w < h ? w : h
// }
// 获取缩放比例X
const getScaleX = () => {
  const w = window.innerWidth / props.w
  return w
}
// 获取缩放比例Y
const getScaleY = () => {
  const h = window.innerHeight / props.h
  return h
}
// 设置缩放比例
const setScale = () => {
  style.transform = `scale(${getScaleX()},${getScaleY()}) translate(-50%, 0)`
}

onMounted(() => {
  setScale()
  onResize()
})

onBeforeMount(() => {
  window.removeEventListener('resize', setScale)
})

</script>

<style lang="scss" scoped>
.screen-adapter {
  width: 100vw;
  height: 100vh;
  background-color: #cccccc;
  overflow-x: hidden;
  overflow-y: overlay;
  position: relative;
  // background: url("../../assets/charts/icon-bg.png") no-repeat;
  // background-size: 100% 100%;
  .screen-content-wrap {
    transform-origin: 0 0;
    position: absolute;
    top: 0;
    left: 50%;
    box-sizing: border-box;
    transition: 0.3s;
  }
}
</style>
