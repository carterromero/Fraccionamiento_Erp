import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PaymentDocumentsCreateRoutingModule } from './payment-documents-create-routing.module';
import { CreatePaymentDocumentsComponent } from './create-payment-documents.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreatePaymentDocumentsComponent],
  imports: [
    CommonModule,
    PaymentDocumentsCreateRoutingModule,
    SharedModule
  ]
})
export class PaymentDocumentsCreateModule { 



}