import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRecordDetailsRoutingModule } from './payment-record-details-routing.module';
import { PaymentRecordDetailsComponent } from './payment-record-details.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [PaymentRecordDetailsComponent],
  imports: [
    CommonModule,
    PaymentRecordDetailsRoutingModule,
    SharedModule
  ]
})
export class PaymentRecordDetailsModule { }