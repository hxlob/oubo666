import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Vant); //注册
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
