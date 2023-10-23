<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { store } from '../../data/store'
export default {
    name:'SwiperLong',
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
    },
    methods:{
      formatPrices(number){
        return new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD'
           }).format(number);
      }
    }
}
</script>

<template>

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
                <p>{{ formatPrices(product.smallBacketPrice) }} - {{ formatPrices(product.bigBacketPrice) }}</p>
            </div>
        </swiper-slide>

    </swiper>

</template>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;
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

</style>