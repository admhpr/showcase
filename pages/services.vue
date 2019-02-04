<template>
  <section-container title="My Services">
    <div slot="content">
      <info-diamonds :data="services"/>
      <div class="pricing-block section-block">
        <div class="container">
          <div class="section-title text-center">
            <h2 class="animate text-over-block">Pricing</h2>
            <!--divider-->
            <div class="divider-draft center"></div>
            <!--/divider-->
            <p>How much I charge</p>
          </div>

          <div class="row">
            <div class="col-md-4 text-center">
              <div class="pricing-table">
                <div class="header">
                  <h4>Personal</h4>

                  <div class="price">
                    <span class="currency">$</span>
                    <span class="amount">29</span>
                    <span class="period">/mo</span>
                  </div>
                </div>

                <ul class="table-items">
                  <li>Logo Design</li>
                  <li>PSD to HTML</li>
                  <li>Fixed to Responsive</li>
                  <li>App Development</li>
                  <li>Photography</li>
                </ul>

                <a href="#" class="table-btn">Choose This</a>
              </div>
            </div>

            <div class="col-md-4 text-center">
              <div class="pricing-table">
                <div class="header">
                  <h4>Creative</h4>

                  <div class="price">
                    <span class="currency">$</span>
                    <span class="amount">39</span>
                    <span class="period">/mo</span>
                  </div>
                </div>

                <ul class="table-items">
                  <li>Logo Design</li>
                  <li>PSD to HTML</li>
                  <li>Fixed to Responsive</li>
                  <li>App Development</li>
                  <li>Photography</li>
                </ul>

                <a href="#" class="table-btn">Choose This</a>
              </div>
            </div>

            <div class="col-md-4 text-center">
              <div class="pricing-table">
                <div class="header">
                  <h4>Ultimate</h4>

                  <div class="price">
                    <span class="currency">$</span>
                    <span class="amount">42</span>
                    <span class="period">/mo</span>
                  </div>
                </div>

                <ul class="table-items">
                  <li>Logo Design</li>
                  <li>PSD to HTML</li>
                  <li>Fixed to Responsive</li>
                  <li>App Development</li>
                  <li>Photography</li>
                </ul>

                <a href="#" class="table-btn">Choose This</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <stepper title="Work Flow" :data="process"/>
      <div class="testimonials-block section-block">
        <div class="container">
          <div class="section-title text-center">
            <h2 class="animate text-over-block">Testimonials</h2>

            <!--divider-->
            <div class="divider-draft center"></div>
            <!--/divider-->
          </div>

          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="testimonials-slider">
                <div class="testimonial">
                  <p>
                    Ad oportere voluptatibus nec, sea ei civibus praesent. At timeam expetenda inciderint has. Invidunt
                    constituto ne per, paulo omnium quaerendum his eu, cu congue consul cetero. Invidunt constituto ne per, paulo
                    omnium quaerendum his eu, cu congue consul cetero.
                  </p>

                  <div class="author">
                    <h4>Jack Smith</h4>
                    <p>CEO at Google</p>
                  </div>
                </div>

                <div class="testimonial">
                  <p>
                    Ad oportere voluptatibus nec, sea ei civibus praesent. At timeam expetenda inciderint has. Invidunt
                    constituto ne per, paulo omnium quaerendum his eu, cu congue consul cetero. Invidunt constituto ne per, paulo
                    omnium quaerendum his eu, cu congue consul cetero.
                  </p>

                  <div class="author">
                    <h4>Jessica Smith</h4>
                    <p>CEO at Google</p>
                  </div>
                </div>

                <div class="testimonial">
                  <p>
                    Ad oportere voluptatibus nec, sea ei civibus praesent. At timeam expetenda inciderint has. Invidunt
                    constituto ne per, paulo omnium quaerendum his eu, cu congue consul cetero. Invidunt constituto ne per, paulo
                    omnium quaerendum his eu, cu congue consul cetero.
                  </p>

                  <div class="author">
                    <h4>Jim Smith</h4>
                    <p>CEO at Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <carousel/>
    </div>
  </section-container>
</template>

<script>
import Carousel from "~/components/sections/Carousel";
import InfoDiamonds from "~/components/sections/InfoDiamonds";
import Stepper from "~/components/sections/Stepper";
import SectionContainer from "~/components/containers/Section";

import process from "~/data/process";
import services from "~/data/services";
export default {
  data: function() {
    return {
      process,
      services
    };
  },
  components: {
    Carousel,
    InfoDiamonds,
    SectionContainer,
    Stepper
  }
};
</script>
