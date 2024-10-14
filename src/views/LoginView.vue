<template>
  <div class="container">
    <div class="left-panel"></div>
    <div class="right-panel">
      <div class="login-form">
        <h2>Sign In</h2>
        <div class="input-group">
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            class="input-field"
          />
          <span v-if="usernameError" class="error-message">{{
            usernameError
          }}</span>
        </div>
        <div class="input-group">
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="input-field"
          />
          <span v-if="passwordError" class="error-message">{{
            passwordError
          }}</span>
        </div>
        <div class="input-group checkbox-group">
          <input type="checkbox" v-model="rememberMe" />
          <label>Remember me</label>
        </div>
        <BlueButton @click="handleSignIn">Sign In</BlueButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BlueButton from "../components/BlueBotton.component.vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const rememberMe = ref(false);

const usernameError = ref("");
const passwordError = ref("");
const router = useRouter();

const handleSignIn = () => {
  if (!username.value) {
    usernameError.value = "Username is required";
  } else {
    usernameError.value = "";
  }

  if (!password.value) {
    passwordError.value = "Password is required";
  } else {
    passwordError.value = "";
  }

  if (username.value && password.value) {
    localStorage.setItem("adminLoggedIn", "true");
    router.push({ name: "Data Statistic" });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.left-panel {
  flex: 1;
  background-color: rgb(1, 45, 192);
}

.right-panel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}

.login-form {
  width: 404px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form h2 {
  margin-bottom: 16px;
  font-size: 24px;
  color: #333;
}

.input-group {
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input-field {
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* валидации */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 4px;
}

/* chекбокс */
.checkbox-group {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.checkbox-group label {
  margin-left: 8px;
}

.sign-in-button {
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

/* наведение */
.sign-in-button:hover {
  background-color: rgba(1, 46, 192, 0.507) !important; /* бледнее */
}

/* нажатие */
.sign-in-button:active {
  background-color: rgba(1, 45, 192, 0.6) !important; /* темнее */
}
</style>
