<script setup>
import issue from "./IssueView.vue";
import match from "./matchView.vue";
import color from "./colorView.vue";
import final from "./finalView.vue";
import current from "./CurrentView.vue";
import history from "./historyView.vue";
import condition from "./condtionView.vue";
import challenge from "./challengeView.vue";
import operations from "./operationView.vue";
import cooperation from "./cooperationView.vue";
import { useDrawerStore } from "@/stores/drawer";
import { useAuthStore } from "@/stores/auth.js";
import { shallowRef } from "vue";

import { ref, onMounted, computed, watchEffect } from "vue";
import axios from "axios";

const generalPage = shallowRef(current);
const drawerStore = useDrawerStore();
const authStore = useAuthStore();
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
</script>
<template>
  <div class="main-container">
    <div class="nav-top">
      <div class="main-details data-b">
        <h2>Pre-Match Report</h2>
        <span>{{ authStore.userName }}</span>
      </div>
    </div>
    <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
        <button
          class="data-n-b"
          @click="generalPage = current"
          :class="[generalPage == current ? 'datapage' : '']"
        >
          Current
        </button>
        <button
          class="data-n-b"
          @click="generalPage = history"
          :class="[generalPage == history ? 'datapage' : '']"
        >
          History
        </button>
        <button
          class="data-n-b"
          @click="generalPage = match"
          :class="[generalPage == match ? 'datapage' : '']"
        >
          Match
        </button>
        <button
          class="data-n-b"
          @click="generalPage = condition"
          :class="[generalPage == condition ? 'datapage' : '']"
        >
          Conditions
        </button>
        <button
          class="data-n-b"
          @click="generalPage = operations"
          :class="[generalPage == operations ? 'datapage' : '']"
        >
          Operations
        </button>
        <button
          class="data-n-b"
          @click="generalPage = cooperation"
          :class="[generalPage == cooperation ? 'datapage' : '']"
        >
          CooperationS
        </button>
        <button
          class="data-n-b"
          @click="generalPage = color"
          :class="[generalPage == color ? 'datapage' : '']"
        >
          Color
        </button>
        <button
          class="data-n-b"
          @click="generalPage = issue"
          :class="[generalPage == issue ? 'datapage' : '']"
        >
          Issue
        </button>
        <button
          class="data-n-b"
          @click="generalPage = challenge"
          :class="[generalPage == challenge ? 'datapage' : '']"
        >
          Challenges
        </button>
        <button
          class="data-n-b"
          @click="generalPage = final"
          :class="[generalPage == final ? 'datapage' : '']"
        >
          Final
        </button>
      </div>
    </div>
    <!-- side bar component for sorting  -->
    <!-- inner data content -->
    <div class="inner-data-content">
      <component :is="generalPage" />
    </div>
    <div></div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
