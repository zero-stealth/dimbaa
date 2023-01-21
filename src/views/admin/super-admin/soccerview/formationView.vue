<script setup>
import { ref } from "vue";

const inputF = ref("")


const show = () => {
  switch (inputF.value) {
    case "4-3-3 Attack-minded-midfield":

      break;
    case "4-3-3 Defensive-midfield":
      break;
    case "4-4-2 Diamond-midfield":
      break;
    case "4-4-2 Flat-midfield":
      break;
    default:
      break;
  }

}



</script>
<template>
  <div class="formation-s">
    <div class="formation-con">
      <label for="" class="formation-la">Change Formation</label>
      <input type="text" class="formation-input" v-model="inputF" placeholder="4-3-3 Attack-minded-midfield"
        @change="show">
    </div>
    <div class="show-formation">
      <img src="../../../../assets/formation/433Attack-minded-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-3-3 Attack-minded-midfield'">
      <img src="../../../../assets/formation/433Defensive-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-3-3 Defensive-midfield'">
      <img src="../../../../assets/formation/442Diamond-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-4-2 Diamond-midfield'">
      <img src="../../../../assets/formation/442Flat-midfield.jpg" alt="formation" class="img-formation"
        v-show="inputF == '4-4-2 Flat-midfield'">
    </div>

  </div>
</template>
<style>
@import "@/style/formation.css";
</style>