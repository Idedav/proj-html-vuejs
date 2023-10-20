<script>
import OurProducts from './partials/main-sections/OurProducts.vue';
import SpecialMoments from './partials/main-sections/SpecialMoments.vue';
import Shop from './partials/main-sections/Shop.vue';
import AboutUs from './partials/main-sections/AboutUs.vue';
import Locations from './partials/main-sections/Locations.vue';
import Social from './partials/main-sections/Social.vue';
import Delivery from './partials/main-sections/Delivery.vue';
export default {
    name:'Main',
    components:{
      OurProducts,
      SpecialMoments,
      Shop,
      AboutUs,
      Locations,
      Social,
      Delivery
    }
}
</script>

<template>
  <div class="dc-container">
    <OurProducts />
    <SpecialMoments />
    <Shop />
    <AboutUs />
    <Locations />
    <Social />
  </div>
  <Delivery />
</template>

<style lang="scss" scoped>

.dc-container{
  width: 90%;
  max-width: 1920px;
  margin: 0 auto;
}

</style>