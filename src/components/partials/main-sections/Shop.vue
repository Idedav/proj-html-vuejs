<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { store } from '../../../data/store';
export default {
    name:'Shop',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
    data(){
      return{
        store
      }
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

      <swiper
                class="carousel d-flex justify-content-between mySwiper"
                :slidesPerView="4"
                :spaceBetween="10"
                :loop="true"
                :pagination="{
                clickable: true,
                }"
                :navigation="true"
                :modules="modules"
                >

                    <swiper-slide
                    class="product"
                    v-for="product in store"
                    :key="product.id"
                    >
                        <img :src="`/src/assets/img/${product.image}`" alt="">
                        <div class="text text-center">
                          <h6>{{ product.name }}</h6>
                          <p>${{ product.prices[0] }} - ${{ product.prices[1] }}</p>
                        </div>
                    </swiper-slide>

                </swiper>

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
    height: 600px;
    margin-left: 60px;
    .carousel{
      position: relative;
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 80%;
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

</style>