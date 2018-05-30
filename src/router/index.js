import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store'
import HelloWorld from '@/components/HelloWorld'

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
      name: 'main',
      component: resolve => require(['@/pages/Main.vue'], resolve),
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
  console.log(to)
  let paths = []
  if (to.name != 'main') {
    paths = [
      {
        label: to.meta.type,
        name: null
      },
      {
        label: to.meta.category,
        name: null
      },
      {
        label: to.meta.description,
        name: to.name
      }
    ]
  }
  Store.commit('updateBreadcrumb', paths)
  next()
})
export default Routers
