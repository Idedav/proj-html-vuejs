<script>
export default {
    name:'OurProducts'
}
</script>

<template>
  
    <div class="container-fluid d-flex">

        <div class="text-container">
            <span>OUR PRODUCTS</span>
            <h2>All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all natural, all organic ingredients.</h2>
            <button class="btn-purple">Start Shopping</button>
        </div>

        <div class="products-container d-flex justify-content-end">

            <div class="carousel d-flex justify-content-between">

                <button class="btn-carousel btn-left">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>

                <div class="product d-flex">
                    <div class="image">
                        <img src="../../../assets/img/choco-chip-cookies.jpg" alt="">
                    </div>
                </div>

                <div class="product d-flex">
                    <div class="image">
                        <img src="../../../assets/img/strawberry-jam-cookies.jpg" alt="">
                    </div>
                </div>

                <button class="btn-carousel btn-right">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../../scss/partials/variables' as *;
.container-fluid{
    margin-top: 125px;
    .text-container{
        width: 30%;
        h2{
            margin: 20px 0px;
        }
        button{
            margin-top: 20px;
        }
    }
    .products-container{
        width: 70%;
        height: 900px;
        .carousel{
            position: relative;
            width: 90%;
            height: 100%;
            .product{
                width: calc(100% / 2 - 10px);
                height: 100%;
                .image{
                    width: 100%;
                    height: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}

</style>