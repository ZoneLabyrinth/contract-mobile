// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/api/http.js'
import FastClick from 'fastclick'
import * as filters from './utils/filters'
import store from './vuex'
import api from '@/api/index.js'

import Velocity from 'velocity-animate/velocity'
import 'velocity-animate/velocity.ui'

import Echarts from "vue-echarts/components/Echarts"
import 'echarts/lib/chart/pie'
import 'echarts/theme/dark'


import {
  ToastPlugin,
  LoadingPlugin,
  ConfirmPlugin,
  DatetimePlugin,
} from 'vux'


FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.api = api
window.Velocity = Velocity

//默认使用vux组件
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(DatetimePlugin)


Vue.component('e-charts', Echarts)

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))


/* eslint-disable no-new */
export const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')