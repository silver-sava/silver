<template>
  <section id="about" class="hero section-padding pb-0" data-scroll-index="1">
    <div class="container">
      <div class="row">
        <div class="offset-lg-2 col-lg-8 text-center mb-80">
          <h4 class="cd-headline clip extra-text">
            <span class="blc">We Are</span>
            <span class="cd-words-wrapper">
                            <b class="is-visible">Creative</b>
                            <b>Digital</b>
                            <b>One page</b>
                        </span>
            <span class="blc">Agency.</span>
          </h4>
          <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>

        <div class="col-lg-6">
          <div class="h-img">
            <img src="/img/03.png" alt="">
          </div>
        </div>

        <div class="col-lg-6">
          <div class="tabs-section">
            <ul class="nav nav-pills underline tabs mt-30" id="pills-tab" role="tablist">
              <li class="nav-item one active">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#tab1"
                   role="tab" aria-controls="tab1" aria-selected="true">About Us</a>
              </li>
              <li class="nav-item two">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#tab2" role="tab"
                   aria-controls="tab2" aria-selected="false">Why Us?</a>
              </li>
              <li class="nav-item three">
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#tab3" role="tab"
                   aria-controls="tab3" aria-selected="false">Our Mission</a>
              </li>
              <li class="hr"></li>
            </ul>
            <div class="tab-content mt-30 mb-md50" id="pills-tabContent">
              <div class="tab-pane fade show active" id="tab1" role="tabpanel"
                   aria-labelledby="pills-home-tab">
                <p>We’re full service which means we’ve got you covered on design and content right
                  through to digital. You’ll form a lasting relationship with us, collaboration is
                  central to everything we do.</p>
                <div class="skills">
                  <div class="skill-item">
                    <h6>Web Design <em>90%</em></h6>
                    <div class="skill-progress">
                      <div class="progres" data-value="90%"></div>
                    </div>
                  </div>
                  <div class="skill-item">
                    <h6>Branding <em>75%</em></h6>
                    <div class="skill-progress">
                      <div class="progres" data-value="75%"></div>
                    </div>
                  </div>
                  <div class="skill-item">
                    <h6>Development <em>80%</em></h6>
                    <div class="skill-progress">
                      <div class="progres" data-value="80%"></div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="pills-contact-tab">
                <p>We’re full service which means we’ve got you covered on design and content right
                  through to digital. You’ll form a lasting relationship with us, collaboration is
                  central to everything we do.</p>
                <ul class="list mt-15">
                  <li><i class="icofont icofont-checked"></i>
                    <h6>User Experince</h6>
                  </li>
                  <li><i class="icofont icofont-checked"></i>
                    <h6>Full Devices</h6>
                  </li>
                  <li><i class="icofont icofont-checked"></i>
                    <h6>Awesome Design</h6>
                  </li>
                  <li><i class="icofont icofont-checked"></i>
                    <h6>100% Sincronized</h6>
                  </li>
                </ul>
              </div>
              <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="pills-profile-tab">
                <p class="mb-15">You’ll form a lasting relationship with us, collaboration is central to
                  everything we do. We’ll push you out of your comfort zone, but this is where you’ll
                  shine. Bottom line is we want you to succeed at Faculty.</p>
                <p>We’re full service which means we’ve got you covered on design and content right
                  through to digital. You’ll form a lasting relationship with us, collaboration is
                  central to everything we do. We’ll push you out of your comfort zone, but this is
                  where you’ll shine. Bottom line is we want you to succeed at Faculty.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="feat bg-gray pt-80 pb-50 mt-80">
      <div class="container">
        <div class="row">

          <div class="col-lg-4">
            <div class="item">
              <span class="icon"><i class="icofont icofont-brand-copy"></i></span>
              <h6>Branding</h6>
              <p>We have the expertise to help you define a game plan, design the products customers want.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="item">
              <span class="icon"><i class="icofont icofont-chart-pie-alt"></i></span>
              <h6>Development</h6>
              <p>We have the expertise to help you define a game plan, design the products customers want.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="item">
              <span class="icon"><i class="icofont icofont-chart-histogram-alt"></i></span>
              <h6>Marketing</h6>
              <p>We have the expertise to help you define a game plan, design the products customers want.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "About",
        mounted() {
          var wind = $(window);
          wind.on('scroll', function () {
            $(".skill-progress .progres").each(function () {
              var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
              var bottom_of_window =
                $(window).scrollTop() + $(window).height();
              var myVal = $(this).attr('data-value');
              if (bottom_of_window > bottom_of_object) {
                $(this).css({
                  width: myVal
                });
              }
            });
          });

        }
    }
</script>

<style scoped>

</style>
