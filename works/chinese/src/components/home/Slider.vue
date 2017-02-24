<template>
  <!-- Full Page Image Background Slider -->
  <div class="slider-container">
    <!-- Controls -->
    <div class="slider-control left inactive"></div>
    <div class="slider-control right"></div>
    <ul class="slider-pagi"></ul>
    <!--Slider -->
    <div class="slider">
      <!-- Slide 1 -->
      <div class="slide slide-0 active">
        <div class="slide__bg"></div>
        <div class="slide__content">
          <div class="slide__overlay">
          </div>
          <!-- slide text-->
          <div class="slide__text">
            <h1 class="slide__text-heading">Welcome to <span  class="logo-font">TANG CHINESE</span></h1>
            <div class="hidden-sm hidden-xs">
              <p class="lead">We offer all the best quality products for an amazing start of the day.</p>
              <div class="page-scroll">
                <a href="#about" class="btn btn-default">about us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="slide slide-1">
        <div class="slide__bg"></div>
        <div class="slide__content">
          <div class="slide__overlay">
          </div>
          <!-- slide text-->
          <div class="slide__text">
            <h1 class="slide__text-heading">Your event with us</h1>
            <div class="hidden-sm hidden-xs">
              <p class="lead">We have great offers with amazing prices every week, check it out today!</p>
              <div class="page-scroll">
                <a href="#contact" class="btn btn-default">make a reservation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <!-- Slide 4-->
      <div class="slide slide-2">
        <div class="slide__bg"></div>
        <div class="slide__content">
          <div class="slide__overlay">
          </div>
          <!-- slide text-->
          <div class="slide__text">
            <h1 class="slide__text-heading">Delicious Meals</h1>
            <div class="hidden-sm hidden-xs">
              <p class="lead">Check our menu or order our amazing buffet service with over 200 different foods.</p>
              <div class="page-scroll">
                <a href="#menu" class="btn btn-default">our menu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'slider',
    data(){
          return {

          }
    }
  }
</script>

<style scoped>
.logo-font{
  font-family: 'Roboto Slab', serif;
} 
.slide-0{
  background-image:url('http://travel.tiffany-eng.com/site/wp-content/uploads/2013/01/chinese-food.jpg');
}
.slide-1{
  background-image:url('../../assets/images/tables.jpeg');
}
.slide-3{
  background-image:url('../../assets/images/slide3.jpg');
}
.slide-2{
  background-image:url('https://images2.alphacoders.com/208/208392.jpg');
}

/* ===========================
Main Slider
============================ */

.slider-container {
  overflow: hidden;
  position: relative;
  /*height: 100%;*/
  height: 670px;
}

.slider {
  z-index: 1;
  position: relative;
  height: 100%;
  top:80px;
}

/*Controls */

.slider-control {
  z-index: 2;
  position: absolute;
  top: 0;
  width: 12%;
  height: 100%;
  transition: opacity 0.3s;
  opacity: 0;
}

.slider-control.inactive:hover {cursor: auto;}

.slider-control:not(.inactive):hover {
  opacity: 1;
  cursor: pointer;
}

.slider-control.left {
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0) 100%);
}

.slider-control.right {
  right: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.18) 100%);
}

/* Pagination */

ul.slider-pagi {padding-left:0px;}

.slider-pagi {
  position: absolute;
  z-index: 3;
  left: 23%;
  bottom: 1rem;
  transform: translateX(-50%);
  font-size: 0;
  list-style-type: none;
}

.slider-pagi__elem {
  border: 2px solid;
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 1rem;
  height: 1rem;
  margin: 0 0.5rem;
  border-radius: 50%;
  cursor: pointer;
}

.slider-pagi__elem:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  transition: transform 0.3s;
  transform: translate(-50%, -50%) scale(0);
}

.slider-pagi__elem.active:before, .slider-pagi__elem:hover:before {
  transform: translate(-50%, -50%) scale(1);
}

/* Slider Animation */

.slider.animating {transition: transform 0.5s;}

.slider.animating .slide__bg {transition: transform 0.5s;}

.slide {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-position:center;
}

.slide.active .slide__overlay,
.slide.active .slide__text {
  opacity: 1;
  transform: translateX(0);
}

.slide__bg {
  position: absolute;
  top: 0;
  left: -50%;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position:top right;
}

.slide__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Slider Overlay */

.slide__overlay {
  position: absolute;
  bottom: 0;
  left: 4%;
  height: 100%;
  width:40%;
  min-height: 610px;
  transition: transform 0.5s 0.5s, opacity 0.2s 0.5s;
  transform: translate3d(-20%, 0, 0);
  opacity: 0;
}

.slide__overlay  {opacity: 0.4;}

/* Slider Typography */

.slide__text {
  text-align: center;
  position: absolute;
  max-width: 35%;
  bottom: 37%;
  left: 6%;
  color: #fff;
  transition: transform 0.5s 0.8s, opacity 0.5s 0.8s;
  transform: translateY(-50%);
  opacity: 0;
}

.slide__text-heading {
  margin-bottom: 1.5rem;
  margin-top: 0;
}

.lead {
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  color:#fff;
  font-weight:normal;
  margin-bottom: 1.1rem;
}

/* slide1 */
.slide:nth-child(1) {left: 0;}

/* slide2 */
.slide:nth-child(2) {left: 100%;}

/* slide3 */
.slide:nth-child(3) {left: 200%;}

/* slide4 */
.slide:nth-child(4) {left: 300%;}

/* slide5 */
.slide:nth-child(5) {left: 400%;}

/* slide6 */
.slide:nth-child(6) {left: 500%;}

/* slide7 */
.slide:nth-child(7) {left: 600%;}

/* slide8 */
.slide:nth-child(8) {left: 700%;}

  /*goldberry theme*/
.slide__overlay {
  background-color: rgba(167, 34, 26, 0.86);
}
.slider .btn {
  border-color: #A7221A;
}
 .slider-pagi__elem:before{
  background-color: #BB974A;
}
.slider-pagi__elem{
  color: #BB974A;
}
  @media (max-width: 991px){
    /* Main Slider */

    .slider {top:0px;}

    .slide .slide__text{padding:20px;}

    .slide__text {
      left: 0;
      bottom: 0;
      min-width: 100%;
      text-align: center;
      transform: none;
      transition: none;
      padding: 0 1rem;
    }

    .slide__overlay {display: none;}

    .slider-pagi {
      position: absolute;
      z-index: 3;
      left: 50%;
      bottom: 1rem;
      transform: translateX(-50%);
      font-size: 0;
      list-style-type: none;
    }
    .slide .slide__text {
      background-color: rgba(167, 34, 26, 0.86);
    }

  }
  @media (max-width: 480px){
    /* slider  */

    .slider-pagi {display:none;}

    .slide__text-heading {
      margin-bottom: 1.5rem;
      margin-top: 1.5rem;
    }

  }


</style>
