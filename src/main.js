// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '../static/css/element-#F56C6C/index.css'
import '../static/css/common.css'
import store from './store'

import {globalColor} from './common/constant'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$globalColor = globalColor

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
