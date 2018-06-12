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
    // dashboard
    {
      path: '/',
      component: resolve => require(['@/pages/Home.vue'], resolve),
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: resolve => require(['@/pages/dashboard/Dashboard.vue'], resolve),
          meta: {
            title: 'dashboard'
          }
        }
      ]
    },
    // 内容管理
    {
      path: '/',
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
            title: '发布文章'
          }
        },
        {
          path: 'listArticle',
          name: 'listArticle',
          component: resolve => require(['@/pages/article/ListArticle.vue'], resolve),
          meta: {
            title: '文章列表'
          }
        }
      ]
    }
  ]
})

/**
 * 获取头部面包屑
 *
 * @param to
 * @returns {*[]}
 */
const getBreadcrumbs = function (to) {
  let matched = to.matched
  let breadCrumbs = [
    {
      meta: {
        title: '首页'
      },
      name: 'dashboard'
    }
  ]
  if (to.name != 'dashboard') {
    for (let item of matched) {
      let o = {
        meta: item.meta,
        name: item.name
      }
      breadCrumbs.push(o)
    }
  }

  return breadCrumbs;
}

Routers.beforeEach((to, from, next) => {
  Store.commit('updateBreadcrumbs', getBreadcrumbs(to))
  let userInfo = Store.state.System.userInfo
  if (userInfo == null && to.name != 'login') {
    next({
      name: 'login'
    })
    // next()
  } else {
    next()
  }
})
export default Routers
