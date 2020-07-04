import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePaymentTermsRoutingModule } from './update-payment-terms-routing.module';
import { UpdatePaymentTermsComponent } from './update-payment-terms.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdatePaymentTermsComponent],
  imports: [
    CommonModule,
    UpdatePaymentTermsRoutingModule,
    SharedModule
  ]
})

export class UpdatePaymentTermsModule { }