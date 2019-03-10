
<template>
  <div>
    <section-container title="About Me">
      <template v-slot:content>
        <div class="row">
          <!-- <div class="col-md-4">
            <div class="about-person-img">
              <img src="img/me_ah.png" alt="adam">
            </div>
          </div>-->
          <div class="col-md-10">
            <p>
              Hello! I'm an <a href="http://typelogic.com/intp.html">INTP</a> (apparently) who loves building things online.

              Being a developer to me is more than just writing code. It's about solving real problems, algorithmically and
              otherwise. Nothing gives me more satisfaction than creating a tool that solves a problem for someone in the real world.
              That's what it's all about. How do we as people make these machines serve a purpose. How we tell our story
              through code and beyond.
            </p>

            <p>
              In 2016 I fell into a course that taught basic web skills like HTML and CSS. I was hooked and have lived and
              breathed it since.
              <br>
              <br>In May 2018, I graduated with high honors from Western Technical College, Wisconsin, with an Associates in Applied Science with a
              focus on web and software development and design. I have worked in the industry since 2017.
            </p>
            <p>
              My new passion drove me to pursue more than just what any schooling could provide. Having organised a number of
              events and starting a meet up group. Aswell as talking to other professionals. I have cemented a hobbie, craft, habit.
              <br>
              <br>Moving away from markup, I balanced
              <a
                href="https://www.westerntc.edu/it-web-software-developer"
              >college</a> with additional online courses through
              <a href="https://www.udemy.com/">Udemy</a>,
              <a href="https://frontendmasters.com/">Frontend Masters</a>
              and the occasional YouTube video, to develop
              <nuxt-link to="/resume#skills">my skills.</nuxt-link>
            </p>

            <p>This isn't a job for me but a genuine love!</p>

            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <!-- <a href="mailto:adam@harpur.io?subject=Job Offer" class="ah-btn">
                    <font-awesome-icon :icon="['fas', 'briefcase']"/>
                    <span>Hire Me For Work</span>
                  </a> -->
                  <br>
                  <!-- <a href="static/adam-harpur-cv-2019.pdf" class="ah-btn link-btn" download>
                    <font-awesome-icon :icon="['fas', 'download']"/>
                    <span>Download CV</span>
                  </a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-icons section-block">
          <info-diamonds :data="softSkills"/>
        </div>
        <section-container title="Open Source Activity">
          <template v-slot:content>
            <div class="col-lg-10 offset-lg-1">
              <vue-github class="vue-github" username="harps116"/>
            </div>
          </template>
        </section-container>
      </template>
    </section-container>
  </div>
</template>

<script>
import SectionContainer from "~/components/containers/Section";
import InfoDiamonds from "~/components/sections/InfoDiamonds";
import ImageStrip from "~/components/sections/ImageStrip";

// data
import softSkills from "~/data/soft-skills";
import imageSetOne from "~/data/image-strips/set-one";

export default {
  data: function() {
    return {
      softSkills,
      imageSetOne
    };
  },
  components: {
    InfoDiamonds,
    ImageStrip,
    SectionContainer
  }
};
</script>

<style scoped>
.vue-github-wrapper {
  display: flex;
  justify-content: center;
}

.vue-github {
  width: 100%;
}
</style>

