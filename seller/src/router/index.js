import Vue from 'vue'
import Router from 'vue-router'
import grounding from '../components/providersMain/grounding/grounding'
import undercarriage from '../components/providersMain/undercarriage/undercarriage'
import goods from '../components/shopDetail/goods/goods'
import details from '../components/shopDetail/details/details'
  //  子路由
import providersMain from '../components/providersMain/providersMain'
import shopDetail from '../components/shopDetail/shopDetail'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {path: '', component: providersMain, children: [{path: 'grounding', component: grounding}, {path: '', component: grounding}, {path: 'undercarriage', component: undercarriage}]},
    {path: '', component: shopDetail, children: [{path: 'goods', name: goods, component: goods}, {path: '', name: goods, component: goods}, {path: 'details', component: details}]}
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
