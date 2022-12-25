import { ref } from "vue";
import { defineStore } from "pinia";

export const useDrawerStore = defineStore("drawer", () => {
  const IsDrawerOpen = ref(false);
  const popDrawer = ref(false)


  const toggleDrawer = () => {
    IsDrawerOpen.value = !IsDrawerOpen.value;
  };

  const togglePop = () => {
    popDrawer.value = !popDrawer.value;
  }

  return { IsDrawerOpen, toggleDrawer, popDrawer, togglePop };
});
