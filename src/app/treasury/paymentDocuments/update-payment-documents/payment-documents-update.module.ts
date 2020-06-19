import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';


import { UpdatePaymentDocumentsComponent } from './update-payment-documents.component';
import { PaymentDocumentsUpdateRoutingModule } from './payment-documents-update-routing.module';

@NgModule({
  declarations: [UpdatePaymentDocumentsComponent],
  imports: [
    CommonModule,
    PaymentDocumentsUpdateRoutingModule,
  

    SharedModule
  ]
})
export class PaymentDocumentsUpdateModule { 



}