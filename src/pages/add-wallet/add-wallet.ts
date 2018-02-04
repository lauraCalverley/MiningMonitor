import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private btcProvider : BtcProvider,
    public viewCtrl: ViewController)
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
      this.response = wallet.final_balance / 100000000
    })
  }

  closeModal() {
    this.viewCtrl.dismiss(this.response)
  }

}
