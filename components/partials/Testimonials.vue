<template>
  <div class="testimonials-block section-block">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="testimonials-slider">
          <div class="testimonial">
            <p>
              Ad optere volibus nec, sea ei civibus prasent. At timeam expetenda inciderint has. Invidunt constituto ne
              per, paulo omnium queum his eu, cu congue consul cetero. Invidunt constituto ne per, paulo omnium his eu, cu
              congue consul cetero.
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
</template>



<script>
import SectionTitle from "~/components/layout/SectionTitle";
export default {
  props: {
    title: String,
    data: Array
  },
  components: {
    SectionTitle
  }
};
</script>
