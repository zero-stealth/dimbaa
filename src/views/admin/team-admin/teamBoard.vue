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
            <span>Team</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = Player"
          :class="[activePage == Player ? 'active' : '']"
        >
          <div class="inner-i">
            <UserIcon class="icon icon-c" />
            <span>Player</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = PlayerHistory"
          :class="[activePage == PlayerHistory ? 'active' : '']"
        >
          <div class="inner-i">
            <HistoryIcon class="icon icon-c" />
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
        <button
          class="inner-component"
          @click="activePage = Apparel"
          :class="[activePage == Apparel ? 'active' : '']"
        >
          <div class="inner-i">
            <ApparelIcon class="icon icon-c" />
            <span>Team Apparel</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = Staff"
          :class="[activePage == Staff ? 'active' : '']"
        >
          <div class="inner-i">
            <StaffIcon class="icon icon-c" />
            <span>Team Staff</span>
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
import StaffIcon from "@/components/icons/StaffIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import HistoryIcon from "@/components/icons/HistoryIcon.vue";
import ApparelIcon from "@/components/icons/ApparelIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

// pages
import Player from "./playerV.vue"
import Staff from "./staffView.vue"
import TeamName from "./teamName.vue"
import Apparel from "./ApparelView.vue"
import PlayerHistory from "./playerHistory.vue"
import TeamPlayerList from "./teamPlayerList.vue"

// used shallow ref to prevent reactivity on the component
const activePage = shallowRef(TeamName);

//check state of the drawer
</script>
<style>
@import "@/style/board.css";
</style>
