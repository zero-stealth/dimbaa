<script setup></script>
<template>
  <div class="f-pwr">
    <h1>Tathimina ya nidhamu na tabia ya timu</h1>
    <h1>Score</h1>
    <div class="f-con-r">
      <div class="f-pw">
        <div class="fp-w1">
          <div class="w1-con-p">
            <input
              type="text"
              class="w1-input qo-qr"
              placeholder="Red & Yellow  Cards"
            />
            <input
              type="text"
              class="w1-input qo-qr"
              placeholder="Positive Play"
            />
            <input
              type="text"
              class="w1-input qo-qr"
              placeholder="Respect towards the opponent"
            />
            <input
              type="text"
              class="w1-input qo-qr"
              placeholder="Respect towards the referees"
            />
            <input
              type="text"
              class="w1-input qo-qr"
              placeholder="Behavior of the officials"
            />
            <input
              type="text"
              class="w1-input qo-qr"
              placeholder="Behavior of the supporters"
            />
            <input
              type="text"
              class="w1-input qo-qr"
              placeholder="Discipline & Organisation when entering the field"
            />
            <input
              type="text"
              class="w1-input qo-qr"
              placeholder="Discipline & Organisation when leaving the field"
            />
            <input
              type="text"
              class="w1-input qo-qr rpr" 
              placeholder="Total"
            />
          </div>
          <div class="w1-con-p">
            <h3 class="w1-input qor">10 Points</h3>
            <h3 class="w1-input qor">10 Points</h3>
            <h3 class="w1-input qor">15 Points</h3>
            <h3 class="w1-input qor">20 Points</h3>
            <h3 class="w1-input qor">15 Points</h3>
            <h3 class="w1-input qor">20 Points</h3>
            <h3 class="w1-input qor">5 points</h3>
            <h3 class="w1-input qor">5 points</h3>
            <h3 class="w1-input qor">100 Points</h3>
          </div>
        </div>
        <div class="fp-werw">
          <div class="w1-fpw">
            <div class="er-t">
              <label for="">Team B</label>
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
            </div>
            <div class="er-t">
              <label for="">Team B</label>
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
              <input type="text" class="w1-input fw-qi" />
            </div>
          </div>
        </div>
        <div class="fp-wre">
          <h1>Ufunguo/key</h1>
          <div class="key-p">
            <div>First yellow card <span>-1</span></div>
            <div>Indirect red card <span>-4</span></div>
            <div>Direct red card <span>-4</span></div>
            <div>Yellow card & Direct red <span>-5</span></div>
          </div>
          <h1>(Formula:Total X 10/100)</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- input container  -->
  <div class="btn1-center m-rp">
    <div class="form1-btn">
      <button class="btn1 btn1-a">Reset</button>
      <button class="btn1 btn1-b hide-m">Update</button>
      <button class="btn1 btn1-b">Next</button>
    </div>
  </div>
</template>
<style>
@import "@/style/post5.css";
</style>
