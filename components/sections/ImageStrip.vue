<template>
  <div class="row image-strip-wrapper">
    <div class="image-strip">
      <img v-for="img in images" :key="img.src" :src="img.src" :alt="img.alt">
      <img v-for="img in images" :key="img.src" :src="img.src" :alt="img.alt">
      <img v-for="img in images" :key="img.src" :src="img.src" :alt="img.alt">
    </div>
  </div>
</template>

<script>
require.context("~/assets/img", false, /\.png$/);
export default {
  props: { images: Array }
};
</script>

<style scoped>
img {
  max-width: 75px;
}

.image-strip-wrapper {
}
</style>