<template>
  <a :href="link" class="h-6 w-6 shrink-0 rounded-full bg-[#F4F3F0] flex items-center justify-center">
    <img :src="XLogo" alt="X" class="w-[13.33px] h-[12px]">
  </a>
</template>

<script setup lang="ts">
import XLogo from '../../assets/images/X.svg'

interface IProps {
  link: string
}

const { link } = defineProps<IProps>()
</script>
