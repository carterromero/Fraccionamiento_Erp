import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateAccountsComponent} from './update-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateAccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAccountsRoutingModule { }