// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import SocialLogin from '../components/SocialLogin.vue'

const routes = [
  {
    path: '/',
    name: 'SocialLogin',
    component: SocialLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
