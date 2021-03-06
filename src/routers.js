import index from './views/index/index.vue'

import goodDetail from './views/good-detail/goodDetail.vue'
import goodPay from './views/good-pay/goodPay.vue'
import payFeedback from './views/good-pay/payFeedback.vue'

import goodCat from './views/good-cat/goodCat.vue'
import searchResult from './views/good-search/searchResult.vue'

import commentPost from './views/good-comment/commentPost.vue'
import commentList from './views/good-comment/commentList.vue'

import cart from './views/cart/cart.vue'

import articleList from './views/article/articleList.vue'
import articleDetail from './views/article/articleDetail.vue'

import mine from './views/mine/mine.vue'
import orderList from './views/my-order/orderList.vue'
import orderDetail from './views/my-order/orderDetail.vue'

import myAddress from './views/my-address/myAddress.vue'
import addressEdit from './views/my-address/addressEdit.vue'

import myLike from './views/my-like/myLike.vue'

import myCoupon from './views/my-coupon/myCoupon.vue'
import couponRoom from './views/my-coupon/couponRoom.vue'

import mySetting from './views/my-setting/mySetting.vue'

import vChart from './views/v-chart/_index.vue'

export default [
	{
		path: '/index',
		name: 'index',
		component: index,
	},
	{
		path: '/index/search',
		name: 'searchResult',
		components: {
			'default': index,
			'subPage': searchResult
		}
	},
	{
		path: '/index/cat',
		name: 'goodCat',
		components: {
			'default': index,
			'subPage': goodCat
		}
	},
	{
		path: '/index/goods/:id',
		name: 'goodDetail',
		components: {
			'default': index,
			'subPage': goodDetail
		}
	},
	{
		path: '/index/goods/:id/buy',
		name: 'goodPay',
		components: {
			'default': index,
			'subPage': goodPay
		}
	},
	{
		path: '/index/goods/:id/buy/payfb',
		name: 'payFeedback',
		components: {
			'default': index,
			'subPage': payFeedback
		}
	},
	{
		path: '/index/goods/:id/comments',
		name: 'commentList',
		components: {
			'default': index,
			'subPage': commentList
		}
	},
	{
		path: '/articles',
		name: 'articleList',
		component: articleList,
	},
	{
		path: '/articles/:id',
		name: 'articleDetail',
		components: {
			'default': articleList,
			'subPage': articleDetail
		}
	},
	{
		path: '/cart',
		name: 'cart',
		component: cart
	},
	{
		path: '/mine',
		name: 'mine',
		component: mine,
	},
	{
		path: '/mine/orders',
		name: 'orderList',
		components: {
			'default': mine,
			'subPage': orderList
		}
	},
	{
		path: '/mine/orders/:id',
		name: 'orderDetail',
		components: {
			'default': mine,
			'subPage': orderDetail
		}
	},
	{
		path: '/mine/orders/commentpost',
		name: 'commentPost',
		components: {
			'default': mine,
			'subPage': commentPost
		}
	},
	{
		path: '/mine/orders/:id/commentpost',
		name: 'commentPost',
		components: {
			'default': mine,
			'subPage': commentPost
		}
	},
	{
		path: '/mine/address',
		name: 'myAddress',
		components: {
			'default': mine,
			'subPage': myAddress
		}
	},
	{
		path: '/mine/address/edit',
		name: 'addressEdit',
		components: {
			'default': mine,
			'subPage': addressEdit
		}
	},
	{
		path: '/mine/likes',
		name: 'myLike',
		components: {
			'default': mine,
			'subPage': myLike
		}
	},
	{
		path: '/mine/coupons',
		name: 'myCoupon',
		components: {
			'default': mine,
			'subPage': myCoupon
		}
	},
	{
		path: '/mine/couponRoom',
		name: 'couponRoom',
		components: {
			'default': mine,
			'subPage': couponRoom
		}
	},
	{
		path: '/mine/setting',
		name: 'mySetting',
		components: {
			'default': mine,
			'subPage': mySetting
		}
	},
	{
		path: '*',
		redirect: {name: 'index'},
	}
]
