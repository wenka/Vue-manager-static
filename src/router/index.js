import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store'

Vue.use(Router)

/**
 *  dashboard
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const dashboard = {
  path: '/content',
  component: resolve => require(['@/pages/Home.vue'], resolve),
  meta: {
    title: '内容管理'
  },
  children: [
    {
      path: '/',
      component: resolve => require(['@/pages/Main.vue'], resolve),
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
    }
  ]
}


/**
 * article
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const article = {
  path: '/article',
  component: resolve => require(['@/pages/Main.vue'], resolve),
  meta: {
    title: '文章'
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

/**
 * category
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const category = {
  path: '/category',
  component: resolve => require(['@/pages/Main.vue'], resolve),
  meta: {
    title: '类别'
  },
  children: [
    {
      path: 'statisticalCategory',
      name: 'statisticalCategory',
      component: resolve => require(['@/pages/category/StatisticalCategory.vue'], resolve),
      meta: {
        title: '类别统计'
      }
    }
  ]
}

/**
 * tag
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const tag = {
  path: '/tag',
  component: resolve => require(['@/pages/Main.vue'], resolve),
  meta: {
    title: '标签'
  },
  children: [
    {
      path: 'cloudTag',
      name: 'cloudTag',
      component: resolve => require(['@/pages/tag/CloudTag.vue'], resolve),
      meta: {
        title: '标签云'
      }
    }
  ]
}

/**
 * comment
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const comment = {
  path: '/comment',
  component: resolve => require(['@/pages/Main.vue'], resolve),
  meta: {
    title: '评论'
  },
  children: [
    {
      path: 'reviewComment',
      name: 'reviewComment',
      component: resolve => require(['@/pages/comment/ReviewComment.vue'], resolve),
      meta: {
        title: '标签云'
      }
    }
  ]
}

/**
 * 内容管理
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const content = {
  path: '/content',
  component: resolve => require(['@/pages/Home.vue'], resolve),
  meta: {
    title: '内容管理'
  },
  children: [
    article,
    category,
    tag,
    comment
  ]
}

/**
 * Routers
 * @type {VueRouter}
 */
const Routers = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/Login.vue'], resolve),
    },
    dashboard,
    content
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
