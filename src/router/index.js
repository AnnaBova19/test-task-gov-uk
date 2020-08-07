import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/registration',
    name: 'registration',
    redirect: { name: "reg-step-one" },
    component: () => import(/* webpackChunkName: "about" */ '../views/registration/Registration.vue'),
    children: [
      {
        path: "step1",
        name: "reg-step-one",
        component: () => import(/* webpackChunkName: "about" */ '../views/registration/RegStepOne.vue'),              
      },
      {
        path: "step2",
        name: "reg-step-two",
        component: () => import(/* webpackChunkName: "about" */ '../views/registration/RegStepTwo.vue'),                   
      },
      {
        path: "step3",
        name: "reg-step-three",
        component: () => import(/* webpackChunkName: "about" */ '../views/registration/RegStepThree.vue'),                
      },    
      {
        path: "summary",
        name: "reg-summary",
        component: () => import(/* webpackChunkName: "about" */ '../views/registration/RegSummary.vue'),                
      }, 
      {
        path: "confirm",
        name: "reg-confirm",
        component: () => import(/* webpackChunkName: "about" */ '../views/registration/RegConfirm.vue'),                
      },      
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
