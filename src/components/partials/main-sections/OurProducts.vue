<script>
import SwiperShort from '../../swipers/SwiperShort.vue';
export default {
    name:'OurProducts',
    components:{
        SwiperShort
    }
}
</script>

<template>
  
    <div class="container-fluid d-flex section-container">

        <div class="text-container">
            <span>OUR PRODUCTS</span>
            <h2>All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all natural, all organic ingredients.</h2>
            <button class="btn-purple">Start Shopping</button>
        </div>

        <div class="products-container d-flex justify-content-end">

            <SwiperShort />

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
        height: 600px;
        margin-left: 80px;
    }
}

</style>