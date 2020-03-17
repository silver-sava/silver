<template>
  <section class="team section-padding">
    <div class="container">
      <div class="row">

        <div class="section-head text-center col-sm-12">
          <h4>Our Team</h4>
          <h6>Creative Minds</h6>
        </div>

        <div class="owl-carousel owl-theme col-sm-12">
          <div class="titem text-center">
            <div class="team-img">
              <img src="img/team/1.jpg" alt="">
            </div>
            <div class="info">
              <h6>Alex Smith.</h6>
              <span>Project Manager</span>
              <div class="social">
                <a href="#0"><i class="icofont icofont-social-facebook"></i></a>
                <a href="#0"><i class="icofont icofont-social-twitter"></i></a>
                <a href="#0"><i class="icofont icofont-brand-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="titem text-center">
            <div class="team-img">
              <img src="img/team/2.jpg" alt="">
            </div>
            <div class="info">
              <h6>Sam Martin.</h6>
              <span>Project Manager</span>
              <div class="social">
                <a href="#0"><i class="icofont icofont-social-facebook"></i></a>
                <a href="#0"><i class="icofont icofont-social-twitter"></i></a>
                <a href="#0"><i class="icofont icofont-brand-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="titem text-center">
            <div class="team-img">
              <img src="img/team/3.jpg" alt="">
            </div>
            <div class="info">
              <h6>Johnny Doe</h6>
              <span>Project Manager</span>
              <div class="social">
                <a href="#0"><i class="icofont icofont-social-facebook"></i></a>
                <a href="#0"><i class="icofont icofont-social-twitter"></i></a>
                <a href="#0"><i class="icofont icofont-brand-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="titem text-center">
            <div class="team-img">
              <img src="img/team/4.jpg" alt="">
            </div>
            <div class="info">
              <h6>Jack Lennon</h6>
              <span>Project Manager</span>
              <div class="social">
                <a href="#0"><i class="icofont icofont-social-facebook"></i></a>
                <a href="#0"><i class="icofont icofont-social-twitter"></i></a>
                <a href="#0"><i class="icofont icofont-brand-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="titem text-center">
            <div class="team-img">
              <img src="img/team/1.jpg" alt="">
            </div>
            <div class="info">
              <h6>Alex Smith.</h6>
              <span>Project Manager</span>
              <div class="social">
                <a href="#0"><i class="icofont icofont-social-facebook"></i></a>
                <a href="#0"><i class="icofont icofont-social-twitter"></i></a>
                <a href="#0"><i class="icofont icofont-brand-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="titem text-center">
            <div class="team-img">
              <img src="img/team/2.jpg" alt="">
            </div>
            <div class="info">
              <h6>Sam Martin.</h6>
              <span>Project Manager</span>
              <div class="social">
                <a href="#0"><i class="icofont icofont-social-facebook"></i></a>
                <a href="#0"><i class="icofont icofont-social-twitter"></i></a>
                <a href="#0"><i class="icofont icofont-brand-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="titem text-center">
            <div class="team-img">
              <img src="img/team/3.jpg" alt="">
            </div>
            <div class="info">
              <h6>Johnny Doe</h6>
              <span>Project Manager</span>
              <div class="social">
                <a href="#0"><i class="icofont icofont-social-facebook"></i></a>
                <a href="#0"><i class="icofont icofont-social-twitter"></i></a>
                <a href="#0"><i class="icofont icofont-brand-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="titem text-center">
            <div class="team-img">
              <img src="img/team/4.jpg" alt="">
            </div>
            <div class="info">
              <h6>Jack Lennon</h6>
              <span>Project Manager</span>
              <div class="social">
                <a href="#0"><i class="icofont icofont-social-facebook"></i></a>
                <a href="#0"><i class="icofont icofont-social-twitter"></i></a>
                <a href="#0"><i class="icofont icofont-brand-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Team",
      mounted() {
        $('.testimonails .owl-carousel').owlCarousel({
          items: 1,
          loop: true,
          margin: 15,
          mouseDrag: false,
          autoplay: true,
          smartSpeed: 500
        });

        // Team owlCarousel
        $('.team .owl-carousel').owlCarousel({
          loop: true,
          margin: 30,
          mouseDrag: false,
          autoplay: true,
          smartSpeed: 500,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1
            },
            700: {
              items: 2
            },
            1000: {
              items: 4
            }
          }
        });
      }
    }
</script>

<style scoped>

</style>
