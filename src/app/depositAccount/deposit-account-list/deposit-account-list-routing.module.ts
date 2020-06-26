import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositAccountListComponent } from './deposit-account-list.component';



const routes: Routes = [
  {
    path: '',
    component: DepositAccountListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class DepositAccountListRoutingModule { }