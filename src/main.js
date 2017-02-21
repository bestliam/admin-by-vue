// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import store from './store'
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')
// const app = new Vue({
//   router,
//   // store,
//   ...App // Object spread copying everything from App.vue
// })
// app.$mount('#app')
// export { app, router }
