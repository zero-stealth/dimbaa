<script setup>
import { ref } from "vue";

const selected = ref()
</script>
<template>
  <div class="detail-container">
    <form action="" class="d-form">
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Competition</label>
          <select v-model="selected" class="selected-ps">
            <option>competition1</option>
            <option>competition2</option>
            <option>competition3</option>
          </select>
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Team</label>
          <select v-model="selected" class="selected-ps">
            <option>Team1</option>
            <option>Team2</option>
            <option>Team3</option>
          </select>
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Date</label>
          <select v-model="selected" class="selected-ps">
            <option>date1</option>
            <option>date2</option>
            <option>date3</option>
          </select>
        </div>
      </div>
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Playing With</label>
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