<template>
  <div class="hobbies-block bg-lightgray section-block">
    <section-title v-if="title" :title="title"/>
    <div class="row">
      <div class="col-md-3 col-sm-3 col-xs-6" :key="item.title" v-for="item in data">
        <div class="hobby">
          <info-diamond/>
          <h4>{{item.title}}</h4>
          <div>{{item.info}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoDiamond from "~/components/partials/InfoDiamond";
import SectionTitle from "~/components/layout/SectionTitle";
export default {
  props: {
    title: String,
    data: Array
  },
  components: {
    InfoDiamond,
    SectionTitle
  }
};
</script>

<style scoped>
</style>