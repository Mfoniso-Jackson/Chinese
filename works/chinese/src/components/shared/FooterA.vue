<template>
  <!-- Section Contact -->
  <section id="cont" class="pattern">
    <div class="container">
      <div class="col-lg-8 col-md-offset-2">
        <!-- Section heading -->
        <div class="section-heading">
          <!--<h2>Booking</h2>-->
        </div>
      </div>
      <!-- Booking Form -->
      <div class="col-md-4 col-md-offset-1 white_block">
        <h4>Contact</h4>
        <p><i class="fa fa-envelope"></i><a href="mailto:info@tangchinese.com">info@tangchinese.com</a></p>
        <p><i class="fa fa-phone"></i>+1 456 7890</p>
        <!-- address info -->
        <p><i class="fa fa-home"></i>Imaginary Chinese City, 304.</p>
        <!--/Contact form -->
      </div>
      <!-- Contact info -->
      <div class="col-md-5 col-md-offset-1  white_block">
        <h4>We Are Open</h4>
        <table class="table">
          <tbody>
          <tr>
            <td class="text-left">Monday to Friday</td>
            <td class="text-right">7 a.m to 7 p.m</td>
          </tr>
          <tr>
            <td class="text-left">Weekends</td>
            <td class="text-right">7 a.m to 2 p.m</td>
          </tr>
         
          </tbody>
        </table>


      </div>
      <!--/col-md-4 -->


    </div>
    <!-- /container-->
  </section>
  <!--Section ends -->
</template>

<script>
  import Datepicker from 'vue-bulma-datepicker';
  export default {
    name: 'booking',
    components: {
      Datepicker
    }
  }
</script>

<style scoped>
  /*===========================
    Contact
  ============================ */
#cont .container {
  padding-bottom: 30px;
}
  .white_block{
  max-height: 252px;
  }
  #contact {
    padding-bottom: 51px;
  }

  #contact .container {
    /*background: url(../../assets/images/image1.png) no-repeat;*/
    /*background-position: bottom center;*/
  }

  .form-group {
    font-family: "Montserrat", sans-serif;
  }

  #contact h5 {
    margin: 30px 0 10px;
  }

  #contact .social-media a i {
    font-size: 25px;
  }

  #contact .form-control, .textarea-field:focus, .input-field:focus {
    outline: 0 none;
  }

  #contact .form-control {
    font-size: 16px;
    outline: 0;
    box-shadow: none;
    background: none;
    border-radius: 0;
    padding-top: 15px;
    border-bottom: 1px solid #A09C94;
    padding: 10px 15px;
  }

  #contact textarea {
    height: 150px;
    resize: none;
  }

  /* Section with pattern */

  section.pattern {
    /*background: url(../../assets/images/texture.jpg);*/
    background: #555;
    background-repeat: repeat;
  }

  .white_block {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 50px;
    z-index: 99;
  }

p i{
  margin-right: 15px;
}

  @media (max-width: 991px) {
    #contact .container {
      background: none;
    }

  }

  @media (max-width: 300px) {

    /* extras */
    .white_block {
      padding: 20px 10px 20px;
      margin: 5px;
    }
  }

  h4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.2px;
  }
  table {
    font-weight: 600;
    text-transform: uppercase;
  }

  table>tbody>tr>td{line-height: 2em;}

   h5{margin-bottom: 20px;}

   h5{margin: 30px;}


</style>
