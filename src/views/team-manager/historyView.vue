<script setup>
import { useDrawerStore } from "@/stores/drawer";
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
              <th>For Team</th>
              <th>Venue</th>
              <th>City</th>
              <th>Line Up Form</th>
          </tr>
          <tr>
            <td>1</td>
            <td>1/01/2023</td>
            <td>Namungo FC</td>
            <td>Jamhuri Stadium</td>
            <td>City Name</td>
            <td>
              <div class="table-link-c">
                <div class="table-link">
                  <a href="#" @click="drawerStore.toggleSecond()">View</a>
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

