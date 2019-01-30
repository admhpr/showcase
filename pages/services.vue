<template>
  <section id="services" class="services-section section-show">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="section-title main-title text-center">
            <h2 class="animate text-over-block">My Services</h2>

            <!--divider-->
            <div class="divider-draft center"></div>
            <!--/divider-->
            <p>
              I provide
              <b>high quality</b> services. My services that I provide are listed below. Hope you will like them.
              Lorem ipsum dolor.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="services-block section-block">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="service">
              <div class="icon">
                <i class="ion-ios-camera"></i>
              </div>

              <div class="content">
                <h4>Photography</h4>

                <p>Ut aboramus, numquam corpora qui naex. Dolore aliquando id duo, voluptua laboramus quo ad.</p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="service">
              <div class="icon">
                <i class="ion-code"></i>
              </div>

              <div class="content">
                <h4>Coding</h4>

                <p>Ut aboramus, numquam corpora qui naex. Dolore aliquando id duo, voluptua laboramus quo ad.</p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="service">
              <div class="icon">
                <i class="ion-ios-lightbulb"></i>
              </div>

              <div class="content">
                <h4>Creativity</h4>

                <p>Ut aboramus, numquam corpora qui naex. Dolore aliquando id duo, voluptua laboramus quo ad.</p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="service">
              <div class="icon">
                <i class="ion-ios-monitor"></i>
              </div>

              <div class="content">
                <h4>Web Design</h4>

                <p>Ut aboramus, numquam corpora qui naex. Dolore aliquando id duo, voluptua laboramus quo ad.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <div class="service">
              <div class="icon">
                <i class="ion-ios-camera"></i>
              </div>

              <div class="content">
                <h4>Photography</h4>

                <p>Ut aboramus, numquam corpora qui naex. Dolore aliquando id duo, voluptua laboramus quo ad.</p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="service">
              <div class="icon">
                <i class="ion-code"></i>
              </div>

              <div class="content">
                <h4>Coding</h4>

                <p>Ut aboramus, numquam corpora qui naex. Dolore aliquando id duo, voluptua laboramus quo ad.</p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="service">
              <div class="icon">
                <i class="ion-ios-lightbulb"></i>
              </div>

              <div class="content">
                <h4>Creativity</h4>

                <p>Ut aboramus, numquam corpora qui naex. Dolore aliquando id duo, voluptua laboramus quo ad.</p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="service">
              <div class="icon">
                <i class="ion-ios-monitor"></i>
              </div>

              <div class="content">
                <h4>Web Design</h4>

                <p>Ut aboramus, numquam corpora qui naex. Dolore aliquando id duo, voluptua laboramus quo ad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
  </section>
</template>

<script>
import Stepper from "~/components/sections/Stepper";
import Carousel from "~/components/sections/Carousel";
import process from "~/data/process";
export default {
  data: function() {
    return {
      process
    };
  },
  components: {
    Stepper,
    Carousel
  }
};
</script>
