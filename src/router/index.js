import Vue from 'vue'
import Router from 'vue-router'
import Input from '@/components/input'
import List from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'input',
      component: Input
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
