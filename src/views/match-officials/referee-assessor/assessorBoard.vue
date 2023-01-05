<script setup>
import details from "./detailView.vue";
import Upcoming from "./upcomingView.vue";
import History from "./historyView.vue";
import form1 from "./assessor-form/form1.vue";
import form2 from "./assessor-form/form2.vue";
import form3 from "./assessor-form/form3.vue";
import form4 from "./assessor-form/form4.vue";
import form5 from "./assessor-form/form5.vue";
import form6 from "./assessor-form/form6.vue";
import form7 from "./assessor-form/form7.vue";
import form8 from "./assessor-form/form8.vue";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import { useAuthStore } from "@/stores/auth.js";
import AddIcon from "@/components/icons/AddIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import EditMatch from "@/components/form/updateform/EditMatch.vue";
import { ref, watchEffect, shallowRef } from "vue";

const dataPage = shallowRef(Upcoming);
const drawerStore = useDrawerStore();
const authStore = useAuthStore();
const drawerStatus = ref(null);
const drawerID = ref(null);
const open = ref(null);
const search = ref("");
const check = ref(false);

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

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
</script>
<template>
  <div class="main-container">
    <div class="nav-top">
      <div class="main-details data-b">
        <h1>{{ authStore.userName }}</h1>
        <span>{{ authStore.userName }}</span>
        <span>Referee Assessor form</span>
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
    <div class="team-b-txt">
      <h1>Referee Assesor form</h1>
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
        <button
          class="data-n-b"
          @click="dataPage = details"
          :class="[dataPage == details ? 'datapage' : '']"
        >
          Details
        </button>
        <button
          class="data-n-b"
          @click="dataPage = form1"
          :class="[dataPage == form1 ? 'datapage' : '']"
        >
          1
        </button>
        <button
          class="data-n-b"
          @click="dataPage = form2"
          :class="[dataPage == form2 ? 'datapage' : '']"
        >
          2
        </button>
        <button
          class="data-n-b"
          @click="dataPage = form3"
          :class="[dataPage == form3 ? 'datapage' : '']"
        >
          3
        </button>
        <button
          class="data-n-b"
          @click="dataPage = form4"
          :class="[dataPage == form4 ? 'datapage' : '']"
        >
          4
        </button>
        <button
          class="data-n-b"
          @click="dataPage = form5"
          :class="[dataPage == form5 ? 'datapage' : '']"
        >
          5
        </button>
        <button
          class="data-n-b"
          @click="dataPage = form6"
          :class="[dataPage == form6 ? 'datapage' : '']"
        >
          6
        </button>
        <button
          class="data-n-b"
          @click="dataPage = form7"
          :class="[dataPage == form7 ? 'datapage' : '']"
        >
          7
        </button>
        <button
          class="data-n-b"
          @click="dataPage = form8"
          :class="[dataPage == form8 ? 'datapage' : '']"
        >
          8
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
                v-model="userName"
              />
            </div>
            <div class="sort-label-i">
              <label for="username">etc</label>
              <input type="radio" id="one" value="etc" v-model="etc" />
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
                <input type="checkbox" v-model="Showall" />
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
                <input type="checkbox" v-model="pending" />
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
        <EditMatch />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
