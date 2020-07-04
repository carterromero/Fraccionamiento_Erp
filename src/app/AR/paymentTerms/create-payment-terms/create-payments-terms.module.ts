import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePaymentTermsRoutingModule } from './create-payment-terms-routing.module';
import { CreatePaymentTermsComponent } from './create-payment-terms.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreatePaymentTermsComponent],
  imports: [
    CommonModule,
    CreatePaymentTermsRoutingModule,
    SharedModule
  ]
})
export class CreatePaymentTermsModule { }