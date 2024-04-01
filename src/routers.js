import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../src/components/screens/Home.vue"),
  },
  {
    name: "ShowAucs",
    path: "/showAucs",
    component: () => import("../src/components/screens/ShowAucs.vue"),
  },
  {
    name: "newLot",
    path: "/newLot",
    component: () => import("../src/components/screens/NewLot.vue"),
  },
  {
    name: "UserProfile",
    path: "/userProfile",
    component: () => import("../src/components/screens/UserProfile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(window.location.pathname),
  routes,
});

export default router;