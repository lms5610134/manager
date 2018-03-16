import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('src/views/layout/layout')
const login = () => import('src/views/login/login')
const assets = () => import('src/views/assets/assets')
const assetsChange = () => import('src/views/assets/assetsChange/assetsChange')
const assetsUpdate = () => import('src/views/assets/update/update')
const check = () => import('src/views/check/check')
const checkError = () => import('src/views/checkError/checkError')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/assets',
          name: 'assets',
          component: assets
        },
        {
          path: '/assets/change',
          name: 'assetsChange',
          component: assetsChange
        },
        {
          path: '/assets/update',
          name: 'assetsUpdate',
          component: assetsUpdate
        },
        {
          path: '/check',
          name: 'check',
          component: check
        },
        {
          path: '/checkError',
          name: 'checkError',
          component: checkError
        }
      ]
    }
  ]
})
