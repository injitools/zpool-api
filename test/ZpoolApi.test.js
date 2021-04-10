const {ZpoolApi} = require("../dist");

const walletFormat = {
  currency: 'string',
  unsold: 'number',
  balance: 'number',
  unpaid: 'number',
  paid24h: 'number',
  total: 'number',
  error: 'string',
}

const walletMinerFormat = {
  version: 'string',
  password: 'string',
  ID: 'string',
  algo: 'string',
  difficulty: 'number',
  subscribe: 'number',
  accepted: 'number',
  rejected: 'number',
}

const payoutFormat = {
  time: 'string',
  amount: 'number',
  tx: 'string',
}
const algorithmFormat = {
  name: 'string',
  port: 'number',
  coins: 'number',
  fees: 'number',
  hashrate: 'number',
  workers: 'number',
  estimate_current: 'string',
  estimate_last24h: 'string',
  actual_last24h: ['string','number'],
  mbtc_mh_factor: 'number',
  hashrate_last24h: 'number',
  hashtap_enabled: 'string',
  rental_current: 'string',
}

const currencyFormat = {
  algo: 'string',
  port: 'number',
  name: 'string',
  height: 'number',
  workers: 'number',
  shares: 'number',
  hashrate: ['number', 'boolean'],
  oldhr: ['number', 'string'],
  estimate: 'string',
  "24h_blocks": 'number',
  "24h_btc": 'number',
  lastblock: 'number',
  timesincelast: 'number',
  bitcointalk: 'string',
  site: 'string',
  twitter: 'string',
  discord: 'string',
  source: 'string',
  explorer: 'string',
  image: 'string',
  error: 'string',
}

const blockFormat = {
  coin: 'string',
  time: 'string',
  height: 'string',
  amount: ['object'/*null*/, 'string'],
  category: 'string',
  difficulty: 'string',
}

const minerFormat = {
  algo: 'string',
  version: 'string',
  count: 'string',
}

describe('class ZpoolApi', () => {
  const apiCLient = new ZpoolApi()
  test('getWallet', async () => {
    const result = await apiCLient.getWallet('338nMdAzN65n8aapcrW8Tiz3BFFJ1PPEdJ')
    for (const key in walletFormat) {
      expect(typeof result[key]).toEqual(walletFormat[key])
    }
  })

  test('getWalletEx', async () => {
    const result = await apiCLient.getWalletEx('338nMdAzN65n8aapcrW8Tiz3BFFJ1PPEdJ')

    for (const key in walletFormat) {
      expect(typeof result[key]).toEqual(walletFormat[key])
    }
    for (const key in walletMinerFormat) {
      for (const miner of result.miners) {
        expect(typeof miner[key]).toEqual(walletMinerFormat[key])
      }
    }
    for (const key in payoutFormat) {
      for (const payout of result.payouts) {
        expect(typeof payout[key]).toEqual(payoutFormat[key])
      }
    }
  })

  test('getStatus', async () => {
    const result = await apiCLient.getStatus()
    for (const algo in result) {
      for (const key in algorithmFormat) {
        const types = Array.isArray(algorithmFormat[key]) ? algorithmFormat[key] : [algorithmFormat[key]]
        expect(types).toContain(typeof result[algo][key])
      }
    }
  })

  test('getCurrencies', async () => {
    const result = await apiCLient.getCurrencies()
    for (const currency in result) {
      for (const key in currencyFormat) {
        const types = Array.isArray(currencyFormat[key]) ? currencyFormat[key] : [currencyFormat[key]]
        expect(types).toContain(typeof result[currency][key])
      }
    }
  })

  test('getBlocks', async () => {
    const result = await apiCLient.getBlocks()
    for (const block of result) {
      for (const key in blockFormat) {
        const types = Array.isArray(blockFormat[key]) ? blockFormat[key] : [blockFormat[key]]
        expect(types).toContain(typeof block[key])
      }
    }
  })

  test('getMiners', async () => {
    const result = await apiCLient.getMiners()
    for (const miner of result) {
      for (const key in minerFormat) {
        const types = Array.isArray(minerFormat[key]) ? minerFormat[key] : [minerFormat[key]]
        expect(types).toContain(typeof miner[key])
      }
    }
  })
})
