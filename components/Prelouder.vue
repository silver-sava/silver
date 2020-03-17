<template>
  <div class="loading">
    <div class="text-center middle">
      <div class="sp sp-sphere"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Prelouder",
        mounted() {
          $(window).on("load", function () {
            var wind = $(window);
            $(".loading").fadeOut(500);
            wind.stellar();


          });
        }
    }
</script>

<style scoped>

</style>
