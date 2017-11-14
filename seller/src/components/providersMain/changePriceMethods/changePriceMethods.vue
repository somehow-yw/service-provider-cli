<template>
  <!--------------------------改价方式组件开始----------------------------------->
  <div class="changePriceMethods" v-if="$store.state.changePrice">
    <div class="title">
      <h1>改价方式</h1>
    </div>
    <!--------------------------👆标题----------------------------------->

    <div class="wrapper">
      <div class="change-item">
        <ul>
          <li ><div @click="select(0)" :class="{'active':activeIndex===0}">{{desc.yuan}}<em class="to-bottom"></em><span class="tbottom"></span></div></li>
          <li ><div @click="select(1)" :class="{'active':activeIndex===1}">{{desc.precent}}<em class="to-bottom"></em><span class="tbottom"></span></div></li>
          <li ><div @click="select(2)" :class="{'active':activeIndex===2}">{{desc.qujian}}<em class="to-bottom"></em><span class="tbottom"></span></div></li>
        </ul>
      </div>
      <!--------------------------👆选择按钮----------------------------------->

      <div class="change-price" v-if="activeIndex ===0">
        <div class="text">价格修改为</div>
        <div class="change-btn">
          <ul>
            <li><span @click="add" class="iconfont icon-jia"></span></li>
            <li><div><input ref="money1" type="text" value="0" v-number-only>元</div></li>
            <li><span @click="dec" class="iconfont icon-jian2"></span></li>
          </ul>
        </div>
      </div>
      <!--------------------------👆按元加价----------------------------------->
      <div class="change-price" v-if="activeIndex ===1">
        <div class="text">价格修改为</div>
        <div class="change-btn">
          <ul>
            <li><span @click="add" class="iconfont icon-jia"></span></li>
            <li><div><input ref="money1" type="text" value="0" v-number-only>%</div></li>
            <li><span @click="dec" class="iconfont icon-jian2"></span></li>
          </ul>
        </div>
      </div>
      <!---------------------------👆百分比加价-------------------------------->

      <div class="change-price" v-if="activeIndex ===2">
        <ul>
          <li>
            <div class="fill">
              <input ref="info1" type="text" v-number-only>元&nbsp;&nbsp;~&nbsp;&nbsp;<input ref="info2" type="text" v-number-only>元
            </div>
            <div class="del">
              <span @click="del" class="iconfont icon-shanchu"></span>
            </div>
          </li>
          <li>
            <div class="add-item">
              <span>{{descSmall.inc}}</span>
              <span @click="selectMethods(0)" :class="{'on':onIndex===0}">{{descSmall.rmb}}</span>
              <span @click="selectMethods(1)" :class="{'on':onIndex===1}">{{descSmall.bfb}}</span>
            </div>
            <input ref="info3" type="text" v-number-only>
            <span class="sign" v-if="onIndex ===0">元</span>
            <span class="sign" v-if="onIndex ===1">%</span>
          </li>
          <li>
            <div class="add-qujian">
              <span class="iconfont icon-jiahao" @click="addMethods"></span>
              <span @click="addMethods">增加区间</span>
            </div>
          </li>
        </ul>
      </div>
      <!---------------------------👆区间加价----------------------------->
    </div>
    <div class="confirm-button">
      <div class="cancel-btn">
        <input @click="$store.state.changePrice=!$store.state.changePrice" type="button" value="取消">
      </div>
      <div class="sure-btn">
        <input type="button" value="确认">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      desc: {
        type: Object,
        default () {
          return {
            yuan: '按元加价',
            precent: '百分比加价',
            qujian: '区间加价'
          }
        }
      },
      descSmall: {
        type: Object,
        default () {
          return {
            inc: '加价',
            rmb: '元',
            bfb: '百分比'
          }
        }
      }
    },
    data () {
      return {
        changePrice: true,
        activeIndex: 0,
        onIndex: 0
      }
    },
    methods: {
      select (type) {
        this.selectType = type
        this.activeIndex = type
      },
      hideChangePrice () {
        this.changePrice = false
      },
      del () {
        this.$refs.info1.value = ''
        this.$refs.info2.value = ''
        this.$refs.info3.value = ''
      },
      add () {
        this.$refs.money1.value ++
      },
      dec () {
        this.$refs.money1.value --
      },
      selectMethods (type) {
        this.selectType = type
        this.onIndex = type
      },
      addMethods () {
        this.$refs.info1.value ++
        this.$refs.info2.value ++
        this.$refs.info3.value ++
      }
    },
    directives: {
      numberOnly: {
        bind: function (el) {
          el.handler = function () {
            el.value = el.value.replace(/[^\d.]/g, '')
            el.value = el.value.replace(/\.{2,}/g, '.')
            el.value = el.value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
            el.value = el.value.replace(/^(\d+)\.(\d\d).*$/, '$1')
            if (el.value.indexOf('.') < 0 && el.value !== '') {
              el.value = parseFloat(el.value)
            }
          }
          el.addEventListener('input', el.handler)
        },
        unbind: function (el) {
          el.removeEventListener('input', el.handler)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/styl/function.styl"

  .changePriceMethods
    position fixed
    left 0
    bottom 0
    width 100%
    height 290px
    z-index 20
    background-color #fff

    /*********************************👇改价方式标题样式*******************************/
    .title
      height 56px
      line-height 56px
      text-align center
      font-size 16px
      border-1px(rgba(7,17,27,0.3))

    /*********************************👇改价方式内容样式*******************************/
    .wrapper
      width 100%

      /*********************************👇改价方式选择样式*******************************/
      .change-item
        height 35px
        margin 16px 15px 20px 15px
        & > ul > li
          float left
          width 33.333%
          height 35px
          text-align center
        & > ul > li > div
          position relative
          width 90%
          height 32px
          line-height 32px
          font-size 15px
          color rgba(7,17,27,0.5)
          margin 0  auto
          border 1px solid rgba(7,17,27,0.5)
          &.active
            color rgb(244,99,55)
            border 1px solid rgb(244,99,55)
            .to-bottom
              position absolute
              display block
              left 46%
              bottom -12px
              font-size 0
              line-height 0
              border-style solid dashed dashed dashed
              border-color rgb(244,99,55) transparent transparent
              border-width 6px
            .tbottom
              position absolute
              display block
              left 46%
              bottom 0
              font-size 0
              line-height 0
              border-style solid dashed dashed dashed
              border-color #fff transparent transparent
              border-width 6px
              top 30px

      /*********************************👇改价方式价格修改样式*******************************/
      .change-price
        .text
          margin-left 20px
          font-size 15px
          color rgb(101,101,101)
        .change-btn
          height 40px
          margin 24px 20px 0 20px
          & > ul > li
            position relative
            float left
            height 40px
            line-height 40px
            width 33.3333%
            & > div
              height 38px
              width 100%
              border 1px solid rgba(7,17,27,0.5)
              & > input
                height 38px
                width 80%
                text-align center

          & > ul > li:first-child
            text-align right
            & > span
              font-size 30px
              padding-right 28px
              color rgb(244,99,55)
          & > ul > li:last-child
            text-align left
            & > span
              font-size 30px
              padding-left 28px
              color rgb(244,99,55)
        & > ul > li
          display flex
          height 36px
          line-height 36px
          border-1px(rgba(7,17,27,0.1))
          .fill
            flex 1
            height 100%
            font-size 13px
            margin-left 20px
            & > input
              width 65px
              text-align center
              margin-right 10px
              border-bottom 1px solid rgba(7,17,27,0.5)
              border-radius(0)
          .del
            flex 0 0 32px
            width 32px
            height 36px
            margin-right 15px
            & > span
              color rgba(7,17,27,0.5)
              font-size 24px
          .add-item
            margin 6px 20px
            height 20px
            font-size 0
            line-height 20px
            margin-left 20px
            & > span
              display inline-block
              width 60px
              text-align center
              height 20px
              color rgb(103,103,103)
              margin-right 8px
              font-size 13px
              border 1px solid rgba(7,17,27,0.1)
              &.on
                color rgb(244,99,55)
                border 1px solid rgb(244,99,55)
          .sign
            font-size 14px
          & > input
            width 45px
            height 20px
            margin 6px 6px 0 -10px
            text-align center
            border-bottom  1px solid rgba(7,17,27,0.5)
            border-radius(0)
          .add-qujian
            margin 0 auto
            & > span
              color rgb(244,99,55)
        & > ul > li:last-child
          border-none()

    /*********************************👇取消确认样式*******************************/
    .confirm-button
      position fixed
      left 0
      bottom 0
      width 100%
      height 52px
      border-top  1px solid rgba(7,17,27,0.3)
      .cancel-btn,.sure-btn
        width 50%
        height 52px
        float left
        & > input
          width 100%
          height 52px
          font-size 15px
          line-height 52px
          text-align center
      .cancel-btn
        & > input
          color rgb(244,99,55)
      .sure-btn
        background-color rgb(244,99,55)
        & > input
          color #fff

</style>
