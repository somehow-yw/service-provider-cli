<template>
  <div class="goods" :class="{active:'/grounding' == urls}">
    <!-------------------------goods组件开始------------------------->
      <ul>
        <li class="goods-item">
          <div class="goods-wrapper">
            <div class="photo">
              <img src="./pic1.jpg" alt>
              <div class="discount">
                <p>最高减100元</p>
              </div>
            </div>
            <div class="text">
              <p>圣农鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅</p>
            </div>
            <div class="sale">
              <p><span class="money">￥270</span>/件</p>
              <span class="sale-num">已售：200</span>
            </div>
          </div>
        </li>
        <!-------------------------goods-item开始------------------------->
        <li class="goods-item">
          <div class="goods-wrapper">
            <div class="photo">
              <img src="./pic2.jpg" alt>
            </div>
            <div class="text">
              <p>圣农鱼丸鱼丸鱼丸鱼丸</p>
            </div>
            <div class="sale">
              <p><span class="money">￥270</span>/件</p>
              <span class="sale-num">已售：200</span>
            </div>
          </div>
        </li>
        <!-------------------------goods-item开始------------------------->
        <li class="goods-item">
          <div class="goods-wrapper">
            <div class="photo">
              <img src="./pic1.jpg" alt>
              <div class="discount">
                <p>最高减100元</p>
              </div>
            </div>
            <div class="text">
              <p>圣农鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅</p>
            </div>
            <div class="sale">
              <p><span class="money">￥270</span>/件</p>
              <span class="sale-num">已售：200</span>
            </div>
          </div>
        </li>
        <!-------------------------goods-item开始------------------------->
        <li class="goods-item">
          <div class="goods-wrapper" >
            <div class="photo">
              <img src="./pic2.jpg" alt>
            </div>
            <div class="text">
              <p>圣农鱼丸鱼丸鱼丸鱼丸</p>
            </div>
            <div class="sale">
              <p><span class="money">￥270</span>/件</p>
              <span class="sale-num">已售：200</span>
            </div>
          </div>
        </li>
        <!-------------------------goods-item开始------------------------->
        <li class="goods-item">
          <div class="goods-wrapper">
            <div class="photo">
              <img src="./pic1.jpg" alt>
              <div class="discount">
                <p>最高减100元</p>
              </div>
            </div>
            <div class="text">
              <p>圣农鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅鸡中翅</p>
            </div>
            <div class="sale">
              <p><span class="money">￥270</span>/件</p>
              <span class="sale-num">已售：200</span>
            </div>
          </div>
        </li>
        <!-------------------------goods-item开始------------------------->
        <li class="goods-item">
          <div class="goods-wrapper">
            <div class="photo">
              <img src="./pic2.jpg" alt>
            </div>
            <div class="text">
              <p>圣农鱼丸鱼丸鱼丸鱼丸</p>
            </div>
            <div class="sale">
              <p><span class="money">￥270</span>/件</p>
              <span class="sale-num">已售：<span>200</span></span>
            </div>
          </div>
        </li>
      </ul>
    <div>
      <noticebox v-if="$store.state.notice"></noticebox>
      <div class="notice-mask" v-if="$store.state.notice"></div>
    </div>
    <div>
      <changePriceMethods v-if="$store.state.changePrice"></changePriceMethods>
      <div class="changePrice-mask" v-if="$store.state.changePrice"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import noticebox from '../../../components/providersMain/notice/notice.vue'
  import changePriceMethods from '../../../components/providersMain/changePriceMethods/changePriceMethods.vue'
  export default {
    props: {
      urls: String
    },
    components: {
      noticebox,
      changePriceMethods
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /******************************店铺商品样式*************************************/
  .goods
    z-index 7
    padding-top 172px
    &.active
      padding-top 202px
    /******************************商品列表样式*************************************/
    .goods-item
      width 50%
      float left
      background-color #f5f5f5
      .goods-wrapper
        position relative
        margin 15px 8px 0 8px
        background-color #fff
        .photo
          width 100%
          & > img
            width 100%
            height 150px
          .discount
            position absolute
            top 0
            left 0
            background-color #f00
            & > p
              font-size 11px
              padding 3px 7px
              letter-spacing .5px
              color #fff
        .text
          p
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            font-size 13px
            color rgb(56,56,56)
            padding 9px 6px 15px 10px
        .sale
          position relative
          color rgb(152,152,152)
          & > p
            padding 0 0 10px 10px
            font-size 12px
          .money
            font-weight 700
            color #f00
          .sale-num
            position absolute
            right 10px
            bottom 10px
            font-size 12px

    /******************************遮盖层样式*************************************/
    .notice-mask,.changePrice-mask
      position fixed
      top 0
      left 0
      width 100%
      height 100%
      z-index 10
      background rgba(7,17,27,0.6)

</style>
