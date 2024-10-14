<template>
  <div>
    <h1>Welcome to Admin panel</h1>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
  const isAuthenticated = localStorage.getItem("adminLoggedIn") === "true";

  if (!isAuthenticated) {
    router.push({ name: "Login" }); // Если не авторизован, -> логин
  } else {
    router.push({ name: "Data Statistic" }); // Если авторизован, -> дашборд
  }
});
</script>
