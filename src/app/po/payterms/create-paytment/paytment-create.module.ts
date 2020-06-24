import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/theme/shared/shared.module';
import { PaymentCreatetRoutingModule } from './paytment-create-routing.module';
import { CreatePaytmentComponent } from './create-paytment.component';

@NgModule({
  declarations: [CreatePaytmentComponent],
  imports: [
    CommonModule,
    PaymentCreatetRoutingModule,
    SharedModule
  ]
})
export class PaytmentCreateModule { 



}