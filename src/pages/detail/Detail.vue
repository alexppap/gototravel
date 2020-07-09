<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-baseinfo></detail-baseinfo>
    <detail-list></detail-list>
    <detail-recommend :list="recommendList"></detail-recommend>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailBaseinfo from './components/Baseinfo.vue'
import DetailList from './components/List.vue'
import DetailRecommend from './components/Recommend.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailBaseinfo,
    DetailList,
    DetailRecommend
  },
  data () {
    return {
      recommendList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?id=' + this.$route.params.id)
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.recommendList = data.recommendList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
