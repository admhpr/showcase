<template>
  <section-container title="Resume">
    <div slot="content">
      <time-line :data="resume"></time-line>
      <info-diamonds title="Hobbies" :data="hobbies"/>
      <skills id="skills"/>
    </div>
  </section-container>
</template>

<script>
import SectionContainer from "~/components/containers/Section";
import Skills from "~/components/sections/Skills";
import InfoDiamonds from "~/components/sections/InfoDiamonds";
import TimeLine from "~/components/partials/TimeLine";

// data
import hobbies from "~/data/hobbies";
import resume from "~/data/resume";

export default {
  data: function() {
    return {
      hobbies,
      resume
    };
  },
  components: {
    InfoDiamonds,
    SectionContainer,
    Skills,
    TimeLine
  }
};
</script>
