import Vue from 'vue';
import Router from 'vue-router';
import homePage from '@/view/HomePage';
import routerPush from '@/view/RouterPush';
import three from '@/view/Three';
import children from '@/view/Children';
import p404 from '@/view/P404';

Vue.use(Router);

export default new Router({
  // 搭建的环境默认用的hash mode，如果要去掉 #/，改成history模式就可以了
  mode: "history",
  routes: [
    {
      path: '/homePage',
      name: 'homePage',
      meta: {
        title: "首页"
      },
      component: homePage
    },
    {
      path: '/routerPush',
      name: 'routerPush',
      meta: {
        title: "路由"
      },
      component: routerPush
    },
    {
      path: '/three',
      name: 'three',
      meta: {
        title: "带子菜单的"
      },
      redirect: "three/index",
      component: three,
      children:[
        {
          path: 'index',
          name: 'three',
          meta: {
            title: "第三"
          },
          component: three
        }
      ]
    },
    {
      path: '/children',
      name: 'children',
      meta: {
        title: "子页面"
      },
      component: children
    },
    {
      path: '/404',
      name: 'p404',
      meta: {
        title: "找不到"
      },
      component: p404
    },
    {
      path: '/',
      name: 'homePage',
      meta: {
        title: "首页"
      },
      redirect: "homePage",
      component: homePage
    },
  ]
})
