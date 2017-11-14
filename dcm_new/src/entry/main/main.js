// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../../views/main/main.vue'
import { getConfig } from '../../tools/common'
import Tool from '../../tools/index'
import Model from '../../tools/model'
Vue.config.productionTip = getConfig('productionTip')
Vue.use(Model)
Vue.use(Tool)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
