import axios from 'axios'
import { useCoinsStore } from '@/store/modules/coins.ts'

export class CoinsService {
  private coinsStore

  constructor() {
    this.coinsStore = useCoinsStore()
  }

  coins() {
    return this.coinsStore.getCoins
  }

  coinsIds(): string[] {
    return this.coinsStore.getCoinsIds
  }

  async getCoins(): Promise<void> {
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + 'coins/coins')
    this.coinsStore.setCoins(response.data)
  }

  updateCoinsDetails(freshCoinsDetails): void {
    this.coinsStore.updateCoinsDetails(freshCoinsDetails)
  }
}
