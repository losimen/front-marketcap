<template>
<div class="relative">
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       width="36px" height="36px" viewBox="0 0 36 36" enable-background="new 0 0 36 36" xml:space="preserve">
    <circle class="ring" fill="none" stroke="#eeeeee" stroke-width="4.5" stroke-miterlimit="10" cx="18" cy="18" r="14"/>
    <circle
      class="origin-center rotate-[110deg] transition duration-300"
      fill="none"
      stroke="#16C784"
      stroke-width="4.5"
      stroke-miterlimit="10"
      cx="18"
      cy="18"
      r="14"
      :stroke-dashoffset="circleRotationValue"
      stroke-dasharray="314.1593"
      stroke-linecap="round"
    />
  </svg>
  <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-inter font-bold text-[14px] text-[#16C784] leading-[20]">
    {{ value }}
  </span>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
  value: number
}

const { value } = defineProps<IProps>()
const circleRotationValue = computed(() => 314.1593 - ((value * 0.1) * 8.4))
</script>
