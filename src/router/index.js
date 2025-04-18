import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AddView from '@/views/AddView.vue'
import PriceView from '@/views/PriceView.vue'
import AboutView from '@/views/AboutView.vue'
import AdminView from '@/views/AdminView.vue'
import ClassesView from '@/views/ClassesView.vue'

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
      component: ClassesView,
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
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,

      meta: { requiresAuth: true },
    },
  ],
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true'
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('')
  } else {
    next()
  }
})

export default router
