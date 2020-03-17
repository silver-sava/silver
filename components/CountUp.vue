<template>
  <div class="numbers section-padding bg-img" data-overlay-dark="4" data-background="img/2.jpg">
    <div class="container">
      <div class="row">

        <div class="col-lg-3 col-md-6">
          <div class="item text-center mb-md50">
                        <span class="icon">
                            <i class="front icofont icofont-users-alt-3"></i>
                            <i class="back icofont icofont-users-alt-3"></i>
                        </span>
            <h3 class="count">368</h3>
            <h6>Happy Clients</h6>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="item text-center mb-md50">
                        <span class="icon">
                            <i class="front icofont icofont-briefcase-alt-2"></i>
                            <i class="back icofont icofont-briefcase-alt-2"></i>
                        </span>
            <h3 class="count">937</h3>
            <h6>Projects Compleated</h6>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="item text-center mb-sm50">
                        <span class="icon">
                            <i class="front icofont icofont-brainstorming"></i>
                            <i class="back icofont icofont-brainstorming"></i>
                        </span>
            <h3 class="count">438</h3>
            <h6>Business Partners</h6>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="item text-center">
                        <span class="icon">
                            <i class="front icofont icofont-growth"></i>
                            <i class="back icofont icofont-growth"></i>
                        </span>
            <h3 class="count">5946</h3>
            <h6>Liens Of Code</h6>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "CountUp",
        mounted() {
          $('.numbers .count').countUp({
            delay: 10,
            time: 1500
          });
        }
    }
</script>

<style scoped>

</style>
