<template>
  <div slot="content">
    <div class="row">
      <div class="col-lg-6">
        <apexchart type="bar" :options="knowledgeBar.chartOptions" :series="knowledgeBar.series"></apexchart>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10">
        <no-ssr>
          <vue-github username="harps116"></vue-github>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import SectionContainer from "~/components/containers/Section";
export default {
  data: function() {
    return {
      knowledgeBar: {
        chartOptions: {
          xaxis: {
            categories: [2016, 2017, 2018, 2019]
          }
        },
        series: [
          {
            name: "Books Read",
            data: [3, 5, 10, 5]
          },
          {
            name: "Courses Completed",
            data: [3, 4, 4, 2]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>