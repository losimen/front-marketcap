<template>
  <div class="py-3 px-[14px] rounded-[16px] bg-white border-[1px] border-[#D8973C] w-[162px] shadow-[3px_4px_0px_0px_#D8973C] max-[900px]:shadow-[2px_2px_0px_0px_#D8973C]">
    <span class="block font-inter font-[700] text-[14px] leading-[20px] text-[#1A1C1F] mb-1">Dominance</span>

    <div class="flex flex-col">
      <div class="flex py-[10px] border-b-[1px] border-[#F4F3F0]">
        <a href="#" class="mr-[14px]">
          <img class="h-6 w-6 object-fill" :src="Icon" alt="Coin name">
        </a>
        <div class="font-inter leading-[20px] font-[600] text-[14px] text-[#1A1C1F]">
          DOGE
        </div>
      </div>

      <div class="flex py-[10px]">
        <a href="#" class="mr-[14px]">
          <img class="h-6 w-6 object-fill" :src="Icon" alt="Coin name">
        </a>
        <div class="font-inter leading-[20px] font-[600] text-[14px] text-[#1A1C1F]">
          54.46%
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Icon from '../assets/images/Ellipse 1.png'
</script>
