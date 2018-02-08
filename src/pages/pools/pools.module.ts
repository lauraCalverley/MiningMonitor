import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoolsPage } from './pools';

@NgModule({
  declarations: [
    PoolsPage,
  ],
  imports: [
    IonicPageModule.forChild(PoolsPage),
  ],
})
export class PoolsPageModule {}
