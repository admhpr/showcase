<template>
  <div>
    <section-container title="Skills and Attributes">
      <div slot="content">
        <div class="row">
          <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
          <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
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
      chartOptions: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
