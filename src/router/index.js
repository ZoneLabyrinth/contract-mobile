import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/department',
      component:()=>import('@/views/department/index'),
      children:[
        {
          path: 'normal',
          component:()=>import('@/views/department/normal')
        },
      ],
      redirect:'/department/normal'
    },
    {
      path: '/detail',
      component:()=>import("@/views/detail/index"),
      children:[
        {
          path:'before',
          component:()=>import("@/views/detail/department")
        },
        {
          path:'after',
          component:()=>import("@/views/detail/department")
        },
        {
          path:'last',
          component:()=>import("@/views/detail/department")
        },
        {
          path:'date',
          component:()=>import("@/views/detail/department")
        }
      ],
      redirect:'/detail/before'
    },
  ],
  linkActiveClass: 'active'
})
