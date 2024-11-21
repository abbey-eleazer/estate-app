<template>
  <div>
    <div class="w-[33.8rem] h-[18rem] rounded bg-lightColor p-5 flex flex-col justify-between">
      <div class="flex gap-3">
        <p class="text-8xl font-serif">"</p>
      <p class="text-lg font-sans mt-5">{{ reference }}</p>
      </div>
      <div class="mt-2">
        <h4  class="font-serif font-bold text-xl">{{ name }}</h4>
        <p class="font-sans text-lg">{{ apartment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  reference: String,
  apartment: String
})
</script>