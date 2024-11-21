<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterNav from './components/FooterNav.vue';
</script>

<template>
  <div class="">
  <NavBar />
  <RouterView />
  <FooterNav />
</div>
</template>

