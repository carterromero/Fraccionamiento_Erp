import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePaymentsARRoutingModule } from './update-payments-ar-routing.module';
import { UpdatePaymentsARComponent } from './update-payments-ar.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdatePaymentsARComponent],
  imports: [
    CommonModule,
    UpdatePaymentsARRoutingModule,
    SharedModule
  ]
})

export class UpdatePaymentsARModule { }