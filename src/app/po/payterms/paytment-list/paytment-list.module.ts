import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../../theme/shared/shared.module';
import { PaymentListRoutingModule } from './paytment-list-routing.module';
import { PaytmentListComponent } from './paytment-list.component';

@NgModule({
  declarations: [PaytmentListComponent],
  imports: [
    CommonModule,
    PaymentListRoutingModule,
    SharedModule
  ]
})
export class PaymentListModule { 



}