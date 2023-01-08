<script setup>
import { useDrawerStore } from "@/stores/drawer";
import SideDrawer from "@/components/drawer/SideDrawer.vue";

const drawerStore = useDrawerStore();

</script>
<template>
    <div class="user-content">
      <!-- <h2></h2> -->
      <div class="table-slide">
        <table>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Venue</th>
            <th>City</th>
            <th>Ref report</th>
          </tr>
          <tr>
            <td>1</td>
            <td>1/01/2023</td>
            <td>Namungo FC</td>
            <td>Geita Gold FC</td>
            <td>Jamhuri Stadium</td>
            <td>City Name</td>
            <td>
              <div class="table-link-c">
                <div class="table-link">
                  <a href="#" @click="drawerStore.toggleSecond()">Upload</a>
                </div>
                <div class="table-link">
                  <a href="#" @click="openEdit">View</a>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
</template>
<style>
    
</style>