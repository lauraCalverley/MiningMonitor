import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Events, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BtcProvider } from '../../providers/btc/btc';
import { Wallet } from '../../models/wallet';

@IonicPage()
@Component({
  selector: 'page-add-wallet',
  templateUrl: 'add-wallet.html',
})
export class AddWalletPage {

  private wallet : FormGroup
  amount: number

  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private btcProvider : BtcProvider,
    public viewCtrl: ViewController,
    public events: Events,
    private toastCtrl: ToastController)
  {
    this.wallet = this.formBuilder.group({
      name: [''],
      address: []
    })
  }

  addWallet() {
    this.btcProvider.getWalletInfo(this.wallet.value.address).subscribe((wallet) => {
      let response : Wallet = {
        name: this.wallet.value.name,
        amount: wallet.final_balance / 100000000,
        address: this.wallet.value.address,
        type: 'BTC'
      }

      this.showToast('Wallet Added!')
      this.events.publish('wallet:added', response)
    }, (err) => {
      console.log(JSON.stringify(err))
    })
  }

  closeModal() {
    this.viewCtrl.dismiss()
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      cssClass: 'ta-c'
    })
    toast.present()
  }

}
