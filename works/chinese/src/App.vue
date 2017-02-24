<template>
  <div id="app">
    <topNav></topNav>
    <router-view></router-view>
    <footerA></footerA>
    <my_footer></my_footer>
  </div>
</template>

<script>
  import topNav from './components/shared/TopNav';
  import my_footer from './components/shared/Footer.vue';
  import footerA from './components/shared/FooterA.vue';

  export default {
    name: 'app',
    components: {
      topNav,
      my_footer,
      footerA
    },
  };
</script>

<style>

</style>
