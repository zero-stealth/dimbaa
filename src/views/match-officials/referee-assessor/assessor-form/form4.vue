<script setup></script>
<template>
  <div class="assess-container">
    <h2>Evaluation of the referee</h2>
    <div class="assess-inner">
      <div class="assess-wrapper">
        <div class="assess-i">
          <h1>Team work</h1>
          <li>
            <ol>
              <p>
              Cooperation with assistant referees and fourth official
              </p>
            </ol>
          </li>
        </div>
        <div class="assess-ir">
          <label for="">Perfomance:</label>
          <input type="text" placeholder="Type here" class="form1-input" />
        </div>
      </div>
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Positive Points:</label>
          <input type="text" class="form1-input long-r" />
          <input type="text" class="form1-input long-r" />
          <input type="text" class="form1-input long-r" />
        </div>
        <div class="asses-inner2-r">
          <label for="">Minutes:</label>
          <input type="text" class="form1-input short-r" />
          <input type="text" class="form1-input short-r" />
          <input type="text" class="form1-input short-r" />
        </div>
      </div>
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Area of improvement:</label>
          <input type="text" class="form1-input long-r" />
          <input type="text" class="form1-input long-r" />
          <input type="text" class="form1-input long-r" />
        </div>
        <div class="asses-inner2-r">
          <label for="">Minutes:</label>
          <input type="text" class="form1-input short-r" />
          <input type="text" class="form1-input short-r" />
          <input type="text" class="form1-input short-r" />
        </div>
      </div>
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Additional comments on control of the game:</label>
          <input type="text" class="form1-input long-r" />
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
