<template>
  <div class="container px-[10rem] mb-24 ">
    <div class="flex flex-wrap gap-20 pt-24">
      <TeamCard name="Davis Carder" position="Super duper position">
        <img  src="../assets/team1.png" alt="">
      </TeamCard>
      <TeamCard name="Maren Press" position="Super duper position">
        <img  src="../assets/team2.png" alt="">
      </TeamCard>

      <div class="w-[21.8rem] h-[23.6rem] flex flex-col pt-24">
       <h2 class="font-serif text-5xl font-bold pb-5">Our Team</h2>
       <p class="font-sans text-lg w-[20rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus rutrum donec ultricies cras id ac.
       </p>
      </div>
 

      <TeamCard name="Randy Rosser" position="Super duper position">
        <img  src="../assets/team3.png" alt="">
      </TeamCard>
      <TeamCard name="Haylie Donin" position="Super duper position">
        <img  src="../assets/team4.png" alt="">
      </TeamCard>
      <TeamCard name="Miracle Bator" position="Super duper position">
        <img  src="../assets/team5.png" alt="">
      </TeamCard>
    </div>
  </div>
</template>

<script setup>
import TeamCard from './TeamCard.vue';


</script>
