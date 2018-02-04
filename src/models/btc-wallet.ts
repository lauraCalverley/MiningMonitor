// BTC Wallet Model based on
// https://blockchain.info/rawaddr/{address} api
export interface BtcWallet {
  address: string,
  final_balance: number,
  name: string
}
