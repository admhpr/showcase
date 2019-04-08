<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="section-title text-center">
            <h2 class="animate text-over-block">{{title}}</h2>
            <span v-if="altContent">alt</span>
            <div class="divider-draft center"></div>
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
    altContent: Boolean
  }
};
</script>

<style scoped>
</style>