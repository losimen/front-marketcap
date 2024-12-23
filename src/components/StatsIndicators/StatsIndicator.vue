<template>
  <div class="p-[11px] bg-[#F4F3F0] rounded-[6px]">
    <p class="font-inter font-[500] text-[#AFAFAF] text-[12px] leading-[18px] mb-1">
      <slot name="title" />
    </p>

    <div>
      <slot name="values" />
    </div>
  </div>
</template>
