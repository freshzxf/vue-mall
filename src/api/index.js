// 导入vue
import Vue from 'vue'

// 导入基于axios（基于Promise的ajax）
import { AjaxPlugin } from 'vux'

// 导入es6断言兼容组件(上述AjaxPlugin是基于axio，而axio在低版本浏览器需要es6-promise的补丁支持)
require('es6-promise').polyfill()

// 全局使用ajax组件
Vue.use(AjaxPlugin)

import {
  LoginResource,
  RegResource
} from './resource';

export default {
  /**
   * @method post
   * @param 账号、密码
   * @returns status:success
   */
  getLoginResource (account, password) {
    console.log('getLoginResource')
    this.$http.post(LoginResource).then(({data}) => {
      console.log(data)
    })
  },

  /**
   * @method post
   * @param 账号、密码、手机号
   * @returns status:success
   */
  getRegResource (account, password, cellphone) {
    return axios.get(RegResource, {
      params: {
        account: account,
        password: password,
        cellphone: cellphone
      }
    });
  }
};
