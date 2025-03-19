<script setup>
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




</script>

<template>
  <form>
    <div class="mb-3">
      <label for="houseBedrooms">Bedrooms</label>
      <input
        id="houseBedrooms"
        type="number"
        required
        max="50"
        placeholder="Bedrooms..."
      />
    </div>
    <div class="mb-3">
      <label for="houseBathrooms">Bathrooms</label>
      <input
        id="houseBathrooms"
        type="number"
        required
        max="50"
        placeholder="Bathrooms..."
      />
    </div>
    <div class="mb-3">
      <label for="houseLevels">Levels</label>
      <input
        id="houseLevels"
        type="number"
        required
        max="50"
        placeholder="Levels..."
      />
    </div>
    <div class="mb-3">
      <label for="houseImgUrl">Img Url</label>
      <input
        id="houseImgUrl"
        type="url"
        required
        maxlength="500"
        placeholder="Img Url..."
      />
    </div>
    <div class="mb-3">
      <label for="housePrice">Price</label>
      <input
        id="housePrice"
        type="number"
        required
        maxlength="50"
        placeholder="Price..."
      />
    </div>
    <div class="mb-3">
      <label for="houseDescription">Description</label>
      <input
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
