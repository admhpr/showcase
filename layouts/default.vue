<template>
  <div>NUXT
    <nuxt/>
    <footer/>
  </div>
</template>
<script>
import Footer from "~/components/footer";
export default {
  head: {
    meta: [{ name: "viewpart", content: "width=device-width, initial-scale=1" }]
  },
  link: [
    { rel: "stylesheet", href: "bootstrap/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "css/ionicons.min.css" },
    { rel: "stylesheet", href: "css/owl.carousel.css" },
    { rel: "stylesheet", href: "css/owl.theme.css" },
    { rel: "stylesheet", href: "css/owl.transitions.css" },
    { rel: "stylesheet", href: "css/magnific-popup.css" }
  ]
};
</script>
