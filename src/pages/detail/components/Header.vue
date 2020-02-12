<template>
  <div class="content">
    <router-link
      tag="div"
      class="header-abs"
      v-show="showHeader"
      to="/"
    >
    <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header" v-show="!showHeader" :style="opacityStyle">
    景点详情
    <router-link to='/'>
    <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
  </div>
</template>

<script>

export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header-abs
  position: absolute
  left: .1rem
  top: .1rem
  width: .72rem
  height: .72rem
  line-height: .72rem
  border-radius: .36rem
  text-align: center
  background: #000
  .header-abs-back
    color: #fff
.header
  z-index: 2
  position: fixed
  top: 0
  left: 0
  right: 0
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  background: $bgColor
  color: #fff
  font-size: .32rem
  .header-back
    position: fixed
    left: 0
    top: 0
    width: .64rem
    text-align: center
    font-size: .4rem
    color: #fff
</style>
