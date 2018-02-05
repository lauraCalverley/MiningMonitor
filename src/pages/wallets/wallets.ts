import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Events } from 'ionic-angular';

import { Wallet } from '../../models/wallet'
import { AddWalletPage } from '../add-wallet/add-wallet';

@IonicPage()
@Component({
  selector: 'page-wallets',
  templateUrl: 'wallets.html',
})
export class WalletsPage {

  wallets: Wallet[]

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public events: Events) {
    this.wallets = []
  }

  ionViewDidLoad() {
    this.events.subscribe('wallet:added', (wallet) => {
      let newWallet = {
        type: wallet.type,
        address: wallet.address,
        name: wallet.name,
        amount: wallet.amount
      }
      this.wallets.push(newWallet)
    })
  }

  goToAddWallet() {
    let modal = this.modalCtrl.create(AddWalletPage)
    modal.present()
  }

}
