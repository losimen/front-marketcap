<template>
  <StatsIndicator>
    <template #title>
      Circulating supply
    </template>
    <template #values>
      <div class="flex">
        <data class="font-inter font-[600] text-[14px] text-[#1A1C1F] leading-[20px] uppercase" :value="value">
          ${{ value }} {{ coinTag }}
        </data>
      </div>
    </template>
  </StatsIndicator>
</template>
<script setup lang="ts">
import StatsIndicator from './StatsIndicator.vue'

interface IProps {
  value: number
  coinTag: string
}

const { value, coinTag } = defineProps<IProps>()
</script>
