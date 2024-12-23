<template>
  <StatsIndicator>
    <template #title>
      Volume (24h)
    </template>
    <template #values>
      <div class="flex">
        <data class="font-inter font-[600] text-[14px] text-[#1A1C1F] leading-[20px] mr-2" :value="value">
          ${{ value }}
        </data>
        <StatsPercentageChange :value="percentage" />
      </div>
    </template>
  </StatsIndicator>
</template>
<script setup lang="ts">
import StatsIndicator from './StatsIndicator.vue'
import StatsPercentageChange from '../StatsPercentageChange.vue'

interface IProps {
  value: number
  percentage: number
}

const { value, percentage } = defineProps<IProps>()
</script>
