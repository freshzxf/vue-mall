<template>
	<div class="z-page">

		<div class="z-head life-index-head">
			<div class="logo">
				<img :src="shop.logo" alt="">
			</div>
			<span class="title">{{shop.title}}</span>

      <div class="icon-tool">
				<router-link
					class="zui-icon zui-icon-SEARCH_1"
					:to="{
						name: 'searchResult'
					}">
				</router-link>

				<share-popup
					:shareCls="'zui-icon-SHARE2'"
					:share="shop.shareInfo"
          v-if="shop.show?shop.show:false">
				</share-popup>
			</div>
		</div>

		<view-box class="z-content">
			<div class="life-index-banner">
				<swiper
					:list="shopBanner">
				</swiper>
			</div>

      <cat-box
				:cats="shopCat"
				:title="'购物分类'">
			</cat-box>

			<sale-floor
				:type="'floorA'"
				:hasAll="true"
				:floorTitle="'精选好物'"
				:floorData="floor1">
			</sale-floor>

			<recommend
				:type="'INDEXGOODRECOMMEND'"
				:recommendTitle="'优物推荐'"
				:recommendData="recommendGoods">
			</recommend>

			<ending-tip :showLoading="false"></ending-tip>

		</view-box>

	</div>
</template>
<script>
require('./index.less')

// banner和shop是单独从home.js的store中获取的值，这里之所以分开获取数据，是为了测试两种获取数据的方式
import {shopCat,floor1,recommendGoods} from '../../data/data.js'

import SharePopup from '../../components/sharePopup.vue'
import CatBox from '../../components/catBox.vue'
import SaleFloor from '../../components/SaleFloor.vue'
import EndingTip from '../../components/EndingTip.vue'
import Recommend from '../../components/Recommend.vue'
import ScrollerBox from '../../components/ScrollerBox.vue'
import GoodGrid from '../../components/GoodGrid.vue'
import {Swiper, SwiperItem, Popup, ViewBox, XImg} from 'vux'

// import { mapGetters } from 'vuex';
export default {
	components: {
		Popup,
		CatBox,
		SaleFloor,
		EndingTip,
		Recommend,
		GoodGrid,
		Swiper,
		SwiperItem,
		ScrollerBox,
		SharePopup,
		ViewBox,
    XImg
	},
	data() {
		return {
			shopCat: shopCat,
			floor1: floor1,
			recommendGoods: recommendGoods
		}
	},
	created(){
		this.initShop(),
		this.initShopBanner()
  },
	computed: {
	  // todo:为什么下面使用mapGetters会报错
		/*...mapGetters ({
			shop: state => state.home.shop,
      shopBanner: state => state.home.shopBanner
		})*/
		shop(){
      return this.$store.state.home.shop
    },
		shopBanner(){
		  return this.$store.state.home.shopBanner
    }
	},
	methods: {
		initShop() {
      this.$store.dispatch('initShop')
		},
		initShopBanner() {
			this.$store.dispatch('initShopBanner')
		}
	}
}
</script>
