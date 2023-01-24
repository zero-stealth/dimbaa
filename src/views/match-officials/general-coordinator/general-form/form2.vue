<script setup>
import {ref, watchEffect} from 'vue'

const filling = ref(false);
const submitted = ref(false);
const name = ref('');
const Region = ref('');


watchEffect(() => {
  if(Region.value != '' || name.value != '') { 
    filling.value = true;
  } else {
    filling.value = false;
  }
})
</script>
<template>
  <div class="form1-container">
  <h1>Match Officials</h1>
  <!-- input container  -->
    <div class="form1-wrapper f2-w">
    <div class="form1-w f2-i">
    <label for="">Referee</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Match Official Name" v-model="name">
      <input type="text" class="form1-input short-i" placeholder="Region"  v-model="Region">
      </div>
    </div>
    </div>
  <!-- input container  -->
    <div class="form1-wrapper f2-w">
    <div class="form1-w f2-i">
    <label for="">Assistant Referee I</label>
    <div class="form1-i ">
      <input type="text" class="form1-input short-i" placeholder="Match Official Name" v-model="name">
      <input type="text" class="form1-input short-i" placeholder="Region"  v-model="Region">
      </div>
    </div>
    </div>
  <!-- input container  -->
  <div class="form1-wrapper f2-w">
    <div class="form1-w f2-i">
    <label for="">Assistant Referee II</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Match Official Name" v-model="name">
      <input type="text" class="form1-input short-i" placeholder="Region"  v-model="Region">
      </div>
    </div>
    </div>
  <!-- input container  -->
  <div class="form1-wrapper f2-w">
    <div class="form1-w f2-i">
    <label for="">Fourth Official</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Match Official Name" v-model="name">
      <input type="text" class="form1-input short-i" placeholder="Region"  v-model="Region">
      </div>
    </div>
    </div>
  <!-- input container  -->
  <div class="form1-wrapper f2-w">
    <div class="form1-w f2-i">
    <label for="">Commissioner</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Match Official Name" v-model="name">
      <input type="text" class="form1-input short-i" placeholder="Region"  v-model="Region">
      </div>
    </div>
    </div>
  <!-- input container  -->
  <div class="form1-wrapper f2-w">
    <div class="form1-w f2-i">
    <label for="">Match Doctor</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Match Official Name">
      <input type="text" class="form1-input short-i" placeholder="Region">
      </div>
    </div>
    </div>
  <!-- input container  -->
  <div class="form1-wrapper f2-w">
    <div class="form1-w f2-i">
    <label for="">Office For Marketing</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Match Official Name">
      <input type="text" class="form1-input short-i" placeholder="Region">
      </div>
    </div>
    </div>
  <!-- input container  -->
  <div class="form1-wrapper f2-w">
    <div class="form1-w f2-i">
    <label for="">Media Officer</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Match Official Name" v-model="name">
      <input type="text" class="form1-input short-i" placeholder="Region"  v-model="Region">
      </div>
    </div>
    </div>
  <!-- input container  -->
<div class="count-down-w f2-i">
  <h3>The CountDown was respected by both teams: 
   <div class="count-i">
    <input
            type="radio"
            id="yes"
            value="yes"
            v-model="yes"
          />
          <label for="ascending">Yes</label>
          <input
            type="radio"
            id="No"
            value="No"
            v-model="No"
          />
          <label for="ascending">No</label>
   </div>
  </h3>
</div>
 <!-- input container  -->
 <div class="btn1-center">
      <div class="form1-btn">
        <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="isSubmitted" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''">Next</button>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/form.css";
</style>
