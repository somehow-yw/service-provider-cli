import {getApi, toast} from './common'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
export function post (apiPath, data = {}) {
  let apiUri = getApi(apiPath)
  if (!apiUri) {
    throw new Error('Api is not find!')
  }
  let _data = JSON.stringify(data)
  // let autoLoading = setTimeout(() => {
  //   showLoading()
  // }, 500)

  return new Promise((resolve, reject) => {
    // return Vue.http.post(apiUri, {data: _data}, {
    //   headers: {'plus': headers}
    // }).then(r => {
    return Vue.http.post(apiUri, {data: _data}).then(r => {
      // clearTimeout(autoLoading)
      // closeLoading()
      if (r.ok === true) {
        if (r.body.code === 300 || r.body.code === 400 || r.body.code === 100 || r.body.code === 500) {
          // if ( r.body.code === 300 || r.body.code === 400 || r.body.code === 100 ) {
          toast(r.body.msg)
        }
        resolve(r.body)
      } else {
        toast('请求错误: ' + r.toString())
        reject(r)
      }
    }, e => {
      // clearTimeout(auto_loading)
      toast(e.toString())
      console.log(e)
      reject(e)
    })
  })
}
