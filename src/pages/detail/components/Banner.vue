<template>
  <div>
  <div class="img-wrapper" @click="handleBannerClick">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1602/45/459bd3d00321a44790.water.jpg_600x330_81c878a2.jpg"/>
    <div class="banner-title">景山公园(AAAA景区)</div>
    <div class="title-bottom"></div>
  </div>
  <gallary-img
  :imgs="gallaryImgs"
  v-show="showGallary"
  @close="handleBannerClose"
  >
  </gallary-img>
  </div>
</template>

<script lang='ts'>
import GallaryImg from '@/common/gallary.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: {
    GallaryImg
  }
})
export default class DetailBanner extends Vue {
  showGallary: boolean = false
  gallaryImgs: Array<string> = ['http://img1.qunarzz.com/sight/p0/1905/58/5845ebab604045b9a3.img.jpg_350x240_b11c8058.jpg', 'http://img1.qunarzz.com/sight/p0/1909/a7/a7f107630d794c8a3.img.jpg_350x240_a7898b34.jpg']

  handleBannerClick (): void{
    this.showGallary = true
  }
  handleBannerClose (): void {
    this.showGallary = false
  }
}
</script>

<style lang="stylus" scoped>
.img-wrapper
  position: relative
  width: 100%
  height: 0
  padding-bottom: 55%
  overflow: hidden
  .banner-img
    width: 100%
  .banner-title
    position: absolute
    left: .2rem
    right: .2rem
    bottom: .4rem
    line-height: .4rem
    height: .4rem
    font-size: .36rem
    color: #fff
  .title-bottom
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: .4rem
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
</style>
