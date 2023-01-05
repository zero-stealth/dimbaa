<script></script>
<template>
  <div class="form1-container">
    <!-- input container  -->
    <div class="count-down-w count-d-c c3 f2-i">
        <h3>
        Match coordination meeting held:
          <div class="count-i ">
            <input type="radio" id="yes" value="yes" v-model="yes" />
            <label for="ascending">Yes</label>
            <input type="radio" id="No" value="No" v-model="No" />
            <label for="ascending">No</label>
          </div>
        </h3>
    </div>

    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Meeting Date</label>
        <div class="form1-i">
          <input type="text" class="form1-input short-i" placeholder="date" />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">If no why?</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Explain here"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Comment</label>
        <div class="form1-i">
          <input type="text" class="form1-input short-i" placeholder="Type" />
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
@import "@/style/form.css";
</style>
