import axios from 'axios'
import { useCoinsStore } from '@/store/modules/coins.ts'
import type { ICoin } from '@/models/ICoin.interface.ts'

export class CoinsService {
  private coinsStore

  constructor() {
    this.coinsStore = useCoinsStore()
  }

  coins(): ICoin[] {
    return this.coinsStore.getCoins
  }

  coinsIds(): string[] {
    return this.coinsStore.getCoinsIds
  }

  async getCoins(): Promise<void> {
    const backendUrl = 'http://129.151.204.232:3000/'
    const response = await axios.get(backendUrl + 'coins/coins')
    this.coinsStore.setCoins(response.data)
  }

  updateCoinsDetails(freshCoinsDetails: ICoin[]): void {
    this.coinsStore.updateCoinsDetails(freshCoinsDetails)
  }
}
