<template>
  <div>
    <router-link :to=link class="` ${bg} rounded h-[3rem] w-[8.3rem] flex items-center justify-center font-bold hover:bg-lightBlue hover:text-whiteColor `">
      <slot></slot>
      {{label}}
    </router-link>
  </div>
</template>

<script setup>
  defineProps({
    link: String,
    label: String,
    bg: {
      type:String,
      default: 'bg-darkBlue text-whiteColor'
    }
  })
</script>