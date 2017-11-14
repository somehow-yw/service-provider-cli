/**
 * 应用页面入口文件
 */
let path = require('path')

module.exports = {
  // 首页框架文件
  main_main: path.resolve(__dirname, '../entry/main/main.js'),
  // 首页
  main_index: path.resolve(__dirname, '../entry/main/index.js')
}
