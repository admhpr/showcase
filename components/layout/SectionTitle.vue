<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="section-title text-center">
            <h2 class="animate text-over-block">{{title}}</h2>
            <div class="divider-draft center"></div>
            <toggle-button
              v-if="showButton"
              :value="false"
              color="#82C7EB"
              :sync="true"
              @change="evt => onToggle(evt)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../utils/event-bus.js";
export default {
  props: {
    title: { String, required: true },
    showButton: { Boolean, default: false }
  },
  methods: {
    onToggle: function(evt) {
      EventBus.$emit("button-toggled", { value: evt.value });
    }
  }
};
</script>

<style scoped>
</style>