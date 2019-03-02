<template>
  <section-container title="404">
    <template v-slot:content>
      <p class="text-center four0four-text">We all get lost from time to time...</p>
      <div class="footer bg-lightgray section-block">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p class="text-center">
                <span class="link">
                  <nuxt-link to="/">Home</nuxt-link>
                </span>
                ::
                <span class="link">
                  <nuxt-link to="/readme">README</nuxt-link>
                </span>
                ::
                <span class="link">
                  <nuxt-link to="/now">Now</nuxt-link>
                </span>
                ::
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section-container>
</template>

<script>
import SectionContainer from "~/components/containers/Section";

export default {
  components: {
    SectionContainer
  }
};
</script>