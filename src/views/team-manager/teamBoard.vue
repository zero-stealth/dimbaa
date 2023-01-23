<script setup>
import Upcoming from "./UpcomingView.vue";
import History from "./historyView.vue";
import second from "./teamSecond.vue";
import { useDrawerStore } from "@/stores/drawer";
import { useAuthStore } from "../../stores/auth.js";
import AddIcon from "@/components/icons/AddIcon.vue";
import PopUP from "@/components/drawer/popup.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import MatchT from "@/components/form/updateform/MatchT.vue";
import { ref, watchEffect, shallowRef } from "vue";

const dataPage = shallowRef(Upcoming);
const secondPage = shallowRef(second);
const drawerStore = useDrawerStore();
const authStore = useAuthStore();
const drawerStatus = ref(null);
const drawerID = ref(null);
const open = ref(null);
const search = ref("");
const check = ref(false);
const userFirstName =ref(null);

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

userFirstName.value = authStore.userName.split('@')[0];


const openCreate = () => {
  check.value = true;
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

</script>
<template>
    <div v-if="drawerStore.showSecond == true">
    <component :is="secondPage" />
  </div>
 <div class="main-container" v-else>
    <div class="nav-top">
      <div class="main-details data-b">
        <h1>{{ userFirstName }}</h1>
        <span>{{ userFirstName }}</span>
        <span>team Manager</span>
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
          <!-- <CircleDraw class="circle-a" @click="openCreate">
            <AddIcon class="icon icon-menu" />
          </CircleDraw> -->
        </div>
      </div>
    </div>
    <div class="team-b-txt">
    </div>  
      <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
        <button
          class="data-n-b"
          @click="dataPage = Upcoming"
          :class="[dataPage == Upcoming ? 'datapage' : '']"
        >
          Upcoming
        </button>
        <button
          class="data-n-b"
          @click="dataPage = History"
          :class="[dataPage == History ? 'datapage' : '']"
        >
          History
        </button>
      </div>
    </div>  
     <!-- inner data content -->
     <div class="inner-data-content">
        <component :is="dataPage" />
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
              <label for="user-role">Number</label>
              <input
                type="radio"
                id="one"
                value="Number"
                v-model="Number"
              />
            </div>
            <div class="sort-label-i">
              <label for="username">Venue</label>
              <input
                type="radio"
                id="one"
                value="venue"
                v-model="venue"
              />
            </div>
            <div class="sort-label-i">
              <label for="username">City</label>
              <input
                type="radio"
                id="one"
                value="City"
                v-model="City"
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
                v-model="Ascending"
              />
            </div>
            <div class="sort-label-i">
              <label for="descending">Descending</label>
              <input
                type="radio"
                id="one"
                value="Descending"
                v-model="descending"
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
            <h2>Show All</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="Showall"  />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
          <!-- show component  -->
          <div class="filter-list">
            <h2>Pending line up form</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="pending"  />
                <span class="slider round"></span>
              </label>
              <!-- Rounded switch -->
            </div>
          </div>
        </div>
      </div>
    </SideDrawer>
    <div>
      <PopUP title="Edit match" v-if="check == true">
      <MatchT/>  
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
