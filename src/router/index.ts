import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/:slug',
      name: 'pokemon',
      props: true,
      component: () => import('../views/PokemonView.vue')
    },
  ]
})

export default router
