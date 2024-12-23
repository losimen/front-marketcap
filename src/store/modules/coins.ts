import { defineStore } from 'pinia'

export const useCoinsStore = defineStore('coins', {
  state: () => ({
    coins: []
  }),
  actions: {
    setCoins(coins): void {
      this.coins = coins
    },
    updateCoinsDetails(freshCoinsDetails): void {
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
