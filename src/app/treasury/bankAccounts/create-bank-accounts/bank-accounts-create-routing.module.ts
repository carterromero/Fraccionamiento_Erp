import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBankAccountsComponent } from './create-bank-accounts.component';



const routes: Routes = [
  {
    path: '',
    component: 
    CreateBankAccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class BankAccountsCreateRoutingModule { }