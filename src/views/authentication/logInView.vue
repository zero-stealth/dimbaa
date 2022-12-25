
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth.js";
import { useRoleStore } from "../../stores/roles.js";

const roleStore = useRoleStore();
const authState = useAuthStore();
const password = ref("");
const email = ref("");
const error = ref("");

const login = () => {
  //check password length
  if (password.value.length < 6) {
    error.value = "Password must be at least 6 characters  long.";
  } else {
    switch (email.value) {
      case "Kevin@admin.com":
        roleStore.setRoles("super-admin");
        authState.logIn();
        roleStore.route();
        break;
      case "Kevin@team.com":
        roleStore.setRoles("team-admin");
        authState.logIn();
        roleStore.route();
        break;
      case "Kevin@data.com":
        roleStore.setRoles("data-manager");
        authState.logIn();
        roleStore.route();
        break;
      case "Kevin@league.com":
        roleStore.setRoles("league-director");
        authState.logIn();
        roleStore.route();
        break;
      case "Kevin@general.com":
        roleStore.setRoles("general-coordinator");
        authState.logIn();
        roleStore.route();
        break;
      case "Kevin@match.com":
        authState.logIn();
        roleStore.setRoles("match-commissioner");
        authState.logIn();
        roleStore.route();
        break;
      case "Kevin@referee.com":
        roleStore.setRoles("referee");
        authState.logIn();
        roleStore.route();
        break;
      case "Kevin@assessor.com":
        roleStore.setRoles("referee-assessor");
        authState.logIn();
        roleStore.route();
        break;
      case "Kevin@teamManager.com":
        roleStore.setRoles("team-manager");
        authState.logIn();
        roleStore.route();
        break;
      default:
        error.value = "No login credentials found";
        break;
    }
  }

  email.value = "";
  password.value = "";
};
</script>
<template>
  <div class="login-container">
    <div class="login-c">
      <img src="@/assets/tplb-logo.png" alt="tplb" class="logo-tplb" />
      <div class="login-form-container">
        <form @submit.prevent="login" method="post" class="form-container">
          <div class="input-field">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="login-i"
              v-model="email"
              placeholder="Kevin@admin.com"
              required
            />
          </div>
          <div class="input-field">
            <label for="password"> Password</label>
            <input
              type="password"
              id="password"
              class="login-i"
              v-model="password"
              placeholder=" Atleast 6 characters long"
              required
            />
          </div>
          <span class="error-input">{{ error }}</span>
          <a href="#">Forgot password?</a>
          <div class="btn-i">
            <button class="login-btn">Login</button>
          </div>
        </form>
        <div class="footer-login">
          <h1>
            Download user manuals:<a href=""><span>SW</span></a
            >|
            <a href=""><span>EN</span></a>
          </h1>
          <h1>
            Powered by:
            <img src="@/assets/tff-logo.png" alt="tff-logo" class="tff-logo" />
          </h1>
        </div>
      </div>
    </div>
    <div class="login-adv">
      <img src="@/assets/banner.jpg" alt="banner" class="banner-img" />
    </div>
  </div>
</template>
<style>
@import "@/style/login.css";
</style>
