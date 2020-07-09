<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <swiper-slide
     v-for="item of list"
     :key="item.id"
    >
    <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class HomeSwiper extends Vue {
  @Prop({ default: [] }) list!: Array<object>

     swiperOption: object = {
       pagination: '.swiper-pagination',
       loop: true
     }
  // return {
  //   swiperOption: {
  //     pagination: '.swiper-pagination',
  //     loop: true
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background:#fff
.wrapper
  overflow: hidden
  height: 0
  width: 100%
  padding-bottom: 30%
  background:#eee
  .swiper-img
    width: 100%
</style>
