
<template>
  <section-container title="Portfolio">
    <div slot="content">
      <div v-for="item in data" :key="item.title" class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="hovereffect">
          <img class="img-responsive" src="https://www.placehold.it/300x300" alt>
          <div class="overlay">
            <h2>{{item.title}}</h2>
            <p>
              <a :href="item.location">{{item.meta}}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section-container>
</template>

<script>
import SectionContainer from "~/components/containers/Section";
export default {
  data: function() {
    return {};
  },
  components: {
    SectionContainer
  }
};
</script>
