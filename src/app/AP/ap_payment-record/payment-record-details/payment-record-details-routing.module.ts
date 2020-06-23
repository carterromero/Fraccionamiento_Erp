import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentRecordDetailsComponent } from './payment-record-details.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentRecordDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRecordDetailsRoutingModule { }