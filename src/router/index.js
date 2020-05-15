import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import RouterPush from '@/components/RouterPush'
import Three from '@/components/Three'
import Children from '@/components/Children'
import P404 from '@/p404/p404'

Vue.use(Router)

export default new Router({
  // 搭建的环境默认用的hash mode，如果要去掉 #/，改成history模式就可以了
  mode: "history",
  routes: [
    {
      path: '/homePage',
      name: 'HomePage',
      meta: {
        title: "首页"
      },
      component: HomePage
    },
    {
      path: '/routerPush',
      name: 'RouterPush',
      meta: {
        title: "路由"
      },
      component: RouterPush
    },
    {
      path: '/three',
      name: 'Three',
      meta: {
        title: "第三"
      },
      component: Three,
      children:[
        {
          path: '/three/children',
          name: 'Children',
          meta: {
            title: "子页面"
          },
          component: Children
        }
      ]
    },
    {
      path: '/p404',
      name: 'P404',
      component: P404
    },
    {
      path: '/',
      name: 'HomePage',
      redirect: "homePage",
      component: HomePage
    },
  ]
})
