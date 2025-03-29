import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AddView from '@/views/AddView.vue'
import OdsjeciView from '@/views/OdsjeciView.vue'
import PriceView from '@/views/PriceView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/upis',
      name: 'upis',
      component: AddView,
    },
    {
      path: '/odsjeci',
      name: 'odsjeci',
      component: OdsjeciView,
    },
    {
      path: '/cijene',
      name: 'cijene',
      component: PriceView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
