import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionTypesListComponent} from './transactiontypes-list.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionTypesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionTypesListRoutingModule { }