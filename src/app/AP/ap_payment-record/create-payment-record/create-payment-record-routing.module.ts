import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePaymentRecordComponent } from './create-payment-record.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePaymentRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePaymentRecordRoutingModule { }