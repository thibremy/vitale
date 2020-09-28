import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@thibremy/vitale-pages'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App).use(router)

app.mount('#app')
