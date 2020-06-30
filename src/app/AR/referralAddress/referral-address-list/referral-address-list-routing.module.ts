import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralAddressListComponent} from './referral-address-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralAddressListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralAddressListRoutungModule { }