import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Routers = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: resolve => require(['@/pages/Login.vue'], resolve),
    },
    {
      path: '/main',
      name: 'Main',
      component: resolve => require(['@/pages/Main.vue'], resolve),
    }
  ]
})
export default Routers
