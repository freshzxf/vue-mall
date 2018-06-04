import * as types from '../mutation-types'
import * as api from '../api.js'

// state
const state = {
  // 此shop已在下面initShop中被异步修改，home中使用的shop数据来自这里
	shop: {
		logo: '',
		title: '',
		shareInfo: {
			title: '长按二维码分享',
			qrcode: '/static/img/good-default.jpg'
		}
	},
  // 以下几个数据对象均未起到实质性作用，因为没有异步填充数据，home中使用的相应数据是直接导入data.js中相应数据的，不经过这里
	shopBanner: [],
	shopCat: [],
	floor1: [],
	recommendGoods: []
}

// getter
const getters = {
	shop: state => state.shop,
	shopBanner: state => state.shopBanner,
	shopCat: state => state.shopCat,
	floor1: state => state.floor1,
	recommendGoods: state => state.recommendGoods,
}

// mutations
const mutations = {
	[types.UPDATE_SHOP] (state, payload) {
	  state.shop.title = payload.shop.title
	  state.shop.logo = payload.shop.logo
	}
}

// actions
const actions = {
	async initShop({commit, state}) {
	  // 异步修改shop对象
		let shop = await api.getShop()
		commit({
			type: types.UPDATE_SHOP,
			shop
		})
	},
  async initShopBanner({commit, state}) {
	  // 异步修改shop对象
		let shopBanner = await api.getShopBanner()
		commit({
			type: types.UPDATE_SHOPBANNER,
			shopBanner
		})
	},
}

export default {
	state,
	getters,
	actions,
	mutations
}
