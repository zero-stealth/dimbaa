<script></script>
<template>
  <div class="form4-container">
    <!-- input container  -->
    <div class="form4-con">
      <div class="form4-wrapper">
      <div class="count-down-w f4-w">
        <h3>
          Strecher:
          <div class="count-i">
            <input type="radio" id="Available" value="Available" v-model="Available" />
            <label for="ascending">Available</label>
            <input type="radio" id="Not Available" value="Not Available" v-model="notAvailable" />
            <label for="ascending">Not Available</label>
          </div>
        </h3>
      </div>
      <div class="count-down-w f4-w">
        <h3>
          Ambulance:
          <div class="count-i">
            <input type="radio" id="Available" value="Available" v-model="Available" />
            <label for="ascending">Available</label>
            <input type="radio" id="Not Available" value="Not Available" v-model="notAvailable" />
            <label for="ascending">Not Available</label>
          </div>
        </h3>
      </div>
      <div class="form4-w">
        <label for="">On the pole</label>
        <div class="form4-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="type here"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form4-wrapper">
   
      <div class="form4-w">
        <label for="">On the pole</label>
        <div class="form4-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Type here"
          />
        </div>
      </div>
    </div>
  </div>
      <div class="form1-btn">
        <button class="btn1 btn1-a">Reset</button>
        <button class="btn1 btn1-b hide-m">Save draft</button>
        <button class="btn1 btn1-b">Next</button>
      </div>
  </div>
</template>
<style>
@import "@/style/form4.css";
</style>
