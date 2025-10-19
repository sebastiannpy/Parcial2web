import { createRouter, createWebHistory } from 'vue-router'
import Muro from '../components/Muro.vue'
import Info from '../components/Info.vue'
import Photos from '../components/Photos.vue'
import Boxes from '../components/Boxes.vue'

const routes = [
  { path: '/', redirect: '/muro' },
  { path: '/muro', component: Muro },
  { path: '/info', component: Info },
  { path: '/photos', component: Photos },
  { path: '/boxes', component: Boxes }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
