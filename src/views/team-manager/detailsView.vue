<script setup>
import { ref } from "vue";

const selected = ref()
</script>
<template>
  <div class="detail-container">
    <form action="" class="d-form">
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Team A</label>
          <input type="text" placeholder="predefined" class="d-input">
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Date</label>
          <input type="text" placeholder="predefined" class="d-input">
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Time</label>
          <input type="text" placeholder="predefined" class="d-input">
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Venue</label>
          <input type="text" placeholder="predefined" class="d-input">
        </div>
      </div>
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Team B</label>
          <input type="text" placeholder="predefined" class="d-input">
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Date</label>
          <input type="text" placeholder="predefined" class="d-input">
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Time</label>
          <input type="text" placeholder="predefined" class="d-input">
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Venue</label>
          <input type="text" placeholder="predefined" class="d-input">
        </div>
      </div>
    </form>
  </div>
  <div class="btn1-center">
    <div class="form1-btn">
      <button class="btn1 btn1-a">Reset</button>
      <button class="btn1 btn1-b hide-m">Save draft</button>
      <button class="btn1 btn1-b">Next</button>
    </div>
  </div>
</template>
<script setup>
</script>
<style>
@import "@/style/general.css"
</style>