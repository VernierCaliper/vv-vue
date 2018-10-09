import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/template/index'
import swiperEx from '@/components/example/swiperEx'
import loadingEx from '@/components/example/loadingEx'
import toastEx from '@/components/example/toastEx'
import actionEx from '@/components/example/actionEx'
import spinnerEx from '@/components/example/spinnerEx'
import switchEx from '@/components/example/switchEx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/swiperEx',
      name: 'swiperEx',
      component: swiperEx
    },
    {
      path: '/loadingEx',
      name: 'loadingEx',
      component: loadingEx
    },
    {
      path: '/toastEx',
      name: 'toastEx',
      component: toastEx
    },
    {
      path: '/spinnerEx',
      name: 'spinnerEx',
      component: spinnerEx
    },
    {
      path: '/switchEx',
      name: 'switchEx',
      component: switchEx
    },
    {
      path: '/actionEx',
      name: 'actionEx',
      component: actionEx
    }
  ]
})
