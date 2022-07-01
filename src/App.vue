<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from '@/components/NavBar.vue'; //要有副檔名.vue
</script>

<template>
  <div class="container mx-auto">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<style></style>
