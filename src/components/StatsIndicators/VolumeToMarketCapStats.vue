<template>
  <StatsIndicator>
    <template #title>
      Vol/Mkt Cap (24h)
    </template>
    <template #values>
      <div class="flex">
        <data class="font-inter font-[600] text-[14px] text-[#1A1C1F] leading-[20px]" :value="value">
          ${{ value }}%
        </data>
      </div>
    </template>
  </StatsIndicator>
</template>
<script setup lang="ts">
import StatsIndicator from './StatsIndicator.vue'

interface IProps {
  value: number
}

const { value } = defineProps<IProps>()
</script>
