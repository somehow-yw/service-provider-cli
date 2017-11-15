<template>
  <div class="dcm_search_wrap">
      <input
        class="dcm-input__inner"
        v-bind="$props"
        :autocomplete="autoComplete"
        :value="currentValue"
        ref="input"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        :aria-label="label"
      >
        <div
            class="dcm_second_btn"
            @click="handleClick"
            :autofocus="autofocus"
            :type="nativeType"
        >
            <span v-if="$slots.default" @click="handleInnerClick"><slot></slot></span>
        </div>
  </div>
</template>
<script>
  export default {
    name: 'DCMInput',
    componentName: 'DCMInput',
    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    data () {
      return {
        currentValue: this.value
      }
    },
    props: {
      value: [String, Number],
      placeholder: String,
      form: String,
      id: String,
      autofocus: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      max: {},
      min: {},
      step: {},
      validateEvent: {
        type: Boolean,
        default: true
      },
      label: String,
      nativeType: {
        type: String,
        default: 'button'
      }
    },

    computed: {
    },
    watch: {
      'value' (val, oldValue) {
        this.setCurrentValue(val)
      }
    },
    methods: {
      handleBlur (event) { // 失去焦点
        this.$emit('blur', event)
      },
      inputSelect () {
        this.$refs.input.select()
      },
      handleFocus (event) {
        this.$emit('focus', event)
      },
      handleInput (event) {
        const value = event.target.value
        this.$emit('input', value)
        this.setCurrentValue(value)
      },
      handleChange (event) { // change
        this.$emit('change', event.target.value)
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.$nextTick(_ => {
        //   this.resizeTextarea()
        })
        this.currentValue = value
        if (this.validateEvent) {
        //   this.dispatch('ElFormItem', 'el.form.change', [value])
        }
      },
      handleClick (evt) { // 按钮的
        this.$emit('click', evt)
      },
      handleInnerClick (evt) { // 阻止冒泡
        if (this.disabled) {
          evt.stopPropagation()
          evt.cancelBubble = true
        }
      }
    },

    created () {
      this.$on('inputSelect', this.inputSelect)
    }
  }
</script>
<style lang="less" scoped>
.dcm_search_wrap{
    border: 1px solid #f5f5f5;
    height: 42px;
    width: 250px;
    background-color: #fff;
    border-radius: 5px;
    .dcm-input__inner{
        float: left;
        color: #333;
        border: none;
        font-size: 14px;
        width: 190px;
        border-radius: 5px;
        height: 40px;
        &:focus{
            outline: none;
        }
    }
    .dcm_second_btn{
    display: inline-block;
    width: 60px;
    height: 42px;
    background-color: #45c8dc;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 42px;
    border-radius: 5px;
    &:hover{
      cursor:pointer;
      background-color: rgba(69, 200, 220, 0.8);
    }
  }
}
</style>
