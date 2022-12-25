<script setup>
import { ref } from "vue";
const userName = ref("");
const userId = ref("");
const mobileNumber = ref("");
const email = ref("");
const userRole = ref("");

const getUser = () => {
//   console.log(
//     userName.value,
//     userId.value,
//     userRole.value,
//     mobileNumber.value,
//     email.value,
//     userRole.value
//   );

  reset();
};

//Reset the form
const reset = () => {
  email.value = "";
  userId.value = "";
  userRole.value = "";
  userName.value = "";
  mobileNumber.value = "";
};
</script>
<template>
  <div class="pop-adduser-form">
 
    <form
      action=""
      method="post"
      @submit.prevent="getUser"
      class="userform-wrapper"
    >
      <div class="userform-input">
        <label for="add-user-select" class="user-label">Use Role</label>
        <select
          required
          v-model="userRole"
          class="user-input"
          id="add-user-select"
        >
          <option>Super Admin</option>
          <option>Team Admin</option>
          <option>Team Manager</option>
          <option>General Coordinator</option>
          <option>Referee</option>
          <option>Match Commissioner</option>
          <option>Referee Assessor</option>
          <option>Data Manager</option>
          <option>League Director</option>
        </select>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Name</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="userName"
          placeholder="User Name"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">User ID</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="userId"
          placeholder="Your User ID"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Mobile</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="mobileNumber"
          placeholder="+25438392045"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">email</label>
        <input
          required
          type="email"
          class="user-input"
          v-model="email"
          placeholder=" Your email"
        />
      </div>
      <div class="user-btn-f">
        <button type="submit" class="btn-f a-u">Add</button>
        <button type="submit" @click="reset" class="btn-f r-u">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/user.css";
</style>
