<script></script>
<template>
  <div class="form4-container">
    <!-- input container  -->
    <div class="form4-con">
      <div class="form4-wrapper">
      <div class="count-down-w count-d-c">
        <h3>
          Position of benches respected by both team:
          <div class="count-i">
            <input type="radio" id="yes" value="yes" v-model="yes" />
            <label for="ascending">Yes</label>
            <input type="radio" id="No" value="No" v-model="No" />
            <label for="ascending">No</label>
          </div>
        </h3>
      </div>

      <div class="form4-w form5-i">
        <label for="">If No, why?</label>
        <div class="form4-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Type here"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form4-wrapper">
      <div class="count-down-w count-d-c1">
        <h3>
          Perfomance of flag bearers:
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
      <div class="count-down-w count-d-c1">
        <h3>
          Perfomance of Ball Boys:
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
      <div class="count-down-w count-d-c1">
        <h3>
          Perfomance of Team escorts:
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
      <div class="count-down-w count-d-c1">
        <h3>
          Behaviour of the Two teams:
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
