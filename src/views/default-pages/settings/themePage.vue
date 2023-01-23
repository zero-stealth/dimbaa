<script setup>
import { ref } from "vue";

const colorChoice = ref("");

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
  colorChoice.value = "";
};
</script>
<template>
  <div class="language-form">
    <form
      action=""
      method="post"
      @submit.prevent="getUser"
      class="languageform-wrapper"
    >
    <h1>Choose a theme</h1>
      <div class="languageform-input">
        <select
          required
          v-model="colorChoice"
          class="languageinput"
        >
          <option>Light</option>
          <option>dark</option>
        </select>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/language.css";
</style>
