export default {
  css: [
    '@/assets/scss/style.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  script: [],
  plugins: [
    '~/plugins/fontawesome.js'
  ],
  transition: {
    name: 'fade',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...');
    }
  }
}