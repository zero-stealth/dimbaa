<script setup>
import axios from "axios";
import { useNextStore } from "@/stores/next.js";
import { onMounted } from "vue";

const nextStore = useNextStore();
// endpoint not working
onMounted(async () => {
  const options = {
    method: "GET",
    url: "https://be-tblp.dimbaa.com/api/referee-assessor/list-match-events",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNWZhMGRiODY3YTM0NTg3MTg2ZDk3MDdiMDBmYzliYWM4M2QyZjAzOWM2ZjhjZjVlMTRlMWUwY2UxZGYxYmRhNDdiYWYxNWEyMjJhMDhkMmIiLCJpYXQiOjE2NzExOTM1MzguNTU0MTM0LCJuYmYiOjE2NzExOTM1MzguNTU0MTM2LCJleHAiOjE2ODY5MTgzMzguNTQ4NTAxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.kYBwzo9ZoKTL9GG_j9iMpswww1UriiHYPufljSVJo_5QyLiJrI4Wb2k0sPD7iDb0SmlrFQnUdSI8knqLUZBe2Sd2bC4r4c_otOdYLnQAyxmM-0fJh_jVIGYgCjFF7msWOWsTcyl8fg7-Uj3yrsAxoxOdQW-L28dx4-hFAZUR9eOs2XCwU0cf9TUnGdqxvUm_wFBBou509NtZec1bmaAgUbG9GSpAfk7mfmuUOU1u7ElrOTFyvvN4bAI_70DpK3XUDJ0Nw81YsCO0_kp_Nr1hAZ2fmcIPXe-xKvwSPfp_7cMmT6HqV9MdQwPK7-ISoJq_eTy2fGvfHDQrWyKLDyKp8W0Fs5z6PURwT2hFZ6tV3jxCMH-sAzgTY72xXdb3EjG4etbbyc-wAWXmPQ9WB5SeOms2Xqm4M41XQbNeyK-qy2jYcDQLnYVnRZihWdBTLcBf64_DFuMWzRhvu4hTL8_fVu94whAWW-Oi9-s7BKRftDf3paExjJtEaT6-kUDnzRpe_Yfw9nfWDxA8LYUUsukYDDqvSshVRk5eG6kp3K169pppD7gAKakpORggebMgEHn4DGX7ieowJk3XCfDrIxZ5EVoX3HGZjamaRPmnl-bX2lvBTjBm3uFSGrLnMbckzS4fdpYK3YnNmyBESm9-sOCQ-5M3Nf6jsFQH6FdeWnGoo0E",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.events;
      console.log(data.value);
    })
    .catch(function (error) {
      console.error(error);
    });
});


</script>
<template>
  <div class="detail-container">
    <h2>About the Match</h2>
    <form action="" class="d-form">
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Competition:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Mobile:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Region:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Team A:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Date:</label>
          <input type="date" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Venue:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Center:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Kick Off:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
      </div>
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Assessor Name:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Email:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Team B:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Half time score:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">In favour of:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Final Score:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">In favour of:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
      </div>
    </form>
  </div>
  <div class="btn1-center">
    <div class="form1-btn">
        <button class="btn1 btn1-a" @click="reset"  :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="submitted" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updateNextState()">Next</button>
      </div>
  </div>
</template>
<style>
@import "@/style/general.css";
</style>
