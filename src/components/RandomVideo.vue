<template>
  <video muted loop autoplay :src="src"></video>
</template>

<script>
export default {
  name: 'RandomVideo',
  props: {
    src: String,
  },
}
</script>

<style lang="stylus" scoped></style>
