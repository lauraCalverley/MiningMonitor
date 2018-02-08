import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pools',
  templateUrl: 'pools.html',
})
export class PoolsPage {

  pools: Array<{name: string, coin: string}>

  constructor() {
    this.pools = []
    this.pools.push({
      name: 'Son of a Tech',
      coin: 'BTCZ'
    })
  }

  poolSelected(event, pool) {
    console.log(pool)
  }

}
