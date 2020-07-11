<template>
  <ul class="list">
    <li class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
      </li>
  </ul>
</template>

<script lang='ts'>
import {Vue, Component, Prop, Emit} from 'vue-property-decorator'
@Component
export default class CityAlphabet extends Vue {
  @Prop({ default: {} }) cities!: object
  touchStatus:boolean = false
  timer: null | number = null
  get letters (): Array<string> {
    const letters: Array<string> = []
    for (let i in this.cities) {
      letters.push(i)
    }
    return letters
  }
  @Emit('change')
  handleLetterClick (e): string {
    return e.target.innerText
  }
  handleTouchStart (): void {
    this.touchStatus = true
  }
  handleTouchMove (e) {
    if (this.touchStatus) {
      const startY: number = this.$refs['A'][0].offsetTop
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const touchY: number = e.touches[0].clientY - 89
        const index: number = Math.floor((touchY - startY) / 20)
        this.$emit('change', this.letters[index])
      }, 16)
    }
  }
  handleTouchEnd (): void {
    this.touchStatus = false
  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.78rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    line-height: .4rem
    text-align: center
    color: $bgColor
</style>
