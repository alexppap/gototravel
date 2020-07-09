<template>
  <div class="content border-bottom">
    <div class="baseinfo">
      <div class="img-wrapper">
        <div>
          <span class="mp-score">4.9</span>
          <span class="mp-text">分</span>
          <span class="mp-desc">很棒</span>
        </div>
        <div>
          <span class="mp-totalcommentnum">5100条评论</span>
          <span class="mp-totalcommentnum">22条攻略</span>
        </div>
        <div class="iconfont right-arrow">&#xe62d;</div>
      </div>
      <div class="img-wrapper">
        <div><span class="mp-title">景点简介</span></div>
        <div><span class="mp-text2">开放时间、贴士</span></div>
        <div class="iconfont right-arrow">&#xe62d;</div>
      </div>
    </div>
    <div class="title-wrapper">
      <div class="text-title">北京市西城区景山西街44号</div>
      <div class="iconfont right-arrow">&#xe62d;</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class DetailBaseinfo extends Vue {}
</script>

<style lang="stylus" scoped>
.content
  z-index: 1
  position: relative
  top: -0.1rem
  height: 1.88rem
  border-radius: .1rem .1rem 0 0
  padding: .1rem .2rem 0 .2rem
  .baseinfo
    height: 50%
    .img-wrapper
      float: left
      position: relative
      width: 50%
      height: 100%
      padding-top: .1rem
.right-arrow
  position: absolute
  top: .2rem
  right: .2rem
  color: #9e9e9e
  font-size: .36rem
.mp-score
  font-size: .44rem
  color: #ff8300
  line-height: .44rem
.mp-text
  font-size: .28rem
  color: #ff8300
  line-height: .48rem
.mp-desc
  font-size: .28rem
  color: #ff8300;
  line-height: .48rem
  margin-left: .2rem
.mp-totalcommentnum
  font-size: .24rem
  color: #9e9e9e;
  line-height: .32rem
  margin-right: .2rem
.mp-title
  font-size: .28rem
  color: #212121
  line-height: .48rem
  padding-left: .3rem
.mp-text2
  color: #9e9e9e
  font-size: .24rem
  padding-left: .3rem
.title-wrapper
  padding: .2rem 0
  position: relative
  .text-title
    text-indent: .2rem
</style>
