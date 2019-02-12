
<template>
  <div>
    <section-container title="About Me">
      <div slot="content">
        <div class="row">
          <!-- <div class="col-md-4">
            <div class="about-person-img">
              <img src="img/me_ah.png" alt="adam">
            </div>
          </div>-->
          <div class="col-md-10 about-info">
            <p>
              Being a developer to me is more than just writing code. It's about solving real problems, algorithmically and
              otherwise.Nothing gives me more satisfaction than creating a tool that solves a problem for someone in the real world.
              That's what it's all about. How do we as people make these machines serve a purpose. How we tell our story
              through code and beyond.
            </p>
            <br>
            <p>
              In 2016 a fell into a course that taught basic web skills like HTML and CSS. I was hooked and have lived a
              breathed it since. In May 2018, I graduated with high honors from Western Technical College, Wisconsin, with an Associates in Applied Science with a
              focus on web and software development and design. I have worked in the industry since 2017.
            </p>
            <br>
            <p>
              My new passion drove me to pursue more than just what any schooling could provide. Having organised a number of
              events
              and starting a meet up group. I took a number of online courses and I am constantly working to improve.
            </p>

            <p>This isn't a job for me but a genuine love!</p>

            <!-- <div class="clearfix"></div>
            <a href="#" class="symp-btn">Hire Me For Work</a>
            
            <a href="#" class="symp-btn link-btn">
              <i class="ion-ios-download"></i>Download Resume
            </a>-->
          </div>
        </div>
        <div class="about-icons section-block">
          <info-diamonds :data="softSkills"/>
        </div>
        <section-container title="Open Source Activity">
          <div class="vue-github-wrapper" slot="content">
            <vue-github class="vue-github" username="harps116"/>
          </div>
        </section-container>
      </div>
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

<style>
.vue-github-wrapper {
  display: flex;
  justify-content: center;
}

.vue-github {
  width: 70%;
}
</style>

