<template>
  <div>
    <div class="footer bg-lightgray section-block">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p class="centered text-center">
              <span class="link">
                <nuxt-link to="/acknowledgements">Acknowledgements</nuxt-link>
              </span>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6"></div>
          <div class="col-md-6"></div>
          <div class="centered text-center">
            <span>
            Proudly made with
            </span>
            <a
              href="https://nuxtjs.org/"
            >
              <img width="35px" src="../../assets/img/nuxt-logo.jpg" alt="nuxt">
            </a>
            <span>
              and frugally hosted on
            </span>
            <a href="https://github.com">
              <img width="85px" src="../../assets/img/github-logo.png" alt="github">
            </a>
            <br>
            <span>
              &copy; adam.harpur.io {{year}}.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  head: {
    meta: [{ name: "viewpart", content: "width=device-width, initial-scale=1" }]
  },
  link: [{ rel: "stylesheet", href: "bootstrap/css/bootstrap.min.css" }],

  computed: {
    year: function() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss">
  .centered {
    margin: auto;
  }
</style>