<template>
  <section-container title="Resume">
    <div slot="content">
      <time-line></time-line>
      <info-diamonds title="Hobbies" :data="hobbies"/>
      <skills/>
    </div>
  </section-container>
</template>

<script>
import Skills from "~/components/sections/Skills";
import SocialLinks from "~/components/partials/SocialLinks";
import TimeLine from "~/components/partials/TimeLine";
import hobbies from "~/data/hobbies";
export default {
  data: function() {
    return {
      hobbies
    };
  },
  components: {
    InfoDiamonds,
    Skills,
    SocialLinks,
    TimeLine
  }
};
</script>
