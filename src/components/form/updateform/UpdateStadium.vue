<script setup>
import { ref } from "vue";
const StadiumName = ref("");
const City = ref("");
const Team = ref("");
const Region = ref("");

const getDetails = () => {
  reset();
};

//Reset the form
const reset = () => {
  City.value = "";
  Team.value = "";
  StadiumName.value = "";
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
        <label for="add-user-input" class="user-label">Stadium Name</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="StadiumName"
          placeholder="Stadium Name"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Team</label>
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
        <label for="add-user-input" class="user-label">City</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="City"
          placeholder="city name"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Region</label>
        <input
          required
          type="email"
          class="user-input"
          v-model="Region"
          placeholder="region"
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
