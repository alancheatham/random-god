<template>
  <div id="app">
    <RandomImage />
    <RandomText />
    <RandomVideo />
  </div>
</template>

<script>
import RandomText from './components/RandomText.vue'
import RandomImage from './components/RandomImage.vue'
import RandomVideo from './components/RandomVideo.vue'

export default {
  name: 'App',
  components: {
    RandomText,
    RandomImage,
    RandomVideo
  }
}
</script>

<style lang="stylus" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
