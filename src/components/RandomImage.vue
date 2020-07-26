<template>
  <img :style="imageStyle()" :src="randomImage()" />
</template>

<script>
export default {
  name: "RandomText",
  data() {
    return {
      images: [],
    };
  },
  computed: {},
  methods: {
    importImages(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
    randomNumber(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    randomImage() {
      if (this.images.length == 0) return "";

      return this.images[this.randomNumber(this.images.length)].pathLong;
    },
    randomSize() {
      return `${this.randomNumber(100)}px`;
    },
    imageStyle() {
      return {
        top: `${this.randomNumber(50)}%`,
        left: `${this.randomNumber(50)}%`,
      };
    },
  },
  mounted() {
    this.importImages(
      require.context("../assets/images/", true, /\.jpg|\.png$/)
    );
  },
};
</script>

<style lang="stylus" scoped>
img
    position absolute
</style>
