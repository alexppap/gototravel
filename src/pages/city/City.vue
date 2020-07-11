<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
    :cities="cities"
    :hot="hotCities"
    :letter="letter"
    >
    </city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    >
     </city-alphabet>
  </div>
</template>

<script lang='ts'>
import {Vue, Component} from 'vue-property-decorator'
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
@Component({
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
})
export default class City extends Vue {
  cities: object = {}
  hotCities: Array<object> = []
  letter: string = ''
  getCityInfo (): any {
    axios.get('/api/city.json')
      .then(this.getCityInfoSucc)
  }
  getCityInfoSucc (res): void {
    res = res.data
    if (res.ret && res.data) {
      const data = res.data
      this.cities = data.cities
      this.hotCities = data.hotCities
    }
  }
  handleLetterChange (letter): void {
    this.letter = letter
  }
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
