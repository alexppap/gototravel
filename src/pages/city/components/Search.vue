<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入你想搜索的城市">
    </div>
    <div class="content" v-show="keyword">
    <ul>
      <li
      class="search-item border-bottom"
      v-for="item of list"
      :key="item.id"
      @click="handleCityClick(item.name)"
      >
        {{item.name}}
      </li>
      <li v-show="hasNoData">未查询到相关数据</li>
    </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.tiemr)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const results = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              results.push(value)
            }
          })
        }
        this.list = results
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.search
  height: .72rem
  padding: .1rem
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
.content
  z-index: 1
  overflow: hidden
  background: #eee
  position: absolute
  top: 1.78rem
  right:0
  left: 0
  bottom: 0
  .search-item
    text-indent: .2rem
    line-height: .62rem
    color: #666
</style>
