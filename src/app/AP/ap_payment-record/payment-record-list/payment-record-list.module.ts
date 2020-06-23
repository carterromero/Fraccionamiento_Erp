import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRecordListRoutingModule } from './payment-record-list-routing.module';
import { PaymentRecordListComponent } from './payment-record-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [PaymentRecordListComponent],
  imports: [
    CommonModule,
    PaymentRecordListRoutingModule,
    SharedModule
  ]
})
export class PaymentRecordListModule { }