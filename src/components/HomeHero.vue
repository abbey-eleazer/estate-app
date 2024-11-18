<template>
  <div class="pt-[10.5rem] container mx-auto px-[10rem] flex items-center justify-between mb-32">
    <!-- HERO TEXT  -->
    <div class="w-[33rem] z-10 pt-5 flex1">
      <h1 class="font-serif font-black text-[4rem] leading-[4.5rem] pb-6">
        Modern living <br> for everyone 
      </h1>
      <p class="font-sans font-normal text-[1.3rem] leading-8 ">
        We provide a complete service for the sale, purchase or rental of real estate. We have been operating in Madrid and Barcelona more than 15 years.
      </p>
      <div class="w-[46rem] h-[6.5rem] mt-6 bg-lightColor rounded flex flex-row items-center justify-evenly">
        <select class="w-[12.8rem] h-[3.5rem] rounded px-2 text-darkBlue outline-none border">
          <option value="1">Property type</option>
        </select>
        <div class="w-[18.8rem] h-[3.5rem] px-3 rounded border-2 border-darkColor/20 bg-whiteColor flex items-center gap-3">
          <i class="pi pi-map-marker text-darkColor/40"></i>
        <input type="text" placeholder="Search of location" class=" outline-none">
      </div>
        

        <router-link class="bg-darkBlue text-whiteColor rounded h-[3rem] w-[8.3rem] flex items-center justify-center font-bold ">
          <i class="pi pi-search text-whiteColor mr-4"></i>
          Search
        </router-link>
      </div>

    </div>

    <!-- HERO IMAGE -->
    <div>
      <img src="../assets/header-picture.png" class="w-[39rem] h-[35rem] flex-1"  alt="photo of building">
    </div>

  </div>
</template>

<script setup>

import 'primeicons/primeicons.css'

</script>
