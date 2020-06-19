import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankAccountsDetailsComponent } from './bank-accounts-details.component';



const routes: Routes = [
  {
    path: '',
    component: BankAccountsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class BankAccountsDetailsRoutingModule { }