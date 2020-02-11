<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-baseinfo></detail-baseinfo>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailBaseinfo from './components/Baseinfo'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailBaseinfo
  }
}
</script>

<style lang="stylus" scoped>

</style>
