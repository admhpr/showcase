<template>
  <div>
    <section id="about" class="about-section active">
      <div class="basic-info section-block">
        <div class="container">
          <section-title :title="title"></section-title>
        </div>
      </div>
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script>
import SectionTitle from "~/components/layout/SectionTitle";
export default {
  props: {
    title: String
  },
  components: {
    SectionTitle
  }
};
</script>

<style scoped>
</style>