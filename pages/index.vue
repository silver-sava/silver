<template>
  <div>
    <Header />
    <HeroCarousel/>
    <About/>
    <Video/>
    <Portfolio/>
    <Feature/>
    <Team/>
    <Ready/>
    <Clients/>
    <CountUp/>
    <Price/>
    <Blog/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import HeroCarousel from "~/components/HeroCarousel.vue";
import About from "~/components/About.vue";
import Video from "~/components/Video.vue";
import Portfolio from "../components/Portfolio";
import Feature from "../components/Feature";
import Team from "../components/Team";
import Ready from "../components/Ready";
import CountUp from "../components/CountUp";
import Price from "../components/Price";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Header from "../components/Header";
export default {
  components: {
    Header,
    Clients,
    Footer,
    Contact,
    Blog,
    Price,
    CountUp,
    Ready,
    Team,
    Feature,
    Portfolio,
    Video,
    About,
    HeroCarousel

  },
  mounted() {
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -80            // offste (in px) for fixed top navigation
    });
  }
}
</script>

<style>

</style>
