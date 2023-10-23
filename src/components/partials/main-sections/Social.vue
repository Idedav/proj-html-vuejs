<script>
import { social } from '../../../data/social';
export default {
    name:'Social',
    data(){
      return{
        social
      }
    }
}
</script>

<template>

  <div class="container-fluid">

    <div class="row d-flex">
      
      <div v-for="(image, index) in social"
      :key="index"
      class="col-3">

        <div class="image">
          <img :src="`/src/assets/img/${image}`" alt="">
        </div>

      </div>

      <div class="col-6">

        <div class="text-container d-flex flex-column justify-content-center align-items-center">
          <span>MADE FOR SHARING</span>
          <h2>Let's stay in touch</h2>
          <button class="btn-purple"><i class="fa-brands fa-instagram"></i> Follow Us</button>
        </div>

      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>

.col-3,
.col-6{
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.col-3:first-child{
  order: 0;
}

.col-3{
  order: 1;
}

.text-container,
.image{
  width: 95%;
  height: 95%;
  img{
    width: 100%;
    height: 100%;
  }
}

.text-container{
  background-color: #F3EEF4;
  h2{
    margin: 20px 0px;
  }
}

</style>