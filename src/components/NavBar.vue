<template>
  <div class="fixed bg-whiteColor w-full py-10 z-50">
  <div class="container mx-auto px-[10rem] font-sans flex items-center justify-between">
    <div class="flex items-center gap-16">
      <router-link to="/">
          <img src="../assets/logo-black.png" alt="logo">
      </router-link>
    <ul class="flex items-cent gap-10">
      <li >
        <router-link to="/top-offers">
          Top offers
        </router-link>
      </li>
      <li >
        <router-link to="/search-in-offers">
          Search in offers
        </router-link>
      </li>
      <li >
        <router-link to="/references">
          References
        </router-link>
      </li>
      <li >
        <router-link to="/about-us">
          About us
        </router-link>
      </li>
      <li >
        <router-link to="/our-team">
          Our team
        </router-link>
      </li>
    </ul>
  </div>

    <div class="">
    <router-link to="/contact" class="bg-darkBlue text-whiteColor rounded h-[3rem] w-[8.3rem] flex items-center justify-center font-bold ">
      Contact
    </router-link>
    </div>

  </div>
  </div>
</template>

<script setup>
import BlueBtn from './BlueBtn.vue';
</script>

