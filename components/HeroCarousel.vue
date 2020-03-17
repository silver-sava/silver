<template>
  <header class="header slider-fade" data-scroll-index="0">
    <div class="container-fluid">
      <div class="row">
        <div class="owl-carousel owl-theme full-width">
          <div class="text-center item bg-img" data-overlay-dark="7" data-background="img/b3.jpg">
            <div class="v-middle caption mt-30">
              <div class="o-hidden">
                <h4>We Are Creative</h4>
                <h1>Creative Digital Agency</h1>
                <p>A single place to share, curate and discover visual that tells a story.</p>
                <a href="#0" class="butn butn-bord">
                  <span>Learn More</span>
                </a>
                <a href="#0" class="butn butn-bg">
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>
          <div class="text-center item bg-img" data-overlay-dark="7" data-background="img/b2.jpg">
            <div class="v-middle caption mt-30">
              <div class="o-hidden">
                <h4>We Are Creative</h4>
                <h1>Creative Digital Agency</h1>
                <p>A single place to share, curate and discover visual that tells a story.</p>
                <a href="#0" class="butn butn-bord">
                  <span>Learn More</span>
                </a>
                <a href="#0" class="butn butn-bg">
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>
          <div class="text-center item bg-img" data-overlay-dark="7" data-background="img/b1.jpg">
            <div class="v-middle caption mt-30">
              <div class="o-hidden">
                <h4>We Are Creative</h4>
                <h1>Creative Digital Agency</h1>
                <p>A single place to share, curate and discover visual that tells a story.</p>
                <a href="#0" class="butn butn-bord">
                  <span>Learn More</span>
                </a>
                <a href="#0" class="butn butn-bg">
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "HeroCarousel",
        mounted() {
          var owl = $('.header .owl-carousel');


          // Slider owlCarousel
          $('.slider .owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            margin: 0,
            autoplay:true,
            smartSpeed:1000
          });

          // Slider owlCarousel
          $('.slider-fade .owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            margin: 0,
            autoplay:true,
            smartSpeed:500,
            animateOut: 'fadeOut'
          });

          owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('h4').removeClass('animated fadeInLeft');
            $('h1').removeClass('animated fadeInRight');
            $('p').removeClass('animated fadeInUp');
            $('.butn').removeClass('animated zoomIn');
            $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInLeft');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
          });

          var pageSection = $(".bg-img, section");
          pageSection.each(function (indx) {

            if ($(this).attr("data-background")) {
              $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
          });
        }
    }
</script>

<style scoped>

</style>
