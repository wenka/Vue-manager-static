import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store'

Vue.use(Router)

const Routers = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/Login.vue'], resolve),
    },
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/pages/Home.vue'], resolve),
      meta: {
        title: '内容管理'
      },
      children: [
        {
          path: 'editArticle',
          name: 'editArticle',
          component: resolve => require(['@/pages/article/EditArticle.vue'], resolve),
          meta: {
            title: '编辑文章'
          }
        }
      ]
    }
  ]
})
Routers.beforeEach((to, from, next) => {
  let userInfo = Store.state.System.userInfo
  if (userInfo == null && to.name != 'login') {
    next({
      name: 'login'
    })
  } else {
    next()
  }
})
export default Routers
