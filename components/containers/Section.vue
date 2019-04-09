<template>
  <div>
    <section class="section-container active fadeIn">
      <div class="section-block">
        <div class="container">
          <section-title v-if="title" :showButton="showButton" :title="title"></section-title>
        </div>
      </div>
      <div v-if="!showAltContent">
        <slot name="content"></slot>
      </div>
      <div v-if="showAltContent">
        <slot name="altContent"></slot>
      </div>
    </section>
  </div>
</template>

<script>
import EventBus from "../utils/event-bus.js";
import SectionTitle from "~/components/layout/SectionTitle";
export default {
  props: {
    title: String,
    showButton: { Boolean, default: false }
  },
  data: function() {
    return {
      showAltContent: false
    };
  },
  created() {
    EventBus.$on("button-toggled", evt => {
      this.showAltContent = evt.value;
    });
  },
  components: {
    SectionTitle
  }
};
</script>

<style scoped>
</style>