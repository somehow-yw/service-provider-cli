<!--此为二级按钮，长70px,高40px-->
<template>
  <div
    class="dcm_second_btn"
    @click="handleClick"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <!-- <i class="iconfont icon-tianjia"></i> -->
    <!--<i class="el-icon-loading" v-if="loading" @click="handleInnerClick"></i>
    <i :class="icon" v-if="icon && !loading" @click="handleInnerClick"></i>-->
    <span v-if="$slots.default" @click="handleInnerClick"><slot></slot></span>
  </div>
</template>
<script>
  import './css/iconfont.css'
  export default {
    name: 'DCMButton',
    inject: {
      elFormItem: {
        default: ''
      }
    },

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean
    },

    computed: {
      _elFormItemSize () {
        return (this.elFormItem || {}).elFormItemSize
      },
      buttonSize () {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
      }
    },

    methods: {
      handleClick (evt) {
        this.$emit('click', evt)
      },
      handleInnerClick (evt) {
        if (this.disabled) {
          evt.stopPropagation()
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .dcm_second_btn{
    display: inline-block;
    width: 70px;
    height: 40px;
    background-color: #45c8dc;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
    &:hover{
      cursor:pointer;
      background-color: rgba(69, 200, 220, 0.8);
    }
  }
</style>

