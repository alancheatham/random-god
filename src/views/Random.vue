<template>
  <div id="app">
    <RandomImage />
    <RandomText />
    <RandomVideo :src="require('../assets/videos/birds.mp4')" />
    <RandomVideo
      class="front"
      :src="require('../assets/videos/pyramids.mp4')"
    />
  </div>
</template>

<script>
import RandomText from '../components/RandomText.vue'
import RandomImage from '../components/RandomImage.vue'
import RandomVideo from '../components/RandomVideo.vue'

export default {
  name: 'App',
  components: {
    RandomText,
    RandomImage,
    RandomVideo,
  },
}
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%

.front
  width 500px
  position absolute
  top 33%
  left 33%
</style>
