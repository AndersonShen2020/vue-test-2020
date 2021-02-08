import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
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

// const history = createWebHistory(process.env.BASE_URL);
const history = createWebHashHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
