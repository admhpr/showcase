<template>
  <div>
    <p>
      Don't like to read huh?
      Well, here's the scoop at a glance:
    </p>
    <p>Web Application Developer, Northern Ireland native. Have lived in American and Australia. Love to make things.</p>
    <skills/>
    <knowledge :showFeed="false"/>
  </div>
</template>

<script>
import Skills from "~/components/sections/Skills";
import Knowledge from "~/components/sections/Knowledge";
export default {
  components: {
    Skills,
    Knowledge
  }
};
</script>

<style lang="scss" scoped>
</style>