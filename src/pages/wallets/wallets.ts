import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddWalletPage } from '../add-wallet/add-wallet';

@IonicPage()
@Component({
  selector: 'page-wallets',
  templateUrl: 'wallets.html',
})
export class WalletsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToAddWallet() {
    this.navCtrl.push(AddWalletPage)
  }

}
