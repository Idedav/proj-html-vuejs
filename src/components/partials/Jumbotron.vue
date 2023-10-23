<script>
export default {
    name:'Jumbotron'
}
</script>

<template>
  <div class="jumbotron d-flex align-items-end">

    <div class="dc-container">

      <div class="text-container">
        <span>FRESH & TASTY BAKERY EVERY DAY</span>
        <h1>The Perfect Fresh Bread</h1>
        <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl vaius. Aliquam erat volutpat. Nullam quis sagittis nibh ac nulla id orci tempor.</p>
        <button class="btn-white">Explore our products</button>
      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>

.jumbotron{
  height: 100%;
  .dc-container{
    width: 90%;
    max-width: 1800px;
    margin: 350px auto;
    .text-container{
      width: 20%;
      h1{
        margin: 20px 0px;
        font-size: 3rem;
      }
      p{
        font-size: 1.2rem;
        margin: 30px 0px;
      }
    }
  }
}

</style>