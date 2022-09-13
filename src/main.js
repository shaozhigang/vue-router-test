// 引入 vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'

//引入 VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
