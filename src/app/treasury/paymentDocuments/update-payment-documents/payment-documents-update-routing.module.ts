import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UpdatePaymentDocumentsComponent } from './update-payment-documents.component';



const routes: Routes = [
  {
    path: '',
    component: UpdatePaymentDocumentsComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PaymentDocumentsUpdateRoutingModule { }