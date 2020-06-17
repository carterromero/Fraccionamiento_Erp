import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankCodesDetailsComponent } from './bank-codes-details.component';



const routes: Routes = [
  {
    path: '',
    component: BankCodesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class BankCodesDetailsRoutingModule { }