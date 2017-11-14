<template>
  <!-------------------------header组件开始------------------------->
  <div class="header">
    <div class="content-wrapper">
      <div class="avtor">
        <img width="55" height="55" src="./avtor.jpg" alt="头像">
      </div>
      <div class="name">
        <span>豪杰食品</span>
        <button>签约商家</button>
        <div>
          <span class="iconfont icon-medal"></span>
          <span class="iconfont icon-medal"></span>
          <span class="iconfont icon-medal"></span>
          <span class="iconfont icon-medal"></span>
        </div>

      </div>
      <div class="ratings"><span>97%</span>好评</div>
    </div>
    <!------------------------content-wrapper结束--------------------------->
    <div class="content">
      <div class="speed">
        <span>发货速度</span>
        <i class="iconfont icon-xingxing-copy-copy-copy"></i>
        <i class="iconfont icon-xingxing-copy-copy-copy"></i>
        <i class="iconfont icon-xingxing-copy-copy-copy"></i>
        <i class="iconfont icon-xingxing-copy-copy-copy"></i>
        <i class="iconfont icon-star-outline"></i>
        <span class="score">4.5分</span>
      </div>
      <div class="attitude">
        <span>服务态度</span>
        <i class="iconfont icon-xingxing-copy-copy-copy"></i>
        <i class="iconfont icon-xingxing-copy-copy-copy"></i>
        <i class="iconfont icon-xingxing-copy-copy-copy"></i>
        <i class="iconfont icon-xingxing-copy-copy-copy"></i>
        <i class="iconfont icon-star-outline"></i>
        <span class="score">4.3分</span>
      </div>
      <div  class="up-provider" v-if="'/grounding' == urls">
        <span>下架该供应商</span>
      </div>
      <div @click="popNotice"  class="under-provider" v-else >
        <span>上架该供应商</span>
      </div>
    </div>
    <!-------------------------content结束------------------------->
    <div class="noticebar">
      <span v-if=" '/grounding' == urls">自动上架该供应商商品</span>
      <input type="checkbox" class="iconfont">
    </div>
    <!-------------------------noticebar结束------------------------->
  </div>
  <!-------------------------header组件结束------------------------->
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      urls: String
    },
    data () {
      return {
      }
    },
    methods: {
      popNotice () {
        this.$store.state.notice = !this.$store.state.notice
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/styl/function.styl"
  .header
    position fixed
    top 0
    width 100%
    z-index 10
    left 0
    overflow hidden
    color #fff
    background #fff -webkit-linear-gradient(left, rgba(255,0,0,0.4), rgba(245,123,86,1))
    background #fff -o-linear-gradient(right, rgba(255,0,0,0.4), rgba(245,123,86,1))
    background #fff -moz-linear-gradient(right, rgba(255,0,0,0.4), rgba(245,123,86,1))
    background #fff linear-gradient(to right, rgba(255,0,0,0.4), rgba(245,123,86,1))
    .content-wrapper
      position relative
      display flex
      font-size 0
      .avtor
        flex 0 0 55px
        width 55px
        height 55px
        padding 16px 16px 10px 16px
        & > img
          border-radius(50%)
      .name
        display inline-block
        flex 1
        font-size 16px
        margin-top 17px
        & > button
          display inline-block
          height 24px
          line-height 24px
          color rgb(241,89,42)
          margin-left 4px
          background rgb(254,230,230)
          border none
          border-radius(3px)
        & > div
          font-size 0
          margin-top 4px
          margin-left -3px
          & > span
            font-size 20px
      .ratings
        position absolute
        top: 22px
        right: 14px
        font-size 12px
        & > span
          font-size 16px
          color rgb(251,254,1)
          padding 3px
    /*************************content-wrapper样式结束***********************/
    .content
      position relative
      font-size 0
      margin 0 0 15px 18px
      .speed,.attitude
        font-size 14px
        letter-spacing -1px
        color rgb(255,243,43)
        & > span
          padding-right 5px
          color #fff
        &.score
          font-size 12px
      .attitude
        margin-top 5px
      .under-provider,.up-provider
        position absolute
        right 0
        top 0
        height 30px
        padding 0 12px 0 10px
        font-size 16px
        background #fff
        border-top-left-radius 15px
        border-bottom-left-radius 15px
        & > span
          display inline-block
          text-align center
          line-height 30px
          color rgb(245,123,86)

    /*************************content样式结束***********************/
    .noticebar
      position relative
      overflow hidden
      margin  0 0 16px 18px
      font-size 0
      & > span
        font-size 15px
      & > input[type='checkbox']
        &:checked
          &:before
            content: "\e611";
            font-size 13px
        position absolute
        right 16px
        top -2px
        width 20px
        height 20px
        background-color #fff
        border-radius(5px)
    /*************************notice样式结束***********************/

</style>
