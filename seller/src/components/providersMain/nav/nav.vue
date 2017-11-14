<template>
  <div class="nav">
    <!--------------------------------------👇navbar组件--------------------------------------------->
    <ul>
      <li class="zonghe"><span>综合</span></li>
      <li class="sale"><span>销量</span><span class="icon"><span class="iconfont icon-sanjiaoshang"></span><span class="iconfont icon-ssanjiao"></span></span></li>
      <li class="good-rate"><span>好评率</span><span class="icon"><span class="iconfont icon-sanjiaoshang"></span><span class="iconfont icon-ssanjiao"></span></span></li>
      <li class="shop-level"><span>店铺等级</span><span class="icon"><span class="iconfont icon-sanjiaoshang"></span><span class="iconfont icon-ssanjiao"></span></span></li>
      <li @click="popSelect" class="filter" ><span class="iconfont icon-shuxian2"></span><span class="text">筛选</span></li>
    </ul>

    <!--------------------------------------👇筛选弹出层--------------------------------------------->
    <div>
      <div v-show="selectShow" class="select" transition="fold">
        <div class="select-wrapper">
          <div class="qianyue">
            <h1>签约供应商</h1>
          </div>
          <div class="select-item">
            <ul>
              <li :class="{'active': ind1===index}" v-for="(list,index) in list" @click="changeBg1(index)">{{list}}</li>
            </ul>
          </div>
        </div>
        <!--------------------------------------👆签约供应商--------------------------------------------->

        <div class="select-wrapper">
          <div class="qianyue">
            <h1>发货市场</h1>
          </div>
          <div class="select-item">
            <ul>
              <li :class="{'active': ind2===index}" v-for="(list,index) in lists" @click="changeBg2(index)">{{list}}</li>
            </ul>
          </div>
        </div>
        <!--------------------------------------👆发货市场--------------------------------------------->

        <div class="confirm">
          <div class="cancel">
            <input @click="hideSelect" type="button" value="取消">
          </div>
          <div class="finish">
            <input type="button" value="完成">
          </div>
        </div>
        <!--------------------------------------👆取消确认按钮--------------------------------------------->

      </div>
      <!--------------------------------------👆筛选弹出层--------------------------------------------->

      <div class="select-mask" @click="hideSelect" v-show="selectShow"></div>
      <!--------------------------------------👆筛选遮盖层--------------------------------------------->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        selectShow: false,
        list: ['不限', '是', '否'],
        ind1: 0,
        lists: ['不限', '是', '否'],
        ind2: 0

      }
    },
    methods: {
      popSelect () {
        this.selectShow = true
      },
      hideSelect () {
        this.selectShow = false
      },
      changeBg1 (index) {
        this.ind1 = index
      },
      changeBg2 (index) {
        this.ind2 = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /************************************👇navbar样式**************************************/
  .nav
    position fixed
    left 0
    top 0
    margin-top 57px
    z-index 5
    background-color rgb(242,88,42)
    height 32px
    color #fff
    width 100%
    & > ul > li
      float left
      height 32px
      line-height 32px
      font-size 15px
      text-align center
      & > span
        display inline-block
        height 32px
        line-height 32px
    /************************************👇综合样式**************************************/
    .zonghe
      width 17%
    /************************************👇销量样式**************************************/
    .sale
      width 20%
      .icon
        overflow hidden
        vertical-align middle
        cursor pointer
        .icon-sanjiaoshang
          width 15px
          height 15px
          display block
          line-height 22px
          font-size 13px
          padding-left 4px
        .icon-ssanjiao
          width 15px
          height 12px
          overflow hidden
          display block
          line-height 12px
          padding-left 4px
          font-size 13px
    /************************************👇好评率样式**************************************/
    .good-rate
      width 20%
      .icon
        overflow hidden
        vertical-align middle
        cursor pointer
        .icon-sanjiaoshang
          width 15px
          height 15px
          display block
          line-height 22px
          font-size 13px
          padding-left 4px
        .icon-ssanjiao
          width 15px
          height 12px
          display block
          line-height 12px
          padding-left 4px
          font-size 13px
    /************************************👇店铺等级样式**************************************/
    .shop-level
      width 25%
      .icon
        overflow hidden
        vertical-align middle
        cursor pointer
        .icon-sanjiaoshang
          width 15px
          height 15px
          display block
          line-height 22px
          padding-left 4px
          font-size 13px
        .icon-ssanjiao
          width 15px
          height 12px
          display block
          line-height 12px
          padding-left 4px
          font-size 13px
    /************************************👇筛选样式**************************************/
    .filter
      width 17%
      .text
        padding-left 5px

    /************************************👇筛选右侧弹出层样式**************************************/
    .select
      position fixed
      z-index 20
      top 0
      left 75px
      width 100%
      height 100%
      overflow auto
      background-color #fff
      color #000

      /************************************👇筛选选择样式**************************************/
      .select-wrapper
        width 100%
        font-size 15px
        .qianyue
          width 80px
          margin 24px 0 15px 16px
          color rgb(51,51,51)
        .select-item
          height 35px
          margin-left 16px
          & > ul > li
            float left
            width 22%
            height 35px
            line-height 35px
            border 1px solid rgb(204,204,204)
            text-align center
            margin-right 10px
            color rgb(102,102,102)
            &.active
              border 1px solid rgb(244,99,55)
              color rgb(244,99,55)

    /************************************👇筛选确认按钮样式**************************************/
    .confirm
      position fixed
      left 75px
      bottom 0
      height 50px
      width 100%
      .cancel,.finish
        float left
        height 50px
        text-align center
        & > input
          color rgb(243,88,42)
          width 100%
          height 50px
      .cancel
        width 40%
        border-top 1px solid rgb(204,204,204)
      .finish
        width 45%
        padding-right 15%
        background-color rgb(243,88,42)
        & > input
          width 100%
          color #fff

  /************************************👇筛选遮盖层样式**************************************/
  .select-mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 16
    backdrop-filter blur(10px)
    background-color rgba(7,17,27,0.6)

</style>
