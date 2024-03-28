import { homePage } from "../components/homePage.js";
import { extra } from "../components/extra.js";
import { profile } from "../components/userProfile.js";

const routes = [
  {
    name: "homepage",
    path: "/",
    component: homePage,
  },
  {
    name: "extra",
    path: "/extra",
    component: extra,
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
