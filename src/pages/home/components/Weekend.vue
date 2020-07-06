<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li
        class="border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="wrapper">
          <img class="img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class HomeWeekend extends Vue {
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
