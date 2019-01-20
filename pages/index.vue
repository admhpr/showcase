<template>
  <!--=============================================================================
				Front Section
  ===============================================================================-->
  <section class="front-section">
    <div id="diamond-wrapper" class="container">
      <div class="transition-mask"></div>

      <div class="front-person-img">
        <!--person's image-->
        <img src="/assests/img/me.png" alt="portfolio">
        <!--/person's image-->
      </div>

      <!--person's titles-->
      <div class="front-person-titles">
        <!--title1-->
        <span class="t1">Creator</span>
        <!--/title1-->
        <!--title2-->
        <span class="t2">Programmer</span>
        <!--/title2-->
        <!--title3-->
        <span class="t3">Maker</span>
        <!--/title3-->
      </div>
      <!--/person's titles-->
      <nav class="front-person-links">
        <!--
							navigation links, data-section attribute points towards the section with id to be opened. 
        -->
        <ul>
          <li>
            <nuxt-link to="/about">About (internal link that belongs to the Nuxt App)</nuxt-link>
            <a href="#" data-section="about">About Me</a>
          </li>

          <li>
            <a href="#" data-section="resume">Resume</a>
          </li>

          <li>
            <a href="#" data-section="services">Services</a>
          </li>

          <li>
            <a href="#" data-section="portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#" data-section="blog">My Blog</a>
          </li>

          <li>
            <a href="#" data-section="contact">Contact</a>
          </li>

          <li>
            <a href="#">Hire Me!</a>
          </li>
        </ul>
      </nav>

      <div class="front-heading text-center">
        <h2>Adam Harpur</h2>
      </div>
    </div>
  </section>
  <!--=============================================================================
				/Front Section
  ===============================================================================-->
</template>