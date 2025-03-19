<script setup>
import { House } from '@/models/House.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';



defineProps({
  houseProp:{type:House, required: true}
})

async function deleteHouse(houseId) {
  try {
   const confirmed = await Pop.confirm('Are you sure you want to delete this house?','It will be gone forever','Yes')
    if (!confirmed) {
      return
    }
    await housesService.deleteHouse(houseId)
  }
  
  catch (error){
    Pop.error(error, 'could not delete house');
    logger.error('could not delete house', error)
  }
}


</script>


<template>
<div class="row shadow-lg mb-3">
  <div class="col-md-5 px-0">
    <img :src="houseProp.imgUrl" alt="house" class="img-fluid">
  </div>
  <div class="col-md-7 d-flex flex-column">
    <div class="d-flex justify-content-between">
      <p>Year: {{ houseProp.year }}</p>
      <b>Price: {{'$' +houseProp.price }}</b>
       <p>Listed on: {{ houseProp.createdAt.toLocaleDateString() }}</p>
    </div>
    <div>
      <p>Bedrooms: {{ houseProp.bedrooms }}</p>
      <p>Bathrooms: {{ houseProp.bathrooms }}</p>
      <p>Levels: {{ houseProp.levels }}</p>
    </div>
    <div>
      <p>{{ houseProp.description }}</p>
    </div>
    <div class="d-flex justify-content-end mt-auto mb-3">
      <button @click="deleteHouse(houseProp.id)" type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
</div>
</template>


<style lang="scss" scoped>
img{
  height: 40dvh;
  object-fit: cover;
  width: 100%;
}
</style>