<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="请输入你想搜索的城市">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.search
  height: .72rem
  padding: 5px
  background: $bgColor
  .search-input
    box-sizing: border-box
    text-align: center
    padding: 0 .2rem
    width: 100%
    height: .62rem
    line-height: .62rem
    border-radius: .06rem
    background: #fff
    color: #666
</style>
