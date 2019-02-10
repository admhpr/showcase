<template>
  <div>
    <section-container title="Skills and Attributes">
      <div slot="content">
        <div class="row">
          <apexchart
            width="500"
            type="pie"
            :options="skillsPie.chartOptions"
            :series="skillsPie.series"
          ></apexchart>
          <apexchart
            width="500"
            type="donut"
            :options="attributesPie.chartOptions"
            :series="attributesPie.series"
          ></apexchart>
        </div>
        <div class="row">
          <apexchart
            width="500"
            type="bar"
            :options="knowledgeBar.chartOptions"
            :series="knowledgeBar.series"
          ></apexchart>
        </div>
      </div>
    </section-container>
  </div>
</template>

<script>
import SectionContainer from "~/components/containers/Section";
export default {
  props: {
    skills: Array
  },
  components: {
    SectionContainer
  },
  data: function() {
    return {
      skillsPie: {
        chartOptions: {
          labels: ["JavaScript", "CSS", "HTML", "Python", "PHP", "MySQl"]
        },
        series: [40, 17.5, 17.5, 5, 10, 10]
      },
      attributesPie: {
        chartOptions: {
          labels: [
            "Easy Going",
            "Enthusiastic",
            "Deep Thinker",
            "Curious",
            "Competent",
            "Creative"
          ]
        },
        series: [20, 20, 20, 20, 20, 20]
      },
      knowledgeBar: {
        chartOptions: {
          xaxis: {
            categories: [2016, 2017, 2018, 2019]
          }
        },
        series: [20, 10, 5, 19]
      }
    };
  }
};
</script>

<style scoped>
</style>
