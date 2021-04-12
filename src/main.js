import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'


import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

import './icons' // icon
import './permission' // permission control
import * as filters from './filters' // global filters
import Cookies from 'js-cookie'

import dayjs from 'dayjs'
import lodash from 'lodash'

Vue.prototype.$dayjs = dayjs
Vue.prototype.$fp = lodash


// element-ui size
Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
})

// 注册全局 filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
