import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store'

Vue.use(Router)

/**
 *  dashboard
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const dashboard = {
  path: '/',
  redirect: '/error404',
  component: resolve => require(['@/pages/Home.vue'], resolve),
  meta: {
    title: '内容管理'
  },
  children: [
    {
      path: '/',
      redirect: '/error404',
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

//////////////////////////////////////////////////////////////////////////////////////
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
        title: '评论审核'
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

//////////////////////////////////////////////////////////////////////////////////////

/**
 * user
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const user = {
  path: '/user',
  component: resolve => require(['@/pages/Main.vue'], resolve),
  meta: {
    title: '用户'
  },
  children: [
    {
      path: 'listUser',
      name: 'listUser',
      component: resolve => require(['@/pages/user/ListUser.vue'], resolve),
      meta: {
        title: '用户列表'
      }
    }
  ]
}

/***
 * permission
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const permission = {
  path: '/permission',
  component: resolve => require(['@/pages/Main.vue'], resolve),
  meta: {
    title: '权限'
  },
  children: [
    {
      path: 'listPermission',
      name: 'listPermission',
      component: resolve => require(['@/pages/permission/ListPermission.vue'], resolve),
      meta: {
        title: '权限列表'
      }
    }
  ]
}

/**
 * subscription
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const subscription = {
  path: '/subscription',
  component: resolve => require(['@/pages/Main.vue'], resolve),
  meta: {
    title: '订阅'
  },
  children: [
    {
      path: 'listSubscription',
      name: 'listSubscription',
      component: resolve => require(['@/pages/subscription/ListSubscription.vue'], resolve),
      meta: {
        title: '订阅列表'
      }
    }
  ]
}

/**
 * 用户管理
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const userManager = {
  path: '/userManager',
  component: resolve => require(['@/pages/Home.vue'], resolve),
  meta: {
    title: '用户管理'
  },
  children: [
    user,
    permission,
    subscription
  ]
}

//////////////////////////////////////////////////////////////////////////////////////

/**
 * feedback
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const feedback = {
  path: '/feedback',
  component: resolve => require(['@/pages/Main.vue'], resolve),
  meta: {
    title: '反馈'
  },
  children: [
    {
      path: 'listFeedback',
      name: 'listFeedback',
      component: resolve => require(['@/pages/feedback/Feedback.vue'], resolve),
      meta: {
        title: '意见列表'
      }
    }
  ]
}

/**
 * unit
 * @type {{path: string, component: (function(*=): *), meta: {title: string}, children: *[]}}
 */
const unit = {
  path: '/unit',
  component: resolve => require(['@/pages/Main.vue'], resolve),
  meta: {
    title: '组件'
  },
  children: [
    {
      path: 'listUnit',
      name: 'listUnit',
      component: resolve => require(['@/pages/unit/Unit.vue'], resolve),
      meta: {
        title: '组件列表'
      }
    }
  ]
}

/**
 *  系统管理
 * @type {{}}
 */
const systemManager = {
  path: '/systemManager',
  component: resolve => require(['@/pages/Home.vue'], resolve),
  meta: {
    title: '系统管理'
  },
  children: [
    feedback,
    unit
  ]
}

//////////////////////////////////////////////////////////////////////////////////////
const errorPage = {
  path: '/404',
  name: 'error404',
  component: resolve => require(['@/pages/noFound/NoFound.vue'], resolve),
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
    content,
    userManager,
    systemManager,
    errorPage,
    {
      path: '*',
      name: '*',
      redirect: '/404'
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
  if (to.matched.length == 0) {
    next({
      name: 'error404'
    })
  }

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
