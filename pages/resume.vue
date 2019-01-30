<template>
  <div>
    <section id="resume" class="resume-section section-show">
      <section-header title="My Resume"></section-header>
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

      <div class="hobbies-block bg-lightgray section-block">
        <div class="container">
          <div class="section-header text-center">
            <h2 class="animate text-over-block">My Hobbies</h2>
            <!--divider-->
            <div class="divider-draft center"></div>
            <!--/divider-->
          </div>

          <div class="row">
            <div class="col-md-2 col-sm-4 col-xs-6">
              <div class="hobby">
                <div class="icon">
                  <i class="ion-ios-game-controller-b"></i>
                </div>

                <h4>Gaming</h4>
              </div>
            </div>

            <div class="col-md-2 col-sm-4 col-xs-6">
              <div class="hobby">
                <div class="icon">
                  <i class="ion-ios-book"></i>
                </div>

                <h4>Reading</h4>
              </div>
            </div>

            <div class="col-md-2 col-sm-4 col-xs-6">
              <div class="hobby">
                <div class="icon">
                  <i class="ion-ios-chatboxes"></i>
                </div>

                <h4>Chat</h4>
              </div>
            </div>

            <div class="col-md-2 col-sm-4 col-xs-6">
              <div class="hobby">
                <div class="icon">
                  <i class="ion-ios-musical-notes"></i>
                </div>

                <h4>Music</h4>
              </div>
            </div>

            <div class="col-md-2 col-sm-4 col-xs-6">
              <div class="hobby">
                <div class="icon">
                  <i class="ion-beer"></i>
                </div>

                <h4>Drinking</h4>
              </div>
            </div>

            <div class="col-md-2 col-sm-4 col-xs-6">
              <div class="hobby">
                <div class="icon">
                  <i class="ion-ios-football"></i>
                </div>

                <h4>Football</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <skills></skills>
    </section>
  </div>
</template>

<script>
import SectionHeader from "~/components/layout/SectionHeader";
import Skills from "~/components/sections/Skills";
import SocialLinks from "~/components/partials/SocialLinks";
export default {
  components: {
    SectionHeader,
    Skills,
    SocialLinks
  }
};
</script>
