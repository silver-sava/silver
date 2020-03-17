<template>
  <section id="portfolio" class="portfolio section-padding" data-scroll-index="2">
    <div class="container-fluid">
      <div class="row">

        <div class="section-head text-center col-sm-12">
          <h4>Creative Portfolio</h4>
          <h6>Latest Projects</h6>
        </div>

        <!-- filter links -->
        <div class="filtering text-center mb-30 col-sm-12">
          <span data-filter='*' class="active">All</span>
          <span data-filter='.brand'>Brand</span>
          <span data-filter='.web'>Design</span>
          <span data-filter='.graphic'>Graphic</span>
        </div>

        <div class="clearfix"></div>

        <!-- gallery -->
        <div class="gallery text-center full-width">

          <!-- gallery item -->
          <div class="col-lg-4 col-md-6 items graphic">
            <div class="item-img">
              <img src="img/portfolio/1.jpg" alt="image">
              <div class="item-img-overlay valign">
                <div class="overlay-info full-width vertical-center">
                  <h6>Crearive Design</h6>
                  <p>Work description here</p>
                </div>
                <a href="img/portfolio/1.jpg" class="popimg">
                  <i class="icofont icofont-image"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- gallery item -->
          <div class="col-lg-4 col-md-6 items web">
            <div class="item-img">
              <img src="img/portfolio/2.jpg" alt="image">
              <div class="item-img-overlay valign">
                <div class="overlay-info full-width vertical-center">
                  <h6>Crearive Design</h6>
                  <p>Work description here</p>
                </div>
                <a href="img/portfolio/2.jpg" class="popimg">
                  <i class="icofont icofont-image"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- gallery item -->
          <div class="col-lg-4 col-md-6 items brand">
            <div class="item-img">
              <img src="img/portfolio/3.jpg" alt="image">
              <div class="item-img-overlay valign">
                <div class="overlay-info full-width vertical-center">
                  <h6>Crearive Design</h6>
                  <p>Work description here</p>
                </div>
                <a href="img/portfolio/3.jpg" class="popimg">
                  <i class="icofont icofont-image"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- gallery item -->
          <div class="col-lg-4 col-md-6 items graphic">
            <div class="item-img">
              <img src="img/portfolio/4.jpg" alt="image">
              <div class="item-img-overlay valign">
                <div class="overlay-info full-width vertical-center">
                  <h6>Crearive Design</h6>
                  <p>Work description here</p>
                </div>
                <a href="img/portfolio/4.jpg" class="popimg">
                  <i class="icofont icofont-image"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- gallery item -->
          <div class="col-lg-4 col-md-6 items web">
            <div class="item-img">
              <img src="img/portfolio/5.jpg" alt="image">
              <div class="item-img-overlay valign">
                <div class="overlay-info full-width vertical-center">
                  <h6>Crearive Design</h6>
                  <p>Work description here</p>
                </div>
                <a href="img/portfolio/5.jpg" class="popimg">
                  <i class="icofont icofont-image"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- gallery item -->
          <div class="col-lg-4 col-md-6 items brand">
            <div class="item-img">
              <img src="img/portfolio/6.jpg" alt="image">
              <div class="item-img-overlay valign">
                <div class="overlay-info full-width vertical-center">
                  <h6>Crearive Design</h6>
                  <p>Work description here</p>
                </div>
                <a href="img/portfolio/6.jpg" class="popimg">
                  <i class="icofont icofont-image"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- gallery item -->
          <div class="col-lg-4 col-md-6 items web">
            <div class="item-img">
              <img src="img/portfolio/7.jpg" alt="image">
              <div class="item-img-overlay valign">
                <div class="overlay-info full-width vertical-center">
                  <h6>Crearive Design</h6>
                  <p>Work description here</p>
                </div>
                <a href="img/portfolio/7.jpg" class="popimg">
                  <i class="icofont icofont-image"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="clear-fix"></div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Portfolio",
        mounted() {
          $(window).on("load", function () {

            var wind = $(window);

            $('.gallery').isotope({
              // options
              itemSelector: '.items'
            });

            var $gallery = $('.gallery').isotope({
              // options
            });

            // filter items on button click
            $('.filtering').on('click', 'span', function () {

              var filterValue = $(this).attr('data-filter');

              $gallery.isotope({ filter: filterValue });

            });

            $('.filtering').on('click', 'span', function () {

              $(this).addClass('active').siblings().removeClass('active');

            });
          });

        }
    }
</script>

<style scoped>
  .overlay-info p {
    text-align: center;
  }
</style>
