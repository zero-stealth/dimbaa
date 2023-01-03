<template>
  <div class="detail-container">
    <form action="" class="d-form  detail-view">
    <div class="d-container1">
      <div class="d-wrapper">
      <label for="" class="d-label">Competion</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Team</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Date</label>
      <input type="date" placeholder="predefined" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Played with</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">M/No</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    </div>
    </form>
    <div class="general-btn">
        <button type="submit" class="btn-g g-a">Update</button>
        <button type="submit" @click="reset" class="btn-g g-u">Reset</button>
      </div>
  </div>
</template>
<script setup>
</script>
<style>
  @import "@/style/general.css"
</style>