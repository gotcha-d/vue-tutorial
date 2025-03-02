import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import AppTop from '@/views/AppTop.vue';

const routeSettings: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AppTop",
    component: AppTop
  },
  {
    path: "/member/memberList",
    name: "memberList",
    component: () => {
      return import("@/views/member/MemberList.vue")
    }
  },
  {
    path: "/member/detail/:id",
    name: "memberDetail",
    component: () => {
      return import("@/views/member/MemberDetail.vue")
    },
    props: (routes) => {
      const idNum = Number(routes.params.id)
      return {
        id: idNum
      }
    }
  }
]

// 
const router = createRouter({
  history: createWebHistory(), 
  routes: routeSettings
});

export default router;