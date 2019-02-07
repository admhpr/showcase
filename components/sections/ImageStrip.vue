<template>
  <div class="image-strip">
    <img v-for="img in images" :key="img.src" :src="img.src" :alt="img.alt">
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>