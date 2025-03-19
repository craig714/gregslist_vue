<script setup>
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';



const editableHouseData = ref({
  bedrooms:0,
  bathrooms:0,
  levels:0,
  imgUrl:'',
  year:0,
  price:0,
  description:''
})

async function createHouse(){
  try {
    const houseData = editableHouseData.value
    await housesService.createHouse(houseData)
  }
  catch (error){
    Pop.error(error,'could not create a house');
    logger.error('could not create the house',error)
  }
}


</script>

<template>
  <form @submit.prevent="createHouse()">
    <div class="mb-3">
      <label for="houseBedrooms">Bedrooms</label>
      <input v-model="editableHouseData.bedrooms"
        id="houseBedrooms"
        type="number"
        required
        max="50"
        placeholder="Bedrooms..."
      />
    </div>
    <div class="mb-3">
      <label for="houseBathrooms">Bathrooms</label>
      <input v-model="editableHouseData.bathrooms"
        id="houseBathrooms"
        type="number"
        required
        max="50"
        placeholder="Bathrooms..."
      />
    </div>
    <div class="mb-3">
      <label for="houseLevels">Levels</label>
      <input v-model="editableHouseData.levels"
        id="houseLevels"
        type="number"
        required
        max="50"
        placeholder="Levels..."
      />
    </div>
    <div class="mb-3">
      <label for="houseImgUrl">Img Url</label>
      <input v-model="editableHouseData.imgUrl"
        id="houseImgUrl"
        type="url"
        required
        maxlength="500"
        placeholder="Img Url..."
      />
    </div>
    <div class="mb-3">
      <label for="houseYear">Year</label>
      <input v-model="editableHouseData.year"
        id="houseYear"
        type="number"
        required
        maxlength="50"
        placeholder="Year..."
      />
    </div>
    <div class="mb-3">
      <label for="housePrice">Price</label>
      <input v-model="editableHouseData.price"
        id="housePrice"
        type="number"
        required
        maxlength="50"
        placeholder="Price..."
      />
    </div>
    <div class="mb-3">
      <label for="houseDescription">Description</label>
      <input v-model="editableHouseData.description"
        id="houseDescription"
        type="text"
        required
        maxlength="600"
        placeholder="Description..."
      />
    </div>
    <div>
      <button type="reset" class="btn btn-indigo me-3">Reset Form</button>
      <button type="submit" class="btn btn-success">Submit</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>

label{
  display: block;
}

</style>
