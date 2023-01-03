<script setup>
import form1 from "./general-form/form1.vue";
import form2 from "./general-form/form2.vue";
import form3 from "./general-form/form3.vue";
import form4 from "./general-form/form4.vue";
import form5 from "./general-form/form5.vue";
import form6 from "./general-form/form6.vue";
import form7 from "./general-form/form7.vue";
import form8 from "./general-form/form8.vue";
import form9 from "./general-form/form9.vue";
import form10 from "./general-form/form10.vue";
import form11 from "./general-form/form11.vue";
import form12 from "./general-form/form12.vue";
import form13 from "./general-form/form13.vue";
import detail from "./general-form/detailsView.vue";
import { useDrawerStore } from "@/stores/drawer";
import { useAuthStore } from "@/stores/auth.js";
import { shallowRef } from "vue";

import { ref, onMounted, computed, watchEffect } from "vue";
import axios from "axios";

const drawerStore = useDrawerStore();
const generalPage = shallowRef(detail);
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
        <h2>General Coordinator Form</h2>
        <span>{{ authStore.userName }}</span>
      </div>
    </div>
    <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
        <button
          class="data-n-b"
          @click="generalPage = detail"
          :class="[generalPage == detail ? 'datapage' : '']"
        >
          Details
        </button>
         <button
          class="data-n-b"
          @click="generalPage = form1"
          :class="[generalPage == form1 ? 'datapage' : '']"
        >
          1
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form2"
          :class="[generalPage == form2 ? 'datapage' : '']"
        >
          2
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form3"
          :class="[generalPage == form3 ? 'datapage' : '']"
        >
          3
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form4"
          :class="[generalPage == form4 ? 'datapage' : '']"
        >
          4
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form5"
          :class="[generalPage == form5 ? 'datapage' : '']"
        >
          5
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form6"
          :class="[generalPage == form6 ? 'datapage' : '']"
        >
          6
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form7"
          :class="[generalPage == form7 ? 'datapage' : '']"
        >
          7
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form8"
          :class="[generalPage == form8 ? 'datapage' : '']"
        >
          8
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form9"
          :class="[generalPage == form9 ? 'datapage' : '']"
        >
          9
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form10"
          :class="[generalPage == form10 ? 'datapage' : '']"
        >
          10
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form11"
          :class="[generalPage == form11 ? 'datapage' : '']"
        >
          11
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form12"
          :class="[generalPage == form12 ? 'datapage' : '']"
        >
          12
        </button>
        <button
          class="data-n-b"
          @click="generalPage = form13"
          :class="[generalPage == form13 ? 'datapage' : '']"
        >
          13
        </button>
      </div>
    </div>
    <!-- side bar component for sorting  -->
     <!-- inner data content -->
     <div class="inner-data-content">
        <component :is="generalPage" />
      </div>
    <div>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
