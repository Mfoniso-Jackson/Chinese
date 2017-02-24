<template>
  <section id="menu" style="">
    <div class="container">
     <div class="col-lg-8 col-md-offset-2">
        <!-- Section heading -->
        <div class="section-heading">
          <h2>Menu</h2>
        </div>
      </div>
      <div class="row ">
      <div  class="col-md-12">
              <div class="row">
            <div class="col-md-6">
        <div class="row">
            <div class="col-md-12">
            <h4>Noodles</h4>
            </div>
             <div class="col-md-12">
                  <div class="row">
                       <div class="col-md-5">
                             <div href="#" class="thumbnail">
      <img src="https://www.visit-dorset.com/imageresizer/?image=%2Fdbimgs%2FFoodie%20Dorset.jpg&action=featPageSmallSquare" alt="...">
    </div>
                       </div>
                       <div class="col-md-7 details">
                       <h3>Stir Fried Sliced Noodles</h3>

                       <div class="price">
                           <span>&pound;6.8</span>
                       </div>

                       </div>
                  </div>
             </div>

               <div class="col-md-12">
                  <div class="row">
                       <div class="col-md-5">
                             <div href="#" class="thumbnail">
      <img src="https://www.visit-dorset.com/imageresizer/?image=%2Fdbimgs%2FFoodie%20Dorset.jpg&action=featPageSmallSquare" alt="...">
    </div>
                       </div>
                       <div class="col-md-7 details">
                       <h3>Shaved Noodles</h3>

                       <div class="price">
                           <span>&pound;6.8 </span>
                       </div>

                       </div>
                  </div>
             </div>

               <div class="col-md-12">
                  <div class="row">
                       <div class="col-md-5">
                             <div href="#" class="thumbnail">
      <img src="https://www.visit-dorset.com/imageresizer/?image=%2Fdbimgs%2FFoodie%20Dorset.jpg&action=featPageSmallSquare" alt="...">
    </div>
                       </div>
                       <div class="col-md-7 details">
                       <h3>Dry Noodles with Pork Mince and Vegetables</h3>

                       <div class="price">
                           <span>&pound;6.8 </span>
                       </div>

                       </div>
                  </div>
             </div>
        </div>
        </div>



            <div class="col-md-6">
        <div class="row">
            <div class="col-md-12">
            <h4>Rice</h4>
            </div>
             <div class="col-md-12">
                  <div class="row">
                       <div class="col-md-5">
                             <div href="#" class="thumbnail">
      <img src="https://www.visit-dorset.com/imageresizer/?image=%2Fdbimgs%2FFoodie%20Dorset.jpg&action=featPageSmallSquare" alt="...">
    </div>
                       </div>
                       <div class="col-md-7 details">
                       <h3>Stir Fried Rice with Shrimps</h3>


                       <div class="price">
                           <span>&pound;6.8</span>
                       </div>

                       </div>
                  </div>
             </div>

               <div class="col-md-12">
                  <div class="row">
                       <div class="col-md-5">
                             <div href="#" class="thumbnail">
      <img src="https://www.visit-dorset.com/imageresizer/?image=%2Fdbimgs%2FFoodie%20Dorset.jpg&action=featPageSmallSquare" alt="...">
    </div>
                       </div>
                       <div class="col-md-7 details">
                       <h3>Steamed Rice</h3>


                       <div class="price">
                           <span>&pound;6.8</span>
                       </div>

                       </div>
                  </div>
             </div>

               <div class="col-md-12">
                  <div class="row">
                       <div class="col-md-5">
                             <div href="#" class="thumbnail">
      <img src="https://www.visit-dorset.com/imageresizer/?image=%2Fdbimgs%2FFoodie%20Dorset.jpg&action=featPageSmallSquare" alt="...">
    </div>
                       </div>
                       <div class="col-md-7 details">
                       <h3>Stir Fried Rice with Diced Pork and Dark Mushroom</h3>


                       <div class="price">
                           <span>&pound;6.8</span>
                       </div>

                       </div>
                  </div>
             </div>
        </div>
        </div>

      </div>

       </div>
      </div>
    </div>
    <!--/container-->
  </section>
</template>

<script>

  export default {
    name: 'Menu'
  }
</script>

<style>
@media (max-width: 992px){
 #menu > .container {
    width: 600px;
}
}


.price span {

  font-weight: 700;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    color: #69564b;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: 0px;
}
 .details h3{

  font-weight: 400;
  text-transform:none;
    font-style: normal;
    /*font-family: 'Open Sans', sans-serif;*/
    color: #a55340;
    font-size: 16px;
    line-height: 1.7;
    letter-spacing: 0px;
   margin-bottom: 0px;
 }
  #menu {
  //height:600px;
    background-image:url('../../assets/back.jpg');
   // background-repeat:no-repeat;
   // background-size:cover;
   background-position: right center;
  }
  #menu > .container >.row{
      padding:100px 0px

  }
  #menu > .container >.row > div {

  background-color:white;

  padding: 100px 100px;
  }
.thumbnail img{
  width:180px;
  height:120px
}
 .thumbnail {
  border:none !important
 }
#menu p{
//color:black !important;
font-weight: 400;
    font-style: normal;
    color: #69564b !important;
    font-size: 22px !important;
    line-height: 1.4 !important;
    letter-spacing: 0px !important;

    margin-bottom:20px !important;
}
h4 {
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.2px;
  margin-bottom: 25px;
}


</style>
