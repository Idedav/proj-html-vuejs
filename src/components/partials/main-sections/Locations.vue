<script>
export default {
    name:'Locations'
}
</script>

<template>

  <div class="container-fluid my-5">

    <div class="text-container text-center">
      <span>LOCATIONS</span>
      <h2>Visit our Bakeries</h2>
    </div>

    <div class="row my-5">

      <div class="col d-flex">

        <div class="location new-york">

          <div class="image">
            <img src="../../../assets/img/new-york-bk.jpg" alt="">
          </div>
          
          <div class="text-container d-flex flex-column justify-content-center align-items-center text-center">
            
            <h2>New York</h2>

            <div class="references d-flex justify-content-between">

              <div>
                <span>CALL US</span>
                <p>1.800.458.556</p>
              </div>

              <div>
                <span>OPEN ALL WEEK</span>
                <p>9:00 AM - 6:00 PM</p>
              </div>

              <button class="btn-white">View Map</button>

            </div>

          </div>

        </div>

        <div class="location london">

          <div class="image">
            <img src="../../../assets/img/london-bk.jpg" alt="">
          </div>

          <div class="text-container d-flex flex-column justify-content-center align-items-center text-center">
            
            <h2>London</h2>

            <div class="references d-flex justify-content-between">

              <div>
                <span>CALL US</span>
                <p>1.800.458.556</p>
              </div>

              <div>
                <span>OPEN ALL WEEK</span>
                <p>9:00 AM - 6:00 PM</p>
              </div>

              <button class="btn-white">View Map</button>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>

.col{
  height: 800px;
  .new-york{
    background-color: #F1F9FB;
  }
  .london{
    background-color: #FAF3E3;
  }
  .location{
    width: 50%;
    height: 100%;
    .image{
      width: 100%;
      height: 75%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .text-container{
      height: 25%;
      h2{
        margin-bottom: 30px;
      }
      .references{
        height: 20%;
        width: 90%;
      }
    }
  }
}

</style>