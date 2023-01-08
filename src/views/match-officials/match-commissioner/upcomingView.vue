<script  setup>
import { useDrawerStore } from "@/stores/drawer";

const drawerStore = useDrawerStore();

</script>
<template>
    <div class="user-content">
      <div class="table-slide">
        <table>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Venue</th>
            <th>City</th>
            <th>Pre match Report</th>
            <th>Post match Report</th>
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
                  <a href="#" @click="drawerStore.togglePre()">Upload</a>
                </div>
                <div class="table-link">
                  <a href="#" @click="">View</a>
                </div>
              </div>
            </td>
            <td>
              <div class="table-link-c">
                <div class="table-link">
                  <a href="#" @click="drawerStore.togglePost()">Upload</a>
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