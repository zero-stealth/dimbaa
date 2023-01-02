<script setup>
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
import { ref, watchEffect, shallowRef } from "vue";

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
        <span>Data manager(organiser)</span>
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
     <div class="inner-view-content edit-view">
      <div class="edit-view-f">
        <button type="submit" @click="assign" class="btn-f u-a e-u">Assign</button>
        <button type="submit" @click="reset" class="btn-f u-r e-u e-a">Reset</button>
      </div>
     <form action="" >
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
    <!-- <tr>
    <td><input type="checkbox" :name="team1" id=""></td>
    <td>1</td>
    <td>00/00/000</td>
    <td>24</td>
    <td>Namungo fc</td>
    <td>Geita gold fc</td>
    <td>Jamhuri stadium</td>
    <td>Dodoma</td>
    </tr> -->
     </table>
     </form>
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
              <label for="user-role">Round Number</label>
              <input
                type="radio"
                id="one"
                value="roundNumber"
                v-model="roundNumber"
              />
            </div>
            <div class="sort-label-i">
              <label for="username">Match Name</label>
              <input
                type="radio"
                id="one"
                value="matchNumber"
                v-model="matchNumber"
              />
            </div>
            <div class="sort-label-i">
              <label for="username">Home Team</label>
              <input
                type="radio"
                id="one"
                value="homeTeam"
                v-model="homeTeam"
              />
            </div>
            <div class="sort-label-i">
              <label for="username">Away Team</label>
              <input
                type="radio"
                id="one"
                value="awayTeam"
                v-model="awayTeam"
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
                value="city"
                v-model="city"
              />
            </div>
            <div class="sort-label-i">
              <label for="username">Date</label>
              <input
                type="radio"
                id="one"
                value="date"
                v-model="date"
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
            <h2>Incomplete Profile</h2>
            <div class="filter-b-c">
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" v-model="incomplete"  />
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
                <input type="checkbox" v-model="pending"  />
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
      <EditMatch/>  
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/data.css";
</style>
