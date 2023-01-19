<script setup>
import { ref, onMounted } from "vue";
import AddPhoto from "@/components/icons/AddPhoto.vue";

const startDate = ref("");
const endDate = ref("");
const color = ref("");
const homegame = ref("");
const awaygame = ref("");
const picture = ref("");
const url = ref(null)
const input = ref(null);

const getDetails = () => {
  reset();
};


 const onFileChange  = (() => {
    const file = e.target.files[0];
    url.value = URL.createObjectURL(file);
  })


onMounted(() => {
  console.log(input.value)
});


const openElementImg = () => {
  console.log(input)
};

//Reset the form
const reset = () => {
  endDate.value = "";
  color.value = "";
  startDate.value = "";
};
</script>
<template>
  <div class="pop-adduser-form">
    <form action="" method="post" @submit.prevent="getDetails" class="userform-wrapper">
      <div class="separator-p spe-pe">
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Outfit usage</label>
        <input required type="text" class="user-input" v-model="homegame" placeholder="home game " />
      </div>
      <div class="userform-input">
        <input required type="text" class="user-input" v-model="awaygame" placeholder="away game" />
      </div>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Color of outfit</label>
        <input required type="text" class="user-input" v-model="color" placeholder="color" />
      </div>
      <div class="separator-p spe-pe">
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Start date</label>
        <input required type="date" class="user-input" v-model="startDate" placeholder="Start date  " />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">End date</label>
        <input required type="date" class="user-input" v-model="endDate" placeholder="End date" />
      </div>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Outfit picture</label>
       <AddPhoto class="icon-pic-d" @click="openElementImg">
        <input ref="input" type="file" accept="image/*" @change="uploadImage()" class="upload-input" id="file-input">
       </AddPhoto>
        <div id="preview">
          <img v-if="url" :src="url" />
        </div>
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
