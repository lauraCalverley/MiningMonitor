import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-wallet',
  templateUrl: 'add-wallet.html',
})
export class AddWalletPage {

  private wallet : FormGroup

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.wallet = this.formBuilder.group({
      name: [''],
      address: []
    })
  }

  addWallet() {
    console.log(this.wallet)
  }

}
