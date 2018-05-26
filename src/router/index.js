import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Routers = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['@/pages/Login.vue'], resolve),
    }
  ]
})
export default Routers
