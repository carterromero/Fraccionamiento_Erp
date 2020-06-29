import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositAccountDetailsComponent } from './deposit-account-details.component';



const routes: Routes = [
  {
    path: '',
    component: DepositAccountDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class DepositAccountDetailsRoutingModule { }