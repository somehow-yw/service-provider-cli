import {getApi, toast,showLoading,closeLoading} from './common'
import Vue from 'vue'
import VueResource from 'vue-resource'
let Promise = require('es6-promise').Promise

Vue.use(VueResource)
Vue.http.options.emulateJSON = true
/**
 * post请求
 * @param apiPath
 * @param data
 * @returns {Promise}
 */
export function post (apiPath, data = {}) {
  let apiUri = getApi(apiPath)
  if (!apiUri) {
    toast(`Api [${apiPath}] is not find!`)
    throw new Error('Api is not find!')
  }
  let loadingId;
  let autoLoading = setTimeout(() => {
    loadingId = showLoading();
  },1000);

  return new Promise((resolve, reject) => {
    return Vue.http.post(apiUri, data, {
      headers: {'Accept': 'application/json'}
    }).then(r => {

      closeLoading(loadingId);
      clearTimeout(autoLoading);

      if (r.ok === true) {
        if (r.body.code === 300 || r.body.code === 400 || r.body.code === 100 || r.body.code === 500) {
          toast(r.body.message)
        }
        resolve(r.body)
      } else {
        toast('请求错误: ' + JSON.stringify(r))
        reject(r)
      }
    }, e => {
      closeLoading(loadingId);
      clearTimeout(autoLoading);
      toast(JSON.stringify(e))
      console.log(e)
      reject(e)
    })
  })
}
/**
 * get请求
 * @param apiPath
 * @param data
 */
export function get(apiPath, data = {}) {
  let apiUri = getApi(apiPath)
  if (!apiUri) {
    toast(`Api [${apiPath}] is not find!`)
    throw new Error('Api is not find!')
  }


  let loadingId;
  let autoLoading = setTimeout(() => {
    loadingId = showLoading();
  },1000);

  return new Promise((resolve, reject) => {
    return Vue.http.get(apiUri, data, {
      headers: {'Accept': 'application/json'}
    }).then(r => {


      closeLoading(loadingId);
      clearTimeout(autoLoading);

      if (r.ok === true) {
        if (parseInt(r.body.code) !== 0) {
          toast(r.body.message)
        }
        resolve(r.body)
      } else {
        toast('请求错误: ' + stringify(r))
        reject(r)
      }
    }, e => {

      closeLoading(loadingId);
      clearTimeout(autoLoading);

      toast('请求失败,请检查您的网络!')
      console.log(e)
      reject(e)
    })
  })
}
