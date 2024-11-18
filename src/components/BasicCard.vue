<template>
  <div class="w-[21.8rem] h-[26rem] rounded overflow-hidden shadow-md shadow-darkBlue/40">
    <slot></slot>
    <div class="w-[90%] px-4">
      <h3 class="font-serif font-bold text-xl py-4">
        {{ title }}
      </h3>
      <p class="font-sans font-bold text-darkBlue ">{{price}} &euro;</p>
      <p class="font-sans text-lg">{{location}}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    price: Number,
    location: String
  })
</script>
