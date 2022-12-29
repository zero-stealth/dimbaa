<script setup>
import { ref } from "vue";
const Name = ref("");
const userRole  = ref("");
const userID  = ref("");
const Email = ref("");
const Mobile = ref("");

const getDetails = () => {
//   console.log(
//     userID.value,
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
  userRole.value = "";
  userID.value = "";
  Name.value = "";
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
        <label for="add-user-input" class="user-label">User Role</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="userRole"
          placeholder="user role"
          />
        </div>
    <div class="userform-input">
        <label for="add-user-input" class="user-label">Name</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="Name"
          placeholder="User Name"
          />
        </div>
        <div class="userform-input">
        <label for="add-user-input" class="user-label">User ID</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="UserID"
          placeholder="UserID"
          />
        </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Mobile</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="Mobile"
          placeholder=" Your mobile"
        />
      </div>
      <div class="userform-input">
          <label for="add-user-input" class="user-label">Email</label>
          <input
            required
            type="email"
            class="user-input"
            v-model="Email"
            placeholder="kevin@example.com"
          />
      </div>
      <div class="user-btn-f">
        <button type="submit" class="btn-f a-u">Update</button>
          <button type="submit" class="btn-f r-u">Delete</button>
        <button type="submit" @click="reset" class="btn-f r-u">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/user.css";
</style>
