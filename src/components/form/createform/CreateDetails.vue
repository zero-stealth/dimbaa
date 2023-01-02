<script setup>
import { ref } from "vue";
const FirstName = ref("");
const SecondName = ref("");
const LastName = ref("");
const jerseyNumber  = ref("");
const Team = ref("");
const Email = ref("");
const Mobile = ref("");

const getDetails = () => {
  var playerDetails = JSON.stringify({
  "team_id": 6,
  "first_name": FirstName.value,
  "middle_name": SecondName.value,
  "last_name": LastName.value,
  "local_id": 5,
  "fifa_id": 3,
  "playing_position": 19,
  "weight": "dolores",
  "height": "ea",
  "nationality": "placeat",
  "jersey_number": jerseyNumber.value
});

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
        <label for="add-user-input" class="user-label">FirstName</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="FirstName"
          placeholder="player Name"
          />
        </div>
        <div class="userform-input">
        <label for="add-user-input" class="user-label">SecondName</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="SecondName"
          placeholder="player secondname"
          />
        </div>
        <div class="userform-input">
        <label for="add-user-input" class="user-label">LastName</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="LastName"
          placeholder="player lastname"
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
        <button type="submit" class="btn-f a-u">Edit</button>
          <button type="submit" class="btn-f r-u">Delete</button>
        <button type="submit" @click="reset" class="btn-f r-u">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/user.css";
</style>
