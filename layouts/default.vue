<template>
  <div class="section-show">NUXT -default
    <close-btn/>
    <nuxt/>
    <footer-section/>
  </div>
</template>

<script>
import CloseBtn from "~/components/partials/CloseBtn";
import FooterSection from "~/components/layout/Footer";
export default {
  components: {
    CloseBtn,
    FooterSection
  }
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.min.css");
@import url("https://unpkg.com/vue-github@0.9.7/dist/vueGithub.css");
</style>
