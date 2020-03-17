
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" },

      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Muli:400,500,700,800|Lato:300,400,700,900"
      },

      { rel: "stylesheet", href: "/css/plugins.css" },
      { rel: "stylesheet", href: "/css/style.css" }


    ],


    script: [
      { src: "/js/jquery-3.0.0.min.js", type: "text/javascript", body: true },
      { src: "/js/jquery-migrate-3.0.0.min.js", type: "text/javascript", body: true },
      { src: "/js/animated.headline.js", type: "text/javascript", body: true },
      { src: "/js/bootstrap.min.js", type: "text/javascript", body: true},
      { src: "/js/isotope.pkgd.min.js", type: "text/javascript", body: true },
      { src: "/js/jquery.counterup.min.js", type: "text/javascript", body: true },
      { src: "/js/jquery.magnific,min.js", type: "text/javascript", body: true },
      { src: "/js/jquery.stellar.min.js", type: "text/javascript", body: true },
      { src: "/js/jquery.waypoints.min.js", type: "text/javascript", body: true },
      { src: "/js/map.js", type: "text/javascript", body: true },
      { src: "/js/owl.carousel.min.js", type: "text/javascript", body: true },
      { src: "/js/popper.min.js", type: "text/javascript", body: true },
      { src: "/js/scrollIt.min.js", type: "text/javascript", body: true },
      { src: "/js/validator.js", type: "text/javascript", body: true },
      { src: "/js/YouTubepopUp.jquery.js", type: "text/javascript", body: true }


    ]


  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
