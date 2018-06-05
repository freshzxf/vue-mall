// 导入Vue
import Vue from 'vue'
// 导入点击延时解决
import FastClick from 'fastclick'
// 导入路由组件
import VueRouter from 'vue-router'
// 导入入口App文件
import App from './App'
// 导入定义好的路由配置
import routes from './routers.js'
// 导入公共状态（数据）
import store from './vuex/index.js'

// 导入全局设置的mutaions（改变公共数据的方法名集合）
import * as types from './vuex/mutation-types'

// 全局使用路由组件
Vue.use(VueRouter)

// 根据具体路由配置创建路由器
const router = new VueRouter({
  routes
})

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function(to, from ,next) {
	// store.commit(types.SHOW_LOADING, true)
	// store.dispatch('showLoading')
	// const toIndex = history.getItem(to.path)
	// const fromIndex = history.getItem(from.path)

	// if(toIndex) {
	// 	if(toIndex > fromIndex || !fromIndex || (toIndex === '0' && fromIndex === '0')) {
	// 		store.commit('UPDATE_DIRECTION', {direction: 'forward'})
	// 	}else{
	// 		store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
	// 	}
	// }else{
	// 	++historyCount

	// 	history.setItem('count', historyCount)
	// 	to.path !== '/' && history.setItem(to.path, historyCount)
	// 	store.commit('UPDATE_DIRECTION', {direction: 'forward'})
	// }

	// if(/\/http/.test(to.path)) {
	// 	let url = tp.path.split('http')[1]
	// 	window.location.href = `http${url}`
	// }else{
		next()
	// }
})

router.afterEach(function (to) {
  // store.commit(types.HIDE_LOADING, false)
  // store.dispatch('hideLoading')
  // ga && ga('set', 'page', to.fullPath)
  // ga && ga('send', 'pageview')
})

// 移除移动端页面点击延迟
FastClick.attach(document.body)

// 实例化对象
new Vue({
  // 挂载公共状态库
  store,
  // 挂载路由
  router,
  // 挂载至id为app-box的结构上
  render: h => h(App)
}).$mount('#app-box')
