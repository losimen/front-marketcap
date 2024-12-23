<template>
  <div class="py-3 px-[14px] rounded-[16px] bg-white border-[1px] border-[#D8973C] w-[162px] shadow-[3px_4px_0px_0px_#D8973C] max-[900px]:shadow-[2px_2px_0px_0px_#D8973C]">
    <span class="block font-inter font-[700] text-[14px] leading-[20px] text-[#1A1C1F] mb-1">
      <slot />
    </span>

    <div class="pb-1 mb-[14px] flex">
      <span class="font-inter font-[600] text-[14px] leading-[20px] text-[#1A1C1F] pr-3">$3.56T</span>
      <div class="flex items-center">
        <img :src="CaretUp" alt="" class="mr-1 w-[8.4px] h-[4.8px]">
        <div class="font-inter font-[500] text-[14px] leading-[20px] text-[#DC2626]">$3.56T</div>
      </div>
    </div>

    <img :src="Chart" alt="" class="w-[133.77px] h-[38.58px]">
  </div>
</template>
<script setup lang="ts">
import CaretUp from '../../assets/images/caret-up.svg'
import Chart from '../../assets/images/chart.svg'
</script>
