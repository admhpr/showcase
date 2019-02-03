<template>
  <div>
    <section-title v-if="title" :title="title"/>
    <carousel>
      <slide>Slide 1 Content</slide>
      <slide>Slide 2 Content</slide>
      <slide>Slide 3 Content</slide>
      <slide>Slide 4 Content</slide>
      <slide>Slide 5 Content</slide>
    </carousel>
  </div>
</template>


<script>
import SectionTitle from "~/components/layout/SectionTitle";
export default {
  props: {
    title: String,
    data: Array
  },
  components: {
    SectionTitle
  }
};
</script>

<style scoped>
</style>