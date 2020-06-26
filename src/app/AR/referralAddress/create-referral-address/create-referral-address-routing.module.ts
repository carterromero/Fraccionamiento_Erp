import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateReferralAddressComponent } from './create-referral-address.component';

const routes: Routes = [
  {
    path: '',
    component: CreateReferralAddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateReferralAddressRoutingModule { }