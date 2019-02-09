<template>
  <div class="row">
    <div class="image-strip">
      <img class="img-thumbnail" v-for="img in images" :key="img.src" :src="img.src" :alt="img.alt">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>