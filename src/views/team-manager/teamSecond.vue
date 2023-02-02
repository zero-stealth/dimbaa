<script setup>
import details from "./detailsView.vue";
import formation from "./fomationView.vue";
import submitPlayers from "./submitView.vue";
import leaderPlayers from "./leadersPlayers.vue";
import startingPlayers from "./startingPlayers.vue";
import substitutePlayers from "./substitutePlayers.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import { useDrawerStore } from "@/stores/drawer.js";
// import { useNextStore } from "@/stores/next.js";
import { ref, watchEffect, shallowRef, onMounted } from "vue";

const teamPage = shallowRef(details);
const drawerStore = useDrawerStore();
// const nextStore = useNextStore();
const drawerStatus = ref(null);
const open = ref(null);

// onMounted(() => {
//   watchEffect(() => {
//     nextStore.updateNext(teamPage.value);
//   });
//  })

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});


</script>
<template>
 <div class="main-container">
    <div class="nav-top">
      <div class="second-t data-b">
        <button class="second-btn " @click="drawerStore.toggleSecond()">
          <ArrowIcon class="icon icon-s" />
        </button>
        <div class="general-re">
          <h2>Line up Form</h2>
          <h2>Orodha ya wachezaji</h2>
        </div>
      </div>  
    </div>  
      <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
        <button
          class="data-n-b"
          @click="teamPage = details"
          :class="[teamPage == details ? 'datapage'  : '']"
        >
          Details
        </button>
        <button
          class="data-n-b"
          @click="teamPage = startingPlayers"
          :class="[teamPage == startingPlayers ? 'datapage'  : '']"
        >
          StartingXI
        </button>
        <button
          class="data-n-b"
          @click="teamPage = substitutePlayers"
          :class="[teamPage == substitutePlayers ? 'datapage'  : '']"
        >
          Substitute
        </button>
        <button
          class="data-n-b"
          @click="teamPage = leaderPlayers"
          :class="[teamPage == leaderPlayers ? 'datapage'  : '']"
        >
          Official
        </button>
        <button
          class="data-n-b"
          @click="teamPage = formation"
          :class="[teamPage == formation ? 'datapage'  : '']"
        >
        Formation
        </button>
        <button
          class="data-n-b"
          @click="teamPage = submitPlayers"
          :class="[teamPage == submitPlayers ? 'datapage'  : '']"
        >
          Submit
        </button>
      </div>
    </div>  
     <!-- inner data content -->
     <div class="inner-data-content">
        <component :is="teamPage" />
      </div>    
    <div>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
