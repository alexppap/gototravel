<template>
  <div>
  <swiper :options="swiperOption">
  <swiper-slide
    v-for="(page,index) of pages"
    :key="index"
  >
  <div class="container">
    <div class="icon"
      v-for="item of page"
      :key="item.id"
    >
      <div class="icon-img">
        <img class="icon-img-size" :src="item.imgUrl">
      </div>
      <div class="icon-desc">{{item.desc}}</div>
    </div>
  </div>
  </swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width: 100%
  padding-bottom: 50%
  .icon
    width: 1.86rem
    height: 1.6rem
    float: left
    .icon-img
      height: 1.22rem
      text-align: center
      .icon-img-size
        width: 1.1rem
        height: 1.1rem
        padding-top: .1rem
    .icon-desc
      text-align: center
      line-height: 19px
</style>
