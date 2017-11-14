<template>
  <div class="search"  v-if="$store.state.show">
    <!--------------------------------------👇搜索顶部组件--------------------------------------------->
    <span class="iconfont icon-sousuo"></span>
    <input @click="popSearch" type="search" placeholder="点此输入要找的供应商">
    <button class="btn">搜索</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        show: false
      }
    },
    methods: {
      popSearch () {
        this.$store.state.show = !this.$store.state.show
        this.$store.state.popsearch = !this.$store.state.popsearch
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/styl/function.styl'
  @import '../../../common/styl/variable.styl'
  /************************************👇搜索顶部样式**************************************/
  .search
    position fixed
    left 0
    top 0
    width 100%
    z-index 4
    background-color #fff
    height 57px
    display flex
    & > span
      position absolute
      left 23px
      top 20px
      color rgb(157,157,157)
    & > input
      flex 1
      height 40px
      background-color rgb(245,245,245)
      border-radius(5px)
      color rgb(157,157,157)
      padding-left 27px
      margin 8px 11px 0 15px
    & > button
      height 40px
      line-height 40px
      margin 8px 15px 0 0
      font-size 15px
      background-color #fff
      border none
      color rgb(242,88,42)

</style>
