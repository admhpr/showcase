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
              @change="onToggle"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { String, required: true },
    showButton: Boolean
  },
  methods: {
    onToggle: function() {
      console.log("clicked");
    }
  }
};
</script>

<style scoped>
</style>