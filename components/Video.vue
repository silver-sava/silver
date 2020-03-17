<template>
  <section class="video-intro section-padding bg-img bg-fixed" data-overlay-dark="7" data-background="img/5.jpg">
    <div class="container">
      <div class="row text-center">

        <div class="col-sm-12">
          <h6>One Page For Your Business</h6>
          <h2>Awesome & Unique Design</h2>
        </div>
        <div class="offset-lg-3 col-lg-6">
          <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital
            design & web development services.</p>

          <a class="vid" href="https://vimeo.com/127203262">
                        <span class="vid-butn">
                            <i class="icofont icofont-ui-play"></i>
                        </span>
            <span class="butn butn-bg">
                            <span>View Video</span>
                        </span>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Video",
        mounted() {

          $("a.vid").YouTubePopUp();

        }
    }
</script>

<style scoped>

</style>
