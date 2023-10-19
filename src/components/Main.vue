<script>
import OurProducts from './partials/OurProducts.vue';
import SpecialMoments from './partials/SpecialMoments.vue';
import Shop from './partials/Shop.vue';
import AboutUs from './partials/AboutUs.vue';
import Locations from './partials/Locations.vue';
import Social from './partials/Social.vue';
import Delivery from './partials/Delivery.vue';
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
  margin: 0 auto;
}

</style>