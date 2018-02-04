import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Events } from 'ionic-angular';

import { AddWalletPage } from '../add-wallet/add-wallet';

@IonicPage()
@Component({
  selector: 'page-wallets',
  templateUrl: 'wallets.html',
})
export class WalletsPage {

  address: string
  amount: number
  name: string

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public events: Events) {
  }

  ionViewDidLoad() {
    this.events.subscribe('wallet:added', (wallet) => {
      this.address = wallet.address
      this.amount = wallet.amount
      this.name = wallet.name
    })
  }

  goToAddWallet() {
    let modal = this.modalCtrl.create(AddWalletPage)
    modal.present()
  }

}
