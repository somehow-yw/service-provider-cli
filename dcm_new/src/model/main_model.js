/**
 *  主框架数据模型
 */
import {get} from  '../tools/http';
let Promise = require('es6-promise').Promise

/**
 * 获取首页数据
 * @param data
 * @returns {Promise}
 */
export function get_home_data(data = {}) {
  return new Promise((resolve,reject) => {
    return get('get_home_data',data).then(r => {
      resolve(r);
    }).catch(e => {
      resolve(e);
    });
  });
}
