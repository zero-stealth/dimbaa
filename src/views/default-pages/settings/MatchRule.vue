<script setup>
import { ref } from "vue";
const cardNumber = ref("");
const numberOfRepeats = ref("");
const noOfBans = ref("");

const getCredentials = () => {
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
const cancel = () => {
  cardNumber.value = "";
  numberOfRepeats.value = "";
  noOfBans.value = "";
};

</script>
<template>
  <div class="security-password-form">
    <form
      action=""
      method="post"
      @submit.prevent="getUser"
      class="securityform-wrapper"
    >
    <h1>Add Match Rule</h1>
      <div class="secureform-input">
        <input
          required
          type="text"
          class="secure-input"
          v-model="cardNumber"
          placeholder="Card number"
        />
      </div>
      <div class="secureform-input">
        <input
          required
          type="text"
          class="secure-input"
          v-model="numberOfRepeats"
          placeholder="Number of repeats"
        />
      </div>
      <div class="secureform-input">
        <input
          required
          type="text"
          class="secure-input"
          v-model="noOfBans"
          placeholder="Number of bans per match"
        />
      </div>
      <div class="secure-btn-f">
        <button type="submit" class="btn-s s-u">Add</button>
        <button type="submit" @click="cancel" class="btn-s s-f">Cancel</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/security.css";
</style>
