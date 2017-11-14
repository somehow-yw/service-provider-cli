<template>
  <div id="app">
    <router-view/>
    <!--<v-search></v-search>-->
    <!--<v-nav></v-nav>-->
    <!--<div class="tabbar">-->
      <!--<div class="tabbar-item border-1px">-->
        <!--<router-link to="/grounding">上架供应商</router-link>-->
      <!--</div>-->
      <!--<div class="tabbar-item border-1px">-->
        <!--<router-link to="/undercarriage">下架供应商</router-link>-->
      <!--</div>-->
    <!--</div>-->
    <!--<router-view/>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import search from './components/providersMain/search/search.vue'
  import nav from './components/providersMain/nav/nav.vue'

  export default {
    name: 'app',
    components: {
      'v-search': search,
      'v-nav': nav
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/styl/function.styl"
  #app
    .tabbar
      position fixed
      top 0
      left 0
      z-index 3
      margin-top 89px
      display flex
      width 100%
      height 38px
      line-height 38px
      background-color #fff
      .tabbar-item
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
