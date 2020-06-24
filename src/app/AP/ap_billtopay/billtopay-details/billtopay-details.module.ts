import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BilltopayDetailsRoutingModule } from './billtopay-details-routing.module';
import { BilltopayDetailsComponent } from './billtopay-details.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [BilltopayDetailsComponent],
  imports: [
    CommonModule,
    BilltopayDetailsRoutingModule,
    SharedModule
  ]
})
export class BilltopayDetailsModule { }