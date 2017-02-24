<template>
  <section id="gallery" style="">
    <div class="container gallery-back">

      <div class="row ">
      <div  class="col-md-12 ">
              <div class="row gallery-flex-row">

                <div  class="col-md-6 col-md-offset-1">
                  <p class="gallery-head">
                      <span class="">Our interior will sway your mood!</span>
                  </p>
                  <p class="gallery-text">
                      Ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac sodales felis tiam non Doloreiur qui commolu ptatemp dolupta orem retibusam andigen Ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac sodales felis tiam non metus. Placerat a ultricies a, posuere a nibh.
                  </p>
                  <button type="submit" id="submit_btn" value="Submit" class="btn btn-primary gallery-btn">Gallery
            </button>
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
    name: 'Gallery'
  }
</script>

<style scoped>
.gallery-text{
  font-weight: 400;
    font-style: normal;
    /*font-family: 'Open Sans', sans-serif;*/
    color: #ffffff;
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: 0px;
}
.gallery-head{

  font-weight: 400;
    font-style: normal;
    /*font-family: 'Delius', handwriting;*/
    color: #69564b;
    font-size: 30px;
    line-height: 1.3;
    letter-spacing: 0px;
    margin-bottom:50px;
}
.gallery-head span{
  color: #ffffff
}

.gallery-flex-row{
  display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 500px;
}
.gallery-btn{
  display: block;
  background-color:transparent;
}
.gallery-back {

      background-image:url('../../assets/images/tab.jpeg');
      background-size: cover;
   // background-position: left top;
    background-repeat: no-repeat;
    width: 100%;
    min-height:500px;
 //   background-attachment: fixed;
}

@media screen and (min-width: 1039px){

.gallery-back {
    background-attachment: fixed;
}
 }
</style>
