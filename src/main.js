import Vue from 'vue'
// import Vuex from 'vuex' 不需要在此导入vuex，因为导入的store已经是完成的vuex组件
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routers.js'
import store from './vuex/index.js'
import * as types from './vuex/mutation-types'

Vue.use(VueRouter)
// Vue.use(Vuex)  不需要在此使用vuex，因为导入的store已经是完整的vuex组件

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



FastClick.attach(document.body)


// 实例化对象
new Vue({
  // 公共状态库
  store,
  // 路由
  router,
  // 挂载至id为app-box的结构上
  render: h => h(App)
}).$mount('#app-box')
