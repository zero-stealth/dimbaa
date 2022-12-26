<template>
  <div class="dashboard-container">
    <div class="dashbar">
      <div class="inner-container">
        <button
          class="inner-component"
          @click="activePage = TeamName"
          :class="[activePage == TeamName ? 'active' : '']"
        >
          <div class="inner-i">
            <TeamIcon class="icon icon-c" />
            <span>Team Name</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = PlayerHistory"
          :class="[activePage == PlayerHistory ? 'active' : '']"
        >
          <div class="inner-i">
            <UserIcon class="icon icon-c" />
            <span>Player History</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = TeamPlayerList"
          :class="[activePage == TeamPlayerList ? 'active' : '']"
        >
          <div class="inner-i">
            <ListIcon class="icon icon-c" />
            <span>Player List</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
      </div>
    </div>
    <div class="main-dash">
      <component :is="activePage" />
    </div>
  </div>
</template>
<script setup>
import { shallowRef } from "vue";
// icons

import ListIcon from "@/components/icons/ListIcon.vue";
import TeamIcon from "@/components/icons/TeamIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

// pages

import TeamName from "./teamName.vue"
import PlayerHistory from "./playerHistory.vue"
import TeamPlayerList from "./teamPlayerList.vue"

// used shallow ref to prevent reactivity on the component
const activePage = shallowRef(TeamName);

//check state of the drawer
</script>
<style>
@import "@/style/board.css";
</style>
