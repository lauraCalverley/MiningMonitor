import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
