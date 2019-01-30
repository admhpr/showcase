<template>
  <div>
    <div class="skills-block section-block">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="animate text-over-block">My Skills</h2>

          <loading-progress
            :progress="progress"
            :indeterminate="indeterminate"
            :counter-clockwise="counterClockwise"
            :hide-background="hideBackground"
            shape="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
            size="180"
            fill-duration="10"
          />

          <!--divider-->
          <div class="divider-draft center"></div>
          <!--/divider-->
        </div>

        <div class="row">
          <div class="col-md-6">
            <div v-for="skill in skills" :key="skill.id">{{ skill }}</div>
            <div class="skill">
              <h4>HTML/CSS</h4>

              <div class="skill-bar" data-percent="90">
                <div class="bar">
                  <div class="percent">90%</div>
                </div>
              </div>
            </div>

            <div class="skill">
              <h4>php</h4>

              <div class="skill-bar" data-percent="70">
                <div class="bar">
                  <div class="percent">70%</div>
                </div>
              </div>
            </div>

            <div class="skill">
              <h4>HTML/CSS</h4>

              <div class="skill-bar" data-percent="90">
                <div class="bar">
                  <div class="percent">90%</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="skill">
              <h4>VB</h4>

              <div class="skill-bar" data-percent="90">
                <div class="bar">
                  <div class="percent">90%</div>
                </div>
              </div>
            </div>

            <div class="skill">
              <h4>Wordpress</h4>

              <div class="skill-bar" data-percent="85">
                <div class="bar">
                  <div class="percent">85%</div>
                </div>
              </div>
            </div>

            <div class="skill">
              <h4>SEO</h4>

              <div class="skill-bar" data-percent="95">
                <div class="bar">
                  <div class="percent">95%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: Array
  },
  data() {
    return {
      indeterminate: false,
      progress: 50,
      counterClockwise: false,
      hideBackground: true
    };
  }
};
</script>

<style scoped>
</style>
