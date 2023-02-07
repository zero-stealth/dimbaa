<script setup>
import issue from "./pre/IssueView.vue";
import match from "./pre/matchView.vue";
import color from "./pre/colorView.vue";
import final from "./pre/finalView.vue";
import condition from "./pre/condtionView.vue";
import challenge from "./pre/challengeView.vue";
import operations from "./pre/operationView.vue";
import cooperation from "./pre/cooperationView.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

import { useNextStore } from "@/stores/next.js";
import { useDrawerStore } from "@/stores/drawer";
import { useAuthStore } from "@/stores/auth.js";
import { shallowRef } from "vue";

import { ref, onMounted, computed, watchEffect } from "vue";
import axios from "axios";

const prePage = shallowRef(match)
const drawerStore = useDrawerStore();
const authStore = useAuthStore();
const nextStore = useNextStore();
const drawerStatus = ref(null);
const open = ref(null);
const data = ref([]);


// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

onMounted(async () => {
  const options = {
    method: "GET",
    url: "https://be-tblp.dimbaa.com/api/admin/users",
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
      data.value = response.data.users;
    })
    .catch(function (error) {
      console.error(error);
    });
});


const matchF = () => {
  prePage.value = match;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const conditionF = () => {
  prePage.value = condition;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;


}

const operationsF = () => {
  prePage.value = operations;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;


}

const cooperationF = () => {
  prePage.value = cooperation;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;


}

const colorF = () => {
  prePage.value = color;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;


}

const issueF = () => {
  prePage.value = issue;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const challengeF = () => {
  prePage.value = challenge;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const finalF = () => {
  prePage.value = final;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

// checks the active button and sets the next button
watchEffect(() => {
  switch (prePage.value) {
    case match:
      if (nextStore.nextRouteState != false) {
        conditionF();
      };
      break;
    case condition:
      if (nextStore.nextRouteState != false) {
        operationsF()
        console.log(prePage.value)
      };
      break;
    case operations:
      if (nextStore.nextRouteState != false) {
        cooperationF()
      };
      break;
    case cooperation:
      if (nextStore.nextRouteState != false) {
        colorF()
      };
      break;
    case color:
      if (nextStore.nextRouteState != false) {
        issueF()
      };
      break;
    case issue:
      if (nextStore.nextRouteState != false) {
        challengeF()
      };
      break;
    case challenge:
      if (nextStore.nextRouteState != false) {
        finalF()
      };
      break;
    default:
      break;
  }
});

// checks the active button and sets the previous button
watchEffect(() => {
  switch (prePage.value) {
    case condition:
      if (nextStore.previousRouteState != false) {
        matchF();
        console.log(nextStore.previousRouteState)
      };
      break;
    case operations:
      if (nextStore.previousRouteState != false) {
        conditionF();
      };
      break;
    case cooperation:
      if (nextStore.previousRouteState != false) {
        operationsF();
      };
      break;
    case color:
      if (nextStore.previousRouteState != false) {
        cooperationF();
      };
      break;
    case issue:
      if (nextStore.previousRouteState != false) {
        colorF();
      };
      break;
    case challenge:
      if (nextStore.previousRouteState != false) {
        issueF();
      };
      break;
    case final:
      if (nextStore.previousRouteState != false) {
        challengeF();
      };
      break;
    default:
      break;
  }
});




</script>
<template>
  <div class="main-container">
    <div class="nav-top">
      <div class="second-t data-b">
        <button class="second-btn " @click="drawerStore.togglePre()">
          <ArrowIcon class="icon icon-s" />
        </button>
        <div class="general-re">
          <h2>Pre-Match Report</h2>
        </div>
      </div>
    </div>
    <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
        <button class="data-n-b" @click="matchF" :class="[prePage == match ? 'datapage' : '']">
          Match
        </button>
        <button class="data-n-b" @click="conditionF" :class="[prePage == condition ? 'datapage' : '']">
          Conditions
        </button>
        <button class="data-n-b" @click="operationsF" :class="[prePage == operations ? 'datapage' : '']">
          Operations
        </button>
        <button class="data-n-b" @click="cooperationF" :class="[prePage == cooperation ? 'datapage' : '']">
          Cooperations
        </button>
        <button class="data-n-b" @click="colorF" :class="[prePage == color ? 'datapage' : '']">
          Color
        </button>
        <button class="data-n-b" @click="issueF" :class="[prePage == issue ? 'datapage' : '']">
          Issue
        </button>
        <button class="data-n-b" @click="challengeF" :class="[prePage == challenge ? 'datapage' : '']">
          Challenges
        </button>
        <button class="data-n-b" @click="finalF" :class="[prePage == final ? 'datapage' : '']">
          Final
        </button>
      </div>
    </div>
    <!-- side bar component for sorting  -->
    <!-- inner data content -->
    <div class="inner-data-content">
      <component :is="prePage" />
    </div>
    <div></div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
