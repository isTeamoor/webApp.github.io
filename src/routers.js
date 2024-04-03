import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../src/components/screens/Home.vue"),
  },
  {
    name: "LotsList",
    path: "/lotsList",
    component: () => import("../src/components/screens/LotsList.vue"),
  },
  {
    name: "NewLot",
    path: "/newLot",
    component: () => import("../src/components/screens/NewLot.vue"),
  },
  {
    name: "UserProfile",
    path: "/userProfile",
    component: () => import("../src/components/screens/UserProfile.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
