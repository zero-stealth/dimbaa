<script setup>
import axios from "axios";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";

const JerseyNumber = ref("");
const data = ref([]);


const filling = ref("");

const url = "https://be-tblp.dimbaa.com/api/teammanager/players"


//api
const searchResult = computed(() => {
  return data.value.filter((d) => d.jersey_number.includes(JerseyNumber.value));
});

const pos = searchResult.value.playing_position;
const first = searchResult.value.first_name;
const middle = searchResult.value.middle_name;
const last = searchResult.value.middle_name;
const full_name = `${first}${middle}${last}`

watchEffect(() => {
  if (JerseyNumber.value != '') {
    filling.value = true;
  } else {
    filling.value = false;
  }
})

console.log(pos.value)

onMounted(async () => {
  const options = {
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNWZhMGRiODY3YTM0NTg3MTg2ZDk3MDdiMDBmYzliYWM4M2QyZjAzOWM2ZjhjZjVlMTRlMWUwY2UxZGYxYmRhNDdiYWYxNWEyMjJhMDhkMmIiLCJpYXQiOjE2NzExOTM1MzguNTU0MTM0LCJuYmYiOjE2NzExOTM1MzguNTU0MTM2LCJleHAiOjE2ODY5MTgzMzguNTQ4NTAxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.kYBwzo9ZoKTL9GG_j9iMpswww1UriiHYPufljSVJo_5QyLiJrI4Wb2k0sPD7iDb0SmlrFQnUdSI8knqLUZBe2Sd2bC4r4c_otOdYLnQAyxmM-0fJh_jVIGYgCjFF7msWOWsTcyl8fg7-Uj3yrsAxoxOdQW-L28dx4-hFAZUR9eOs2XCwU0cf9TUnGdqxvUm_wFBBou509NtZec1bmaAgUbG9GSpAfk7mfmuUOU1u7ElrOTFyvvN4bAI_70DpK3XUDJ0Nw81YsCO0_kp_Nr1hAZ2fmcIPXe-xKvwSPfp_7cMmT6HqV9MdQwPK7-ISoJq_eTy2fGvfHDQrWyKLDyKp8W0Fs5z6PURwT2hFZ6tV3jxCMH-sAzgTY72xXdb3EjG4etbbyc-wAWXmPQ9WB5SeOms2Xqm4M41XQbNeyK-qy2jYcDQLnYVnRZihWdBTLcBf64_DFuMWzRhvu4hTL8_fVu94whAWW-Oi9-s7BKRftDf3paExjJtEaT6-kUDnzRpe_Yfw9nfWDxA8LYUUsukYDDqvSshVRk5eG6kp3K169pppD7gAKakpORggebMgEHn4DGX7ieowJk3XCfDrIxZ5EVoX3HGZjamaRPmnl-bX2lvBTjBm3uFSGrLnMbckzS4fdpYK3YnNmyBESm9-sOCQ-5M3Nf6jsFQH6FdeWnGoo0E",
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      data.value = response.data.players;
    })
    .catch(function (error) {
      console.error(error);
    });
});

</script>
<template>
  <div class="form1-container r1">
  <h1>Starting squad/wanaoanza </h1>
  <!-- input container  -->
  <div class="r-conquer">
  <div class="r-divider">
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No" V-model="JerseyNumber">
    <input type="text" class="form1-input short-r"   :placeholder="pos">
      <input type="text" class="form1-input short-i" :placeholder="full_name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
  </div>
  <div class="r-divider">
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
    <div class="form1-wrapper r-f">
    <div class="form1-i">
      <input type="text" class="form1-input short-r" placeholder="J/No">
      <input type="text" class="form1-input short-r" placeholder="Pos">
      <input type="text" class="form1-input short-i" placeholder="Team A Player Name">
      <input type="text" class="form1-input short-r" placeholder="Leseni">
      </div>
    </div>
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
</template>
<style>
@import "@/style/form.css";
@import "@/style/report.css";
</style>
