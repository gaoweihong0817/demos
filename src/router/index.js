import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import index from '../views/index'
import edit from '../components/List/edit'
import goods from '../components/List/goods'
import ind from '../components/List/ind'
import indChild from '../components/child/indChild'
import editChild from '../components/child/editChild'
import goodChild from '../components/child/goodChild'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: login,

  }, {
    path: '/index',
    name: 'index',
    component: index,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next()
      } else {
        alert('请先登录')
        next('/login')
      }
    },
    children: [{
      path: '/index/edit',
      name: '/index/edit',
      component: edit,
      children: [{
        path: '/edit/editChild',
        name: '/edit/editChild',
        component: editChild,
      }]
    }, {
      path: '/index/goods',
      name: '/index/goods',
      component: goods,
      children: [{
        path: '/goods/goodChild',
        name: '/goods/goodChild',
        component: goodChild,
      }]
    }, {
      path: '/index/ind',
      name: '/index/ind',
      component: ind,
      children: [{
        path: '/ind/indChild',
        name: '/ind/indChild',
        component: indChild,
      }]
    }]
  }, {
    path: '/',
    redirect: '/login'
  }

]

const router = new VueRouter({
  routes
})

export default router