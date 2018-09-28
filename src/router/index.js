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
          component:()=>import('@/views/department/normal'),
          meta:{
            title:'正常合同',
            status:'0'
          }
        },
        {
          path: 'termination',
          component:()=>import('@/views/department/normal'),
          meta:{
            title:'合同终止',
            status:'1'
          }
        },
        {
          path: 'pause',
          component:()=>import('@/views/department/normal'),
          meta:{
            title:'合同暂停',
            status:'2'
          }
        },
        {
          path:'total',
          component:()=>import('@/views/department/total')
        }
      ],
      redirect:'/department/normal'
    },
    {
      path: '/detail',
      component:()=>import("@/views/detail/index"),
      children:[
        {
          path:'before',
          component:()=>import("@/views/detail/department"),
          meta:{
            title:'2016年以前'
          }
        },
        {
          path:'after',
          component:()=>import("@/views/detail/department"),
          meta:{
            title:'2016年'
          }
        },
        {
          path:'last',
          component:()=>import("@/views/detail/department"),
          meta:{
            title:'2017年'
          }
        },
        {
          path:'date',
          component:()=>import("@/views/detail/department"),
          meta:{
            title:'2018年'
          }
        }
      ],
      redirect:'/detail/before'
    },
    //个人
    {
      path: '/personal',
      component:()=>import('@/views/personal/index'),
      children:[
        {
          path: 'normal',
          component:()=>import('@/views/personal/normal'),
          meta:{
            title:'正常合同',
            status:'0'
          }
        },
        {
          path: 'termination',
          component:()=>import('@/views/personal/normal'),
          meta:{
            title:'合同终止',
            status:'1'
          }
        },
        {
          path: 'pause',
          component:()=>import('@/views/personal/normal'),
          meta:{
            title:'合同暂停',
            status:'2'
          }
        },
        {
          path:'total',
          component:()=>import('@/views/personal/total')
        }
      ],
      redirect:'/personal/normal'
    },
  ],
  linkActiveClass: 'active'
})
