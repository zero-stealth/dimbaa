<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import { ref, onMounted, computed, watchEffect } from "vue";
import rule from "./ruleComponent.vue";
import DeleteStaff from "@/components/form/deleteForm/DeleteStaff.vue";

const data = ref([]);
const search = ref("");
const check = ref(null);
const drawerStore = useDrawerStore();

const openPos = () => {
  check.value = true;
  drawerStore.togglePop();
};

const deletePos = () => {
  check.value = false;
  drawerStore.togglePop();
};

//api
const searchResult = computed(() => {
  return data.value.filter((d) => d.medic.includes(search.value));
});

onMounted(async () => {
  const options = {
    method: "GET",
    url: "https://be-tblp.dimbaa.com/api/teammanager/players",
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
      data.value = response.data.players;
    })
    .catch(function (error) {
      console.error(error);
    });
});
</script>
<template>
  <div class="main-container">
    <div class="user-content">
      <div class="table-slide">
        <table>
          <tr>
            <th>CardNumber</th>
            <th>number of repeats</th>
            <th>number of bans</th>
            <th>Action</th>

          </tr>
          <!-- <h1 v-if="data.length <= 0">loading data....................⚽</h1> -->
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="table-link-c">
                <div class="table-link">
                  <a href="#" @click="openPos">Add</a>
                </div>
                <div class="table-link">
                  <a href="#" @click="openPos">Edit</a>
                </div>
                <div class="table-link">
                  <a href="#" @click="deletePos">Delete</a>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <PopUP title="Add Match rule" v-if="check == true">
      <rule />
    </PopUP>
    <PopUP title="Delete position" v-else>
        <DeleteStaff />
      </PopUP>
  </div>
</template>
<style>
@import "@/style/main.css";
</style>
