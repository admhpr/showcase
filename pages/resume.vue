<template>
  <div>
    <section id="resume" class="resume-section section-show">
      <section-title title="My Resume"></section-title>
      <div class="timeline-block section-block">
        <div class="container">
          <ul class="timeline">
            <li class="timeline-header">
              <h4>Education</h4>
            </li>

            <li>
              <div class="timeline-desc">
                <h4>2005-2007</h4>
              </div>

              <div class="timeline-content">
                <h4>Masters Degree</h4>
                <span>@CSS College Larkana</span>

                <p>
                  Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat
                  vituperata suscipiantur et, et fabellas explicari adipiscing quo.
                </p>
              </div>
            </li>

            <li class="inverse">
              <div class="timeline-desc">
                <h4>2005-2007</h4>
              </div>

              <div class="timeline-content">
                <h4>Masters Degree</h4>
                <span>@CSS College Larkana</span>

                <p>
                  Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat
                  vituperata suscipiantur et, et fabellas explicari adipiscing quo.
                </p>
              </div>
            </li>

            <li>
              <div class="timeline-desc">
                <h4>2005-2007</h4>
              </div>

              <div class="timeline-content">
                <h4>Masters Degree</h4>
                <span>@CSS College Larkana</span>

                <p>
                  Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat
                  vituperata suscipiantur et, et fabellas explicari adipiscing quo.
                </p>
              </div>
            </li>

            <li class="timeline-header">
              <h4>Experience</h4>
            </li>

            <li>
              <div class="timeline-desc">
                <h4>2005-2007</h4>
              </div>

              <div class="timeline-content">
                <h4>Web Designer</h4>
                <span>@Themeforest</span>

                <p>
                  Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat
                  vituperata suscipiantur et, et fabellas explicari adipiscing quo.
                </p>
              </div>
            </li>

            <li class="inverse">
              <div class="timeline-desc">
                <h4>2005-2007</h4>
              </div>

              <div class="timeline-content">
                <h4>Web Developer</h4>
                <span>@CodeCanyon</span>

                <p>
                  Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat
                  vituperata suscipiantur et, et fabellas explicari adipiscing quo.
                </p>
              </div>
            </li>

            <li>
              <div class="timeline-desc">
                <h4>2005-2007</h4>
              </div>

              <div class="timeline-content">
                <h4>Blogger</h4>
                <span>@blogspot</span>

                <p>
                  Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat
                  vituperata suscipiantur et, et fabellas explicari adipiscing quo.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <info-diamonds title="Hobbies" :data="hobbies"/>
      <skills/>
    </section>
  </div>
</template>

<script>
import InfoDiamonds from "~/components/sections/InfoDiamonds";
import SectionTitle from "~/components/layout/SectionTitle";
import Skills from "~/components/sections/Skills";
import SocialLinks from "~/components/partials/SocialLinks";
import hobbies from "~/data/hobbies";
export default {
  data: function() {
    return {
      hobbies
    };
  },
  components: {
    InfoDiamonds,
    SectionTitle,
    Skills,
    SocialLinks
  }
};
</script>
