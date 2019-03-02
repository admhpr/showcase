<template>
  <div class="section-show">
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
</style>
