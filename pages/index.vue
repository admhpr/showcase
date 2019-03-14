<template>
  <section class="section-container">
    <div id="diamond-wrapper">
      <div class="transition-mask"></div>

      <div class="front-person-img fadeIn">
        <img src="~/assets/img/me.png" alt="portfolio">
      </div>

      <div class="front-person-titles">
        <span class="t1">Creator</span>
        
        <span class="t2">Programmer</span>
        
        <span class="t3">Developer</span>
      </div>
      <nav class="nav-links fadeIn">
        <ul>
          <li class="fadeInUp">
            <nuxt-link to="/about">About</nuxt-link>
          </li>

          <li class="fadeInUp">
            <a href="https://adam.harpur.io/docs/resume">Resume</a>
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

          <li class="fadeInUp">
            <a href="https://blog.harpur.io" data-section="blog">Blog</a>
          </li>
        </ul>
      </nav>

      <div class="front-heading text-center"></div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "landing"
};
</script>