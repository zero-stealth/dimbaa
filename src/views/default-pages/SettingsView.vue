<script setup>
import { shallowRef } from "vue";
// icons
import LanguageIcon from "@/components/icons/LanguageIcon.vue";
import SecureIcon from "@/components/icons/KeyIcon.vue";
import MatchRuleIcon from "@/components/icons/LawIcon.vue";
import LogOutIcon from "@/components/icons/LogOutIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

// pages
import Security from "./settings/securityPage.vue"
import Language from "./settings/languagePage.vue"
import MatchRule from "./settings/MatchRule.vue"
import Exit from "../authentication/logInView.vue"

// used shallow ref to prevent reactivity on the component
const activePage = shallowRef(Security);

</script>
<template>
  <div class="dashboard-container">
    <div class="dashbar">
      <div class="inner-container">
        <button
          class="inner-component"
          @click="activePage = Security"
          :class="[activePage == Security ? 'active' : '']"
        >
          <div class="inner-i">
            <SecureIcon class="icon icon-c" />
            <span>Security</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = Language"
          :class="[activePage == Language ? 'active' : '']"
        >
          <div class="inner-i">
            <LanguageIcon class="icon icon-c" />
            <span>Language</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = MatchRule"
          :class="[activePage == MatchRule ? 'active' : '']"
        >
          <div class="inner-i">
            <MatchRuleIcon class="icon icon-c" />
            <span>MatchRule</span>
          </div>
          <ArrowIcon class="icon icon-c a-icon" />
        </button>
        <button
          class="inner-component"
          @click="activePage = Exit"
          :class="[activePage == Exit ? 'active' : '']"
        >
          <div class="inner-i">
            <LogOutIcon class="icon icon-c" />
            <span>LogOut</span>
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
<style>
@import "../../style/board.css";
</style>
