<template>
  <section class="section-container">
    <div id="diamond-wrapper" class="container">
      <div class="transition-mask"></div>

      <div class="front-person-img">
        <img src="~/assets/img/me.png" alt="portfolio">
      </div>

      <div class="front-person-titles">
        <span class="t1">Creator</span>
        
        <span class="t2">Programmer</span>
        
        <span class="t3">Developer</span>
      </div>
      <nav class="nav-links">
        <ul>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/resume">Resume</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/services">Services</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>

          <li>
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