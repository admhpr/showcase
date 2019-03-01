<template>
  <div>
    <div class="footer bg-lightgray section-block">
      <div class="container">
        <div class="row">
          <social-links></social-links>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="text-center">
              <span class="link">
                <nuxt-link to="/acknowledgements">Acknowledgements</nuxt-link>
                <nuxt-link to="/readme">README</nuxt-link>
              </span>
            </p>
          </div>
        </div>
        <div class="row">
          <p class="text-center">
            &copy; adam.harpur.io {{year}}.
            Proudly made with
            <a
              href="https://nuxtjs.org/"
            >
              <img width="35px" src="../../assets/img/nuxt-logo.jpg" alt="nuxt logo">
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialLinks from "~/components/partials/SocialLinks";
export default {
  head: {
    meta: [{ name: "viewpart", content: "width=device-width, initial-scale=1" }]
  },
  link: [{ rel: "stylesheet", href: "bootstrap/css/bootstrap.min.css" }],
  components: {
    SocialLinks
  },
  computed: {
    year: function() {
      return new Date().getFullYear();
    }
  }
};
</script>