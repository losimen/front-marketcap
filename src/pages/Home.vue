<template>
<Container>
  <Header class="max-[576px]:mb-[30px] mb-[72px]" />

<!--  <PitctogramChart />-->
<!---->
  <div class="max-[576px]:mb-[24px] mb-[52px] gap-3 flex flex-wrap items-start">
    <CoinsTop>🔥 Trending Coins</CoinsTop>
    <CoinsTop>🚀 Top Gainers</CoinsTop>

    <div class="flex flex-col gap-y-3 max-[576px]:justify-between max-[576px]:grow">
      <div class="flex gap-3 max-[576px]:justify-between">
        <Chart>Market Cap</Chart>
        <Chart>MEME100</Chart>
      </div>

      <div class="flex gap-3 max-[576px]:justify-between">
        <Dominance />
        <FearIndex />
      </div>
    </div>

    <TwitterPosts class="max-[576px]:max-w-none max-[576px]:grow max-[1018px]:max-w-max max-[1018px]:grow max-[1018px]:w-min" />
  </div>

  <main class="w-full">
    <h2 class="max-[576px]:text-[20px] max-[576px]:mb-[8px] text-[#1A1C1F] text-[24px] leading-[32px] font-bold font-inter mb-[24px]">Top Meme Coins by Meme Market Cap</h2>
    <GridTable class="w-full overflow-scroll" />
  </main>
</Container>
</template>

<script setup lang="ts">
import CoinsTop from '../components/CoinsTop.vue'
import Chart from '../components/Charts/Chart.vue'
import Dominance from '../components/Dominance.vue'
import FearIndex from '../components/StatsIndicators/FearIndex.vue'
import TwitterPosts from '../components/Posts/TwitterPosts.vue'
import GridTable from '../components/GridTable.vue'
import Header from '../components/Header.vue'
import Container from '../components/Container.vue'
import TableCoinChart from '@/components/Charts/TableCoinChart.vue'
import PitctogramChart from '@/components/Charts/PitctogramChart.vue'
</script>
