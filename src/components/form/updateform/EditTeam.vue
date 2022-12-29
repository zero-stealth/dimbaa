<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";

const Stadium = ref("");
const TeamName = ref("");
const Region = ref("");

const data = ref([]);
const search = ref("");

//api
const seachResult = computed(() => {
  return data.value.filter((d) => d.name.includes(search.value));
});

const getDetails = () => {
  reset();
};

//Reset the form
const reset = () => {
  Stadium.value = "";
  TeamName.value = "";
  Region.value = "";
};

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
  <div class="team-rs">
    <form
      action=""
      method="post"
      @submit.prevent="getDetails"
      class="team-u-form-wrapper"
    >
      <div class="team-cut1">
        <div class="team-u">
          <label for="add-team-input" class="team-u-label">Region</label>
          <input
            required
            type="text"
            class="team-u-input"
            v-model="Region"
            placeholder="region"
          />
        </div>
        <div class="team-u">
          <label for="add-team-input" class="team-u-label">TeamName</label>
          <input
            required
            type="text"
            class="team-u-input"
            v-model="TeamName"
            placeholder="Team Name"
          />
        </div>
        <div class="team-u">
          <label for="add-team-input" class="team-u-label">Stadium</label>
          <input
            required
            type="text"
            class="team-u-input"
            v-model="Stadium"
            placeholder="stadium"
          />
        </div>
      </div>
      <h1>Players</h1>
      <div class="team-cut2">
        <table class="team-tbl-u">
          <tr>
            <th>Player name</th>
            <th>Jersey number</th>
            <th>email</th>
            <th>mobile</th>
          </tr>
          <tr
            v-for="(
              { first_name, middle_name, jersey_number, email, mobile }, index
            ) in searchResult"
            :key="index"
          >
            <td>{{ `${first_name} ${middle_name}` }}</td>
            <td>{{ jersey_number }}</td>
            <td>{{ email }}</td>
            <td>{{ mobile }}</td>
          </tr>
        </table>
      </div>
      <div class="team-u-btn">
        <button type="submit" class="btn-u u-a">Save</button>
        <!-- <button type="submit" @click="" class="btn-f r-u">Cancel</button> -->
        <button type="submit" @click="reset" class="btn-u u-r">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/editteam.css";
</style>
