import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsentrysListComponent } from './transactionsentrys-list.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsentrysListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsEntrysListRoutingModule { }