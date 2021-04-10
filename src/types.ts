export interface ZpoolApiWalletResponse {
  currency: string // example: "BTC"
  unsold: number // example: 0.00050362     --currently in exchange or immature statuses
  balance: number // example: 0.00000000    --matured ready for payment balance
  unpaid: number // example: 0.00050362     --total unpaid unsold+balance
  paid24h: number // example: 0.00000000    --total amount payed
  total: number // example: 0.00050362      --total unpaid + total payed
  error: string // example: ""
}

//miners information
export interface ZpoolApiWalletExMiner {
  version: string // example: "ccminer\/1.8.2"  --miners name
  password: string // example: "d=96"           --password configuration of your miner identified by a pool
  ID: string // example: "d=96"                 --value specified in ID= param of miner's password
  algo: string // example: "decred"             --mining algorithm
  difficulty: number // example: 96             --miner's current difficulty level
  subscribe: number // example: 1               --subscribe extranonce flag
  accepted: number // example: 82463372.083     --hashrate accepted by pool
  rejected: number // example: 0                --hashrate rejected by pool
}

export interface ZpoolApiWalletExPayout {
  time: string // example: "1617480306",
  amount: number // example: 0.00221229,
  tx: string // example: "fbe6338404fa3e8b33d545883ae68be0eadf56b01b50a1c40f2746d5fe68ea3b"
}

export interface ZpoolApiWalletExBlock {
  symbol: string // example: "TZC",
  height: number // example: 1793180,
  amount: number // example: 50,
  algo: string // example: "neoscrypt",
  confirmations: number // example: 207,
  time: string // example: "1617595953",
  category: string // example: "generate",
  blockhash: string // example: "e3235d2451ea7680107b7b25f53e03a854b54d31be3ccf26cf3e0162aea269e3"
}

export interface ZpoolApiWalletExResponse {
  currency: string // example: "BTC"
  unsold: number // example: 0.00050362     --currently in exchange or immature statuses
  balance: number // example: 0.00000000    --matured ready for payment balance
  unpaid: number // example: 0.00050362     --total unpaid unsold+balance
  paid24h: number // example: 0.00000000    --total amount payed
  paidtotal: number // example: 0.00000000
  minpay: number // example: 0.0025         --payout threshold, can be configured using pl=
  minpay_sunday: number // example: 0.0025  --payout threshold on Sundays
  total: number // example: 0.00050362      --total unpaid + total payed
  miners: ZpoolApiWalletExMiner[]
  payouts: ZpoolApiWalletExPayout[]
  blocks: ZpoolApiWalletExBlock[]
}

export interface ZpoolApiStatusAlgorithm {
  name: string // example: "allium"                           --algorithm name
  port: number // example: 6433                               --TCP connection port
  coins: number // example: 1                                 --amount of coins available in subject algo
  fees: number // example: 0.5                                --pool fee in %
  hashrate: number // example: 138059334                      --total hashrate in h/s on subject pool algo
  workers: number // example: 80                              --amount of workers mining in total
  estimate_current: string // example: "0.00000346"           --estimate based on last 5 minutes submmited shares per hashrate unit(see mbtc_mh_factor)
  estimate_last24h: string // example: "0.00000341"           --estimate based on last 24h submmited shares per hashrate unit(see mbtc_mh_factor)
  actual_last24h: string | number // example: "0.00358"       --actual earning based on last 24h found blocks per hashrate unit(see mbtc_mh_factor)
  mbtc_mh_factor: number // example: 1                        --multiplier, value 1 represents Mh/S, 1000 represents GH/S, 1000000 represents TH/S, 0.001 represents KH/s
  hashrate_last24h: number // example: 115385162              --average hashrate during last 24h
  hashtap_enabled: string // example: '0'                     --average hashrate during last 24h in shared mode
  rental_current: string // example: '0.00439950'             --average hashrate during last 24h in solo mode
}

export interface ZpoolApiStatusResponse {
  [algo: string]: ZpoolApiStatusAlgorithm
}

export interface ZpoolApiCurrency {
  algo: string // example: "lyra2v2"
  port: number // example: 4533
  name: string // example: "Absolute"                 --coin name
  height: number // example: 924762                   --current blockchain height
  difficulty: string // example: "1320.36013"
  workers: number // example: 14                      --amount of workers mining in total
  shares: number // example: 0
  hashrate: number | false // example: 11878047021    --current total hashrate for this coin
  oldhr: number | string // example: '179961642086'
  estimate: string // example: "0.00156584"
  "24h_blocks": number // example: 134                --amount of blocks found during last 24h in all modes
  "24h_btc": number // example: "0.000019"            --amount of BTC equivalent of 24h found blocks in all modes
  lastblock: number // example: "924753"              --last block found height
  timesincelast: number // example: 638               --time since last block found in sec
  bitcointalk: string // example: ''
  site: string // example: 'https://bitzyon.com/'
  twitter: string // example: 'https://twitter.com/BitZyon1'
  discord: string // example: ''
  source: string // example: 'https://github.com/BitZyon-Official/bitzyon-core'
  explorer: string // example: 'https://explorer.bitzyon.com/'
  image: string // example: '/images/coin-7173.png'
  error: string // example: 'We are short of this currency (-781.45044503 ZYON). Please switch to another currency until we find more ZYON blocks.'
}

export interface ZpoolApiCurrenciesResponse {
  [currency: string]: ZpoolApiCurrency
}

export interface ZpoolApiBlock {
  coin: string // example: "XDN"
  time: string // example: "1618048487"                         --unix timestamp
  height: string // example: "355848"
  amount: string | null //example: "5"
  category: ['new', 'immmature', 'confirmed'] // example: "new" --new/immmature/confirmed
  difficulty: string // example: "25406.253571"                 --difficulty at pool with applied multipliers
  difficulty_user: string // example: "26507.381661"            --difficulty by user's miner
}

export type ZpoolApiBlocksResponse = ZpoolApiBlock[]

export interface ZpoolApiMiner {
  algo: string // example: "neoscrypt"
  version: string // example: "NiceHash\/1.0.0"
  count: string // example: "4762"
}

export interface ZpoolApiMinersResponse {
  [currency: string]: ZpoolApiMiner
}

