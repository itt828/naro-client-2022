import { createRouter, createWebHistory } from "vue-router";
import axios from 'axios';
import Home from "./pages/Home.vue";
import Axios from "./pages/Axios.vue";
import City from "./pages/City.vue";
import Login from "./pages/Login.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/axios", component: Axios },
  { path: "/login", component: Login },
  { path: "/city/:cityName", component: City },
  { path: "/:path(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  try {
    await axios.get("/api/whoami");
  } catch (_) {
    if (to.path === "/login") {
      return true;
    }
    return "/login";
  }
  return true;
});

export default router;