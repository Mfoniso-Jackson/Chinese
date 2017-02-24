<template>
  <section id="about" style="">
    <div class="container">
      <!-- Section Heading -->
      <div class="section-heading">
        <h2>About us</h2>
      </div>

      <!-- Text -->
      <div class="row about-margin">
        <div class="col-lg-7 top-margin col-sm-12">
          <h3 class="text-center">How We Started</h3>
          <p>Ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac
            sodales felis tiam non Doloreiur qui commolu ptatemp dolupta orem retibusam
            andigen Ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac sodales felis tiam non metus.
            Placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel
            mauris ultricies, vest ibulum orci eget,Fusce mollis imperdiet interdum donec eget metus auguen unc vel
            lorem ispuet Ibu lum orci eget, viverra elit liquam erat volut pat phas ellus ac sodales Lorem ipsum dolor
            sit amet, consectetur adipisicing elit uasi quidem minus id omnis.
          </p>
        </div>
        <!-- /col-lg-7 -->
        <div class="col-lg-5 col-sm-12 top-margin">
          <img src="../../assets/images/about4.jpeg" id="about-sub-image">
        </div>
        <!-- /col-lg-5 -->
      </div>
    </div>
    <!--/container-->
  </section>
</template>

<script>

  export default {
    name: 'about'
  }
</script>

<style scoped>

  /*===========================
  About Us
  ============================ */
  #about {
   // margin-top: 120px;
  //  background-image:url('../../assets/back.jpeg')
  }

  #about h2 {
    z-index: 99;
    position: relative;
  }
  #about h3{
   // color: white;
  }

  .row.about-margin {
    padding: 0px 0 60px;
  }


  

  .row.about-margin {
    padding: 0px 0 60px;
  }
  h3:before, h3:after {
    content: "\f111";
    font-family: FontAwesome;
    padding: 0 9px;
    vertical-align: middle;
    font-size: 12px;
  }
  #about-sub-image{
    width: 100%;
  }
</style>
