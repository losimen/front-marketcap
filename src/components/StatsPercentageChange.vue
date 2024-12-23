<template>
  <span class="font-inter leading-[20px] font-[500] text-[14px] max-[900px]:text-[12px] flex items-center text-end"
        :class="isValuePositive ? 'text-[#16A34A]' : 'text-[#DC2626]'"
  >
    <img :src="isValuePositive ? CaretUp : CaretDown" alt="down" class="mr-1 h-[4.8px]">
    {{ value }}%
  </span>
</template>
<script setup lang="ts">
import CaretDown from '../assets/images/caret-down.svg'
import CaretUp from '../assets/images/caret-up.svg'
import { computed } from 'vue'

interface IProps {
  value: number
}

const { value } = defineProps<IProps>()
const isValuePositive = computed(() => value >= 0)
</script>
