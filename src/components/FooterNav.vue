<template>
  <div class=" pt-32">
    <div class="w-full h-[24.8rem] bg-lightColor">
    <div class="container px-[10rem]">
      <div class="h-[24.8rem] flex items-center justify-center gap-24">
        <img src="../assets/plane.png" alt="paper plane">

        <div>
          <h3 class="font-serif font-bold text-4xl">Subscribe to our newsletter</h3>
          <p class=" text-[1.3rem] font-sans">Get the latest news and intersting offers in real estate</p>

          <div class="w-[25rem] h-[3rem] flex items-center justify-center gap-4 mt-5">
            <input type="email" placeholder="Your e-mail address" class="h-full w-[16rem] border border-darkBlue/30 rounded outline-none px-3 font-sans text-lg ">
            <BlueBtn link="/" label="Subscribe" bg="bg-transparent" class="border-darkBlue border-2 text-darkBlue h-[3rem]"/>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="bg-darkBlue h-[11.9rem] flex justify-center items-center">
      <img src="../assets//logo-white.png" alt="" class="w-[10rem]">
    </div>
  </div>
</template>

<script setup>
import BlueBtn from './BlueBtn.vue';


</script>