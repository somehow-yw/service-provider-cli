<template>
  <!-------------------------details组件开始------------------------->
  <div class="details" :class="{active:'/grounding' == urls}">
    <!-------------------------列表开始------------------------->
    <div class="time-wrapper">
      <ul>
        <li class="list">
          <div class="icon">
            <span class="iconfont icon-shijian"></span>
          </div>
          <div class="time">
            <span>入驻时长：</span>
          </div>
          <div class="num">
            <span>2年</span>
          </div>
        </li>
        <li class="list">
          <div class="icon">
            <span class="iconfont icon-552cd4ffa56e8"></span>
          </div>
          <div class="goods">
            <span>在售商品：</span>
          </div>
          <div class="goods-num">
            <span>876种</span>
          </div>
          <div class="saled">
            <span>近期已售：</span>
          </div>
          <div class="saled-num">
            <span>23986件</span>
          </div>
        </li>
      </ul>
    </div>

    <!-------------------------地址开始------------------------->
    <div class="address">
      <ul>
        <li class="list border-1px">
          <div class="icon">
            <span class="iconfont icon-dingwei1"></span>
          </div>
          <div class="addr">
            <span>发货地址：</span>
          </div>
          <div class="addr-del">
            <span>成都海霸王冻品交易市场</span>
          </div>
        </li>
        <li class="list border-1px">
          <div class="icon">
            <span class="iconfont icon-gongyingshang"></span>
          </div>
          <div class="addr">
            <span>店铺地址：</span>
          </div>
          <div class="addr-del">
            <span>成都海霸王冻品交易市场1单元2号</span>
          </div>
        </li>
        <li class="list" :class="{on:showmore}">
          <div class="icon">
            <span class="iconfont icon-yewu"></span>
          </div>
          <div class="yewu">
            <span>主营业务：</span>
          </div>
          <div class="yewu-item">
            <span :class="{on:showmores}">鸡副、鸭副、干杂、粮油、欧洲各类品鸡副、鸭副、干杂、粮油、欧洲各类品鸡副、鸭副、干杂、</span>
          </div>
          <div class="more">
            <span @click="showMore" class="iconfont icon-xiangxiajiantou"></span>
          </div>
        </li>
      </ul>
    </div>

    <!-------------------------销售品牌开始------------------------->
    <div class="brand" :class="{active:showall}">
      <div class="title">
        <ul>
          <li class="title-li border-1px">
            <span class="iconfont icon-huangguan"></span>
            <h2>销售品牌</h2>
          </li>
        </ul>
      </div>
      <div class="brand-li" :class="{active:showall}">
        <ul>
          <li class="brand-item">海宁皇</li>
          <li class="brand-item">海霸王</li>
          <li class="brand-item">六合</li>
          <li class="brand-item">鼎鑫</li>
        </ul>
        <ul>
          <li class="brand-item">海宁皇</li>
          <li class="brand-item">海霸王</li>
          <li class="brand-item">六合</li>

        </ul>
      </div>
      <div class="more-icon">
        <span class="iconfont icon-xiangxiajiantou" @click="showAll"></span>
      </div>
    </div>

    <!-------------------------店铺评价开始------------------------->
    <div class="ratings">
      <div class="title">
        <ul>
          <li class="title-li border-1px">
            <span class="iconfont icon-huayuan" style="color: #f00"></span>
            <h2>店铺评价</h2>
          </li>
        </ul>
      </div>
      <div class="advantage">
        <ul>
          <li class="list-item">
            <div class="speed">
              <span>发货速度</span>
            </div>
            <div class="star">
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-star-outline"></span>
              <span>4.8</span>
            </div>
            <div class="rating-item">
              <span>超快</span>
            </div>
          </li>

          <li class="list-item">
            <div class="speed">
              <span>物流速度</span>
            </div>
            <div class="star">
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-star-outline"></span>
              <span>4.8</span>
            </div>
            <div class="rating-item">
              <span>很快</span>
            </div>
          </li>
          <li class="list-item">
            <div class="speed">
              <span>卖家态度</span>
            </div>
            <div class="star">
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-xingxing-copy-copy-copy"></span>
              <span class="iconfont icon-star-outline"></span>
              <span>4.8</span>
            </div>
            <div class="rating-item">
              <span>很好</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <noticebox v-if="$store.state.notice"></noticebox>
      <div class="notice-mask" v-if="$store.state.notice"></div>
    </div>
    <div >
      <changePriceMethods v-if="$store.state.changePrice"></changePriceMethods>
      <div class="changePrice-mask" v-if="$store.state.changePrice"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import noticebox from '../../../components/providersMain/notice/notice.vue'
  import changePriceMethods from '../../../components/providersMain/changePriceMethods/changePriceMethods.vue'
  export default {
    data () {
      return {
        showall: false,
        showmore: false,
        showmores: false
      }
    },
    props: {
      urls: String
    },
    methods: {
      showAll () {
        this.showall = !this.showall
      },
      showMore () {
        this.showmore = !this.showmore
        this.showmores = !this.showmores
      }
    },
    components: {
      noticebox,
      changePriceMethods
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/styl/function.styl"
  /******************************店铺详情样式*************************************/
  .details
    padding-top 172px
    z-index 7
    background-color rgb(245,245,245)
    &.active
      padding-top 202px

    /******************************列表样式*************************************/
    .time-wrapper,.address
      width 100%
      margin-top 5px
      background-color #fff
      .list
        position relative
        display flex
        color #bcbcbc
        font-size 13px
        .icon
          flex 0 0 15px
          width 15px
          height 15px
          line-height 15px
          padding 15px 15px
          font-size 15px
        .time,.addr,.yewu
          flex 0 0 67px
          width 67px
          padding 15px 5px 15px 0
        .num,.addr-del,.yewu-item
          flex 1
          color rgb(56,56,56)
          padding 15px 5px 15px 0
        .goods
          flex 0 0 67px
          width 67px
          padding 15px 5px 15px 0
        .goods-num
          flex 0 0 60px
          width 60px
          color rgb(56,56,56)
          padding 15px 5px 15px 0
        .saled
          flex 0 0 67px
          width 67px
          padding 15px 5px 15px 10px
        .saled-num
          flex 1
          color rgb(56,56,56)
          padding 15px 0 15px 0
        .more
          flex 0 0 15px
          padding 15px 15px 15px 0
          & > span
            font-size 12px

    /******************************发货地址、店铺地址样式*************************************/
    .address
      .list
        margin-left 15px
        height 45px
        overflow hidden
        &.on
          height auto
        border-1px(rgb(228,228,228))
        .icon
          padding-left 0
        .yewu-item
          height 45px
          overflow hidden
          & > span
            &.on
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 3
              height 45px
              line-height 15px
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 1
            overflow hidden
            height 13px
      .list:last-child
        border-none()

    /******************************销售品牌样式*************************************/
    .brand,.ratings
      background-color #fff
      margin-top 5px
      .title
        width 100%
        color rgb(56,56,56)
        .title-li
          height 45px
          line-height 45px
          margin-left 13px
          border-1px(rgb(228,228,228))
          &> span
            padding 0 10px 0 0
            font-size 15px
            color #f9c53a
          h2
            display inline
            font-size 13px
            font-weight 700
      .brand-li
        position relative
        width 100%
        height 40px
        overflow hidden
        &.active
          height auto
        & > ul
          display flex
          color #989898
        .brand-item
          flex 1
          background-color rgb(253,228,220)
          border-radius(3px)
          text-align center
          height 25px
          line-height 25px
          margin 15px 15px 0 0
        .brand-item:first-child
          margin-left 28px
        .brand-item:last-child
          margin-right 28px
      .more-icon
        margin-top 15px
        height 20px
        line-height 20px
        text-align center
        & > span
          font-size 15px
          color #bcbcbc
    .brand
      &.active
        height auto

    /******************************店铺评论样式*************************************/
    .ratings
      background-color #fff
      margin-top 5px
      .advantage
        .list-item
          display flex
          font-size 14px
          width 100%
          .speed,.star,.rating-item
            padding  17px 0 5px 0
          .speed
            flex 0 0 100px
            text-align right
          .star
            flex 0 0 134px
            margin-left 15px
            font-size 0
            & > span
              font-size 14px
              color #fac53b
              margin-right 8px
          .rating-item
            flex 1
            color #bcbcbc
            margin-left 32px
        .list-item:last-child
          padding-bottom  10px

    /******************************遮盖层样式*************************************/
    .notice-mask,.changePrice-mask
      position fixed
      top 0
      left 0
      width 100%
      height 100%
      z-index 10
      background rgba(7,17,27,0.6)
    /*************************样式结束***********************/

</style>
