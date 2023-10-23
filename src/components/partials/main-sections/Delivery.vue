<script>
export default {
    name:'Delivery'
}
</script>

<template>

  <div class="container-fluid">

    <div class="container d-flex align-items-center">

      <div class="text-container">
        <span>TRY OUR SEASONAL PRODUCTS</span>
        <h1>Order for pick-up or delivery to your home</h1>
        <button class="btn-white">Shop Now</button>
      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>

.container-fluid{
  height: 550px;
  background-image: url(../../../assets/img/call-to-action-bg.jpg);
  background-size: cover;
  .container{
    height: 100%;
    .text-container{
      width: 50%;
      span{
        color: rgb(181, 180, 180);
        font-size: 1.2rem;
      }
      h1{
        color: white;
        margin: 30px 0px;
      }
    }
  }
}

</style>