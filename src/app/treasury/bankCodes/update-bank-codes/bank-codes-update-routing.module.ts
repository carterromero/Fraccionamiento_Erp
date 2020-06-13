import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UpdateBankCodesComponent } from './update-bank-codes.component';



const routes: Routes = [
  {
    path: '',
    component: UpdateBankCodesComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class BankCodesUpdateRoutingModule { }