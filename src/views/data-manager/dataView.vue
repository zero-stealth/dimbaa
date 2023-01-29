<script  setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import { useAuthStore } from "../../stores/auth.js";
import { ref, watchEffect, shallowRef, onMounted } from "vue";
import EditMatch from "@/components/form/updateform/EditMatch.vue";
import tableData from "./data-form/tblInfo.vue";

import ArrowIcon from "@/components/icons/ArrowIcon.vue";

const drawerStore = useDrawerStore();
const tablePage = shallowRef(tableData);
const authStore = useAuthStore();
const drawerStatus = ref(null);
const drawerID = ref(null);
const open = ref(null);
const search = ref("");
const data = ref([]);
const isTableOpen = ref(false);
const check = ref(false);

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

const openTable = () => {
 isTableOpen.value = !isTableOpen.value
}

console.log(authStore.userName);

const openCreate = () => {
  check.value = true;
  drawerStore.togglePop();
};

const openEdit = () => {
  check.value = false;
  drawerStore.togglePop();
};

const openDrawer = (id) => {
  switch (id) {
    case 1:
      drawerID.value = 1;
      drawerStore.toggleDrawer();
      break;
    case 2:
      drawerID.value = 2;
      drawerStore.toggleDrawer();
      break;
    default:
      drawerID.value = null;
      break;
  }
};

onMounted(async () => {
  const options = {
    method: "GET",
    url: "http://be-tblp.dimbaa.com/api/league-director/scoreboard",
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
      data.value = response.data.scoreboard;
      console.log(data.value);
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
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <select type="text" v-model="select" class="main-search">
            <option disabled="disabled" selected>Select Tournament</option>
            <option>Tournament1</option>
            <option>Tournament2</option>
          </select>
        </form>
      </div>
    </div>
    <div class="inner-view-content">
      <h1>ScoreBoard</h1>
    </div>
    <!-- inner data content -->
    <div class="user-content">
      <div class="table-slide">
        <table>
          <tr>
              <th></th>
              <th>Position</th>
              <th>Team A</th>
              <th>Team B</th>
              <th>Points</th>
              <th>Pld</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>

          </tr>
          <tr v-for="(
            {  team1_score, team2_score, point  }, index
          ) in data"
          :key="index"
        >
              <td>
              <div class="controller-tb">
                <ArrowIcon class="icon" @click="openTable" :class="isTableOpen == true ? 'turnOn' : '' ">
                </ArrowIcon>
              </div>
              </td>
              <td>1</td>
              <td>{{ team1_score }}</td>
              <td>{{ team2_score }}</td>
              <td>{{ point }}</td>
              <td>4</td>
              <td>3</td>
              <td>1</td>
              <td>8</td>
              <td>8</td>
              <td>8</td>
              <td>2</td>
          </tr>
          <component :is="tablePage" v-show="isTableOpen == true" />
        </table>
      </div>
    </div>
  </div>
  <div>
    <PopUP title="Edit match" v-if="check == true">
      <EditMatch />
    </PopUP>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
