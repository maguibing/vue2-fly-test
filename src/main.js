// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css'
import _ from 'lodash'
import axios from '@/utils/http.js'
import dayjs from 'dayjs'
Vue.prototype.$axios = axios
Vue.prototype.$store = store
Vue.prototype.$_ = _
Vue.prototype.$dayjs = dayjs

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css' 

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
