<script>
export default {
    name:'AboutUs'
}
</script>

<template>

  <div class="container-fluid">

    <div class="row">

      <div class="col-12">

        <div class="tell-us">

          <div class="text-container">
            <h2>Tell us what you have in mind</h2>
            <span class="number">01</span>
            <div class="text">
              <span>MANUAL INGREDIENTS SELECTION</span>
              <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laorest ex. Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat, ruturm augue.</p>
            </div>
          </div>

        </div>

      </div>

      <div class="col-12">

        <div class="baking">

          <div class="text-container">
            <h2>We Start Baking</h2>
            <span class="number">02</span>
            <div class="text">
              <span>SWEET & DELICIOUS</span>
              <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laorest ex. Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat.</p>
            </div>
          </div>

        </div>

        <div class="citation">
          <span>DONT JUST TAKE OUR WORD FOR IT</span>
          <h2>"Finnaly found an alternative to the mass produced products. Something that icorporates real organic ingredients, nutrient dense wellned while promoting sustainability and activity."</h2>
          <span>Rachel Cooper, Founder</span>
        </div>

      </div>

      <div class="col-12">

        <div class="delivered">

          <div class="text-container">
            <h2>Delivered to your home</h2>
            <span class="number">03</span>
            <div class="text">
              <span>BAKED TO ORDER & GIFT WRAPPED</span>
              <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laorest ex. Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat, ruturm augue.</p>
            </div>
          </div>
          
        </div>

      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>

.col-12{
  height: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.text-container{
  color: white;
  position: relative;
  width: 90%;
  height: 80%;

  display: flex;
  justify-content: space-between;
  h2{
    width: 400px;
  }
  .number{
    font-size: 4rem;
    color: white;
  }
  .text{
    width: 400px;
    position: absolute;
    bottom: 0;
    span{
      color: rgb(181, 180, 180);
    }
    p{
      margin: 20px 0px;
      color: white;
    }
  }
}

.tell-us::before,
.baking::before,
.delivered::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.tell-us,
.baking,
.citation,
.delivered{
  width: 100%;
  height: 95%;
  position: relative;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tell-us{
  background-image: url(../../../assets/img/bakery-process-1.jpg);
  .text{
    right: 0;
  }
}

.baking{
  width: calc(100% / 2 - 10px);
  background-image: url(../../../assets/img/bakery-process-2.jpg);
}

.citation{
  width: calc(100% / 2 - 10px);
  background-color: #F3EEF4;
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  h2{
    margin: 30px 0px;
  }
}

.delivered{
  background-image: url(../../../assets/img/bakery-process-3.jpg);
}


</style>