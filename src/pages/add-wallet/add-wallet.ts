import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Events, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { BtcProvider } from '../../providers/btc/btc';
import { Wallet } from '../../models/wallet';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-add-wallet',
  templateUrl: 'add-wallet.html',
})
export class AddWalletPage {

  scannerOptions: BarcodeScannerOptions

  private wallet : FormGroup
  address: string

  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private btcProvider : BtcProvider,
    public viewCtrl: ViewController,
    public events: Events,
    private toastCtrl: ToastController,
    private storage: Storage,
    private barcode: BarcodeScanner)
  {
    this.wallet = this.formBuilder.group({
      name: [''],
      address: []
    })
  }

  async scanQr() {
    const results = await this.barcode.scan()
    this.address = results.text
  }

  addWallet() {
    this.btcProvider.getWalletInfo(this.wallet.value.address).subscribe((wallet) => {
      let response : Wallet = {
        name: this.wallet.value.name,
        amount: wallet.final_balance / 100000000,
        address: this.wallet.value.address,
        type: 'BTC'
      }

      this.walletExists(response.address).then(exists => {
        if(!exists) {
          this.showToast('Wallet Added!')
          this.events.publish('wallet:added', response)
        } else {
          this.showToast('You are already tracking this wallet')
        }
      })
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

  walletExists(address: string) : Promise<boolean> {
    let exists : boolean = false;
    return this.storage.get('wallets').then((wallets) => {
      for(let wallet of wallets) {
        if(wallet.address === address) {
          exists = true
        }
      }
      return exists
    })
  }

}
