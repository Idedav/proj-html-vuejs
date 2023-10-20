<script>
export default {
    name:'Shop'
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

      <div class="carousel d-flex justify-content-between">

        <button class="btn-carousel btn-left">
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <div class="product">

          <div class="image">
            <img src="../../../assets/img/cherry-cake.jpg" alt="">
          </div>

          <div class="text text-center">
            <h3>Strawberry cake</h3>
            <p>$19.00 - $39.00</p>
          </div>

        </div>

        <div class="product">

          <div class="image">
            <img src="../../../assets/img/cookies-with-ice-cream.jpg" alt="">
          </div>

          <div class="text text-center">
            <h3>Strawberry cake</h3>
            <p>$19.00 - $39.00</p>
          </div>

        </div>

        <div class="product">

          <div class="image">
            <img src="../../../assets/img/choco-chip-cookies.jpg" alt="">
          </div>

          <div class="text text-center">
            <h3>Strawberry cake</h3>
            <p>$19.00 - $39.00</p>
          </div>

        </div>

        <div class="product">

          <div class="image">
            <img src="../../../assets/img/glazed-pancake-with-lemon.jpg" alt="">
          </div>

          <div class="text text-center">
            <h3>Strawberry cake</h3>
            <p>$19.00 - $39.00</p>
          </div>

        </div>

        <button class="btn-carousel btn-right">
          <i class="fa-solid fa-chevron-right"></i>
        </button>

      </div>

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
    .carousel{
      position: relative;
      width: 90%;
      height: 100%;
      .product{
        width: calc(100% / 4 - 10px);
        height: 100%;
        .image{
          width: 100%;
          height: 80%;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text{
          width: 100%;
          height: 20%;
          padding: 20px;
          p{
            color: $primary-font-color;
          }
        }
      }
    }
  }

</style>