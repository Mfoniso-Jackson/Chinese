<template>
  <nav class="navbar navbar-custom navbar-fixed-top">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
          <i class="fa fa-bars"></i>
        </button>
        <div class="navbar-brand navbar-brand-centered page-scroll"><a href="#page-top"> <span class="logo-font">TANG CHINESE</span></a></div>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar-brand-centered">
        <ul class="nav navbar-nav page-scroll">
          <li><a href="/">Home</a></li>
          
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Our Menu</a></li>
        </ul>
        <ul class="nav navbar-nav  page-scroll navbar-right">
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Booking</a></li>
          <li><a href="#cont">Contact</a></li>
          
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
  </nav>
</template>

<script>
  export default {
    name: 'nav',
    data() {
      return {};
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-font{
  font-family: 'Roboto Slab', serif;
}
.navbar-brand > a{
      max-height: 80%;
    max-width: 80%;
    position: absolute;
    top: 35%;
    /* bottom: 30%; */
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    font-weight: bold;
    font-size: 2.5em;

}
@media (max-width: 460px) {
  .navbar-brand > a{
    font-size: 1.5em !important;
  }

}

@media (max-width: 996px) {
  .navbar-brand > a{
    font-size: 2.2em;
  }

}
.navbar-brand > a:hover{
  text-decoration:none !important;
  color: #A7221A;
}
.navbar-brand > a:active{
  text-decoration:none !important;
  color: #A7221A;
}
.navbar-brand > a:visited{
  text-decoration:none !important;
  color: #A7221A;
}
  .navbar {
    margin-bottom: 0;
    z-index:900;
    box-shadow: 6px 0px 5px 0px rgba(0,0,0,0.2);
    background-color: #FBF9F9;
    height:80px;
  }

  .navbar-right {
    float: right!important;
    text-align:right;
    margin-right: 65px;
  }

  .navbar-nav {
    float: left;
    text-align:left;
    margin-left: 45px;
  }

  .navbar-nav > li > a {
    line-height: 58px;
    padding: 10px;
    transition: all .2s ease-in-out;
  }

  .navbar-nav > li > a:hover,
  .navbar-nav > li > a:focus {background:transparent;}

  .navbar-custom li:after{
    content: "\f111";
    font-family: FontAwesome;
    padding: 0 5px;
    vertical-align:middle;
    font-size:3px;
    color:#333;
  }

  .navbar-custom li:last-child:after{display:none;}

  .navbar-custom ul.nav li a {
    display: inline-block;
    font-size: 13px;
    text-align: center;
    transition: all .2s ease-in-out;
    font-family: 'Montserrat',sans-serif;
    color:#333;
    text-transform:uppercase;
    letter-spacing: 0.9px;
    font-weight:700;
    background:transparent;
  }

  .navbar-custom .nav > .active > a {color: #333;}

  .navbar-custom ul.nav ul.dropdown-menu li:after{display:none;}

  .navbar-custom ul.nav ul.dropdown-menu {border-radius: 0;}

  .navbar-custom ul.nav ul.dropdown-menu li:last-child {border-bottom: none;}

  .navbar-custom ul.nav ul.dropdown-menu li a {padding: 10px 20px;}

  /* Responsive navbar  */

  .navbar-toggle:focus,
  .navbar-toggle:active {
    outline: 0;
    color:#cecece;
  }

  .navbar-toggle{
    margin-top: 12px;
    font-size: 25px;
    color: #fff;
    transition: all .2s ease-in-out;
    position: relative;
    float: right;
    border-radius: 0px;
  }

  .navbar-collapse {background-color: #FBF9F9;}

  /*===========================
    Logo
  ============================ */

  .navbar-brand-centered img {
    max-height: 80%;
    max-width: 80%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  @media (max-width: 1200px){
    .navbar-brand-centered img {
      max-height: 60%;
      max-width: 60%;
    }

    .navbar-nav > li > a {padding: 10px 5px;}

    .navbar-custom ul.nav li a {font-size: 13px;}
  }

  @media (max-width: 991px) {
    /*navbar */

    .navbar {min-height:50px;}

    .navbar-header {float: none;}

    .navbar-toggle {display: block;}

    .navbar-collapse.collapse {display: none!important;}

    .navbar-nav {
      float: none!important;
      margin: 0px;
    }

    .navbar-custom ul.nav li a {font-size: 16px;}

    .navbar-nav>li {float: none;}

    .navbar-nav>li>a {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .collapsing {overflow: hidden!important;}

    .navbar-custom li:after{display:none;}

    .navbar-custom ul.nav li a {
      font-size: 16px;
      display:block;
      padding: 0px;
    }

    .navbar-right {
      float: none;
      margin-right: 0px;
    }

    /* Logo */

    #navbar-brand-centered.collapse.in {
      display: block!important;
      max-height: none;
    }
    .navbar-brand {line-height:30px;}

    .navbar-brand-centered img {
      max-height:80%;
      max-width: 80%;
    }
    /* Nav tabs */

    .nav-tabs > li {margin-bottom: 10px;}

    .nav-tabs {border-bottom: 0;}

    .nav.nav-tabs > li > a {border-radius: 0;}
  }
  /************ max width 767px *************/
  @media (max-width: 767px) {

    /* Navbar */

    .navbar-fixed-top{
      position:absolute;
      z-index: 1000;
      border-width: 0 0 1px;
    }

  }
  /************ max width 480px *************/
  @media (max-width: 480px) {

    /* navbar */

    .navbar-toggle {
      margin-top: 16px;
      font-size: 18px;
      color: #fff;
    }
  }
  @media (max-width: 300px) {
    .navbar-brand-centered img {
      max-height: 60%;
      max-width: 60%;
    }
  }



</style>
