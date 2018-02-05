import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { BtcWallet } from '../../models/btc-wallet';

@Injectable()
export class BtcProvider {

  btcBaseApi = 'https://blockchain.info'

  constructor(public http: HttpClient) {}

  getWalletInfo(addr: string): Observable<BtcWallet> {
    let url = `${this.btcBaseApi}/rawaddr/${addr}`
    return this.http.get(url)
      .map(res => res as BtcWallet)
  }

}
