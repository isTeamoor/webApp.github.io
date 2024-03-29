import { homePage } from "../components/homePage.js";
import { newLot } from "../components/newLot.js";
import { profile } from "../components/userProfile.js";

const routes = [
  {
    name: "homepage",
    path: "/",
    component: homePage,
  },
  {
    name: "newLot",
    path: "/newLot",
    component: newLot,
  },
  {
    name: "user_profile",
    path: "/myProfile",
    component: profile,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(window.location.pathname),
  routes,
});

export default router;
