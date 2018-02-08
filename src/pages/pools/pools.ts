import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { PoolPage } from '../pool/pool';

@IonicPage()
@Component({
  selector: 'page-pools',
  templateUrl: 'pools.html',
})
export class PoolsPage {

  pools: Array<{name: string, coin: string}>

  constructor(private navCtrl: NavController) {
    this.pools = []
    this.pools.push({
      name: 'Son of a Tech',
      coin: 'BTCZ'
    })
  }

  poolSelected(event, pool) {
    this.navCtrl.push(PoolPage)
  }

}
