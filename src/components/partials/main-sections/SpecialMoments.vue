<script>
export default {
    name:'SpecialMoments'
}
</script>

<template>
  <div class="container-fluid d-flex flex-column">

    <div class="text-container d-flex flex-column align-items-center my-4">
      <span>CORPORATE & WEDDINGS</span>
      <h2>Baking Special Moments</h2>
    </div>

    <div class="images-container d-flex justify-content-between">

      <div class="corporate">

          <div class="text-container flex-column align-items-center">
            <span>INTERNATIONAL BAKERY</span>
            <h2>CORPORATE EVENTS</h2>
            <button class="btn-purple">Explore more</button>
          </div>

      </div>

      <div class="weddings">

          <div class="text-container flex-column align-items-center">
            <span>PRIVATE DINING HALL</span>
            <h2>Wedding & Parties</h2>
            <button class="btn-purple">Explore more</button>
          </div>

      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>

.text-container{
  h2{
    margin: 20px 0px;
  }
}

.images-container{
  width: 100%;

  .corporate,
  .weddings{
    width: 48%;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  }

  .text-container{
    display: none;
    span{
      color: #D2D3D4;
    }
    h2{
      color: white;
    }
  }
  .corporate{
    background-image: url(../../../assets/img/corporate-bg.jpg);
    &:hover{
      background-image: url(../../../assets/img/corporate-hover-bg.jpg);
    }
    &:hover .text-container{
      display: flex;
    }
  }

  .weddings{
    background-image: url(../../../assets/img/wedding-bg.jpg);
    &:hover{
      background-image: url(../../../assets/img/wedding-hover-bg.jpg);
    }
    &:hover .text-container{
      display: flex;
    }
  }
}

</style>