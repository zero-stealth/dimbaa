<script setup>
import AddPhoto from "@/components/icons/AddPhoto.vue";
import { ref } from "vue";
const playerName = ref("");
const playerposition  = ref("");
const Team = ref("");
const Email = ref("");
const Mobile = ref("");
const playerPic =ref("");
const playerPosition = ref("");

const getDetails = () => {
//   console.log(
//     playerposition.value,
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
  playerposition.value = "";
  playerName.value = "";
  playerPosition.value = "";
  playerPic.value = "";
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
        <label for="add-user-input" class="user-label">Player name</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="playerName"
          placeholder="User Name"
          />
        </div>
    <div class="userform-input">
        <label for="add-user-input" class="user-label">Playing position</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="playerposition"
          placeholder="midfielder"
          />
        </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Player position</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="playerPosition"
          placeholder="12"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Team logo</label>
       <AddPhoto class="icon-pic-d" @click="openElementImg">
        <input ref="input" type="file" accept="image/*" @change="uploadImage()" class="upload-input" id="file-input">
       </AddPhoto>
        <div id="preview">
          <img v-if="url" :src="url" />
        </div>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Player Picture</label>
       <AddPhoto class="icon-pic-d" @click="openElementImg">
        <input ref="input" type="file" accept="image/*" @change="uploadImage()" class="upload-input" id="file-input">
       </AddPhoto>
        <div id="preview">
          <img v-if="url" :src="url" />
        </div>
      </div>
      <div class="user-btn-f">
        <button type="submit" class="btn-f a-u">Add</button>
        <button type="reset" @click="reset" class="btn-f r-u">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/user.css";
</style>
