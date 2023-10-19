<script>
export default {
    name:'Jumbotron'
}
</script>

<template>
  <div class="jumbotron d-flex flex-column">

    <div class="buttons-container d-flex flex-column align-self-end mx-4 my-5">

      <button>
        <i class="fa-solid fa-credit-card"></i>
        <p>Demos</p>
      </button>

      <button>
        <span class="dollar">&dollar;</span>
        <span>39</span>
        <p>On Sale</p>
      </button>
      
    </div>

    <div class="text-cotnainer my-5">
      <span>FRESH & TASTY BAKERY EVERY DAY</span>
      <h1>The Perfect Fresh Bread</h1>
      <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl vaius. Aliquam erat volutpat. Nullam quis sagittis nibh ac nulla id orci tempor.</p>
      <button class="btn-white">Explore our products</button>
    </div>

  </div>

</template>

<style lang="scss" scoped>

.jumbotron{

  .buttons-container{
    button{
      width: 80px;
      height: 80px;
      padding: 10px;
      border: none;
      background-color: white;
      border-radius: 5px;
      margin-bottom: 15px;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
      i,
      span{
        font-size: 2rem;
      }
      span{
        color: #65BC7B;
        font-weight: bold;
      }
      .dollar{
        font-size: 1.2rem;
        position: relative;
        bottom: 15px;
      }
    }
  }
  .text-cotnainer{
    width: 25%;
    margin-left: 125px;
    h1{
      margin: 20px 0px;
      font-size: 3rem;
    }
    span{
      font-size: .7rem;
    }
    p{
      font-size: 1.2rem;
      margin: 30px 0px;
    }
  }
}

</style>