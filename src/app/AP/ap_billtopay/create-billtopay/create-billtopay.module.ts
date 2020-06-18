import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBilltopayRoutingModule } from './create-billtopay-routing.module';
import { CreateBilltopayComponent } from './create-billtopay.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateBilltopayComponent],
  imports: [
    CommonModule,
    CreateBilltopayRoutingModule,
    SharedModule
  ]
})
export class CreateBilltopayModule { }