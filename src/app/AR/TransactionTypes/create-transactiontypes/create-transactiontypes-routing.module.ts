import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTransactionTypesComponent } from './create-transactiontypes.component';

const routes: Routes = [
  {
    path: '',
    component: CreateTransactionTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTransactionTypesRoutingModule { }