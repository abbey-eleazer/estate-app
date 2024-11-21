<template>
  <div class="w-[21.8rem] h-[23.6rem] rounded shadow-md shadow-darkBlue/20 border border-darkBlue/10 flex flex-col item-center justify-center">
    <div class="w-full flex items-center justify-center pb-6">
      <slot class="w-[12.5rem]"></slot>
    </div>
    <div class="text-center">
      <h4 class="font-serif font-bold text-xl">{{ name }}</h4>
      <p class="font-sans text-lg">{{ position }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    // src : URL,
    name : String,
    position : String
  })
</script>