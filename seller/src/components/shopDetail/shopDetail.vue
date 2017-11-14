<template>
  <div id="shopDetail">
    <v-header :urls="url"></v-header>
    <!--------------------------👆头部信息----------------------------------->
    <div class="tab" :class="{'active': '/grounding' == url}" >
      <div class="tab-item border-1px">
        <router-link to="/goods">店铺商品</router-link>
      </div>
      <div class="tab-item border-1px">
        <router-link to="/details">店铺详情</router-link>
      </div>
    </div>
    <router-view :urls="url"></router-view>
    <!--------------------------👆店铺商品、详情选项卡----------------------------------->

  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../../components/shopDetail/header/header.vue'
  export default {
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.url = from.path
        console.log(from.path)
        console.log(vm.url)
      })
    },
    name: 'app',
    components: {
      'v-header': header
    },
    data () {
      return {
        url: ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/function.styl"
  /***************************店铺详细样式开始************************************/
  #shopDetail
    /***************************切换选项卡样式************************************/
    .tab
      position fixed
      left 0
      top 134px
      z-index 10
      display flex
      width 100%
      height 38px
      line-height 38px
      background-color #fff
      &.active
        position fixed
        left 0
        top 164px
        z-index 10
        display flex
        width 100%
        height 38px
        line-height 38px
        background-color #fff
      .tab-item
        flex 1
        text-align center
        & > a
          display block
          font-size  16px
          font-weight 500
          color #000
          text-decoration none
          &.active
            color rgb(241,89,42)
            border-1px(rgb(241,89,42))
</style>
