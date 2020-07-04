import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentTermsRoutingModule } from './payment-terms-details-routing.module';
import { PaymentTermsDetailsComponent } from './payment-terms-details.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [PaymentTermsDetailsComponent],
  imports: [
    CommonModule,
    PaymentTermsRoutingModule,
    SharedModule
  ]
})
export class PaymentTermsDetailsModule { }