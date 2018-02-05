import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Events } from 'ionic-angular';

import { Wallet } from '../../models/wallet'
import { AddWalletPage } from '../add-wallet/add-wallet';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-wallets',
  templateUrl: 'wallets.html',
})
export class WalletsPage {

  wallets: Wallet[]

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public events: Events, private storage: Storage) {
    this.wallets = []
  }

  ionViewDidLoad() {
    this.storage.get('wallets').then((wallets) => {
      this.wallets = wallets
    })

    this.events.subscribe('wallet:added', (wallet) => {
      let newWallet = {
        type: wallet.type,
        address: wallet.address,
        name: wallet.name,
        amount: wallet.amount
      }
      this.wallets.push(newWallet)
      this.storage.set('wallets', this.wallets)
    })
  }

  goToAddWallet() {
    let modal = this.modalCtrl.create(AddWalletPage)
    modal.present()
  }

}
