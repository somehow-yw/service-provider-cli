<template>
  <!--------------------------------弹出搜索层开始-------------------------------------->
  <div v-if="$store.state.popsearch" class="Search-page">
    <!--------------------------------搜索框、按钮开始-------------------------------------->
    <div class="search-wrapper clearfix">
      <span @click=" hideSearch" class="iconfont icon-fanhui"></span>
      <input type="search" placeholder="点此输入要找的供应商">
      <input class="btn-sousuo" value="搜索" />
    </div>

    <!--------------------------------搜索详细开始-------------------------------------->
    <div class="search-history">
      <div class="search-history-wrapper">
        <span class="sou">历史搜索</span>
      </div>
      <div class="search-item">
        <ul>
          <li>豪杰食品</li>
          <li>豪杰</li>
          <li>豪杰食品开始了</li>
          <li>豪杰食品开</li>
          <li>豪杰食品开始</li>
          <li>豪</li>
          <li>好好好</li>
          <li>哇瑟哟</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      hideSearch () {
        this.$store.state.show = !this.$store.state.show
        this.$store.state.popsearch = !this.$store.state.popsearch
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/styl/function.styl'
  /************************************👇搜索详细弹出层样式**************************************/
  .Search-page
    position fixed
    z-index 12
    top 0
    left 0
    width 100%
    height 100%
    overflow auto
    background-color rgb(245,245,245)

    /************************************👇搜索框样式**************************************/
    .search-wrapper
      position fixed
      top 0
      left 0
      width 100%
      height 57px
      font-size 15px
      line-height 57px
      display flex
      background-color #fff
      & > span
        flex 0 0 20px
        margin-left 16px
        font-size 20px
        color rgb(157,157,157)
      & > input
        flex 1
        width 100%
        height 40px
        background-color rgb(245,245,245)
        border-radius(5px)
        color rgb(157,157,157)
        padding-left 20px
        margin 8px 0 0 15px
      .btn-sousuo
        flex 0 0 30px
        width 30px
        height 40px
        line-height 40px
        margin 8px 15px 0 0
        background-color #fff
        color rgb(242,88,42)

    /************************************👇搜索历史样式**************************************/
    .search-history
      padding-top 57px
      .search-history-wrapper
        .sou
          display inline-block
          font-size 13px
          color rgb(153,153,153)
          padding  16px 0 12px 16px
      .search-item
        float left
        font-size 15px
        margin-left 16px
        color rgb(152,152,152)
        & > ul > li
          float left
          height 30px
          line-height 30px
          text-align center
          margin 0 10px 10px 0
          background-color #fff
          padding 0 10px
          border-radius(5px)
</style>
