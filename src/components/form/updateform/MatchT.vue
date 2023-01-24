<script setup>
import EditMatch from "./EditMatch.vue";
import EditTournament from "./EditTournament.vue";
import { useDrawerStore } from "@/stores/drawer";
import { useAuthStore } from "@/stores/auth.js";
import { ref, watchEffect, shallowRef } from "vue";

const dataPage = shallowRef(EditMatch);
const drawerStore = useDrawerStore();
const authStore = useAuthStore();
const drawerStatus = ref(null);
const open = ref(null);
const userFirstName =ref(null);

// update on changes
watchEffect(() => {
  drawerStatus.value = drawerStore.IsDrawerOpen;
  open.value = drawerStore.popDrawer;
});

userFirstName.value = authStore.userName.split('@')[0];


</script>
<template>
 <div class="main-container"> 
      <div class="data-content-r data-alignT">
      <!-- data nav  -->
      <div class="data-nav ">
        <button
          class="data-n-b daT"
          @click="dataPage = EditMatch"
          :class="[dataPage == EditMatch ? 'datapage ' : '']"
        >
          EditMatch
        </button>
        <button
          class="data-n-b daT"
          @click="dataPage = EditTournament"
          :class="[dataPage == EditTournament ? 'datapage' : '']"
        >
          EditTournament
        </button>
      </div>
    </div>  
     <!-- inner data content -->
     <div class="inner-data-content">
        <component :is="dataPage" />
      </div>    
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
@import "@/style/teamtm.css";
</style>
