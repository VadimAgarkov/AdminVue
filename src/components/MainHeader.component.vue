<template>
  <header :class="['header', { 'header--shifted': !isSidebarOpen }]">
    <button @click="$emit('toggleSidebar')">
      <span v-if="isSidebarOpen">Close Sidebar</span>
      <span v-else>Open Sidebar</span>
    </button>
    <h1>Admin Panel</h1>
    <button @click="$emit('logout')">
      <span>LogOut</span>
    </button>
  </header>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{ isSidebarOpen: boolean }>();
</script>

<style scoped>
.header {
  height: 50px;
  background-color: #34495e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 210px; /* по умолчанию ширина сайдбара */
  width: calc(100% - 210px); /* ширина для учёта сайдбара */
  transition: left 0.3s, width 0.3s;
  z-index: 1000;
}

.header--shifted {
  left: 50px; /* сайдбар закрыт -> уменьшаем отступ и увеличиваем ширину*/
  width: calc(100% - 50px);
}
</style>
