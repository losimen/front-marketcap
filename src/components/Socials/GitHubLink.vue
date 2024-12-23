<template>
  <a :href="link" class="h-6 w-6 shrink-0 rounded-full bg-[#F4F3F0] flex items-center justify-center">
    <img :src="GitHubLogo" alt="GitHub" class="w-[13.33px] h-[13px]">
  </a>
</template>

<script setup lang="ts">
import GitHubLogo from '../../assets/images/github.svg'

interface IProps {
  link: string
}

const { link } = defineProps<IProps>()
</script>
