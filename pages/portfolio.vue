
<template>
  <section-container title="Portfolio">
    <div slot="content">
      <div class="row">
        <div
          v-for="item in portfolio"
          :key="item.title"
          class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
        >
          <div class="hovereffect">
            <img class="img-responsive" :src="item.info">
            <div class="overlay">
              <h2>{{item.title}}</h2>
              <p>
                <a :href="item.location">{{item.meta}}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section-container>
</template>

<script>
import SectionContainer from "~/components/containers/Section";
// data
import portfolio from "~/data/portfolio";
export default {
  data: function() {
    return { portfolio };
  },
  components: {
    SectionContainer
  }
};
</script>
