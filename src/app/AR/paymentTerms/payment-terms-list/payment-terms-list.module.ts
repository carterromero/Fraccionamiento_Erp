import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentTermsLisRoutingtModule } from './payment-terms-list-routing.module';
import { PaymentTermsListComponent } from './payment-terms-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [PaymentTermsListComponent],
  imports: [
    CommonModule,
    PaymentTermsLisRoutingtModule,
    SharedModule
  ]
})
export class PaymentTermsListModule { }