<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import { useAuthStore } from "../../stores/auth.js";
import AddIcon from "@/components/icons/AddIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import EditMatch from "@/components/form/updateform/EditMatch.vue";
import { ref, onMounted, watchEffect } from "vue";

const drawerStore = useDrawerStore();
const authStore = useAuthStore();
const drawerStatus = ref(null);
const drawerID = ref(null);
const open = ref(null);
const search = ref("");
const data = ref([]);
const check = ref(false);
// sort input 
const sortRound = ref(0);
const sortMatch = ref(0);
const sortHome = ref(0);
const sortAway = ref(0);
const sortVenue = ref(0);
const sortCity = ref(0);
const sortDate = ref(0);
const Ascending = ref(false);
const Descending = ref(false);
// filter input
const showAll = ref(false);
const Incomplete = ref(false);
const Pending = ref(false);

//sort magic

const toggleA = () => {
  Ascending.value = !Ascending.value;
  console.log(Ascending.value)
}

const toggleB = () => {
  Descending.value = !Descending.value;
  console.log(Descending.value)
}

const toggleRound = () => {
  sortRound.value = !sortRound.value;
  console.log(sortRound.value)
}

const toggleMatch = () => {
  sortMatch.value = !sortMatch.value;
  console.log(sortMatch.value)
}

const toggleHome = () => {
  sortHome.value = !sortHome.value;
  console.log(sortHome.value)
}

const toggleAway = () => {
  sortAway.value = !sortAway.value;
  console.log(sortAway.value)
}

const toggleVenue = () => {
  sortVenue.value = !sortVenue.value;
  console.log(sortVenue.value)
}

const toggleCity = () => {
  sortCity.value = !sortCity.value;
  console.log(sortCity.value)
}

const toggleDate = () => {
  sortDate.value = !sortDate.value;
  console.log(sortDate.value)
}

//filter magic 

const showAllFilter = () => {
  showAll.value = !showAll.value;
  Incomplete.value = !Incomplete.value;
  Pending.value = !Pending.value;

}
//filter magic 


// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

const openCreate = () => {
  check.value = true;
  drawerStore.togglePop();
};

console.log(authStore.userName);

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
    url: "https://be-tblp.dimbaa.com/api/data-manager/list-match-events",
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
  <div class="main-container">
    <div class="nav-top">
      <div class="main-details">
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <SearchIcon class="icon icon-search" />
          <input
            type="text"
            v-model="search"
            class="main-search"
            placeholder="Search Here"
          />
        </form>
        <div class="circle-wrapper">
          <CircleDraw class="circle-c" @click="openDrawer(1)">
            <MenuIcon class="icon icon-menu" />
          </CircleDraw>
          <CircleDraw class="circle-c" @click="openDrawer(2)">
            <FilterIcon class="icon icon-menu" />
          </CircleDraw>
          <CircleDraw class="circle-a" @click="openCreate">
            <AddIcon class="icon icon-menu" />
          </CircleDraw>
        </div>
      </div>
    </div>
    <!-- inner data content -->
    <div class="user-content">
      <div class="edit-view-f">
        <button type="submit" @click="assign" class="btn-f u-a e-u">
          Assign
        </button>
        <button type="submit" @click="reset" class="btn-f u-r e-u e-a">
          Reset
        </button>
      </div>
      <form action="">
        <div class="user-content">
        <div class="table-slide">
          <table>
            <tr>
              <th>Selected</th>
              <th>Round</th>
              <th>Date</th>

              <th>Number</th>
              <th>Home Team</th>
              <th>Away Team</th>
              <th>Venue</th>
              <th>City</th>
            </tr>
            <tr
              v-for="(
                { round, city, venue, date, id, home_team_id, away_team_id },
                index
              ) in data"
              :key="index"
            >
              <td><input type="checkbox" :name="team1" id="" /></td>
              <td>{{ round }}</td>
              <td>{{ id }}</td>
              <td>{{ date }}</td>
              <td>{{ home_team_id }}</td>
              <td>{{ away_team_id }}</td>
              <td>{{ venue }}</td>
              <td>{{ city }}</td>
            </tr>
          </table>
        </div>
      </div>
      </form>
    </div>
    <!-- side bar component for sorting  -->
    <SideDrawer v-if="drawerID == 1" title="Sort by" class="sort-drawer"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']">
      <div class="sort-user-c">
        <div class="sort-wrapper">
          <h1>Parameter</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">Round Number</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleRound">
                <div class="inner-radio" v-show="sortRound == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">Match Name</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleMatch">
                <div class="inner-radio" v-show="sortMatch == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">Home Team</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleHome">
                <div class="inner-radio" v-show="sortHome == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">Away Team</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleAway">
                <div class="inner-radio" v-show="sortAway == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">Venue</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleVenue">
                <div class="inner-radio" v-show="sortVenue == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">City</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleCity">
                <div class="inner-radio" v-show="sortCity == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="username">Date</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleDate">
                <div class="inner-radio" v-show="sortDate == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
          </div>
        </div>
        <div class="sort-wrapper">
          <h1>Order</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="ascending">Ascending</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleA">
                <div class="inner-radio" v-show="Ascending == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
            <div class="sort-label-i">
              <label for="descending">Descending</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleB">
                <div class="inner-radio" v-show="Descending == true">
                </div>
              </div>
              <!-- custom made radio  -->
            </div>
          </div>
        </div>
      </div>
    </SideDrawer>
    <!-- side bar component for filter  -->
    <SideDrawer v-else title="Filter by" class="sort-drawer"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']">
      <div class="filter-c">
        <h1>Enable switch to show in list</h1>
        <div class="filter-wrapper">
          <!-- show component  -->
          <div class="filter-list">
            <h2>Show All</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="showAll" @click="showAllFilter" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Incomplete Profile</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="Incomplete" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Pending Profile</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="Pending" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
        </div>
      </div>
    </SideDrawer>
    <div>
      <PopUP title="Edit match" v-if="check == true">
        <EditMatch />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/data.css";
@import "@/style/main.css";
</style>
