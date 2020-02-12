<template>
  <div class="content">
    <div class="ticket-type border-bottom">
      <span class="ticket-type-ticket"></span>手机智能讲解（不含大门票）
    </div>
    <div class="ticket-content"
      @click="handleTicketClick"
    >
      <div class="ticket-left">手机电子导游</div>
      <div class="ticket-right">
        ¥
        <em class="ticket-price">5</em>
        <span>起</span>
        <span
          class="iconfont bottom-arrow"
          v-show="showData"
        >
         &#xe668;</span>
        <span
          class="iconfont bottom-arrow"
          v-show="!showData"
        >
         &#xe669;</span>
        </div>
    </div>
    <div class="hidden-area" v-show="!showData">
      <div class="left-area">
        <ul>
          <li class="list-li"><h6>景山公园  手机智能导游</h6></li>
          <li class="list-li">19:30前随买随用</li>
          <li class="list-li">首都之旅 预订须知 <span class="iconfont right-arrow">&#xe62d;</span></li>
        </ul>
      </div>
      <div class="right-area">
        <div class="ticket-right2">
        ¥
        <em class="ticket-price">5</em>
        <div class="ticket-btn">预订</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailList',
  data () {
    return {
      showData: true
    }
  },
  methods: {
    handleTicketClick () {
      if (this.showData) {
        this.showData = false
      } else {
        this.showData = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  z-index: 1
.ticket-type
  height: .88rem
  line-height: .88rem
  padding: 0 .2rem
  text-indent: .4rem
  font-size: 16px
  margin-top: .1rem
  .ticket-type-ticket
    display: inline-block
    position: absolute
    width: .36rem
    height: .36rem
    top: .26rem
    left: .2rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
.ticket-content
  height: .48rem
  line-height: .48rem
  padding: .24rem .2rem
  .ticket-left
    float: left
    font-size: .32rem
  .ticket-right
    float: right
    color: #ff9800
    font-size: .24rem
    .ticket-price
      font-size: .40rem
    .bottom-arrow
      color: #9e9e9e
      font-size: .24rem
.hidden-area
  height: 1.536rem
  padding: .2rem
  background: #f5f5f5
  .left-area
   width: 80%
   float: left
   height:100%
  .right-area
    height: 100%
.list-li
  line-height: 20px
.ticket-right2
    color: #ff9800
    font-size: .24rem
    text-align: center
    .ticket-price
      font-size: .40rem
.ticket-btn
  float: right
  width: 1.4rem
  height: .6rem;
  text-align: center
  color: #fff;
  font-size: .28rem;
  line-height: .6rem;
  border-radius: .08rem
  background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
</style>
