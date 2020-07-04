import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAccountsComponent} from './create-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAccountsRoutingModule { }