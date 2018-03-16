// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import VeeValidate from 'vee-validate'
import cn from './assets/zh_CN'
import moment from 'moment'
import App from './App'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import './commons/css/common.scss'

Vue.use(ElementUI);
Vue.use(VeeValidate)
Vue.prototype.$moment = moment;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created () {
    this.$validator.localize('cn', cn)
  },
  components: { App },
  template: '<App/>'
})
