<script setup>
import axios from "axios";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";

const filling = ref(false);
const submitted = ref(false);
const performance = ref("");
const improvements = ref("");
const comment = ref("");
const Iminutes = ref("");
const Pminutes = ref("");
const points = ref("");

watchEffect(() => {
  if(performance.value != '' || improvements.value != '' || Iminutes.value != '' || Pminutes.value != '' || points.value != '' || comment.value != '') {
    filling.value = true;
  } else {
    filling.value = false;
  }
})


const reset = () => {
 performance.value = "";
 improvements.value = "";
 comment.value = "";
 Iminutes.value = "";
Pminutes.value = "";
 points.value = "";
}



const data = JSON.stringify({
  "match": performance.value,
  "area_of_improvements": [
    {
      "area_of_improvements": improvements.value,
      "minutes": Iminutes.value
    }
  ],
  "positive_points": [
    {
      "positive_points": points.value,
      "minutes": Pminutes,
    }
  ]
});


const isSubmitted = () => {



const data = JSON.stringify({
  "match": performance.value,
  "area_of_improvements": [
    {
      "area_of_improvements": improvements.value,
      "minutes": Iminutes.value
    }
  ],
  "positive_points": [
    {
      "positive_points": points.value,
      "minutes": Pminutes,
    }
  ]
});


onMounted(async () => {
  const options = {
    method:"POST",
    url: "https://be-tblp.dimbaa.com/api/referee-assessor/referee-evaluation/team-work-two",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNWZhMGRiODY3YTM0NTg3MTg2ZDk3MDdiMDBmYzliYWM4M2QyZjAzOWM2ZjhjZjVlMTRlMWUwY2UxZGYxYmRhNDdiYWYxNWEyMjJhMDhkMmIiLCJpYXQiOjE2NzExOTM1MzguNTU0MTM0LCJuYmYiOjE2NzExOTM1MzguNTU0MTM2LCJleHAiOjE2ODY5MTgzMzguNTQ4NTAxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.kYBwzo9ZoKTL9GG_j9iMpswww1UriiHYPufljSVJo_5QyLiJrI4Wb2k0sPD7iDb0SmlrFQnUdSI8knqLUZBe2Sd2bC4r4c_otOdYLnQAyxmM-0fJh_jVIGYgCjFF7msWOWsTcyl8fg7-Uj3yrsAxoxOdQW-L28dx4-hFAZUR9eOs2XCwU0cf9TUnGdqxvUm_wFBBou509NtZec1bmaAgUbG9GSpAfk7mfmuUOU1u7ElrOTFyvvN4bAI_70DpK3XUDJ0Nw81YsCO0_kp_Nr1hAZ2fmcIPXe-xKvwSPfp_7cMmT6HqV9MdQwPK7-ISoJq_eTy2fGvfHDQrWyKLDyKp8W0Fs5z6PURwT2hFZ6tV3jxCMH-sAzgTY72xXdb3EjG4etbbyc-wAWXmPQ9WB5SeOms2Xqm4M41XQbNeyK-qy2jYcDQLnYVnRZihWdBTLcBf64_DFuMWzRhvu4hTL8_fVu94whAWW-Oi9-s7BKRftDf3paExjJtEaT6-kUDnzRpe_Yfw9nfWDxA8LYUUsukYDDqvSshVRk5eG6kp3K169pppD7gAKakpORggebMgEHn4DGX7ieowJk3XCfDrIxZ5EVoX3HGZjamaRPmnl-bX2lvBTjBm3uFSGrLnMbckzS4fdpYK3YnNmyBESm9-sOCQ-5M3Nf6jsFQH6FdeWnGoo0E",
    },
    data:  data,
  };

 await axios
    .request(options)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.error(error);
    });
});

reset();

}

</script>
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
          <input type="text" placeholder="Type here" class="form1-input" v-model="performance" />
        </div>
      </div>
    <!-- styling part 2  -->
    <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Positive Points:</label>
          <input type="text" class="form1-input long-r" v-model="points"/>
          <!-- <input type="text" class="form1-input long-r" /> -->
          <!-- <input type="text" class="form1-input long-r" /> -->
        </div>
        <div class="asses-inner2-r">
          <label for="">Minutes:</label>
          <input type="text" class="form1-input short-r" v-model="Pminutes " />
          <!-- <input type="text" class="form1-input short-r" /> -->
          <!-- <input type="text" class="form1-input short-r" /> -->
        </div>
      </div>
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Area of improvement:</label>
          <input type="text" class="form1-input long-r" v-model="improvements"/>
          <!-- <input type="text" class="form1-input long-r" /> -->
          <!-- <input type="text" class="form1-input long-r" /> -->
        </div>
        <div class="asses-inner2-r">
          <label for="">Minutes:</label>
          <input type="text" class="form1-input short-r" v-model="Iminutes"/>
          <!-- <input type="text" class="form1-input short-r" /> -->
          <!-- <input type="text" class="form1-input short-r" /> -->
        </div>
      </div>
      <!-- styling part 2  -->
      <div class="assess-inner2">
        <div class="asses-inner2-r inner2r-r">
          <label for="">Additional comments on control of the game:</label>
          <input type="text" class="form1-input long-r" v-model="comment"/>
        </div>
      </div>
    </div>
  </div>
  <div class="btn1-center">
      <div class="form1-btn">
        <button class="btn1 btn1-a" @click="reset" :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''"  @click="isSubmitted">Next</button>
      </div>
    </div>
</template>
<style>
@import "@/style/referee-asss.css";
</style>
