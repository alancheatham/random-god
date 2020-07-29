<template>
  <div :style="textStyle()">{{ randomQuote() }}</div>
</template>

<script>
import quotes from '../assets/quotes.json'

export default {
  name: 'RandomText',
  computed: {},
  methods: {
    randomNumber(max) {
      return Math.floor(Math.random() * Math.floor(max))
    },
    randomQuote() {
      return quotes[this.randomNumber(quotes.length)]
    },
    randomColor() {
      return `rgb(
          ${this.randomNumber(255)},
          ${this.randomNumber(255)},
          ${this.randomNumber(255)})`
    },
    textStyle() {
      return {
        color: this.randomColor(),
        fontSize: `${this.randomNumber(150)}px`,
        top: `${this.randomNumber(80)}%`,
        left: `${this.randomNumber(80)}%`,
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
div
  position absolute
</style>
