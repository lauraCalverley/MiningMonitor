import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-organisations',
  templateUrl: 'organisations.html',
})
export class OrganisationsPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello Organisations Page');
  }

}
