import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralAddressDetailsComponent } from './referral-address-details.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralAddressDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralAddressDetailsRoutingModule { }