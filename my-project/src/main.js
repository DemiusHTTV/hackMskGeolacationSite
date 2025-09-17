import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/RegAuth.css'
import '@/assets/Mainn.css'
import '@/assets/Upload.css'
createApp(App).use(router).use(store).mount('#app')
