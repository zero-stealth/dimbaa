<script setup>
import {ref} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();

const acknowledge = ref(false);

</script>
<template>
  <div class="form1-container r9">
    <!-- form input container  -->
    <div class="form-ark">
      <input type="checkbox" id="checkbox" v-model="acknowledge" />  <h1>I confirm that this form has the correct team mentioned playing with</h1>
    </div>
    <div class="form9-r">
    <label for="">Team of</label>
    <div type="text" class="form1-input i-r8">
      <span>Predefined</span>
    </div>
    </div>
    <div class="form9-r">
    <label for="">Current Date</label>
    <div type="text" class="form1-input i-r8">
      <span>Predefined</span>
    </div>
    </div>
    <!-- form input container  -->
      <div class="form9-r">
    <label for="">Manager's Signature</label>
    <div type="text" class="form1-input i-r8">
      <span>Predefined</span>
    </div>
    </div>
    <div class="form9-r">
    <label for="">Coach's Signature</label>
    <div type="text" class="form1-input i-r8">
      <span>Predefined</span>
    </div>
    </div>
  </div>
      <!-- form input container  -->
      <div class="btn1-center">
      <div class="form1-btn">
        <button class="btn1 btn1-a">Reset</button>
        <button class="btn1 btn1-b hide-m">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updatePreviousState()">Previous</button>
        <button class="btn1 btn1-b " v-if="acknowledge == true">Submit</button>
        <button class="btn1 btn1-b " v-else disabled>Submit</button>
      </div>
    </div>
</template>
<style>
@import "@/style/report.css";
</style>
