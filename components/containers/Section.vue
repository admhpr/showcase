<template>
  <div>
    <section class="section-container active fadeIn">
      <div class="section-block">
        <div class="container">
          <section-title v-if="title" :altContent="altContent" :title="title"></section-title>
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
    title: String,
    altContent: { Boolean, default: false }
  },
  components: {
    SectionTitle
  }
};
</script>

<style scoped>
</style>