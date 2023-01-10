<script  setup>
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import { useAuthStore } from "../../stores/auth.js";
import SideDrawer from "@/components/drawer/SideDrawer.vue";
import { ref, watchEffect, shallowRef } from "vue";
import EditMatch from "@/components/form/updateform/EditMatch.vue";

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
          <select type="text" v-model="select" class="main-search">
            <option disabled="disabled" selected>Select Tournament</option>
            <option>Tournament1</option>
            <option>Tournament2</option>
          </select>
        </form>
      </div>
    </div>
    <div class="inner-view-content">
      <h1>ScoreBoard</h1>
        </div>
    <!-- inner data content -->
      <div class="user-content">
      <div class="table-slide">
        <table>
          <tr>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
          <tr>
            <td>Team 1</td>
            <td>12</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>7</td>
            <td>1</td>
            <td>8</td>
            <td>13</td>
          </tr>
        </table>
      </div>
    </div>
    </div>
    <div>
      <PopUP title="Edit match" v-if="check == true">
        <EditMatch />
      </PopUP>
    </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
