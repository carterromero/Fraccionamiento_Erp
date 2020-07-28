import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacpayDetailsComponent } from './facpay-details.component';

const routes: Routes = [
  {
    path: '',
    component: FacpayDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacpayDetailsRoutingModule{ }