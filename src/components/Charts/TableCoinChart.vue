<template>
  <div ref="chartContainer" style="height: 48px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { createChart } from 'lightweight-charts';

export default {
  name: 'ChartComponent',
  setup() {
    const chartContainer = ref(null);

    onMounted(() => {
      const chart = createChart(chartContainer.value, {
        layout: {
          textColor: 'black',
          background: { type: 'solid', color: 'white' },
        },
      });

      chart.applyOptions({
        watermark: {
          visible: true
        },
        handleScale: true,
        leftPriceScale: {
          visible: false,
          borderVisible: false,
        },
        rightPriceScale: {
          visible: false,
        },
        timeScale: {
          visible: false
        },
        crosshair: {
          horzLine: {
            visible: false,
          },
          vertLine: {
            visible: false,
          },
        },
        grid: {
          vertLines: {
            visible: false,
          },
          horzLines: {
            visible: false,
          },
        },
      })

      const lineSeries = chart.addAreaSeries({
        topColor: 'rgba( 239, 83, 80, 0.05)',
        bottomColor: 'rgba( 239, 83, 80, 0.28)',
        lineColor: 'rgba( 239, 83, 80, 1)',
        lineWidth: 2,
        crossHairMarkerVisible: false,
        priceLineVisible: false,
        lastValueVisible: false,
      })

      lineSeries.priceScale().applyOptions({
        scaleMargins: {
          top: 0.3, // leave some space for the legend
          bottom: 0.25,
        },
      })

      // Sample data for a line chart
      // const lineSeries = chart.addLineSeries();
      lineSeries.setData([
        { time: '2024-12-01', value: 0.1862810657601965 },
        { time: '2024-12-02', value: -0.6321896224706802 },
        { time: '2024-12-03', value: -3.652765833882743 },
        { time: '2024-12-04', value: -11.6423841220947 },
        { time: '2024-12-05', value: 3.6423841220947 },
        { time: '2024-12-06', value: 9.6423841220947 },
        { time: '2024-12-07', value: 1.6423841220947 },
        { time: '2024-12-08', value: 4.6423841220947 },
      ]);

      chart.timeScale().fitContent();
    });

    return {
      chartContainer,
    };
  },
};
</script>

<style scoped>
</style>
