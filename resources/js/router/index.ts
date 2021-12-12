import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/js/components/contents/MainContent.vue') },
  { path: '/item/:id', component: () => import('@/js/components/items/ItemDetail.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('@/js/components/contents/NotFound.vue') }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
