<script setup>
import history from "./historyView.vue";
import second from "./general-second.vue";
import upcoming from "./upcomingView.vue";
import { useAuthStore } from "@/stores/auth.js";
import { useDrawerStore } from "@/stores/drawer";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import { ref, watchEffect, shallowRef } from "vue";

const dataPage = shallowRef(upcoming);
const secondPage = shallowRef(second);
const drawerStore = useDrawerStore();
const authStore = useAuthStore();
const drawerStatus = ref(null);
const drawerID = ref(null);
const open = ref(null);
const search = ref("");
const check = ref(false);
const userFirstName = ref(null);
// sort input 
const sortRound = ref(0);
const sortHome = ref(0);
const sortAway = ref(0);
const sortVenue = ref(0);
const sortCity = ref(0);
const sortDate = ref(0);
const Ascending = ref(false);
const Descending = ref(false);
// filter input
const showAll = ref(false);
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
  Pending.value = !Pending.value;

}
//filter magic 


// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

//filter name from email
userFirstName.value = authStore.userName.split('@')[0];

console.log(authStore.userName);


const openCreate = () => {
  check.value = true;
  drawerStore.togglePop();
};





onMounted(async () => {
  const options = {
    method: "GET", 
    url: `https://be-tblp.dimbaa.com/api/general-coordinator/list-match-events?roles[0]=${sortRound}&roles[1]=${sortDate}`,
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
      data.value = response.data.teams;
    })  
    .catch(function (error) {
      console.error(error);
    });
});

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

</script>
<template>
  <div v-if="drawerStore.showSecond == true">
    <component :is="secondPage" />
  </div>
 <div class="main-container" v-else>
    <div class="nav-top">
      <div class="main-details">
        <h1>Welcome {{ userFirstName }}</h1>
        <h2>General coordinator</h2>
        <div class="main-center-da">
          <span>Welcome {{ userFirstName }}</span>
          <span>General coordinator</span>
        </div>
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
        </div>
      </div>
    </div>
      <div class="data-content-r">
      <!-- data nav  -->
        <button
          class="data-n-b"
          @click="dataPage = upcoming"
          :class="[dataPage == upcoming ? 'datapage' : '']"
        >
          Upcoming
        </button>
        <button
          class="data-n-b"
          @click="dataPage = history"
          :class="[dataPage == history ? 'datapage' : '']"
        >
          History
        </button>
      </div>
     <!-- inner data content -->
     <div class="inner-data-content">
        <component :is="dataPage" />
      </div>    
      <!-- side bar component for sorting  -->
      <SideDrawer v-if="drawerID == 1" title="Sort by" class="sort-drawer"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']">
      <div class="sort-user-c">
        <div class="sort-wrapper">
          <h1>Parameter</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">Number</label>
              <!-- custom made radio  -->
              <div class="radio-wrapper" @click="toggleRound">
                <div class="inner-radio" v-show="sortRound == true">
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
      <SideDrawer
      v-else
      title="Filter by"
      class="sort-drawer"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']"
    >
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
            <h2>Pending Form Filling</h2>
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
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
