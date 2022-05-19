import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Axios from "./pages/Axios.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/axios", component: Axios },
  { path: "/:path(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;