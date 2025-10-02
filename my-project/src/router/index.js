import { createRouter, createWebHashHistory } from 'vue-router'
import RegAuthPage from '@/Pages/RegAuthPage.vue'
import MainPage from '@/Pages/MainPage.vue'
import DataPage from '@/Pages/DataPage.vue'
const routes = [
  {
    path: '/',
    name: 'regAuthPage',
    component: RegAuthPage,
    beforeEnter(to,from,next){
        next()
    

    },
  },
    {
        path:'/main',
        name:'mainPage',
        component:MainPage,
        

    },
    {
      path:'/upload',
      name:'uploadPage',
      component:DataPage
    }
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router