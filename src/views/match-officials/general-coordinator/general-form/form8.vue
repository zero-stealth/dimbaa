<script></script>
<template>
  <div class="form4-container ">
    <!-- input container  -->
    <div class="form4-con">
      <div class="form4-wrapper">
      <div class="count-down-w count-d-c">
        <h3>
          Condition of the dressing room:
          <div class="count-i">
            <input type="radio" id="Good" value="Good" v-model="Good" />
            <label for="ascending">Good</label>
            <input type="radio" id="Average" value="Average" v-model="Average" />
            <label for="ascending">Average</label>
            <input type="radio" id="Bad" value="Bad" v-model="Bad" />
            <label for="ascending">Bad</label>
          </div>
        </h3>
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
