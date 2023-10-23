<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { store } from '../../data/store'
export default {
    name:'SwiperShort',
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

</template>

<style lang="scss" scoped>

.carousel{
    position: relative;
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        }
                
    }

</style>