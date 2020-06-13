import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBankCodesComponent } from './create-bank-codes.component';



const routes: Routes = [
  {
    path: '',
    component: 
    CreateBankCodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class BankCodesCreateRoutingModule { }