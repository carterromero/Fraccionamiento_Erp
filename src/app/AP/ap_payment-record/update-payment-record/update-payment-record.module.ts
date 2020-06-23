import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePaymentRecordRoutingModule } from './update-payment-record-routing.module';
import { UpdatePaymentRecordComponent } from './update-payment-record.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdatePaymentRecordComponent],
  imports: [
    CommonModule,
    UpdatePaymentRecordRoutingModule,
    SharedModule
  ]
})
export class UpdatePaymentRecordModule { }