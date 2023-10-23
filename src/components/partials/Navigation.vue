<script>
import { headerMenu } from '../../data/menus';
export default {
    name:'Navigation',
    data(){
      return{
        headerMenu
      }
    }
}
</script>

<template>

  <div class="nav-container container-fluid d-flex justify-content-between">

    <div class="logo m-3">
        <img src="../../assets/img/avada-bakery-logo.png" alt="">
    </div>
    
    <nav class="m-3 d-flex align-items-center">
        <ul class="d-flex list-unstyled">
            <li v-for="(menu, index) in headerMenu"
            :key="index"><a :href="`${menu.href}`">
              {{ menu.text }}
              <i :class="menu.icon"></i>
            </a></li>
        </ul>
    </nav>

  </div>

</template>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;
.nav-container{
  height: 120px;
  nav{
    height: 100%;
    li{
      margin-left: 40px;
      padding-bottom: 5px;
      border-bottom: 3px solid rgba(255, 255, 255, 0);
      &:hover{
        border-bottom: 3px solid $primary-font-color;
        cursor: pointer;
      }
      a{
        text-decoration: none;
        color: $primary-font-color;
      }
    }
  }
}

</style>