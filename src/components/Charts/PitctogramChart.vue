<template>
  <div>
    <apexcharts
      type="area"
      :options="chartOptions"
      :series="chartSeries"
      width="204"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ApexCharts from "vue3-apexcharts";
import { ApexOptions } from 'apexcharts'
export default defineComponent({
  name: "AreaChart",
  components: {
    apexcharts: ApexCharts,
  },
  data() {
    return {
      chartSeries: [
        {
          name: "Sales",
          data: [0.1919062411321892, 2.696109894889465, -11.78258218251006],
        },
      ],
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        chart: {
          id: "area-chart",
          height: 350,
          type: "area",
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          selection: {
            enabled: false
          },
          brush: {
            enabled: false
          }
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false
          },
          // categories: [
          //   "2020-01-01",
          //   "2020-02-01",
          //   "2020-03-01",
          //   "2020-04-01",
          //   "2020-05-01",
          //   "2020-06-01",
          //   "2020-07-01",
          //   "2020-08-01",
          // ],
          categories: [
            "1:00",
            "6:00",
            "23:59",
          ],
        },
        yaxis: {
          labels: {
            show: false
          },
        },
        grid: {
          show: false
        },
        stroke: {
          curve: "smooth",
          width: 2
        },
        title: {
          align: "center",
        },
        fill: {
          colors:['#16A34A'],
          type: "gradient",
          gradient: {
            shade: "light",
            opacityFrom: 0.4,
            opacityTo: 0.25,
            stops: [0, 90, 100],
          },
        },
        tooltip: {
          enabled: false,
          intersect: false,
        },
      },
    };
  },
});
</script>

<style scoped>
/* You can add custom styles here */
</style>
