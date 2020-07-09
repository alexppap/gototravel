<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon">&#xe624;</span>
    </div>
    <div class="header-input"><span class="iconfont search-icon">&#xe63c;</span>
     请输入你想输入的内容
     </div>
    <div class="header-right">
      <router-link
        tag="div"
        class="nav-city"
        to="/city"
      >
      上海
      <!-- {{this.$store.state.city}} -->
      <span class="iconfont arrow-icon">&#xe600;</span>
      </router-link>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class HomeHeader extends Vue {

}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header
  display: flex
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  font-size: .28rem
  color: #fff
  .header-left
    width: .8rem
    float: left
    .icon
      font-size: .36rem
      padding: .2rem
      text-align: center
  .header-input
    flex: 1
    height: .6rem
    line-height: .6rem
    margin-top: .14rem
    border-radius: 0.06rem
    background: #fff
    color: #ccc
    .search-icon
      padding-left: .2rem
  .header-right
    width: 1.28rem
    float: right
    .nav-city
      text-align:  center
      .arrow-icon
        font-size: .24rem
</style>
