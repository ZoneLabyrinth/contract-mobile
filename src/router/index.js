import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/normal',
      component:()=>import('@/views/department/normal')
    },
    {
      path:'/before',
      component:()=>import("@/views/detail/department")
    }
  ],
  linkActiveClass: 'active'
})
