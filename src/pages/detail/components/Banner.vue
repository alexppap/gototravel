<template>
  <div class="img-wrapper">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1602/45/459bd3d00321a44790.water.jpg_600x330_81c878a2.jpg"/>
    <div class="banner-title">景山公园(AAAA景区)</div>
    <div class="title-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
.img-wrapper
  position: relative
  width: 100%
  height: 0
  padding-bottom: 55%
  overflow: hidden
  .banner-img
    width: 100%
  .banner-title
    position: absolute
    left: .2rem
    right: .2rem
    bottom: .4rem
    line-height: .4rem
    height: .4rem
    font-size: .36rem
    color: #fff
  .title-bottom
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: .4rem
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
</style>
