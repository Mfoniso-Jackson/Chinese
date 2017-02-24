<template>
  <div>
    <Slider></Slider>
    <About></About>

    <Menu></Menu>

    <Booking></Booking>
    <Gallery></Gallery>
    <Map></Map>

  </div>
</template>

<script>
  import Slider from './Slider.vue';
  import About from './About.vue';

  import Menu from './Menu.vue';

  import  Map from './Map.vue';
  import Booking from './Booking.vue';
  import Gallery from './Gallery.vue';


  export default {
    name: 'home',
    components: {
      Slider,
      About,

      Menu,

      Map,
      Booking,
      Gallery

    }
  }
</script>
