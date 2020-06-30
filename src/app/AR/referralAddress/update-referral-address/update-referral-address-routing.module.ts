import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateReferralAddressComponent } from './update-referral-address.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateReferralAddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateReferralAddressRoutingModule { }