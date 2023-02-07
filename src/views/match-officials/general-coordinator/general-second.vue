<script setup>
import form1 from "./general-form/form1.vue";
import form2 from "./general-form/form2.vue";
import form3 from "./general-form/form3.vue";
import form4 from "./general-form/form4.vue";
import form5 from "./general-form/form5.vue";
import detail from "./general-form/detailsView.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import { useDrawerStore } from "@/stores/drawer";
import { useNextStore } from "@/stores/next.js";
import { shallowRef } from "vue";

import { ref, onMounted, watchEffect } from "vue";
import axios from "axios";

const drawerStore = useDrawerStore();
const generalPage = shallowRef(detail);
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

const detailF = () => {
  generalPage.value = detail;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

}

const form1F = () => {
  generalPage.value = form1;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;


}

const form2F = () => {
  generalPage.value = form2;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;


}

const form3F = () => {
  generalPage.value = form3;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

  
}

const form4F = () => {
  generalPage.value = form4;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

  
}

const form5F = () => {
  generalPage.value = form5;
  nextStore.nextRouteState = false;
  nextStore.previousRouteState = false;

  
}

// checks the active button and sets the next button
  watchEffect(() => {
    switch (generalPage.value) {
    case detail:
      if(nextStore.nextRouteState != false ) {
        form1F();
        console.log(nextStore.nextRouteState)
      };
      break; 
      case form1:
      if(nextStore.nextRouteState != false ) {
        form2F()
        console.log(generalPage.value)
      };
      break;
      case form2:
      if(nextStore.nextRouteState != false ) {
        form3F()
        console.log(nextStore.nextRouteState)
      };
      break;
      case form3:
      if(nextStore.nextRouteState != false ) {
        form4F()
        console.log(nextStore.nextRouteState)
      };
      break;
      case form4:
      if(nextStore.nextRouteState != false ) {
        form5F()
        console.log(nextStore.nextRouteState)
      };
      break;
    default:
      break;
  }
});

// checks the active button and sets the previous button
  watchEffect(() => {
    switch (generalPage.value) {
      case form1:
      if(nextStore.previousRouteState != false ) {
        detailF();
        console.log(nextStore.previousRouteState)
      };
      break;
      case form2:
      if(nextStore.previousRouteState != false ) {
        form1F();
      };
      break;
      case form3:
      if(nextStore.previousRouteState != false ) {
        form2F();
      };
      break;
      case form4:
      if(nextStore.previousRouteState != false ) {
        form3F();
      };
      break;
      case form5:
      if(nextStore.previousRouteState != false ) {
        form4F();
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
      <div class="data-b second-t">
        <button class="second-btn " @click="drawerStore.toggleSecond()">
          <ArrowIcon class="icon icon-s" />
        </button>
        <div class="general-re">
          <h2>General Coordinator report</h2>
        </div>
      </div>
    </div>
    <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
        <button
          class="data-n-b"
          @click="detailF"
          :class="[generalPage == detail ? 'datapage' : '']"
        >
          Details
        </button>
         <button
          class="data-n-b"
          @click="form1F"
          :class="[generalPage == form1 ? 'datapage' : '']"
        >
          1
        </button>
        <button
          class="data-n-b"
          @click="form2F"
          :class="[generalPage == form2 ? 'datapage' : '']"
        >
          2
        </button>
        <button
        ref="formBtn3"
          class="data-n-b"
          @click="form3F"
          :class="[generalPage == form3 ? 'datapage' : '']"
        >
          3
        </button>
        <button
          class="data-n-b"
          @click="form4F"
          :class="[generalPage == form4 ? 'datapage' : '']"
        >
          4
        </button>
        <button
          class="data-n-b"
          @click="form5F"
          :class="[generalPage == form5 ? 'datapage' : '']"
        >
          5
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
