<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import { useRouteStore } from "@/stores/route";
import PopUP from "@/components/drawer/popup.vue";
import AddIcon from "@/components/icons/AddIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import userDetails from "@/components/specific/userComponent.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import TeamStaff from "@/components/form/createform/TeamStaff.vue";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";

const activePage = shallowRef(userDetails);
const drawerStore = useDrawerStore();
const routeStore = useRouteStore();
const drawerStatus = ref(null);
const showPage = ref(false);
const showall = ref(false);
const drawerID = ref(null);
const open = ref(null);
const data = ref([]);
const search = ref("");
const check = ref(false);

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

const toggle = () => {
  showall.value = true;
};

//we use this id to determin which drawer opens
//show page based
const showSpecific = (id) => {
  routeStore.setPlayerId(id);
  showPage.value = !showPage.value;
};

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
//api
const searchResult = computed(() => {
  return data.value.filter((d) => d.name.includes(search.value));
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
    <div class="nav-top">
      <div class="main-details">
        <h1>Team Staff  </h1>
        <span>User</span>
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <SearchIcon class="icon icon-search" />
          <input
            type="text"
            v-model="search"
            class="main-search"
            placeholder="Search"
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
    <component :is="activePage" v-if="showPage == true" />
    <div class="user-content" v-else>
      <h2>Team Staff</h2>
      <div class="table-slide">
        <table>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>official signature</th>
            <th>Job description</th>
            <th>Staff Image</th>

       
          </tr>
          <!-- <h1 v-if="data.length <= 0">loading data....................⚽</h1> -->
          <tr>
          <td>tst</td>
          <td>tst</td>
          <td>tst</td>
          <td>tst</td>
          <td>
              <div class="tbl-formation">
      <img src="/assets/formation/433Attack-minded-midfield.jpg" alt="staff" class="tbl-img-formation">
    </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- side bar component for sorting  -->
    <SideDrawer
      v-if="drawerID == 1"
      title="Sort by"
      class="sort-drawer"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']"
    >
      <div class="sort-user-c">
        <div class="sort-wrapper">
          <h1>Parameter</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">Team name</label>
              <input
                type="radio"
                v-bind:value="false"
              />
            </div>
            <div class="sort-label-i">
              <label for="username">ID</label>
              <input
                type="radio"
                v-bind:value="false"
              />
            </div>
          </div>
        </div>
        <div class="sort-wrapper">
          <h1>Order</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="ascending">Ascending</label>
              <input
                type="radio"
                id="one"
                v-bind:value="Ascending"
              />
            </div>
            <div class="sort-label-i">
              <label for="descending">Descending</label>
              <input
                type="radio"
                id="one"
                v-bind:value="Descending"
              />
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
            <h2>Medic</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="position" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Coach</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="position" />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
        </div>
      </div>
    </SideDrawer>
    <div>
      <PopUP title="Add Staff" v-if="check == true">
        <TeamStaff />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
</style>
