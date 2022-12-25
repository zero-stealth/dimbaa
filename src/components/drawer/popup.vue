<script setup>
import { useDrawerStore } from "@/stores/drawer";
import CircleDrawer from "./CircleDrawer.vue";
import ExitIcon from "../icons/ExitIcon.vue";

import { ref, watchEffect } from "vue";

const drawerStore = useDrawerStore();
const open = ref(null);

watchEffect(() => {
    open.value = drawerStore.popDrawer;
})

const props = defineProps({
  height: String,
  width: String,
  title: String,

});
</script>
<template>
  <Teleport to="body">
    <div
      class="pop-container"
      :class="[open == false ? 'Close' : '']"
      :style="{ width: `${props.width}%`, height: `${props.height}%`}"
    >
      <div class="pop-up-details">
        <h1>{{ props.title }}</h1>
        <CircleDrawer class="pop-circle" @click="drawerStore.togglePop">
          <ExitIcon class="icon pop-exit-icon" />
        </CircleDrawer>
      </div>
      <slot></slot>
    </div>
  </Teleport>
</template>
<style>
@import "@/style/popup.css";
</style>
