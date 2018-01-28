import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BtcProvider } from '../../providers/btc/btc';

@IonicPage()
@Component({
  selector: 'page-add-wallet',
  templateUrl: 'add-wallet.html',
})
export class AddWalletPage {

  private wallet : FormGroup
  response: number

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private btcProvider : BtcProvider) {
    this.wallet = this.formBuilder.group({
      name: [''],
      address: []
    })
  }

  addWallet() {
    this.btcProvider.getWalletInfo(this.wallet.value.address).subscribe(wallet => {
      console.log(wallet)
      this.response = wallet.final_balance / 100000000
    })
  }

}
