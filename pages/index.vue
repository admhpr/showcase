<template>
  <section class="section-container">
    <div id="diamond-wrapper">
      <div class="transition-mask"></div>

      <div class="front-person-img expandDiamond" style="{}">
        <img src="~/assets/img/me.png" alt="portfolio">
      </div>

      <div class="front-person-titles">
        <span class="t1">Creator</span>
        
        <span class="t2">Programmer</span>
        
        <span class="t3">Developer</span>
      </div>
      <nav class="nav-links fadeInNav">
        <ul>
          <li class="fadeInUp">
            <nuxt-link to="/about">About</nuxt-link>
          </li>

          <li class="fadeInUp">
            <a href="https://s3-eu-west-1.amazonaws.com/docs.harpur.io/adam-harpur-cv-2019.pdf">Resume</a>
          </li>

          <li class="fadeInUp">
            <nuxt-link to="/services">Services</nuxt-link>
          </li>

          <li class="fadeInUp">
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li class="fadeInUp">
            <a href="mailto:adam@harpur.io">Contact</a>
          </li>

          <!-- <li class="fadeInUp">
            <a href="https://blog.harpur.io" data-section="blog">Blog</a>
          </li> -->
        </ul>
      </nav>

      <div class="front-heading text-center">
        <div class="row">
          <social-links></social-links>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialLinks from "~/components/partials/SocialLinks";
export default {
  layout: "landing",
  components: {
    SocialLinks
  },
  data: function() {
    return {};
  },
  created() {}
};
</script>