<template>
  <div class="section-show">NUXT -Landing
    <nuxt/>
    <footer/>
  </div>
</template>
<script>
import Footer from "~/components/layout/Footer";
export default {
  head: {
    meta: [{ name: "viewpart", content: "width=device-width, initial-scale=1" }]
  },
  link: [{ rel: "stylesheet", href: "bootstrap/css/bootstrap.min.css" }]
};
</script>
