import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UpdateDepositAccountComponent } from './update-deposit-account.component';



const routes: Routes = [
  {
    path: '',
    component: UpdateDepositAccountComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class DepositAccountUpdateRoutingModule { }