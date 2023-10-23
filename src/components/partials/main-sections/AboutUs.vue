<script>
import { aboutUs } from '../../../data/About';
export default {
    name:'AboutUs',
    data(){
      return{
        aboutUs
      }
    }
}
</script>

<template>

  <div class="container-fluid">

    <div class="row d-flex">

      <div v-for="(card, index) in aboutUs"
      :key="index"
      class="card-container"
      :class="card.half ? 'col-6' : 'col-12'">

        <div class="dc-card"
        :style="`background-image: url(/src/assets/img/${card.img});`">

          <div class="text-container">
            <h2>{{ card.title }}</h2>
            <span class="number">{{ card.number }}</span>
            <div class="text">
              <span>{{ card.intestation }}</span>
              <p>{{ card.text }}</p>
            </div>
          </div>

        </div>

      </div>
        
      <div class="col-6">

        <div class="citation">
          <span>DONT JUST TAKE OUR WORD FOR IT</span>
          <h2>"Finnaly found an alternative to the mass produced products. Something that icorporates real organic ingredients, nutrient dense wellned while promoting sustainability and activity."</h2>
          <span>Rachel Cooper, Founder</span>
        </div>

      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>
.col-12:first-child{
  order: 0;
}
.col-12{
  order: 2;
}

.col-6{
  order: 1;
}

.col-12,
.col-6{
  height: 720px;
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
.dc-card::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.card-container:first-child .text{
  right: 0;
}

.citation,
.dc-card{
  width: 100%;
  height: 95%;
  position: relative;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.citation{
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

</style>