import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UpdatePaymentComponent } from './update-payment.component';
import { PaymentUpdateRoutingModule } from './payment-update-routing.module';



@NgModule({
  declarations: [UpdatePaymentComponent],
  imports: [
    CommonModule,
    PaymentUpdateRoutingModule,
  

    SharedModule
  ]
})
export class PaymentUpdateModule { 



}