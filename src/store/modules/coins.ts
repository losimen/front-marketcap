import { defineStore } from 'pinia'
import type { ICoin } from '@/models/ICoin.interface.ts'

export const useCoinsStore = defineStore('coins', {
  state: () => ({
    coins: [] as ICoin[]
  }),
  actions: {
    setCoins(coins: ICoin[]): void {
      this.coins = coins
    },
    updateCoinsDetails(freshCoinsDetails: ICoin[]): void {
      this.coins = this.coins.map(coin => {
        const upd = freshCoinsDetails.find(c => coin.id == c.id)

        if(!upd) {
          return coin
        }

        return {
          ...coin,
          ...upd
        }
      })
    }
  },
  getters: {
    getCoins(state) {
      return state.coins.filter((coin, index) => index < 20)
    },
    getCoinsIds(state): string[] {
      return state.coins.filter((coin, index) => index < 20).map(coin => coin.id)
    }
  }
})
