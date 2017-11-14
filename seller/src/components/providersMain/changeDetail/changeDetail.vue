<template>
  <div class="changeDetail" v-if="this.$store.state.modal">
    <!--------------------------------------👇改价明细弹窗--------------------------------------------->

    <div class="changeDetail-box">
      <div class="detail-wrapper">
        <div class="title border-1px">
          <h1>改价明细</h1>
        </div>
        <div class="content1">
          <div class="section">
            <span>区间外</span><span class="extra">加10元</span>
            <p>区间内<span class="qujian">10-100</span><span class="extra">加10元</span></p>
          </div>
          <div class="desc">
            <p>该供应商有<span class="desc-num">138件</span>商品，其中有10件自定义改价</p>
          </div>
        </div>
      </div>
      <!--------------------------------------👆改价明细内容--------------------------------------------->

      <div class="close">
        <span @click="$store.state.modal=!$store.state.modal" class="iconfont icon-yuancha"></span>
      </div>
      <!--------------------------------------👆关闭按钮--------------------------------------------->

    </div>

    <div class="change-mask" @click="$store.state.modal=!$store.state.modal"></div>
    <!--------------------------------------👆改价明细弹出层--------------------------------------------->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        modal: true
      }
    },
    methods: {
      hideChangeDetail () {
        this.modal = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/styl/function.styl"
  /************************************👇改价明细弹窗样式**************************************/
  .changeDetail
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 20;
    /************************************👇改价明细弹窗盒子样式**************************************/
    .changeDetail-box
      position absolute
      left 50%
      top 50%
      width 280px
      z-index 12
      transform translate(-50%,-50%)
    .detail-wrapper
      width 100%
      background-color #fff
      border-radius (6px)
      /************************************👇改价明细标题样式**************************************/
      .title
        height 44px
        border-1px(rgba(7,17,27,0.3))
        & > h1
          font-size 16px
          font-weight 700
          text-align center
          padding-top 15px
          color rgb(241,88,44)

      /************************************👇改价明细内容样式**************************************/
      .content1
        width 100%
        .section
          color rgb(51,51,51)
          margin 15px 0  0 26px
          & > span
            padding 0 15px 6px 0
          & > p
            margin-top 6px
            .qujian
              padding 0 15px
        .desc
          font-size 14px
          line-height 18px
          color rgb(102,102,102)
          padding  9px 23px  15px 26px
          .desc-num
            color rgb(241,88,44)

    /************************************👇改价明细关闭按钮样式**************************************/
    .close
      width 32px
      height 32px
      margin 26px auto
      & > span
        font-size 32px
        color #fff

    /************************************👇改价明细遮盖层样式**************************************/
    .change-mask
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      width 100%
      height 100%
      z-index 10
      -webkit-backdrop-filter blur(10px)
      backdrop-filter blur(10px)
      background-color rgba(7,17,27,0.6)

</style>
