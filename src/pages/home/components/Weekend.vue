<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="border-bottom">
        <div class="wrapper">
          <img class="img" src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg">
        </div>
        <div class="item-info">
          <p class="item-title">dasdd</p>
          <p class="item-desc">dasdsad</p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend'
}
</script>

<style lang="stylus" scoped>
.title
  height: .8rem
  line-height: .8rem
  margin-top: .1rem
  padding-left: .2rem
  font-size: .32rem
  background: #eee
.wrapper
  height: 0
  overflow: hidden
  padding-bottom: 37.8%
  .img
    width: 100%
.item-info
  flex:1
  padding: .1rem
  .item-title
    line-height: .44rem
    font-size:  .36rem
    overflow:hidden
    white-space:nowrap
    text-overflow:ellipsis
  .item-desc
    line-height: .4rem
    color:#ccc
</style>
