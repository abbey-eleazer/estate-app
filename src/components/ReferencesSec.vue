<template>
  <div id="references" class="container px-[10rem] pt-44 mb-24">
       <h2 class="font-serif text-5xl font-bold pb-8" >References</h2>
        <div class="flex items-center justify-between">
          <p class="w-[38rem] text-[1.3rem] font-sans pb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus rutrum donec ultricies cras id ac.
          </p>
        </div>

        <div class="flex justify-between">
          <RefCard 
          reference="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem."
          name="Emerson Aminoff"
          apartment="3 bedroom apartment in Madrid" 
          />

        <RefCard 
          reference="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem."
          name="Jocelyn Stanton"
          apartment="2 bedroom apartment in Barcelona" 
          />
        </div>


  </div>
</template>

<script setup>
import RefCard from './RefCard.vue';


</script>