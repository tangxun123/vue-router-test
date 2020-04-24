// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import nprogress from "nprogress"; // 导入网页加载进度条
import 'nprogress/nprogress.css';　// 导入网页加载进度条

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  nprogress.start();
  next();  
})
router.afterEach( route => {
  nprogress.done();  
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
