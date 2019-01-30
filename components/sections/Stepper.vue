<template>
  <div class="process-block bg-lightgray section-block">
    <div class="container">
      <section-title v-if="title" :title="title"/>
      <div class="row">
        <div class="col-md-3" :key="index" v-for="(item, index) in data">
          <div class="process">
            <div class="number">
              <span>0{{index + 1}}</span>
            </div>
            <div class="content">
              <h4>{{item.title}}</h4>

              <p>{{item.info}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "~/components/layout/SectionTitle";
export default {
  props: {
    title: String,
    data: Array
  },
  components: {
    SectionTitle
  }
};
</script>

<style scoped>
</style>