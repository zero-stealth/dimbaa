<script setup>
import axios from "axios";
import { ref, onMounted, watchEffect } from "vue";

const teamHA = ref("");
const teamHB = ref("");
const teamFA = ref("");
const teamFB = ref("");
const filling = ref("");

watchEffect(() => {
  if (teamHA.value != '' || teamHB.value != '' || teamFA.value != '' || teamFB.value != '') {
    filling.value = true;
  } else {
    filling.value = false;
  }
})

const isSubmitted = () => {



  const data = JSON.stringify({
    "match": "1",
    "halftime_score": {
      "team1": 0,
      "team2": 0
    },
    "final_score": {
      "team1": 0,
      "team2": 0
    }
  });


  onMounted(async () => {
    const options = {
      method: "POST",
      url: "https://be-tblp.dimbaa.com/api/referee/team-results",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNWZhMGRiODY3YTM0NTg3MTg2ZDk3MDdiMDBmYzliYWM4M2QyZjAzOWM2ZjhjZjVlMTRlMWUwY2UxZGYxYmRhNDdiYWYxNWEyMjJhMDhkMmIiLCJpYXQiOjE2NzExOTM1MzguNTU0MTM0LCJuYmYiOjE2NzExOTM1MzguNTU0MTM2LCJleHAiOjE2ODY5MTgzMzguNTQ4NTAxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.kYBwzo9ZoKTL9GG_j9iMpswww1UriiHYPufljSVJo_5QyLiJrI4Wb2k0sPD7iDb0SmlrFQnUdSI8knqLUZBe2Sd2bC4r4c_otOdYLnQAyxmM-0fJh_jVIGYgCjFF7msWOWsTcyl8fg7-Uj3yrsAxoxOdQW-L28dx4-hFAZUR9eOs2XCwU0cf9TUnGdqxvUm_wFBBou509NtZec1bmaAgUbG9GSpAfk7mfmuUOU1u7ElrOTFyvvN4bAI_70DpK3XUDJ0Nw81YsCO0_kp_Nr1hAZ2fmcIPXe-xKvwSPfp_7cMmT6HqV9MdQwPK7-ISoJq_eTy2fGvfHDQrWyKLDyKp8W0Fs5z6PURwT2hFZ6tV3jxCMH-sAzgTY72xXdb3EjG4etbbyc-wAWXmPQ9WB5SeOms2Xqm4M41XQbNeyK-qy2jYcDQLnYVnRZihWdBTLcBf64_DFuMWzRhvu4hTL8_fVu94whAWW-Oi9-s7BKRftDf3paExjJtEaT6-kUDnzRpe_Yfw9nfWDxA8LYUUsukYDDqvSshVRk5eG6kp3K169pppD7gAKakpORggebMgEHn4DGX7ieowJk3XCfDrIxZ5EVoX3HGZjamaRPmnl-bX2lvBTjBm3uFSGrLnMbckzS4fdpYK3YnNmyBESm9-sOCQ-5M3Nf6jsFQH6FdeWnGoo0E",
      },
      data: data,
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

const reset = () => {
  
  teamHA.value = "";
  teamHB.value = "";
  teamFA.value = "";
  teamFB.value = "";

}


</script>
<template>
  <div class="form1-container">
    <h1>Referee</h1>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Final score</label>
        <div class="form1-i">
          <div class="form1-input short-i">
          </div>
          <input type="text" class="form1-input short-i" placeholder="Team A" V-model="teamFA">
          <input type="text" class="form1-input short-i" placeholder="Team B" V-model="teamFB">
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Half time</label>
        <div class="form1-i ">
          <input type="text" class="form1-input short-i" placeholder="Team A" V-model="teamHA">
          <input type="text" class="form1-input short-i" placeholder="Team B" V-model="teamHB">
        </div>
      </div>
    </div>
    <div class="btn1-center">
      <div class="form1-btn">
        <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="isSubmitted" :class="filling == true ? 'filling' : ''">Save
          draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''">Next</button>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/form.css";
</style>
