import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentDocumentsDetailsComponent } from './payment-documents-details.component';



const routes: Routes = [
  {
    path: '',
    component: PaymentDocumentsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PaymentDocumentsDetailsRoutingModule { }