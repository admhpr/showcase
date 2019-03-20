// @see https://nuxtjs.org/guide/configuration/
export default {
  css: [
    "@/style/scss/style.scss",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],
  script: [],
  serverMiddleware: ["~/api/contact"],
  head: {
    title: 'a̷d̵a̷m̷[̷h̸a̷r̷p̸u̸r̴]̷.̵i̵o̴',
    link: [{
      rel: "stylesheet",
      type: "text/css",
      href: "https://unpkg.com/vue-github@0.9.22/dist/vueGithub.css"
    }],
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "keywords",
        content: "adam harpur, web developer"
      },
      {
        hid: "image",
        name: "image",
        content: "~/static/img/meta-img-ah.png"
      },
      {
        hid: "description",
        name: "description",
        content: "Personal website for Adam Harpur"
      }
    ]
  },
  plugins: [
    "~/plugins/fontawesome.js",
    {
      src: "~/plugins/vue-apexcharts.js",
      ssr: false
    },
    {
      src: "~/plugins/vue-github",
      ssr: false
    },
    {
      src: "~/plugins/vue-carousel",
      ssr: false
    }
  ],
  transition: {
    name: "fade",
    mode: "out-in",
    beforeEnter(el) {
      console.log("Before enter...");
    }
  },
  optimizeCSS: true
};