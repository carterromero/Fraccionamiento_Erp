import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePaymentDocumentsComponent } from './create-payment-documents.component';



const routes: Routes = [
  {
    path: '',
    component: 
    CreatePaymentDocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PaymentDocumentsCreateRoutingModule { }