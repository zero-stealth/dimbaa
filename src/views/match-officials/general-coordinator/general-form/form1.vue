<script setup>
import {ref, watchEffect} from 'vue'

const filling = ref(false);
const submitted = ref(false);
const competition = ref('');
const date = ref('');
const city = ref('');
const No = ref('');
const TeamA = ref('');
const teamAA = ref('');
const TeamB = ref('');
const teamBB = ref('');
const Stadium = ref('');
const RD = ref('');

watchEffect(() => {
  if(TeamA.value != '' || TeamB.value != '' ||teamAA.value != '' ||teamBB.value != '') {
    filling.value = true;
  } else {
    filling.value = false;
  }
})

</script>
<template>
  <div class="form1-container">
  <h1>Results</h1>
  <!-- input container  -->
    <div class="form1-wrapper">
    <div class="form1-w">
    <label for="">Final Score</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Team A" v-model="TeamA">
      <input type="text" class="form1-input short-i" placeholder="Team B" v-model="TeamB">
      </div>
    </div>
    <div class="form1-w">
    <label for="">In Favour Of</label>
      <input type="text" class="form1-input" placeholder="Enter here">
      </div>
    </div>
  <!-- input container  -->
  <div class="form1-wrapper">
    <div class="form1-w">
    <label for="">Extra Time score</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Team A" v-model="TeamAA">
      <input type="text" class="form1-input short-i" placeholder="Team B" v-model="TeamBB">
      </div>
    </div>
    <div class="form1-w">
    <label for="">In Favour Of</label>
      <input type="text" class="form1-input" placeholder="Enter here">
      </div>
    </div>
  <!-- input container  -->
  <div class="form1-wrapper">
    <div class="form1-w">
    <label for="">Penalty</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Team A" v-model="TeamAB">
      <input type="text" class="form1-input short-i" placeholder="Team B" v-model="TeamBA">
      </div>
    </div>
    <div class="form1-w">
    <label for="">In Favour Of</label>
      <input type="text" class="form1-input" placeholder="Enter here">
      </div>
    </div>
  <!-- input container  -->
  <div class="btn1-center">
      <div class="form1-btn">
        <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="isSubmitted" :class="filling == true ? 'filling' : ''" v-show="submitted == false">Update</button>
        <button class="btn1 btn1-b hide-m" @click="isSubmitted" :class="filling == true ? 'filling' : ''" disabled  v-show="submitted == true">Update</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''">Next</button>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/form.css";
</style>