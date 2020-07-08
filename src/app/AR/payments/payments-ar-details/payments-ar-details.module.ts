import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsARDetailsRoutingModule } from './payments-ar-details-routing.module';
import { PaymentsARDetailsComponent } from './payments-ar-details.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [PaymentsARDetailsComponent],
  imports: [
    CommonModule,
    PaymentsARDetailsRoutingModule,
    SharedModule
  ]
})
export class PaymentsARDetailsModule { }