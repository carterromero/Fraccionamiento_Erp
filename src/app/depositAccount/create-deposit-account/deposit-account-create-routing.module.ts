import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDepositAccountComponent } from './create-deposit-account.component';



const routes: Routes = [
  {
    path: '',
    component: 
    CreateDepositAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class DepositAccountCreateRoutingModule { }