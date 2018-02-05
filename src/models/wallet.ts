// Generic Wallet Model
// To be used by any wallet type
export interface Wallet {
  type: string,
  name: string,
  address: string,
  amount: number
}
