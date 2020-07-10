<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-baseinfo></detail-baseinfo>
    <detail-list></detail-list>
    <detail-recommend :list="recommendList"></detail-recommend>
  </div>
</template>

<script lang='ts'>
import axios from 'axios'
import {Vue, Component} from 'vue-property-decorator'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailBaseinfo from './components/Baseinfo.vue'
import DetailList from './components/List.vue'
import DetailRecommend from './components/Recommend.vue'
@Component({
  components: {
    DetailBanner,
    DetailHeader,
    DetailBaseinfo,
    DetailList,
    DetailRecommend
  }
})
export default class Detail extends Vue {
  recommendList: Array<object> = []
  getDetailInfo (): any {
    axios.get('/api/detail.json?id=' + this.$route.params.id)
      .then(this.getDetailInfoSucc)
  }
  getDetailInfoSucc (res): void {
    res = res.data
    if (res.ret && res.data) {
      const data = res.data
      this.recommendList = data.recommendList
    }
  }
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
