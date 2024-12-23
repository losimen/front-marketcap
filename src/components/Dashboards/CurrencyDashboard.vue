<template>
  <div class="p-6 border-[1px] border-[#D8973C] bg-white rounded-[20px] shadow-[3px_4px_0px_0px_#D8973C] max-w-[335px]">
    <div class="flex items-center mb-4">
      <img class="h-6 w-6 object-fill shrink-0 mr-2" :src="Icon" alt="Coin name">
      <p class="font-inter font-bold text-[16px] text-[#1A1C1F] leading-[22px] mr-2">Dogecoin</p>
      <span class="font-inter font-[500] text-[14px] text-[#AFAFAF] leading-[20px] mr-2">DOGE</span>
      <span class="w-fit font-inter bg-[#F4F3F0] py-0.5 px-1 rounded-[6px] leading-[16px] font-[500] text-[12px] text-[#AFAFAF] text-end">
          1
      </span>
    </div>

    <div class="flex items-end mb-5">
      <data class="text-[#0D1421] text-[32px] leading-[40px] font-inter font-bold mr-2" value="0.4021">
        $0.4021
      </data>
      <StatsPercentageChange :value="3.68" class="pb-1" />
    </div>

    <div class="flex flex-wrap gap-[7px] mb-5">
      <MarketCap class="w-full min-w-fit flex-[1_1_calc(50%-3.5px)]" :percentage="0.06" :value="3.56" />
      <VolumeStats class="w-full min-w-fit flex-[1_1_calc(50%-3.5px)]" :percentage="0.06" :value="2.44" />
      <FDVStats class="w-full min-w-fit flex-[1_1_calc(50%-3.5px)]" :value="59.2" />
      <VolumeToMarketCapStats class="w-full min-w-fit flex-[1_1_calc(50%-3.5px)]" :value="4.13" />
      <TotalSupply class="w-full min-w-fit flex-[1_1_calc(50%-3.5px)]" :coin-tag="'DOGE'" :value="147.21" />
      <MaxSupplyStats class="w-full min-w-fit flex-[1_1_calc(50%-3.5px)]" :value="1" />
      <CirculatingSupplyStats class="grow" :coin-tag="'DOGE'" :value="147.21" />
    </div>

    <div>
      <div class="flex justify-between items-center mb-[14px]">
        <p class="font-inter font-[500] text-[12px] text-[#AFAFAF] leading-[18px]">Website</p>
        <span class="px-[10px] py-[3px] text-[#1A1C1F] text-[12px] leading-[18px] font-inter font-[600] bg-[#F4F3F0] rounded-[4px]">
          dogecoin.com
        </span>
      </div>

      <div class="flex justify-between items-center mb-[14px]">
        <p class="font-inter font-[500] text-[12px] text-[#AFAFAF] leading-[18px]">Socials</p>

        <div class="flex gap-[6px]">
          <XLink link="#" />
          <RedditLink link="#" />
          <GitHubLink link="#" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Icon from '../../assets/images/Ellipse 1.png'
import StatsPercentageChange from '../StatsPercentageChange.vue'
import MarketCap from '../StatsIndicators/MarketCap.vue'
import VolumeStats from '../StatsIndicators/VolumeStats.vue'
import FDVStats from '../StatsIndicators/FDVStats.vue'
import VolumeToMarketCapStats from '../StatsIndicators/VolumeToMarketCapStats.vue'
import TotalSupply from '../StatsIndicators/TotalSupply.vue'
import MaxSupplyStats from '../StatsIndicators/MaxSupplyStats.vue'
import CirculatingSupplyStats from '../StatsIndicators/CirculatingSupplyStats.vue'
import XLink from '../Socials/XLink.vue'
import RedditLink from '../Socials/RedditLink.vue'
import GitHubLink from '../Socials/GitHubLink.vue'
</script>
