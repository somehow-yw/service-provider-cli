import { getConfig } from '../tools/common'
let baseApi = getConfig('baseApi')
export default {
  get_home_data : `${baseApi}/api/customer/home`
}
