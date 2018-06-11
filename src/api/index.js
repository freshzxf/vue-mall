import Vue from 'vue'

import {
  LoginResource,
  RegResource,
  ShopResource,
  BannerResource
} from './resource';

var that = this

export default {
  /**
   * @method post
   * @param 账号、密码
   * @returns status:success
   */
  getLoginResource (account, password) {
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

  },

  /**
   * @title: 获取shop数据
   * @method post
   * @param ''
   * @returns status:success
   */
  getShopResource () {
   return Vue.prototype.$http.post(ShopResource);
  },

  /**
   * @title: 获取banner栏数据
   * @method post
   * @param ''
   * @returns status:success
   */
  getBannerResource () {
   return Vue.prototype.$http.post(BannerResource);
  }
};
