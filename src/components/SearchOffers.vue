<template>
    <header class="container px-[10rem] pt-44 pb-16 flex flex-col justify-center items-center">
      <h1 class="font-serif font-black text-[3.7rem] leading-[4rem] pb-6">
        Search for an offer
      </h1>
      <p class="w-[38rem] text-2xl font-sans text-center">Choose from the most advantageous offers</p>
    </header>

    <main>
      <div class="w-full h-[21.6rem] bg-lightColor">
        <div class="container px-[10rem] flex items-center flex-col justify-center">

          <!-- SEARCH INPUT  -->
        <div class="flex items-center justify-center gap-6 pt-10">
          <div class="w-[30rem] h-[3.5rem] px-3 rounded border-2 border-darkColor/20 bg-whiteColor flex items-center gap-3">
            <input type="text" placeholder="Enter a keyword" class=" outline-none">
          </div>
          
          <router-link class="bg-darkBlue text-whiteColor rounded h-[3.2rem] w-[8.3rem] flex items-center justify-center font-bold ">
            <i class="pi pi-search text-whiteColor mr-4"></i>
            Search
          </router-link>
        </div>

        <div class=" w-full flex items-center justify-between text-darkBlue/50 pt-6">
          <span class="border-t border-darkBlue/40 w-[33rem]"></span>
          <p>Filter settings</p>
          <span class="border-t border-darkBlue/40 w-[33rem]"></span>
        </div>

        <div class="w-full flex items-center justify-between pt-6">
          <select class="w-[16.3rem] h-[3rem] rounded px-2 outline-none border">
            <option value="1">Sale</option>
          </select>
          <select class="w-[16.3rem] h-[3rem] rounded px-2 outline-none border">
            <option value="1">Select room flat</option>
          </select>
          <select class="w-[16.3rem] h-[3rem] rounded px-2 outline-none border">
            <option value="1">Select location</option>
          </select>
          <select class="w-[16.3rem] h-[3rem] rounded px-2 outline-none border">
            <option value="1">Most expensive</option>
          </select>
        </div>

        <div class="pt-6 w-[30rem]">
          <input type="range" class="w-[30rem] bg-darkColor">
          <div class="w-full flex items-center justify-between">
            <p>0 &euro;</p>
            <p>980 000 &euro;</p>
          </div>
        </div>
        </div>
      </div>

      <!-- CARDS -->
      <div class="container px-[10rem] flex items-center flex-col justify-center">
        <div class="w-full mt-[6.5rem] flex items-center justify-between flex-wrap gap-16">
        
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

        <BasicCard 
        title="Magnificent duplex in a private villa"
        price="320 000"
        location="Barcelona IX.">
          <img src="../assets/img4.png" alt="">
        </BasicCard>
        <BasicCard 
        title="5i large design apartment with terrace"
        price="280 000"
        location="Madrid VI.">
          <img src="../assets/img5.png" alt="">
        </BasicCard>
        <BasicCard 
        title="Magnificent duplex in a private villa"
        price="350 000"
        location="Madrid II.">
          <img src="../assets/img6.png" alt="">
        </BasicCard>

        </div>

        <div class="mt-24">
          <BlueBtn link="/" label="Show next" bg="bg-transparent" class="border-darkBlue border-2 text-darkBlue h-[3rem] hover:border-none hover:text-whiteColor"/>
        </div>

      </div>
    </main>
</template>

<script setup>
  import BasicCard from './BasicCard.vue'
  import BlueBtn from './BlueBtn.vue';
</script>
