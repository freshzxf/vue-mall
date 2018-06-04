<!--所有模块公用样式-->
<style lang="less">
  /*公共*/
  @import 'assets/css/common.less';
  /*1px解决*/
  @import '~vux/src/styles/1px.less';
  /*关闭icon（弹窗使用）*/
  @import '~vux/src/styles/close.less';
</style>

<template>
  <div style="height: 100%;">
    <!--定义全局loading-->
    <loading
      v-model="loading"
      :text="'给我几秒钟...'">
    </loading>
    <!--主要框架内容-->
    <div
      class="z-app"
      :class="{'hideLeft':$route.path.split('/').length>2}">
      <!--keep-alive是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM-->
      <keep-alive>
        <router-view
          name="default">
        </router-view>
      </keep-alive>
      <!--底部Nav-->
      <div class="z-foot">
        <buttom-nav></buttom-nav>
      </div>
    </div>
    <!--副页框架内容-->
    <transition
      name="custom-classes-transition"
      :enter-active-class="enterAnimate"
      :leave-active-class="leaveAnimate">
      <keep-alive>
        <router-view
          name="subPage"
          class="router-view">
        </router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  // 导入底部Nav组件
  import ButtomNav from './components/BottomNav.vue'
  // 从vux导入ViewBox、Loading组件
  import {ViewBox, Loading} from 'vux'
  // 模块导出
  export default {
    // 定义此模块使用到的组件
    components: {
      ButtomNav,
      ViewBox,
      Loading
    },
    // 定义动态数据
    data() {
      return {
        "enterAnimate": "", //页面进入动效
        "leaveAnimate": "" //页面离开动效
      }
    },
    // 监听路由切换，设置过渡动画
    watch: {
      '$route'(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        if (toDepth === 2) {
          // this.$store.commit('setPageName', to.name)
        }
        if (toDepth === fromDepth) {
          return
        }
        this.enterAnimate = toDepth > fromDepth
          ? 'animated fadeInRight'
          : 'animated fadeInLeft'

        this.leaveAnimate = toDepth > fromDepth
          ? 'animated fadeOutRight'
          : 'animated fadeOutLeft'

        // if(toDepth === 3) {
        // 	this.leaveAnimate = 'animated fadeOutRight'
        // }

      }
    },
    // 计算属性
    computed: {
      loading() {
        return this.$store.getters.loading
      }
    },
    methods: {},

  }
</script>
