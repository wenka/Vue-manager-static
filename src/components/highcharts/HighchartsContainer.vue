<template>
  <div class="marginAuto"></div>
</template>

<script>
  import Highcharts from 'highcharts/highstock';
  import HighchartsMore from 'highcharts/highcharts-more';
  import HighchartsDrilldown from 'highcharts/modules/drilldown';
  import Highcharts3D from 'highcharts/highcharts-3d';
  import WordCloud from 'highcharts/modules/wordcloud'

  HighchartsMore(Highcharts)
  HighchartsDrilldown(Highcharts);
  Highcharts3D(Highcharts);
  WordCloud(Highcharts)

  export default {
    props: ['options'],
    name: "HighchartsContainer",
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        this.options.credits = {
          enabled: false
        }
        this.chart = new Highcharts.Chart(this.$el, this.options);
      }
    }
  }
</script>

<style scoped>
</style>
