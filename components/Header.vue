<template>


    <nav class="navbar navbar-expand-lg">
      <div class="container">

        <!-- Logo -->
        <a class="logo" >
          <img src="/img/logo-light.png" alt="logo">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-bar"><i class="fas fa-bars"></i></span>
        </button>

        <!-- navbar links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link active" href="" data-scroll-nav="0">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about" data-scroll-nav="1">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio" data-scroll-nav="2">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services" data-scroll-nav="3">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#price" data-scroll-nav="4">Price</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#blog" data-scroll-nav="5">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact" data-scroll-nav="6">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</template>

<script>
  export default {
    name: "Header",
      mounted() {
        var wind = $(window);
        wind.on("scroll", function () {

          var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            navbloglogo = $(".blog-nav .logo> img"),
            logo = $(".navbar .logo> img");

          if (bodyScroll > 100) {

            navbar.addClass("nav-scroll");
            logo.attr('src', '/img/logo-dark.png');

          } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
            navbloglogo.attr('src', 'img/logo-dark.png');
          }
        });

        // close navbar-collapse when a  clicked
        $(".navbar-nav a").on('click', function () {
          $(".navbar-collapse").removeClass("show");
        });



        /* ----------------------------------------------------------------
                            [ underline effect ]
        -----------------------------------------------------------------*/

        $(".underline").on("click", ".nav-item", function () {

          $(this).addClass("active").siblings().removeClass("active");

        });

      }


  }
</script>

<style scoped>

</style>
