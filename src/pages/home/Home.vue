<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="list"></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  },
  data () {
    return {
      list: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
