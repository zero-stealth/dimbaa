<script setup>
import axios from "axios";
import { useRouteStore } from "@/stores/route";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import PlayerDetails from "@/components/specific/PlayerComponent.vue";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";

const activePage = shallowRef(PlayerDetails);
const drawerStore = useDrawerStore();
const drawerStatus = ref(null);
const showPage = ref(false);
const open = ref(null);
const data = ref([]);
const check2 = ref(false);

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});


onMounted(async () => {
  const options = {
    method: "GET",
    url: "https://be-tblp.dimbaa.com/api/league-director/list-match-events",
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
      data.value = response.data.match;
      console.log(data.value);
    })
    .catch(function (error) {
      console.error(error);
    });
});
</script>
<template>
  <component :is="activePage" v-if="showPage == true" />
  <div class="upcoming-container-r" v-else>
      <div class="table-slide">      
        <table>
        <tr>
            <th>Round</th>
            <th>Number</th>
            <th>Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Venue</th>
            <th>City</th>
        </tr>
        <tr
        v-for="(
            { round, city, venue, date, id, home_team_id, away_team_id,  }, index
          ) in data"
          :key="index"
        >
          <td>{{ round }}</td>
          <td>{{ id }}</td>
          <td>{{ date }}</td>
          <td>{{ home_team_id }}</td>
          <td>{{ away_team_id }}</td>
          <td>{{ venue }}</td>
          <td>{{ city }}</td>
          <!-- <td>
            <div class="table-link-c">
              <div class="table-link">
                <a href="#" @click="openEdit2">Edit</a>
              </div>
            </div>
          </td> -->
        </tr>
      </table>
      </div>
    </div>
</template>
<style>
@import "@/style/upcoming.css";
</style>
