<script setup>
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import Info from "@/components/icons/InfoIcon.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import { shallowRef, ref } from "vue";

const drawerStore = useDrawerStore();
const check = ref(false);

const openPopI = () => {
  check.value = true;
  drawerStore.togglePop();
};
</script>
<template>
  <div class="post-wr2">
    <div class="wr2-p">
      <h1>
      4th Official: perfomance
      </h1>
      <Info class="icon icon-info-rds" />
      <CircleDraw class="circle-rds" @click="openPopI">
        <Info class="icon icon-info-rds" />
      </CircleDraw>
    </div>
    <div class="a-container iwp">
      <div class="a-wrap">
        <p>
            Substitution procedure, Management of the Technical areas,
        Administrative duties, Team work with Referee and Assistant referees /
        Utaratibu wa kubadilisha wachezaji, Uangalizi wa benchi la ufundi,
        Shughuli zaki utawala, ushirikiano na mwamuzi na Waamuzi wasaidizi
        </p>
        <div class="a-input-c pwq">
          <div class="p-aq2">
            <label for="">Strong points (Mambo mzuri aliyofanya)</label>
            <input type="text" class="form1-input apc-i" />
          </div>
        </div>
        <div class="a-input-c pwq">
          <div class="p-aq2">
            <label for="">Strong points (Mambo mzuri aliyofanya)</label>
            <input type="text" class="form1-input apc-i" />
          </div>
        </div>
        <div class="a-input-c">
          <label for=""><span>Total Marks</span> out of 20</label>
          <input type="text" class="form1-input apc-i" />
        </div>
      </div>
    </div>
  </div>
  <PopUP v-if="check == true">
    <div class="pos1 pop-pos">
      <h1>Place value between 0-10 for each question</h1>
    </div>
  </PopUP>
  <!-- input container  -->
  <div class="btn1-center m-rp">
    <div class="form1-btn">
      <button class="btn1 btn1-a">Reset</button>
      <button class="btn1 btn1-b hide-m">Update</button>
      <button class="btn1 btn1-b">Next</button>
    </div>
  </div>
</template>
<style>
@import "@/style/pos4.css";
@import "@/style/post3.css";
</style>
