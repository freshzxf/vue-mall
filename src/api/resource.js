// 定义根路径
const API_ROOT = 'https://www.easy-mock.com/mock/5b16ab6abf13da15329bea0e/vuxMall'

// 定义各api子路径
const apis = {
  login: '/login',  // 登陆
  reg: '/reg', // 注册
  shop: '/shop', // shop
  banner: '/banner' // banner
};

// 导出各api地址
export const LoginResource = API_ROOT + (apis.login); // 登录
export const RegResource = API_ROOT + (apis.reg); // 注册
export const ShopResource = API_ROOT + (apis.shop); // 商城logo等
export const BannerResource = API_ROOT + (apis.banner); // 商城banner
