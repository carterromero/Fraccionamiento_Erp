import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsDetailsComponent } from './accounts-details.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsDetailsRoutingModule { }