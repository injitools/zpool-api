import {RequestOptions} from 'https';
import request from "./libs/request";
import {
  ZpoolApiBlocksResponse,
  ZpoolApiCurrenciesResponse, ZpoolApiMinersResponse,
  ZpoolApiStatusResponse,
  ZpoolApiWalletExResponse,
  ZpoolApiWalletResponse
} from "./types";

export default class ZpoolApi {
  constructor(public requestOptions: RequestOptions = {
    protocol: 'https:',
    host: 'www.zpool.ca',
    port: 443
  }) {

  }

  async getWallet(address: string): Promise<ZpoolApiWalletResponse> {
    const options = {...this.requestOptions}
    options.path = `/api/wallet?address=${address}`
    const response = await request(options)
    return JSON.parse(response)
  }

  async getWalletEx(address: string): Promise<ZpoolApiWalletExResponse> {
    const options = {...this.requestOptions}
    options.path = `/api/walletEx?address=${address}`
    const response = await request(options)
    return JSON.parse(response)
  }

  async getStatus(): Promise<ZpoolApiStatusResponse> {
    const options = {...this.requestOptions}
    options.path = '/api/status'
    const response = await request(options)
    return JSON.parse(response)
  }

  async getCurrencies(): Promise<ZpoolApiCurrenciesResponse> {
    const options = {...this.requestOptions}
    options.path = '/api/currencies'
    const response = await request(options)
    return JSON.parse(response)
  }

  async getBlocks(): Promise<ZpoolApiBlocksResponse> {
    const options = {...this.requestOptions}
    options.path = '/api/blocks'
    const response = await request(options)
    return JSON.parse(response)
  }

  async getMiners(): Promise<ZpoolApiMinersResponse> {
    const options = {...this.requestOptions}
    options.path = '/api/miners'
    const response = await request(options)
    return JSON.parse(response)
  }
}
