<template>
  <div @click="console.log(coins)" class="grid grid-cols-[repeat(10,auto)] bg-white rounded-[24px] w-full border-[1px] border-[#D8973C] max-[900px]:shadow-[2px_2px_0px_0px_#D8973C] shadow-[3px_4px_0px_0px_#D8973C]">
    <div class="max-[900px]:py-2 py-[23px] grid grid-cols-subgrid col-start-1 -col-end-1 max-[900px]:pl-2 max-[900px]:pr-1 pl-[25px] pr-[20px] rounded-[24px]">
      <div class="sticky left-[10px] z-20 bg-white max-[900px]:px-0.5 px-2 font-inter font-[700] text-[12px] leading-[18px] text-[#1A1C1F]">#</div>
      <div class="sticky left-10 z-20 bg-white min-w-[218px] max-[900px]:px-0.5 px-2 text-start font-inter font-[700] text-[12px] leading-[18px] text-[#1A1C1F]">Name</div>
      <div class="max-[900px]:px-0.5 px-2 text-end font-inter font-[700] text-[12px] leading-[18px] text-[#1A1C1F]">Price</div>
      <div class="max-[900px]:px-0.5 px-2 text-end font-inter font-[700] text-[12px] leading-[18px] text-[#1A1C1F]">1h %</div>
      <div class="max-[900px]:px-0.5 px-2 text-end font-inter font-[700] text-[12px] leading-[18px] text-[#1A1C1F]">6h %</div>
      <div class="max-[900px]:px-0.5 px-2 text-end font-inter font-[700] text-[12px] leading-[18px] text-[#1A1C1F]">24h %</div>
      <div class="max-[900px]:px-0.5 px-2 text-end font-inter font-[700] text-[12px] leading-[18px] text-[#1A1C1F]">Market Cap</div>
      <div class="max-[900px]:px-0.5 px-2 text-end font-inter font-[700] text-[12px] leading-[18px] text-[#1A1C1F]">Volume(24h)</div>
      <div class="max-[900px]:px-0.5 px-2 text-end font-inter font-[700] text-[12px] leading-[18px] text-[#1A1C1F]">Circulating Supply</div>
      <div class="max-[900px]:px-0.5 px-2 text-end font-inter font-[700] text-[12px] leading-[18px] text-[#1A1C1F] whitespace-nowrap">7d Chart</div>
    </div>

    <div v-for="(coin, index) in coins" :key="coin.id" class="grid grid-cols-subgrid col-start-1 -col-end-1 border-[#F4F3F0]"
    :class="isLastIndex(index) ? 'border-t-[1px]' : 'border-y-[1px]'">
      <div class="sticky left-0 z-20 bg-white max-[900px]:pl-2 max-[900px]:pr-0.5 pl-[25px] pr-[17px] flex items-center">
        <span class="w-fit font-inter bg-[#F4F3F0] py-0.5 px-1 rounded-[6px] leading-[16px] font-[500] text-[12px] text-[#AFAFAF] text-end">
          {{ index + 1 }}
        </span>
      </div>
      <div class="sticky left-[38px] z-20 bg-white">
        <div class="w-full flex items-center text-end py-[22px] px-2">
          <a href="#" class="mr-2">
            <img class="h-6 w-6 object-fill" :src="coin.image" alt="Coin name">
          </a>
          <div class="flex items-center font-inter leading-[20px] font-[600] text-[14px] max-[900px]:text-[12px]">
            <div class="font-inter mr-1.5 text-[#1A1C1F] uppercase">
              {{ coin.symbol }}
            </div>
            <div class="font-inter text-[#AFAFAF] font-[500]">
              {{ coin.name }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="px-2 w-full flex justify-end font-inter leading-[20px] font-[500] max-[900px]:text-[12px] text-[14px] text-[#1A1C1F] text-end py-[22px]">
          ${{ numberWithCommas(coin.price ?? 0) }}
        </span>
      </div>
      <div>
        <div class="w-full flex justify-end px-2">
          <StatsPercentageChange :value="numberWithCommas(coin.variation_1h ?? 0)" class="py-[22px]" />
        </div>
      </div>
      <div>
        <div class="w-full flex justify-end px-2">
          <StatsPercentageChange :value="numberWithCommas(coin.variation_6h ?? 0)" class="py-[22px]" />
        </div>
      </div>
      <div>
        <div class="w-full flex justify-end px-2">
          <StatsPercentageChange :value="numberWithCommas(coin.variation_24h ?? 0)" class="py-[22px]" />
        </div>
      </div>
      <div>
        <div class="w-full flex justify-end px-2">
            <span class="font-inter leading-[20px] font-[500] text-[14px] max-[900px]:text-[12px] text-[#1A1C1F] text-end py-[22px]">
              ${{ numberWithCommas(coin.market_cap ?? 0) }}
            </span>
        </div>
      </div>
      <div>
        <div class="w-full flex justify-end px-2">
          <div class="font-inter leading-[20px] font-[500] text-[14px] max-[900px]:text-[12px] text-[#1A1C1F] text-end py-[14px]">
            <div>${{ numberWithCommas(coin.total_volume ?? 0) }}</div>
            <div class="flex">
                <span class="text-[#AFAFAF] mr-1">
                  {{ numberWithCommas(parseFloat(((coin.total_volume ?? 0) / (coin.current_price ?? 1)).toFixed(0))) }}
                </span>
              <span class="text-[#AFAFAF] uppercase">
                  {{ coin.symbol }}
                </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="w-full flex justify-end px-2">
          <div class="flex items-center">
              <span class="font-inter leading-[20px] font-[500] text-[14px] max-[900px]:text-[12px] text-[#1A1C1F] text-end py-[22px] mr-1">
                {{ numberWithCommas(coin.circulating_supply ?? 0) }}
              </span>
            <span class="uppercase font-inter leading-[20px] font-[500] text-[14px] max-[900px]:text-[12px] text-[#1A1C1F] text-end py-[22px]">
                {{ coin.symbol }}
              </span>
          </div>
        </div>
      </div>
      <div>
        <TableCoinChart class="w-[129px] h-[48px]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CaretDown from '../assets/images/caret-down.svg'
import CaretUp from '../assets/images/caret-up.svg'
import { socket } from '../services/socketio.service.ts'
import { computed, onMounted, ref, watch } from 'vue'
import { numberWithCommas } from '../utils/numberWithCommas.ts'
import StatsPercentageChange from './StatsPercentageChange.vue'
import { CoinsService } from '@/components/Coins/services/coins.service.ts'
import TableCoinChart from '@/components/Charts/TableCoinChart.vue'

const coinsList = ref([])
const coinsService = new CoinsService()
const coinsIds = computed(() => coinsService.coinsIds())
const coins = computed(() => coinsService.coins())

onMounted(() => {
  getCoins()
  listenToCoinsChanges()
})

async function getCoins(): Promise<void> {
  await coinsService.getCoins()
}

function isLastIndex(index: number): boolean {
  return coinsList.value.length == index + 1
}

function listenToCoinsChanges(): void {
  socket.on('tokens', (message) => {
    coinsService.updateCoinsDetails(message)
    console.log(message)
  })
}

watch([coinsIds], () => {
  subscribeOnTokens(coinsIds.value)
})

async function subscribeOnTokens(coinsIds: string[]): Promise<void> {
  socket.emit('subscribe', {
    "tokens": [...coinsIds]
  })
}
</script>
