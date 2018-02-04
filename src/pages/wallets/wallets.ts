import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { AddWalletPage } from '../add-wallet/add-wallet';

@IonicPage()
@Component({
  selector: 'page-wallets',
  templateUrl: 'wallets.html',
})
export class WalletsPage {

  amount: number

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  goToAddWallet() {

    let modal = this.modalCtrl.create(AddWalletPage)

    modal.onDidDismiss((response) => {
      this.amount = response
    })

    modal.present()

  }

}
