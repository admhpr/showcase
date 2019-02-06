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
import SectionContainer from "~/components/containers/Section";
import Skills from "~/components/sections/Skills";
import TimeLine from "~/components/partials/TimeLine";

// data
import hobbies from "~/data/hobbies";

export default {
  data: function() {
    return {
      hobbies
    };
  },
  components: {
    SectionContainer,
    Skills,
    TimeLine
  }
};
</script>
