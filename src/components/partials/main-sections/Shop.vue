<script>
import SwiperLong from '../../swipers/SwiperLong.vue';
export default {
    name:'Shop',
    components:{
      SwiperLong
    }
}
</script>

<template>
  <div class="container-fluid d-flex">

    <div class="text-container text-center">
      <h2>Find a freshly baked products perfect for you</h2>
      <p>Integrer a nibh vitae ex porttitor rutrum et ut veli. Etiam ac felis at leo feugiat placerat. Sed ac nulla id orci tempor convallis sed.</p>
      <button class="btn-purple">Shop All Products</button>
    </div>

    <div class="products-container d-flex justify-content-end">

      <SwiperLong />

    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../../../scss/partials/variables' as *;
.container-fluid{
  margin: 200px 0px;
}
  .text-container{
    width: 20%;
    h2{
      margin: 20px 0px;
    }
    p{
      margin: 30px 0px;
    }
  }

  .products-container{
    width: 80%;
    height: 500px;
    margin-left: 60px;
  }

</style>