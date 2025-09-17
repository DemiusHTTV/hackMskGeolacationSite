// import * as VueRouter from 'vue-router'
// import RegAuthPage from '@/Pages/RegAuthPage.vue'

// 
// export default VueRouter.createRouter({
//     history:VueRouter.createWebHashHistory(),
//     routes:[
//         {
//         path :'/',
//         name:'regAuthPage',
//         component :RegAuthPage,
//         beforeEnter:(to,from,next )=>{
//                 next({name :'regAuthPage'})
            
//         },
//         children:[
//             {
//                 path: 'main',
//                 name:'MainPage',
//                 component:MainPage
//             }

//         ]
//         }
//     ]
// })



import { createRouter, createWebHashHistory } from 'vue-router'
import RegAuthPage from '@/Pages/RegAuthPage.vue'
import MainPage from '@/Pages/MainPage.vue'
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
        

    }
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router