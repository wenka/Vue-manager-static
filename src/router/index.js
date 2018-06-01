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
        description: '首页'
      },
      children: [
        {
          path: 'editArticle',
          name: 'editArticle',
          component: resolve => require(['@/pages/article/EditArticle.vue'], resolve),
          meta: {
            type: '内容管理',
            category: '文章',
            description: '编辑文章'
          }
        }
      ]
    }
  ]
})
Routers.beforeEach((to, from, next) => {
  next()
})
export default Routers
