
<template>
  <div>
    <section-container title="Now">
      <template v-slot:content>
        <div class="row">
          <div class="col-md-10">
            <p>
              This is a
              <a href="https://nownownow.com/about">now page</a>..
            </p>
            <p>
              Right now, I'm making a git commit everyday, I've been doing it for a while and it's a good way keep me
              accountable.
              Trying to find my groove and what I really want to do in regards to programming and my career. Having a
              blast doing soon.
            </p>
            <p>
              Looking at React, TypeScript, more Vue and Node. Moving more into the JavaScript world seems
              inevitable, but I want to keep my eye on other languages and keep broadening my understanding of programming as a
              complete discipline.
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



