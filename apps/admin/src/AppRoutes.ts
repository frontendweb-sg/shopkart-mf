import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: ["/admin"],
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "@/pages/dashboard/index.vue"),
  },
  {
    path: "/categories",
    component: () =>
      import(
        /* webpackChunkName:"categories" */ "@/pages/categories/index.vue"
      ),
  },
  {
    path: "/products",
    component: () =>
      import(/* webpackChunkName:"products" */ "@/pages/products/index.vue"),
  },
  {
    path: "/users",
    component: () =>
      import(/* webpackChunkName:"users" */ "@/pages/users/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
