<script setup>
import {ref} from 'vue'

const filling = ref(false);
const submitted = ref(false);

const isfilling = () => {
  filling.value = true;
}

const isSubmitted = () => {
  submitted.value = true;
}

</script>
<template>
  <div class="detail-container">
    <form action="" class="d-form">
    <div class="d-container1">
      <div class="d-wrapper">
      <label for="" class="d-label">Competition</label>
      <input type="text" placeholder="predefined"  @change="isfilling" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Date</label>
      <input type="date" placeholder="predefined" class="d-input"  @change="isfilling">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Played in (City)</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">M/No</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    </div>
      <div class="d-container1">
      <div class="d-wrapper">
      <label for="" class="d-label">Team A</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Team B</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Stadium</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">RD</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    </div>
    </form>
    <!-- input container  -->
  <div class="btn1-center">
      <div class="form1-btn">
        <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="isSubmitted" :class="filling == true ? 'filling' : ''">Update</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''">Next</button>
      </div>
    </div>
  </div>
</template>
<style>
  @import "@/style/general.css"
</style>