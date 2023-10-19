<script>
import Navigation from './partials/Navigation.vue';
import Jumbotron from './partials/Jumbotron.vue';

export default {
    name:'Header',
    components:{
        Navigation,
        Jumbotron
    }
}
</script>

<template>
    <div class="dc-container">        
        <Navigation />
        <Jumbotron />
    </div>
</template>

<style lang="scss" scoped>
    .dc-container{
        width: 100%;
        height: 1000px;
        background-image: url('../assets/img/hero-header-bakery.jpg');
        background-size: cover;
        background-position: center;
    }
</style>