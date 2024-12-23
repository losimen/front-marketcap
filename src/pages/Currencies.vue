<template>
<Container class="min-h-screen">
  <Header class="mb-[48px]" />

  <main class="flex gap-3 w-full items-start">
    <CurrencyDashboard />
    <PriceNMarketCapChart />
  </main>
</Container>
</template>

<script setup lang="ts">
import Container from '../components/Container.vue'
import Header from '../components/Header.vue'
import CurrencyDashboard from '../components/Dashboards/CurrencyDashboard.vue'
import PriceNMarketCapChart from '../components/Charts/PriceNMarketCapChart.vue'
</script>
