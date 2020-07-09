<template>
  <div>
    <div class="title">
      <span class="iconfont icon">&#xe85c;</span>看过该景点的还看了
    </div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p><button class="item-button">查看详情</button></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class DetailRecommend extends Vue {
  @Prop({ default: [] }) list!: Array<object>
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
  .icon
    color: red
.item
  height: 1.88rem
  display:flex
  overflow:hidden
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex:1
    padding: .1rem
    .item-title
      line-height: .44rem
      font-size: .32rem
      overflow:hidden
      white-space:nowrap
      text-overflow:ellipsis
    .item-desc
      line-height: .4rem
      font-size: .32rem
      color: #ccc
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    .item-button
      line-height: .44rem
      padding: 0.04rem
      margin-top: .1rem
      background: #ffa500
      color: #fff
      border-radius: 0.04rem
</style>
