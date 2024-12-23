<template>
  <article class="p-[20.78px] bg-white border-[1px] border-[#D8973C] rounded-[16px] min-w-[304px] max-w-[334px] self-stretch shadow-[3px_4px_0px_0px_#D8973C] max-[900px]:shadow-[2px_2px_0px_0px_#D8973C]">
    <div class="flex justify-between mb-3">
      <div class="flex">
        <img :src="Icon" alt="Icon" class="h-[44.53px] w-[44.53px] object-cover rounded-full mr-[8.81px]" />
        <div class="flex flex-col">
          <div class="flex">
            <p class="font-inter font-[600] text-[13.36px] leading-[16.17px] text-[#0F1419] mb-[2.97px] mr-[5.94px]">Dogecoin</p>
            <img :src="VerifiedStatus" alt="" class="h-[14.84px]" />
          </div>
          <p class="font-[400] text-[11.88px] leading-[14.37px] text-[#536471]">@dogecoin</p>
        </div>
      </div>

      <img :src="Xlogo" alt="">
    </div>

    <div class="mb-[27.9px]">
      <p class="font-inter font-[400] text-[13.36px] text-[#0F1419] leading-[18px] mb-[24px]">If someone asks you to send money before you can receive money, you're likely dealing with a scam. Please stay safe, shibes, and carefully research sites and services you have not used before.</p>

      <div class="flex gap-[3.5px]">
        <a class="font-inter font-[400] text-[13.36px] text-[#1D9BF0] leading-[18px] underline" href="#">#Dogecoin</a>
        <a class="font-inter font-[400] text-[13.36px] text-[#1D9BF0] leading-[18px] underline" href="#">#Dogecoin</a>
      </div>
    </div>

    <div class="flex">
      <p class="font-inter font-[400] text-[13.36px] leading-[16.17px] text-[#536471] after:content-[''] after:relative after:w-[2px] after:h-[2px] after:bg-[#536471] after:block flex items-center after:ml-[5.94px] mr-[5.94px]">12:00 AM</p>
      <p class="font-inter font-[400] text-[13.36px] leading-[16.17px] text-[#536471] after:content-[''] after:relative after:w-[2px] after:h-[2px] after:bg-[#536471] after:block flex items-center after:ml-[5.94px] mr-[5.94px]">Jan 10, 2023</p>
      <p class="font-inter font-[400] text-[13.36px] leading-[16.17px] text-[#536471]">
        <span class="font-inter font-[600] text-[13.36px] leading-[16.17px] text-[#0F1419]">10k</span>
        Views
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import Icon from '../../assets/images/Ellipse 1.png'
import VerifiedStatus from '../../assets/images/Business.svg'
import Xlogo from '../../assets/images/Xlogo.svg'
</script>
