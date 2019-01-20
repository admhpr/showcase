export default {
  css: [
    '@/assets/scss/style.scss'
  ],
  script: [{
      src: '/js/jquery.min.js'
    },
    {
      src: '/js/jquery.stellar.min.js'
    },
    {
      src: '/js/owl.carousel.min.js'
    },
    {
      src: '/js/jquery.shuffle.min.js'
    },
    {
      src: '/js/jquery.magnific-popup.min.js'
    },
    {
      src: '/js/validator.min.js'
    },
    {
      src: '/js/smoothscroll.js'
    },
    {
      src: '/js/script.js'
    }
  ],
  transition: {
    name: 'fade',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...');
    }
  }
}