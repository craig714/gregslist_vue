<script setup>
import { AppState } from '@/AppState.js';
import HouseForm from '@/components/HouseForm.vue';
import HousesListing from '@/components/HousesListing.vue';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const houses = computed(()=> AppState.houses)



onMounted(()=>{
  getHouses()
})


async function getHouses(){
  try {
    await housesService.getHouses()
  }
  catch (error){
    Pop.error(error,'COULD NOT GET HOUSES');
    logger.error('COULD NOT GET HOUSES', error)
    
    
  }
}

</script>

<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="text center d-flex justify-content-center mt-4">
        <h1>Houses</h1>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <HouseForm/>
    </div>
    <div class="col-md-6">
      <div class="mb-3">
        <img src="https://images.unsplash.com/photo-1577398304089-20359eb8a7ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGhvdXNlc3xlbnwwfDF8MHx8fDA%3D" alt="">
</div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div v-for="house in houses" :key="house.id" class="col-12">
      <HousesListing :houseProp="house"/>
    </div>
  </div>
</div>



</template>


<style lang="scss" scoped>
img{
  height: 65dvh;
  width: 100%;
}
</style>