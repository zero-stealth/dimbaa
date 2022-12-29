<script setup>
import { ref } from "vue";
const Region = ref("");
const TeamName = ref("");
const Stadium = ref("");

const getTeam = () => {

  reset();
};

//Reset the form
const reset = () => {
  Region.value = "";
  TeamName.value = "";
  Stadium.value = "";
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
        <label for="add-user-select" class="user-label">Region</label>
        <select
          required
          v-model="Region"
          class="user-input"
          id="add-user-select"
        >
          <option>Region 1</option>
          <option>Region 2</option>
        </select>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Team Name</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="TeamName"
          placeholder="Tean Name"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-select" class="user-label">Staduim</label>
        <select
          required
          v-model="Stadium"
          class="user-input"
          id="add-user-select"
        >
          <option>Stadium 1</option>
          <option>Stadium 2</option>
        </select>
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
