import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html',
})
export class ReposPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello Repos Page');
  }

}
