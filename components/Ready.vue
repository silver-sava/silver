<template>
  <section class="get-ready section-padding bg-img bg-fixed" data-overlay-dark="7" data-background="img/6.jpg">
    <div class="container">
      <div class="row">

        <div class="full-width text-center">
          <h6>We Are Profeessionals</h6>
          <h2>Let's Make Something Great.</h2>
        </div>

        <div class="offset-lg-3 col-lg-6 text-center">
          <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital
            design & web development services.</p>

          <a href="#0" class="butn butn-bord">
            <span>John To Us</span>
          </a>
          <a href="#0" class="butn butn-bg">
            <span>Purchase Now</span>
          </a>

        </div>

      </div>
    </div>
  </section>

</template>

<script>
    export default {
        name: "Ready",
      mounted() {
        $("a.vid").YouTubePopUp();
      }
    }
</script>

<style scoped>

</style>
