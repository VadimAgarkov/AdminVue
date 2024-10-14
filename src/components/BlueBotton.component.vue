<template>
  <button class="blue-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";
const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click"); // событие наружу
};
</script>

<style scoped>
.blue-button {
  width: 100%;
  height: 40px;
  background-color: rgb(1, 45, 192);
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
}

.blue-button:hover {
  background-color: rgba(1, 46, 192, 0.507); /* Hover эффект */
}

.blue-button:active {
  background-color: rgba(1, 45, 192, 0.6); /* Эффект нажатия */
}
</style>
