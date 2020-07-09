<template>
  <div class="content" @click="handleGallaryClick">
    <div class="wrapper">
    <swiper :options="swiperOption">
    <swiper-slide
    v-for="(item, index) of imgs"
    :key="index"
    >
      <img class="gallary-img" :src="item" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
@Component
export default class GallaryImg extends Vue {
  @Prop({ default: [] }) imgs!: Array<string>
  swiperOption: object = {
    pagination: '.swiper-pagination',
    paginationType: 'fraction',
    observeParents: true,
    observer: true
  }
  @Emit('close')
  handleGallaryClick (): void {}
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-container
  overflow: inherit
.content
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  background: #000
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  .gallary-img
    width: 100%
  .swiper-pagination
    bottom: -50px
    color: #fff
</style>
