<template>
  <a :href="link" class="h-6 w-6 shrink-0 rounded-full bg-[#F4F3F0] flex items-center justify-center">
    <img :src="RedditLogo" alt="Reddit" class="w-[13.33px] h-[13.33px]">
  </a>
</template>

<script setup lang="ts">
import RedditLogo from '../../assets/images/reddit.svg'

interface IProps {
  link: string
}

const { link } = defineProps<IProps>()
</script>
