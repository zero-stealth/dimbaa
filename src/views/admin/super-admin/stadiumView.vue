<script setup>
import { useDrawerStore } from "@/stores/drawer";
import { useRouteStore } from "@/stores/route";
import PopUP from "@/components/drawer/popup.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import Stadium from "@/components/specific/StadiumComponent.vue";
import UpdateStadium from "@/components/form/updateform/UpdateStadium.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import DeletePlayerlist from "@/components/form/deleteForm/DeletePlayer.vue";
import { ref, onMounted, computed, watchEffect, shallowRef } from "vue";
import axios from "axios";

const url= "https://be-tblp.dimbaa.com/api/admin/stadia"
const showPage = shallowRef(Stadium);
const drawerStore = useDrawerStore();
const routeStore = useRouteStore();
const drawerID = ref(null);
const playerId = ref(null);
const playerName = ref(null);
const drawerStatus = ref(null);
const check = ref(false);
const open = ref(null);
const data = ref([]);
const search = ref("");

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

const openAdd = () => {
  check.value = true;
  drawerStore.togglePop();
};

const stadiumSpecific = (name) => {
  routeStore.setStadium('collins');
  routeStore.togglePage();
};



const openDelete = () => {
  check.value = false;
  drawerStore.togglePop();
};

//api
const searchResult = computed(() => {
  return data.value.filter((d) => d.name.includes(search.value));
});


onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNWZhMGRiODY3YTM0NTg3MTg2ZDk3MDdiMDBmYzliYWM4M2QyZjAzOWM2ZjhjZjVlMTRlMWUwY2UxZGYxYmRhNDdiYWYxNWEyMjJhMDhkMmIiLCJpYXQiOjE2NzExOTM1MzguNTU0MTM0LCJuYmYiOjE2NzExOTM1MzguNTU0MTM2LCJleHAiOjE2ODY5MTgzMzguNTQ4NTAxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.kYBwzo9ZoKTL9GG_j9iMpswww1UriiHYPufljSVJo_5QyLiJrI4Wb2k0sPD7iDb0SmlrFQnUdSI8knqLUZBe2Sd2bC4r4c_otOdYLnQAyxmM-0fJh_jVIGYgCjFF7msWOWsTcyl8fg7-Uj3yrsAxoxOdQW-L28dx4-hFAZUR9eOs2XCwU0cf9TUnGdqxvUm_wFBBou509NtZec1bmaAgUbG9GSpAfk7mfmuUOU1u7ElrOTFyvvN4bAI_70DpK3XUDJ0Nw81YsCO0_kp_Nr1hAZ2fmcIPXe-xKvwSPfp_7cMmT6HqV9MdQwPK7-ISoJq_eTy2fGvfHDQrWyKLDyKp8W0Fs5z6PURwT2hFZ6tV3jxCMH-sAzgTY72xXdb3EjG4etbbyc-wAWXmPQ9WB5SeOms2Xqm4M41XQbNeyK-qy2jYcDQLnYVnRZihWdBTLcBf64_DFuMWzRhvu4hTL8_fVu94whAWW-Oi9-s7BKRftDf3paExjJtEaT6-kUDnzRpe_Yfw9nfWDxA8LYUUsukYDDqvSshVRk5eG6kp3K169pppD7gAKakpORggebMgEHn4DGX7ieowJk3XCfDrIxZ5EVoX3HGZjamaRPmnl-bX2lvBTjBm3uFSGrLnMbckzS4fdpYK3YnNmyBESm9-sOCQ-5M3Nf6jsFQH6FdeWnGoo0E",
    },
  };

await axios
    .request(options)
    .then(function (response) {
      data.value = response.data.stadia;
    })
    .catch(function (error) {
      console.error(error);
    });
});
</script>
<template>
    <component :is="showPage"  v-if="routeStore.showPage  == true " />
  <div class="main-container" v-else>
    <div class="nav-top">
      <div class="main-details">
        <h1>Stadium list</h1>
        <span>Stadium list</span>      
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <SearchIcon class="icon icon-search" />
          <input
            type="text"
            v-model="search"
            class="main-search"
            placeholder="Search by stadium"
          />
        </form>
      </div>
    </div>
    <div class="team-list-c">
      <h3>Total Stadium : {{ searchResult.length }}</h3>
      </div>
    <div class="user-content">
      <div class="team-player-x" v-for="(
            { id, name, location, capacity, stadium_owner, stadium_picture},
          ) in searchResult"
          :key="`${searchResult}`">
        <div class="team-d-x">
          <h3>  {{ name }} </h3>
          <h4> {{stadium_owner}}</h4>
          <h4> {{capacity}}</h4>
          <h4> {{location}}</h4>
          <div class="stad-cd">
    
            <a @click="openAdd" class="stad-cd-a" >Add</a>
            <a  @click="openDelete" class="stad-cd-d" >Delete</a>
            <a  @click="stadiumSpecific(id) "  class="stad-cd-d">View</a>
          </div>
        </div>
          <img
          :src="`${stadium_picture}`"
          alt="player-pic"
          class="player-pic"
        />
      </div>
    </div>
    <div>
      <PopUP title="Add stadium" v-if="check == true">
        <UpdateStadium />
      </PopUP>
      <PopUP  v-else>
        <DeletePlayerlist :Id="`${routeStore.stadiumID}`" :text="playerName" :url="url" />
      </PopUP>
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
          <h1>Sort player list using</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">name</label>
              <input
                type="radio"
                id="one"
                value="PlayerName"
                v-model="name"
              />
            </div>
            <div class="sort-label-i">
              <label for="username">region</label>
              <input
                type="radio"
                id="one"
                value="JerseyNumber"
                v-model="region"
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
                value="Ascending"
                v-model="userRole"
              />
            </div>
            <div class="sort-label-i">
              <label for="descending">Descending</label>
              <input
                type="radio"
                id="one"
                value="Descending"
                v-model="userRole"
              />
            </div>
          </div>
        </div>
      </div>
    </SideDrawer>
  </div>
</template>
<style>
@import "@/style/main.css";
</style>

