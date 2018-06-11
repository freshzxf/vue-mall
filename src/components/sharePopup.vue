<template>
	<span>
    <!--class的传入会和现有的class叠加-->
		<span
			class="zui-icon"
			:class="shareCls"
			@click="toggleSharePop">
		</span>
    <!--使用vux的popup组件-->
		<popup
			v-model="showShare"
			height="300px">
			<div class="share-popup-inner">
				<div class="share-qrcode">
					<img :src="share.qrcode" alt="">
				</div>
				<div class="share-desc">{{share.title}}</div>
				<div class="share-popup-close">
					<span
						class="zui-icon zui-icon-close"
						@click="toggleSharePop">
					</span>
				</div>
			</div>
		</popup>
	</span>
</template>

<script>
import {Popup} from 'vux'

export default {
  // 定义两个接受参数的属性
	props: ['share','shareCls'],
  // 声明使用组件
	components: {
		Popup
	},
  created() {
  },
  // 返回响应数据
	data() {
		return {
			showShare: false
		}
	},
  computed: {

  },
  // 定义方法
	methods: {
		toggleSharePop(){
			this.showShare = !this.showShare
		}
	}
}
</script>

<style>
.share-popup-inner{
	background-color: #fff;
	padding-top: 20px;
	z-index: 999;
}
.share-popup-inner .share-qrcode{
	height: 200px;
}
.share-popup-inner .share-qrcode img{
	display: block;
	height: 100%;
	width: auto;
	margin: 0 auto;
}
.share-popup-inner .share-desc{
	height: 35px;
	line-height: 35px;
	font-size: 12px;
	color: #868686;
	text-align: center;
}
.share-popup-inner .share-popup-close{
	height: 45px;
	line-height: 45px;
	text-align: center;
	color: #404040;
}
.share-popup-inner .share-popup-close .zui-icon{
	font-size: 24px;
}
</style>
