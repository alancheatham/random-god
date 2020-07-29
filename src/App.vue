<template>
  <div id="app">
    <RandomImage />
    <RandomText />
  </div>
</template>

<script>
import RandomText from './components/RandomText.vue'
import RandomImage from './components/RandomImage.vue'

export default {
  name: 'App',
  components: {
    RandomText,
    RandomImage,
  },
}
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%
</style>
