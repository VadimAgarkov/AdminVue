import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Login from "@/views/LoginView.vue";
import DataStatistic from "@/views/DataStatisticView.vue";
import Layout from "@/components/MainLayout.vue";
import UserView from "@/views/UserView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "Data Statistic",
        component: DataStatistic,
      },
      {
        path: "/users",
        name: "User Details",
        component: UserView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Роутер гвард , проверки авторизации
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("adminLoggedIn") === "true"; // Проверка авторизации

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    // Если требуется авторизация и пользователь не залогинен -> на логин
    next({ name: "Login" });
  } else if (to.name === "Login" && isAuthenticated) {
    // Если админ уже залогинен, а мы пытаемся попасть на логин, -> на дашборд
    next({ name: "Dashboard" });
  } else {
    next(); // продолжаем навигацию
  }
});

export default router;
