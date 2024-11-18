<template>
  <div>
    <div>
      <img :src='img' alt="">
      <h4>{{ name }}</h4>
      <p>{{ position }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    img : String,
    name : String,
    position : String
  })
</script>