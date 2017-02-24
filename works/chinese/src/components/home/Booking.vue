<template>
  <!-- Section Contact -->
  <section id="contact" class="pattern">
    <div class="container">
      <div class="col-lg-8 col-md-offset-2">
        <!-- Section heading -->
        <div class="section-heading">
          <h2>Booking</h2>
        </div>
      </div>
      <!-- Booking Form -->
      <div class="col-md-6 col-md-offset-3 col-xs-12 white_block">
        <div class="form-style" id="contact_form">
          <!-- Contact results -->
          <div id="contact_results"></div>
          <!-- Form Starts -->
          <div class="form-group">
            <input type="text" name="name" class="form-control input-field" placeholder="Name" required="">
            <input type="email" name="email" class="form-control input-field" placeholder="Email Address" required="">
            <datepicker placeholder="Reservation date"
                        :config="{ dateFormat: 'd-m-Y', static: true, enableTime:true, disableMobile:true }"
                        class="form-control input-field"></datepicker>
            <input type="text" name="phone" class="form-control input-field" placeholder="Phone Number" required="">
            <select class="form-control input-field">
              <option class="form-control input-field">Table Size</option>
              <option class="form-control input-field">For 2</option>
              <option class="form-control input-field">For 3</option>
              <option class="form-control input-field">For 4</option>
              <option class="form-control input-field">For 5</option>
            </select>
            <button type="submit" id="submit_btn" value="Submit" class="btn btn-primary center-block">Booking
            </button>
          </div>
        </div>
        <!--/Contact form -->
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
  #contact {
    padding-bottom: 51px;
  }

  #contact .container {
    background: url(../../assets/images/nice.jpeg) no-repeat;
    background-position: bottom center;
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
    background: url(../../assets/images/texture.jpg);
    background-repeat: repeat;
  }

  .white_block {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 50px;
    z-index: 99;
  }

  .form-control {
    display: block;
    width: 100%;
    height: 58px;
    border: 0;
  }
  @media (max-width: 991px) {
    #contact .container{background: none;}

  }

  @media (max-width: 300px) {

    /* extras */
    .white_block {
      padding: 20px 10px 20px;
      margin: 5px;
    }
  }


</style>
