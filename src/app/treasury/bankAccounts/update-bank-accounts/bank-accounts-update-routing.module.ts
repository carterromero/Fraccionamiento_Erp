import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UpdateBankAccountsComponent } from './update-bank-accounts.component';



const routes: Routes = [
  {
    path: '',
    component: UpdateBankAccountsComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class BankAccountsUpdateRoutingModule { }