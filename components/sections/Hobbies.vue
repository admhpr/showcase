<template>
  <div class="hobbies-block bg-lightgray section-block">
      <section-title :title="title"/>

      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-6" :key="hobbie.title" v-for="hobbie in hobbies">
          <div class="hobby">
            <info-diamond/>

            <h4>{{hobbie.title}}</h4>
            <div>{{hobbie.info}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoDiamond from "~/components/partials/InfoDiamond";
import SectionTitle from "~/components/layout/SectionTitle";
import hobbies from "~/data/hobbies";
export default {
  props: {
      title: String
  },
  data: function() {
    return {
      hobbies
    };
  },
  components: {
    InfoDiamond,
    SectionTitle
  }
};
</script>

<style scoped>
</style>