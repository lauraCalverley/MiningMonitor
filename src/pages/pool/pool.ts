import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SoatBtczProvider } from '../../providers/soat-btcz/soat-btcz';

@IonicPage()
@Component({
  selector: 'page-pool',
  templateUrl: 'pool.html',
})
export class PoolPage {

  constructor(private soatBtczProvider: SoatBtczProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoolPage');
    this.soatBtczProvider.getPoolInfo().subscribe((pool) => {
      console.log(pool)
    })
  }

}
