import {createRouter,createWebHashHistory} from 'vue-router'
//import About from '../components/About.vue'
//import Home from '../components/Home.vue'
//import A from '../components/A.vue'
 const routes=[
{
  path:'/A',
  component:()=>import('../components/A.vue')
},
  {
  path:'/home',
  component:()=>import('../components/Home.vue')
},
{
  path:'/about',
  component:()=>import('../components/About.vue')
},
{
  path:'/',
  component:()=>import('../components/Test.vue')
},
{
  path:'/vueone',
  component:()=>import('../components/Vueone.vue')
}]
const router = createRouter({
  routes,
  history:createWebHashHistory()
})
export default router

