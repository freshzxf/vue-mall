// 定义根路径
const API_ROOT = 'https://www.easy-mock.com/mock/5b16ab6abf13da15329bea0e/vuxMall'

// 定义各api子路径
const apis = {
  login: '/login',  // 登陆
  reg: '/reg' // 注册
};

// 导出各api地址
export const LoginResource = API_ROOT.concat(apis.login);
export const RegResource = API_ROOT.concat(apis.reg);
