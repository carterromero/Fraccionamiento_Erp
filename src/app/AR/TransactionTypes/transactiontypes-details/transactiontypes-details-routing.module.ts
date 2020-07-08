import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionTypesDetailsComponent } from './transactiontypes-details.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionTypesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionTypesDetailsRoutingModule { }