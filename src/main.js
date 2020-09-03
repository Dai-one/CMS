import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
//HTTP请求,把http封装的方法，挂载到原型链上
import http from '@/utils/api'
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
