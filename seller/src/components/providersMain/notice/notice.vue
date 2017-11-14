<template>
  <!--------------------------------提示弹窗开始-------------------------------------->
  <div class="notice" v-if="$store.state.notice">
    <!--------------------------------提示标题开始-------------------------------------->
    <div class="title">
      <h1>提&nbsp;&nbsp;示</h1>
      <span @click="$store.state.notice=!$store.state.notice" class="iconfont icon-guanbi"></span>
    </div>

    <!--------------------------------提示内容开始-------------------------------------->
    <div class="notice-text">
      <p>亲！为了避免给您造成损失，请及时改价</p>
    </div>

    <!--------------------------------改价、上架按钮开始-------------------------------------->
    <div class="select-button">
      <div class="gochange">
        <input @click="gotoChange" type="button" value="去改价">
      </div>
      <div class="gogrounding">
        <input type="button" value="直接上架">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        notice: true
      }
    },
    methods: {
      gotoChange () {
        this.$store.state.changePrice = !this.$store.state.changePrice
      },
      hideNotice () {
        this.notice = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /***********************************提示弹窗组件样式******************************************/
  @import '../../../common/styl/function.styl'
  .notice
    position fixed
    left 0
    bottom 0
    height 192px
    width 100%
    z-index 15
    background-color #fff
    /***********************************提示标题样式******************************************/
    .title
      position relative
      height 45px
      line-height 45px
      border-1px(rgba(7,17,27,0.1))
      & > h1
        font-size 16px
        font-weight 500
        text-align center
      & > span
        position absolute
        top 4px
        right 15px
        font-size 15px
    /***********************************提示内容样式******************************************/
    .notice-text
      height 97px
      line-height 97px
      & > p
        font-size 15px
        color rgb(51,51,51)
        text-align center

    /***********************************改价、上架按钮样式******************************************/
    .select-button
      position fixed
      left 0
      bottom 0
      width 100%
      height 50px
      border-top 1px solid rgba(7,17,27,0.1)
      .gochange,.gogrounding
        width 50%
        height 50px
        float: left
        line-height 50px
        text-align center
      .gochange
        & > input
          width 100%
          height 50px
          color rgb(242,88,42)
      .gogrounding
        background-color rgb(242,88,42)
        & > input
          width 100%
          height 50px
          color #fff
</style>
