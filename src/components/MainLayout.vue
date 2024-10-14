<template>
  <div>
    <Header
      :isSidebarOpen="isSidebarOpen"
      @toggleSidebar="toggleSidebar"
      @logout="logout"
    />
    <Sidebar :isOpen="isSidebarOpen" />
    <div :class="['main-content', { 'main-content--shifted': !isSidebarOpen }]">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Header from "./MainHeader.component.vue";
import Sidebar from "./MainSidebar.component.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isSidebarOpen = ref(true);

const logout = () => {
  localStorage.setItem("adminLoggedIn", "false");
  router.push({ name: "Login" });
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style scoped>
.main-content {
  margin-left: 210px;
  padding: 20px;
  transition: margin-left 0.3s;
}

.main-content--shifted {
  margin-left: 50px;
}
</style>
