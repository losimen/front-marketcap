<template>
  <div class="max-[576px]:p-3.5 grow p-5 rounded-[20px] border-[1px] border-[#D8973C] bg-white min-w-[335px] max-[1400px]:min-w-[auto] self-stretch shadow-[3px_4px_0px_0px_#D8973C] max-[900px]:shadow-[2px_2px_0px_0px_#D8973C]">
    <span class="max-[576px]:mb-[10px] block text-[#1A1C1F] font-inter font-[700] text-[16px] leading-[22px] mb-[22px]">
      <slot />
    </span>

    <div class="grid grid-cols-[repeat(4,_auto)] items-center gap-y-[16px]">
      <div class="mr-[13px]">
        <span class="font-inter bg-[#F4F3F0] py-0.5 px-1 rounded-[6px] leading-[16px] font-[500] text-[12px] text-[#AFAFAF] text-end">1</span>
      </div>
      <div class="flex items-center pr-[30px]">
        <a href="#" class="mr-2 shrink-0">
          <img class="h-6 w-6 object-fill shrink-0" :src="Icon" alt="Coin name">
        </a>
        <div class="flex items-center font-inter leading-[20px] font-[600] text-[14px] text-[#1A1C1F] uppercase">
          DOGE
        </div>
      </div>
      <div class="font-inter font-[600] text-[14px] leading-[20px] text-[#1A1C1F] text-end pr-2">
        $0.4202
      </div>
      <div class="pl-1.5 font-inter font-[600] text-[14px] leading-[20px] text-[#1A1C1F] text-end flex items-center">
        <img :src="CaretUp" alt="" class="mr-1 w-[8.4px] h-[4.8px]">
        <span>3.68%</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Icon from '../assets/images/Ellipse 1.png'
import CaretUp from '../assets/images/caret-up.svg'
import CaretDown from '../assets/images/caret-down.svg'
</script>
