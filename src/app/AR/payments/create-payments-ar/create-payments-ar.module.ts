import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePaymentsARRoutingModule } from './create-payments-ar-routing.module';
import { CreatePaymentsARComponent } from './create-payments-ar.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreatePaymentsARComponent],
  imports: [
    CommonModule,
    CreatePaymentsARRoutingModule,
    SharedModule
  ]
})
export class createPaymentsARModule { }