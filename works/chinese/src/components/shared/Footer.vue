<template>
  <!-- Footer -->
  <footer>
    <div class="container">
      <!-- Bottom Credits -->
      <div class="col-md-6 col-sm-6 footer-half">
        <p>COPYRIGHT © {{new Date().getFullYear()}}, Designed by <a href="#">GWG Labs</a></p>
      </div>
      <div class="social-media col-md-6 footer-half">
        <a href="#" title=""><i class="fa fa-twitter"></i></a>
        <a href="#" title=""><i class="fa fa-facebook"></i></a>
        <a href="#" title=""><i class="fa fa-linkedin"></i></a>
        <a href="#" title=""><i class="fa fa-pinterest"></i></a>
        <a href="#" title=""><i class="fa fa-instagram"></i></a>
      </div>
    </div>
    </div>
    <!-- /container -->
    <!-- Go To Top Link -->
    <div class="page-scroll hidden-sm hidden-xs">
      <a href="#page-top" class="back-to-top"><i class="fa fa-angle-up"></i></a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer',
  }
</script>

<style scoped>
  /*===========================
    Footer
  ============================ */

  footer {
    padding: 21px;
    background: #1d1d1d;
  }

  footer a {
    color: #fff !important;
  }

  footer a:hover {
    color: #333 !important;
  }

  footer p {
    font-family: Open sans, serif;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
    font-family: "Montserrat", sans-serif;
  }

  .footer-half p{
    text-align: left;
  }

  /* Go to top icon */

  .back-to-top {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 12px;
    z-index: 119;
  }

  .back-to-top i {
    display: block;
    width: 44px;
    height: 44px;
    line-height: 40px;
    font-size: 22px;
    color: #fff;
    background-color: #333;
    border-radius: 50%;
    text-align: center;
    transition: all 0.2s ease-in-out;
  }
  .social-media a i {
    font-size: 16px;
  }

  .social-media a i {
    transition: .3s;
    margin: 3px;
    width: 30px;
    color: wheat;
  }
  .social-media{
    text-align: right;
  }

  @media (max-width: 995px) {
    .footer-half{
      width: 100%;
      text-align: center;
    }
    .footer-half p{
      text-align: center;
      margin-bottom: 15px;
    }
  }

</style>
