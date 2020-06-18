import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { PaymentDetailsComponent } from './payment-details.component';
import { PaymentDetailsRoutingModule } from './payment-details-routing.module';


@NgModule({
  declarations: [PaymentDetailsComponent],
  imports: [
    CommonModule,
    PaymentDetailsRoutingModule,
    SharedModule
  ]
})
export class PaymentDetailsModule { 



}