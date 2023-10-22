<script>
export default {
    name:'Footer'
}
</script>

<template>
  
  <div class="container-fluid my-5">

    <div class="row">
      
      <div class="col-6">

        <div class="footer-menu m-5 d-flex flex-column">

          <div class="logo">
            <img src="../assets/img/avada-bakery-logo.png" alt="">
          </div>

          <nav>
            <ul class="d-flex list-unstyled">
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#"><i class="fa-solid fa-cart-shopping"></i><span>0</span></a></li>
            </ul>
          </nav>

          <div class="copyright">
            <span>&copy; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</span>
          </div>

        </div>

      </div>

      <div class="col-6">

        <div class="newsletter d-flex flex-column align-items-end m-5">

          <h3>Subrscibe to our Newsletter</h3>

          <div class="email">
            <form action="" method="get">
              <input type="email" placeholder="Enter email address*">
              <button class="btn-purple">Subscribe</button>
            </form>
          </div>

          <div class="social">
            <ul class="d-flex list-unstyled">
              <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
            </ul>
          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
  .logo{
    width: 200px;
    margin-bottom: 50px;
    img{
      width: 100%;
    }
  }
  nav{
    margin-bottom: 80px;
    li{
      margin-right: 20px;
      padding-bottom: 5px;
      border-bottom: 3px solid rgba(255, 255, 255, 0);
      &:hover{
        border-bottom: 3px solid $primary-font-color;
        cursor: pointer;
      }
      a{
        text-decoration: none;
        color: $primary-font-color;
        font-size: 1.2rem;
        span{
          padding: 5px 10px;
          margin-left: 5px;
          background-color: #F3EEF4;
          border-radius: 50%;
          font-size: 1.2rem;
        }
      }
    }
  }
  .copyright{
    span{
      font-size: .9rem;
    }
  }

  .newsletter{
    h3{
      margin-bottom: 50px;
    }
    .email{
      input{
        width: 500px;
        margin-right: 20px;
        border: 1px solid rgb(248, 246, 246);
        border-radius: 5px;
        padding: 10px 20px;
        margin-bottom: 125px;
      }
    }
    .social{
      li{
        margin-right: 40px;
        padding-bottom: 5px;
        a{
          text-decoration: none;
          color: $primary-font-color;
          font-size: 1.2rem;
        }
      }
    }
  }

</style>