<template>
  <div :class="['sidebar', { 'sidebar--closed': !isOpen }]">
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <i class="pi pi-home"></i>
            <span v-if="isOpen">Data Statistic</span>
          </router-link>
        </li>
        <li>
          <router-link to="/users">
            <i class="pi pi-users"></i>
            <span v-if="isOpen">User Details</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
defineProps<{ isOpen: boolean }>();
</script>

<style scoped>
.sidebar {
  width: 210px;
  transition: width 0.3s;
  height: 100vh;
  background-color: #2c3e50;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}

.sidebar--closed {
  width: 50px;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  margin: 20px 0;
}

.sidebar nav ul li a {
  color: white;
  text-decoration: none;
  padding: 10px;
  display: flex;
  align-items: center;
}

.sidebar nav ul li a i {
  font-size: 1.5em;
  margin-right: 10px;
}

.sidebar--closed nav ul li a i {
  margin-right: 0; /* Убираем отступ для иконки, когда сайдбар закрыт */
}

.sidebar nav ul li a span {
  transition: opacity 0.3s;
}

.sidebar--closed nav ul li a span {
  opacity: 0;
  pointer-events: none;
}
</style>
