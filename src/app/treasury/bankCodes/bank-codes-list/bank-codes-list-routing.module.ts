import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankCodesListComponent } from './bank-codes-list.component';



const routes: Routes = [
  {
    path: '',
    component: BankCodesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class BankCodesListRoutingModule { }