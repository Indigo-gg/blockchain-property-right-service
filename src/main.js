// with polyfills
// import { setMock } from '@/utils/mock/mock'
import 'core-js/stable'
import fullscreen from 'vue-fullscreen'
import 'regenerator-runtime/runtime'
import './utils/mock/mock.js'
//  引入Echarts
import * as echarts from 'echarts'
import Vue from 'vue'
// import VueAnimXYZ from '@animxyz/vue'
// import '@animxyz/core' // Import css here if you haven't elsewhere
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themePluginConfig from '../config/themePluginConfig'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import bootstrap from './core/bootstrap'
import './core/lazy_use' // use lazy load components
import './permission' // permission control
import './utils/filter' // global filter
import './global.less' // global style


import '@jiaminghi/data-view/src/components/borderBox12/index'



// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';
import dataV from '@jiaminghi/data-view';
// import '@/views/components/svgIcon/svgIcon'
import '@/icons/index'
import myImg from '@/views/components/myImg/myImg'
import { setMock } from '@/utils/mock/mock'
// Vue.use(VueAnimXYZ)
Vue.component('my-img', myImg)
Vue.use(Antd)
Vue.use(dataV)
Vue.component('icon',Icon)
Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
// use pro-layout components
// 使用全屏插件
Vue.use(fullscreen)
Vue.prototype.$echarts = echarts
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)
if (process.env.NODE_ENV === 'mock') {
setMock()
}
window.umi_plugin_ant_themeVar = themePluginConfig.theme
// require('@/utils/mock/index')
new Vue({
  router,
  store,
  i18n,
  // init localstorage, vuex
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
