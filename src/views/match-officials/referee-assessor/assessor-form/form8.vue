<script setup></script>
<template>
  <div class="assess-container">
    <h2>Additional Remarks</h2>
    <div class="assess-inner">
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Assistant Referee 1</label>
          <input type="text" class="form1-input long-r" />
          <input type="text" class="form1-input long-r" />
        </div>
        <div class="asses-inner2-r">
          <label for="">Marks:</label>
          <input type="text" class="form1-input short-r" />
          <input type="text" class="form1-input short-r" />
        </div>
      </div>
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Assistant Referee 2</label>
          <input type="text" class="form1-input long-r" />
          <input type="text" class="form1-input long-r" />
        </div>
        <div class="asses-inner2-r">
          <label for="">Marks:</label>
          <input type="text" class="form1-input short-r" />
          <input type="text" class="form1-input short-r" />
        </div>
      </div>
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner8-r">
          <label for="">Date:</label>
          <input type="date" class="form1-input short-r" />
        </div>
        <div class="asses-inner2-r inner8-r">
          <label for="">Signature:</label>
          <input type="text" class="form1-input short-r" />
        </div>
      </div>
    </div>
  </div>
  <div class="btn1-center">
    <div class="form1-btn">
      <button class="btn1 btn1-a">Reset</button>
      <button class="btn1 btn1-b hide-m">Save draft</button>
      <button class="btn1 btn1-b">Next</button>
    </div>
  </div>
</template>
<style>
@import "@/style/referee-asss.css";
</style>
