import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Events } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BtcProvider } from '../../providers/btc/btc';

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
    public events: Events)
  {
    this.wallet = this.formBuilder.group({
      name: [''],
      address: []
    })
  }

  addWallet() {
    this.btcProvider.getWalletInfo(this.wallet.value.address).subscribe(wallet => {
      console.log(wallet)
      wallet.name = this.wallet.value.name
      this.amount = wallet.final_balance / 100000000

      let response = {
        name: this.wallet.value.name,
        amount: this.amount,
        address: this.wallet.value.address
      }

      this.events.publish('wallet:added', response)
    })
  }

  closeModal() {
    this.viewCtrl.dismiss()
  }

}
