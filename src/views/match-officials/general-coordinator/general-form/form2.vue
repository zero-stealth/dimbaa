<script setup>
import axios from "axios";
import { ref, watchEffect, onMounted } from "vue";
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
const filling = ref(false);
const CountDown = ref(false);
const Rname = ref("");
const Rregion = ref("");
const A1name = ref("");
const A1region = ref("");
const A2name = ref("");
const A2region = ref("");
const Oname = ref("");
const Oregion = ref("");
const Cname = ref("");
const Cregion = ref("");
const Dname = ref("");
const Dregion = ref("");
const Mname = ref("");
const Mregion = ref("");
const MOname = ref("");
const MOregion = ref("");
const Sname = ref("");
const Sregion = ref("");

watchEffect(() => {
  if (Rregion.value != "" || Rname.value != "") {
    filling.value = true;
  } else {
    filling.value = false;
  }
});

const toggleC = () => {
   CountDown.value = !CountDown.value 
  }

const Submit = () => {
  const data = JSON.stringify({
    "match": "ad",
     "countdown": CountDown.value,
    "refree": {
      "user": Rname.value,
      "region": Rregion.value,
    },
    assistant_referee_one: {
      "user": A1name.value,
      "region": A1region.value,
    },
    assistant_referee_two: {
      "user": A2name.value,
      "region": A2region.value,
    },
    fourth_official: {
      "user": Oname.value,
      "region": Oregion.value,
    },
    commissionar: {
      "user": Cname.value,
      "region": Cregion
    },
    match_doctor: {
      "user": Dname.value,
      "region": Dregion.value,
    },
    officer_for_marketing: {
      "user": Mname.value,
      "region": Mregion.value,
    },
    media_officer: {
      "user": MOname.value,
      "region": MOregion.value,
    },
    security_officer: {
      "user": Sname.value,
      "region": Sregion.value,
    },
  });



  onMounted(async () => {
    const options = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "https://be-tblp.dimbaa.com/api/general-coordinator/match_official",
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
};
</script>
<template>
  <div class="form1-container">
    <h1>Match Officials</h1>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Referee</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Match Official Name"
            v-model="Rname"
          />
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Region"
            v-model="Rregion"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Assistant Referee I</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Match Official Name"
            v-model="A1name"
          />
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Region"
            v-model="A1region"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Assistant Referee II</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Match Official Name"
            v-model="A2name"
          />
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Region"
            v-model="A2region"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Fourth Official</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Match Official Name"
            v-model="Oname"
          />
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Region"
            v-model="Oregion"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Commissioner</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Match Official Name"
            v-model="Cname"
          />
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Region"
            v-model="Cregion"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Match Doctor</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Match Official Name"
            v-model="Dname"
          />
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Region"
            v-model="Dregion"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Office For Marketing</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Match Official Name"
            v-model="Mname"
          />
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Region"
            v-model="Mregion"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Media Officer</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Match Official Name"
            v-model="MOname"
          />
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Region"
            v-model="MOregion"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Security Officer</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Match Official Name"
            v-model="Sname"
          />
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Region"
            v-model="Sregion"
          />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="count-down-w f2-i">
      <h3>
        The CountDown was respected by both teams:
        <div class="count-i">
          <!-- custom made radio  -->
          <div class="radio-wrapper" @click="toggleC">
            <div class="inner-radio" v-show="CountDown == true"></div>
          </div>
          <label for="">Yes</label>
          <!-- custom made radio  -->
          <div class="radio-wrapper" @click="toggleC">
            <div class="inner-radio" v-show="CountDown == false"></div>
          </div>
          <label for="">No</label>
          <!-- custom made radio  -->
        </div>
      </h3>
    </div>
    <!-- input container  -->
    <div class="btn1-center">
      <div class="form1-btn">
        <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">
          Reset
        </button>
        <button
          class="btn1 btn1-b hide-m"
          :class="filling == true ? 'filling' : ''"
        >
          Save draft
        </button>
        <button
          class="btn1 btn1-b"
          :class="filling == true ? 'filling' : ''"
          @click="nextStore.updatePreviousState()"
        >
          Previous
        </button>
        <button
          class="btn1 btn1-b"
          :class="filling == true ? 'filling' : ''"
          @click="nextStore.updateNextState()"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/form.css";
</style>
