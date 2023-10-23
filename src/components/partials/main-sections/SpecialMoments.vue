<script>
import { specialMoments } from '../../../data/SpecialMoments'
export default {
    name:'SpecialMoments',
    data(){
      return{
        specialMoments
      }
    }
}
</script>

<template>
  <div class="container-fluid d-flex flex-column">

    <div class="text-container d-flex flex-column align-items-center my-4">
      <span>CORPORATE & WEDDINGS</span>
      <h2>Baking Special Moments</h2>
    </div>

    <div class="images-container">

      <div class="row">

        <div v-for="(moment, index) in specialMoments"
        :key="index"
        class="col-6 d-flex justify-content-center align-items-center">

          <div class="image-container">
            <div class="image"
            :style="`background-image: url(/src/assets/img/${moment.image});`">
            </div>
  
            <div :style="`background-image: url(/src/assets/img/${moment.hoverImage});`"
            class="hover-image justify-content-center align-items-center">
              <div class="text-container text-center">
                <span>{{ moment.text.intestation }}</span>
                <h2>{{ moment.text.title }}</h2>
                <button class="btn-purple">Explore more</button>
            </div>
          </div>

        </div>


        </div>

      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>

.text-container{
  h2{
    margin: 20px 0px;
  }
}

.col-6{
  height: 800px;
  .image-container{
    width: 95%;
    height: 95%;
    background-position: center;
    background-size: cover;
    .image,
    .hover-image{
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
    }
    .hover-image{
      display: none;
      .text-container{
        h2{
          color: white;
        }
      }
    }
    &:hover .image{
      display: none;
    }
    &:hover .hover-image{
      display: flex;
    }
  }
}

</style>