<script>
import { locations } from '../../../data/Locations';
export default {
    name:'Locations',
    data(){
      return{
        locations
      }
    }
}
</script>

<template>

  <div class="container-fluid my-5">

    <div class="text-container text-center">
      <span>LOCATIONS</span>
      <h2>Visit our Bakeries</h2>
    </div>

    <div class="row my-5">

      <div class="col d-flex">

        <div v-for="(location, index) in locations"
        :key="index"
        :style="`background-color:${location.color}`"
        class="location new-york">

          <div class="image">
            <img :src="`/src/assets/img/${location.image}`" alt="">
          </div>
          
          <div class="text-container d-flex flex-column justify-content-center align-items-center text-center">
            
            <h2>{{ location.title }}</h2>

            <div class="references d-flex justify-content-between">

              <div>
                <span>CALL US</span>
                <p>{{ location.number }}</p>
              </div>

              <div>
                <span>OPEN ALL WEEK</span>
                <p>{{ location.openingTime }} - {{ location.closingTime }}</p>
              </div>

              <button class="btn-white">View Map</button>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>

.col{
  height: 800px;
  .location{
    width: 50%;
    height: 100%;
    .image{
      width: 100%;
      height: 75%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .text-container{
      height: 25%;
      h2{
        margin-bottom: 30px;
      }
      .references{
        height: 20%;
        width: 90%;
      }
    }
  }
}

</style>