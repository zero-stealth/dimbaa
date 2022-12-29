<script setup>
import { ref } from "vue";
const playerName = ref("");
const jerseyNumber  = ref("");
const Team = ref("");
const Email = ref("");
const Mobile = ref("");

const getDetails = () => {
//   console.log(
//     jerseyNumber.value,
//     mobile.value,
//     Team.value,
//     PlayerNumber.value,
//     email.value,
//     Team.value
//   );

  reset();
};

//Reset the form
const reset = () => {
  Email.value = "";
  Mobile.value = "";
  Team.value = "";
  jerseyNumber.value = "";
  playerName.value = "";
};
</script>
<template>
  <div class="pop-adduser-form">
 
    <form
      action=""
      method="post"
      @submit.prevent="getDetails"
      class="userform-wrapper"
    >
    <div class="userform-input">
        <label for="add-user-input" class="user-label">PlayerName</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="playerName"
          placeholder="User Name"
          />
        </div>
    <div class="userform-input">
        <label for="add-user-input" class="user-label">JerseyNumber</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="jerseyNumber"
          placeholder="User Name"
          />
        </div>
      <div class="userform-input">
        <label for="add-user-select" class="user-label">Team:</label>
        <select
          required
          v-model="Team"
          class="user-input"
          id="add-user-select"
        >
          <option>Manchester</option>
          <option>Chelsea</option>
        </select>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Email</label>
        <input
          required
          type="email"
          class="user-input"
          v-model="Email"
          placeholder=" Your email"
        />
      </div>
      <div class="userform-input">
          <label for="add-user-input" class="user-label">Mobile</label>
          <input
            required
            type="text"
            class="user-input"
            v-model="Mobile"
            placeholder="+25438392045"
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
