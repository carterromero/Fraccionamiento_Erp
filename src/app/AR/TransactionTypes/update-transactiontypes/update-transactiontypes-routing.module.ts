import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateTransactionTypesComponent } from './update-transactiontypes.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateTransactionTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateTransactionTypesRoutingModule { }