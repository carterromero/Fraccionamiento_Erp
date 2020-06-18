import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateBilltopayRoutingModule } from './update-billtopay-routing.module';
import { UpdateBilltopayComponent } from './update-billtopay.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateBilltopayComponent],
  imports: [
    CommonModule,
    UpdateBilltopayRoutingModule,
    SharedModule
  ]
})
export class UpdateBilltopayModule { }