<template>
  <div class="row image-strip-wrapper">
    <div class="image-strip">
      <img v-for="img in repeatedImages" :key="img.src" :src="img.src" :alt="img.alt">
    </div>
  </div>
</template>

<script>
require.context("~/assets/img", false, /\.png$/);
export default {
  props: { images: Array, repeat: { type: Number, default: 0 } },
  computed: {
    repeatedImages: function() {
      let data = this.images;
      let count = this.repeat;
      while (count--) {
        data = data.concat(...this.images);
      }
      return data;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 75px;
}

.image-strip-wrapper {
}
</style>