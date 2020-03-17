<template>
  <div id="clients" class="padding-top padding-bottom">
    <div class="container text-center">
      <div class="section-head text-center col-sm-12">
          <h4>Our Clients</h4>
          <h6>Latest Posts</h6>
        <br>  <br/>
        <p class="contentsr" style="width: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.
          Maecenas ac augue at erat hendrerit dictum. Praesent porta, dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div id="clients-carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
          <div class="item carousel-item active">
            <ul class="img-carousel">
              <li><a class="img-fluid" href="#"><img src="img/clientsN/index.png" alt="" /></a></li>
              <li><a class="img-fluid" href="#"><img src="img/clientsN/index1.png" alt="" /></a></li>
              <li><a class="img-fluid" href="#"><img src="img/clientsN/index2.png" alt="" /></a></li>
              <li><a class="img-fluid" href="#"><img src="img/clientsN/index3.png" alt="" /></a></li>
            </ul>
          </div>
          <div class="item carousel-item">
            <ul class="img-carousel">
              <li><a class="img-fluid" href="#"><img src="img/clientsN/index.png" alt="" /></a></li>
              <li><a class="img-fluid" href="#"><img src="img/clientsN/index1.png" alt="" /></a></li>
              <li><a class="img-fluid" href="#"><img src="img/clientsN/index2.png" alt="" /></a></li>
              <li><a class="img-fluid" href="#"><img src="img/clientsN/index3.png" alt="" /></a></li>
            </ul>
          </div>
        </div>
        <a class="client-left" href="#clients-carousel" data-slide="prev"><i class="fa fa-angle-left"></i></a>
        <a class="client-right" href="#clients-carousel" data-slide="next"><i class="fa fa-angle-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Clients",
    }
</script>

<style>
  /*=========================
  ========Clients CSS========
  ===========================*/
  #clients {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  #clients-carousel .item {
    font-size:0;
    text-align:center;
  }

  #clients-carousel .item ul li {
    display:inline-block;
    width:24%;
  }

  .contentsr {
    padding-left: 200px;
    padding-right: 200px;
    text-align: center;
  }

  #clients-carousel .item img {
    opacity:0.5;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  #clients-carousel .item img:hover {
    opacity:1;
  }

  .client-left,
  .client-right {
    color: #1e1e1e;
    font-size: 30px;
    position: absolute;
    bottom: 20px;
  }

  .client-left:hover,
  .client-right:hover {
    color: #d9232d;
  }

  .client-left {
    left:-20px;
  }

  .client-right {
    right:-20px;
  }

</style>
