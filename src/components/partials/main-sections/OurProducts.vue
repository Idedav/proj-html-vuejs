<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { store } from '../../../data/store';
export default {
    name:'OurProducts',
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

        <div class="text-container">
            <span>OUR PRODUCTS</span>
            <h2>All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all natural, all organic ingredients.</h2>
            <button class="btn-purple">Start Shopping</button>
        </div>

        <div class="products-container d-flex justify-content-end">
                
                <swiper
                class="carousel d-flex justify-content-between mySwiper"
                :slidesPerView="2"
                :spaceBetween="20"
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
                    </swiper-slide>

                </swiper>

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../../scss/partials/variables' as *;
.container-fluid{
    margin-top: 125px;
    .text-container{
        width: 30%;
        h2{
            margin: 20px 0px;
        }
        button{
            margin-top: 20px;
        }
    }
    .products-container{
        width: 70%;
        height: 700px;
        margin-left: 80px;
        .carousel{
            position: relative;
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
                }
                
        }
    }
}

</style>