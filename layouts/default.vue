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