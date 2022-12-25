<script setup>
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import AddIcon from "@/components/icons/AddIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import CreateUser from "@/components/form/createform/CreateUser.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import { ref, onMounted, computed, watchEffect } from "vue";
import axios from "axios";

const drawerStore = useDrawerStore();
const drawerStatus = ref(null);
const open = ref(null);
const data = ref([]);
const search = ref("");

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

//api
const searchResult = computed(() => {
  return data.value.filter((d) => d.name.includes(search.value));
});


onMounted(async () => {
  const options = {
    method: "GET",
    url: "http://be-tblp.dimbaa.com/api/admin/stadia",
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
      data.value = response.data.stadia;
      console.log(data.value)
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
        <h1>Welcome</h1>
        <span>User</span>
      </div>
      <div class="main-wrapper">
        <form action="" class="form-main">
          <SearchIcon class="icon icon-search" />
          <input
            type="text"
            v-model="search"
            class="main-search"
            placeholder="Search User"
          />
        </form>
        <div class="circle-wrapper">
          <CircleDraw class="circle-c" @click="drawerStore.toggleDrawer">
            <MenuIcon class="icon icon-menu" />
          </CircleDraw>
          <CircleDraw class="circle-c">
            <FilterIcon class="icon icon-menu" />
          </CircleDraw>
          <CircleDraw class="circle-a" @click="drawerStore.togglePop">
            <AddIcon class="icon icon-menu" />
          </CircleDraw>
        </div>
      </div>
    </div>
      <div class="user-content">
        <h2>User list</h2>
        <table>
          <tr>
            <th>Stadium name</th>
            <th>Region</th>
            <th>location</th>
            <th>capacity</th>
            <!-- <th>Stadium</th> -->
            <th>action</th>
          </tr>
          <h1 v-if="data.length <= 0">loading data....................⚽</h1>
          <tr
            v-for="({ name, region, location, capacity }, index) in searchResult"
            :key="index"
          v-else>
            <td>{{ name }}</td>
            <td>{{ region }}</td>
            <td>{{ location }}</td>
            <td>{{ capacity }}</td>

            <td>
              <div class="table-link">
                <a href="#">View</a>
              </div>
            </td>
          </tr>
        </table>
      </div>
    <!-- side bar component for sorting  -->
    <SideDrawer
      title="Sort by"
      :class="[drawerStatus != false ? 'open-drawer' : 'close-drawer']"
    >
      <div class="sort-user-c">
        <div class="sort-wrapper">
          <h1>Parameter</h1>
          <div class="sort-user-i">
            <div class="sort-label-i">
              <label for="user-role">User Role</label>
              <input
                type="radio"
                id="one"
                value="userRole"
                v-model="userRole"
              />
            </div>
            <div class="sort-label-i">
              <label for="username">User Name</label>
              <input
                type="radio"
                id="one"
                value="userName"
                v-model="userRole"
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
    <div>
      <PopUP height="80" width="80" title="AddUser">
        <CreateUser />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
</style>
