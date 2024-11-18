<template>
  <div class="w-full h-[57rem] bg-lightColor">
    <div class="container px-[10rem]">
      <div class="pt-32">
        <h2 class="font-serif text-5xl font-bold pb-8" >Top offers</h2>
        <div class="flex items-center justify-between">
        <p class="w-[38rem] text-[1.3rem] font-sans">
          Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest.
        </p>
        <router-link class="font-sans text-darkBlue border rounded h-10 w-[10rem] flex items-center justify-center font-bold ">
          Show all offers
        </router-link>
      </div>
      </div>

      <div class="mt-[6.5rem] flex items-center justify-between">
  
        <BasicCard 
        title="Large 4-room apartment with a beautiful terrace"
        price="320 000"
        location="Barcelona IX.">
          <img src="../assets/img1.png" alt="">
        </BasicCard>
        <BasicCard 
        title="5i large design apartment with terrace"
        price="280 000"
        location="Madrid VI.">
          <img src="../assets/img2.png" alt="">
        </BasicCard>
        <BasicCard 
        title="3-room apartment with a beautiful terrace"
        price="350 000"
        location="Madrid II.">
          <img src="../assets/img3.png" alt="">
        </BasicCard>
  
      </div>
    </div>
  </div>
</template>

<script setup>
import BasicCard from './BasicCard.vue';

</script>

