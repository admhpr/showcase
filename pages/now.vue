
<template>
  <div>
    <section-container title="Now">
      <template v-slot:content>
        <div class="row">
          <div class="col-md-10 now">
            <p>
              This is a
              <a href="https://nownownow.com/about">now page</a>..
            </p>
            <p>
              Right now (25/05/20), I'm focusing on becoming a more complete developer, that means learning devops, automation and architecture.
            </p>
            <p>
              Looking at React, TypeScript, more Vue and Node (and now Deno). Moving more into the JavaScript world seems
              inevitable, but I want to keep my eye on other languages and keep broadening my understanding of programming as a
              complete discipline. Lower level languages that I have no experience with seem like a good opinion for learning, such as <a href="https://www.rust-lang.org/">Rust</a>.
            </p>
            <br>
            <p>
              Thanks to
              <a href="https://sivers.org">Derek Sivers</a> for the great idea.
            </p>
          </div>
        </div>
      </template>
    </section-container>
  </div>
</template>

<script>
import SectionContainer from "~/components/containers/Section";

export default {
  components: {
    SectionContainer
  }
};
</script>

<style scoped>
.now {
  padding: 1em 10em;
}
</style>
