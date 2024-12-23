<template>
  <div class="py-3 px-[14px] rounded-[16px] bg-white border-[1px] border-[#D8973C] w-[162px] shadow-[3px_4px_0px_0px_#D8973C] max-[900px]:shadow-[2px_2px_0px_0px_#D8973C]">
    <span class="block font-inter font-[700] text-[14px] leading-[20px] text-[#1A1C1F] mb-[10px]">Fear Index</span>

    <div class="flex flex-col">
      <div class="flex mb-3">
        <CircularChart :value="80" class="h-[36px] w-[36px] mr-2" />

        <div class="flex flex-col">
          <div class="font-inter font-[700] text-[12px] leading-[20px] text-[#1A1C1F]">Extreme Greed</div>
          <div class="font-inter font-[500] text-[12px] leading-[16px] text-[#AFAFAF]">Update: 5h 9m</div>
        </div>
      </div>

      <div class="bg-[#F4F3F0] py-[6px] px-[9px] rounded-[6px] flex items-center">
        <span class="font-inter font-[700] leading-[21.6px] text-[#84CC16] text-[14.4px] mr-[7px]">80</span>
        <div class="text-[#AFAFAF] font-inter font-[500] text-[12px] leading-[16px]">24h ago</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CircularChart from '../CircularChart.vue'
</script>
