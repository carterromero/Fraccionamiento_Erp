import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { PaymentDocumentsDetailsRoutingModule } from '../payment-documents-details/payment-documents-details-routing.module';
import { PaymentDocumentsDetailsComponent } from '../payment-documents-details/payment-documents-details.component';

@NgModule({
  declarations: [PaymentDocumentsDetailsComponent],
  imports: [
    CommonModule,
    PaymentDocumentsDetailsRoutingModule,
    SharedModule
  ]
})
export class PaymentDocumentsDetailsModule { 



}