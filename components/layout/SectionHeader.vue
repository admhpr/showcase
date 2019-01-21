<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="section-header text-center">
            <h2 class="animate text-over-block">{{title}}</h2>
            <!--divider-->
            <div class="divider-draft center"></div>
            <!--/divider-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { String, required: true }
  }
};
</script>

<style scoped>
</style>