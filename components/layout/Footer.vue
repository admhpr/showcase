<template>
  <div>
    <div class="footer bg-lightgray section-block">
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-lg-10 text-left">
            <h4>Adam Harpur</h4>
          </div>
          <social-links></social-links>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialLinks from "~/components/partials/SocialLinks";
export default {
  head: {
    meta: [{ name: "viewpart", content: "width=device-width, initial-scale=1" }]
  },
  link: [{ rel: "stylesheet", href: "bootstrap/css/bootstrap.min.css" }],
  components: {
    SocialLinks
  }
};
</script>