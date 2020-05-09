// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import nprogress from "nprogress"; // 导入网页加载进度条
import 'nprogress/nprogress.css';　// 导入网页加载进度条

Vue.use(ElementUI)  // 导入elm

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  nprogress.start();
  nprogress.configure({ease:'ease'})
  nprogress.set(0.4)
  setTimeout(() => {
    next();
  }, 1000);
})
router.afterEach( route => {
  nprogress.set(1);
  nprogress.done();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
