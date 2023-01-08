<script setup>
import details from "./detailView.vue";
import form1 from "./assessor-form/form1.vue";
import form2 from "./assessor-form/form2.vue";
import form3 from "./assessor-form/form3.vue";
import form4 from "./assessor-form/form4.vue";
import form5 from "./assessor-form/form5.vue";
import form6 from "./assessor-form/form6.vue";
import form7 from "./assessor-form/form7.vue";
import form8 from "./assessor-form/form8.vue";
import { useDrawerStore } from "@/stores/drawer";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

import { shallowRef } from "vue";
const drawerStore = useDrawerStore();

const dataPage = shallowRef(details);
</script>
<template>
  <div class="main-container">
    <div class="nav-top">
      <div class="main-details data-b second-t">
        <button class="second-btn second-m" @click="drawerStore.toggleSecond()">
          <ArrowIcon class="icon icon-second" />
        </button>
        <span>Referee Assessor form</span>
      </div>
    </div>
    <div class="team-b-txt">
    <div class="second-t">
        <button class="second-btn" @click="drawerStore.toggleSecond()">
        <ArrowIcon class="icon icon-second" />
      </button>
      <h1>Referee Assesor form</h1>
    </div>
    </div>
    <div class="data-content-r">
      <!-- data nav  -->
      <div class="data-nav">
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
  </div>
</template>
<style>
@import "@/style/main.css";
@import "@/style/data.css";
</style>
