import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/Weather",
    name: "Weather",
    component: () => import("../views/Weather.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "ERROR",
    component: () => import("../views/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
