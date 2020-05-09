import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import RouterPush from '@/components/RouterPush'
import Three from '@/components/Three'

Vue.use(Router)

export default new Router({
  // 搭建的环境默认用的hash mode，如果要去掉 #/，改成history模式就可以了
  mode: "history",
  routes: [
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/RouterPush/:id',
      name: 'RouterPush',
      component: RouterPush
    },
    {
      path: '/Three',
      name: 'Three',
      component: Three
    },
    {
      path: '/',
      name: 'HomePage',
      redirect: "HomePage",
      component: HomePage
    },
  ]
})
