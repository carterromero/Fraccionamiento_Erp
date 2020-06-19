import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePaymentRecordRoutingModule } from './create-payment-record-routing.module';
import { CreatePaymentRecordComponent } from './create-payment-record.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreatePaymentRecordComponent],
  imports: [
    CommonModule,
    CreatePaymentRecordRoutingModule,
    SharedModule
  ]
})
export class CreatePaymentRecordModule { }