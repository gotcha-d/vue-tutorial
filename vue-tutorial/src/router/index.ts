import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import AppTop from '@/views/AppTop.vue';

const routeSettings: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AppTop",
    component: AppTop
  }
]

// 
const router = createRouter({
  history: createWebHistory(), 
  routes: routeSettings
});

export default router;