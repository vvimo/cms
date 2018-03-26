import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import layout from '@/views/layout'

Vue.use(Router)

const _import = require('./_import_' + process.env.NODE_ENV)
const pcMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '',
    component: layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/channelManage',
    component: layout,
    redirect: '',
    children: [{
      path: '',
      component: _import('channelManage/index'),
      name: '',
      meta: { title: 'channelManage', icon: '', noCache: true }
    }]
  },
  {
    path: '/keywordManage',
    component: layout,
    redirect: '',
    children: [{
      path: '',
      component: _import('keywordManage/index'),
      name: '',
      meta: { title: 'keywordManage', icon: '', noCache: true }
    }]
  },
  {
    path: '/menuManage',
    component: layout,
    redirect: '',
    children: [{
      path: '',
      component: _import('menuManage/index'),
      name: '',
      meta: { title: 'menuManage', icon: '', noCache: true }
    }]
  },
  {
    path: '/newsManage',
    component: layout,
    redirect: '',
    children: [{
      path: '',
      component: _import('newsManage/index'),
      name: '',
      meta: { title: 'newsManage', icon: '', noCache: true }
    }]
  },
  {
    path: '/settingManage',
    component: layout,
    redirect: '',
    children: [{
      path: '',
      component: _import('settingManage/index'),
      name: '',
      meta: { title: 'settingManage', icon: '', noCache: true }
    }]
  },
  {
    path: '/webManage',
    component: layout,
    redirect: '',
    children: [{
      path: '',
      component: _import('webManage/index'),
      name: '',
      meta: { title: 'webManage', icon: '', noCache: true }
    }]
  }
]

export const constantRouterMap = pcMap

export const asyncRouterMap = []

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
