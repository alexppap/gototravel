<template>
  <div class="wrapper">
   <div class="content">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{this.currentCity}}</div>
        </div>
    </div>
    </div>
    <div class="area">
      <div class="title  border-topbottom">热门城市</div>
      <div class="button-list">
        <div
          class="button-wrapper"
          v-for="item of hot"
          :key="item.id"
          @click="handleCityClick(item.name)"
         >
          <div class="button">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div
      class="area"
      v-for="(item, key) of cities"
      :key="key"
      :ref="key"
    >
      <div class="title  border-topbottom">{{key}}</div>
      <div class="item-list">
        <div class="item border-bottom"
        v-for="innerItem of item"
        :key="innerItem.id"
        @click="handleCityClick(innerItem.name)"
        >
        {{innerItem.name}}
        </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
import BScroll from '@better-scroll/core'
// import {mapState, mapMutations} from 'vuex'
@Component
export default class CityList extends Vue {
  @Prop({default: []}) hot: Array<object>
  @Prop({default: {}}) cities: object
  @Prop() letter: string
  currentCity: string = '上海'
  scroll: any = null
  // computed: {
  //   ...mapState({
  //     currentCity: 'city'
  //   })
  // }
  //   handleCityClick (city) {
  //     this.changeCity(city)
  //     this.$router.push('/')
  //   }
  //   ...mapMutations(['changeCity'])
  // },
  @Watch('letter')
  onLetterChange (): void {
    if (this.letter) {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  }
  mounted () {
    this.$nextTick(() => {
      let wrapper = document.querySelector('.wrapper')
      this.scroll = new BScroll(wrapper)
    })
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.wrapper
  overflow: hidden
  position: absolute
  top: 1.78rem
  right: 0
  left: 0
  bottom: 0
  .title
    line-height: .44rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    .item
      line-height: .74rem
      padding-left: .2rem
</style>
