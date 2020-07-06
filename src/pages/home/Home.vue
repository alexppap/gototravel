<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script lang='ts'>
import axios from 'axios'
import { Vue} from 'vue-property-decorator'
import Component from "vue-class-component";
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcon from './components/Icon.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
// import {mapState} from 'vuex'
export default class Home extends Vue {
  @Component({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  }
})
  // computed: {
  //   ...mapState(['city'])
  // },
  // data () {
  //   return {
  //     lastcity: '',
  //     swiperList: [],
  //     iconList: [],
  //     recommendList: [],
  //     weekendList: []
  //   }
  // },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastcity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastcity !== this.city) {
      this.lastcity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
