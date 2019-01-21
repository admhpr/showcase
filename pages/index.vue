<template>
  <section class="front-section">
    <div id="diamond-wrapper" class="container">
      <div class="transition-mask"></div>

      <div class="front-person-img">
        <img src="/assests/img/me.png" alt="portfolio">
      </div>

      <div class="front-person-titles">
        <span class="t1">Creator</span>
        
        <span class="t2">Programmer</span>
        
        <span class="t3">Maker</span>
      </div>
      <nav class="front-person-links">
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
            <nuxt-link to="/portfolio"></nuxt-link>
          </li>

          <li>
            <a href="#" data-section="blog">My Blog</a>
          </li>
        </ul>
      </nav>

      <div class="front-heading text-center">
        <h2>Adam Harpur</h2>
      </div>
    </div>
  </section>
</template>