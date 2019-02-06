<template>
  <div>
    <section-title v-if="title" :title="title"/>
    <carousel>
      <slide v-for="item in data" :key="item.tile">
        <div class="testimonial">
          <p>{{item.info}}</p>

          <div class="author">
            <h4>{{item.title}}</h4>
            <p>{{item.meta}}</p>
          </div>
        </div>
      </slide>
    </carousel>
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