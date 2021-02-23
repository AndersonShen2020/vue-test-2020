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
    path: "/Test",
    name: "Test",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/Weather",
    name: "Weather",
    component: () => import("../views/Weather/index.vue"),
  },
  {
    path: "/Table",
    name: "Table",
    component: () => import("../views/Table/index.vue"),
  },
  {
    path: "/TodoList",
    name: "TodoList",
    component: () => import("../views/TodoList/index.vue"),
  },
  {
    path: "/ReRender",
    name: "ReRender",
    component: () => import("../views/ReRender/index.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "ERROR",
    component: () => import("../views/Error.vue"),
  },
];

const history = createWebHistory(process.env.BASE_URL);
// const history = createWebHashHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
