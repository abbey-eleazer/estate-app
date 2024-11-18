<template>
  <div class="fixed bg-whiteColor w-full py-10 z-50">
  <div class="container mx-auto px-[10rem] font-sans flex items-center justify-between">
    <div class="flex items-center gap-16">
      <img src="../assets/logo-black.png" alt="logo">
    <ul class="flex items-cent gap-10">
      <li >
        <router-link>
          Top offers
        </router-link>
      </li>
      <li >
        <router-link>
          Search in offers
        </router-link>
      </li>
      <li >
        <router-link>
          References
        </router-link>
      </li>
      <li >
        <router-link>
          About us
        </router-link>
      </li>
     Our team
    </ul>
  </div>

    <div class="">
    <router-link to="/contact" class="bg-darkBlue text-whiteColor rounded h-[3rem] w-[8.3rem] flex items-center justify-center font-bold ">
      Contact
    </router-link>
    </div>

  </div>
  </div>
</template>

<script setup>

</script>

