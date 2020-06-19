import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BilltopayListRoutingModule } from './billtopay-list-routing.module';
import { BilltopayListComponent } from './billtopay-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [BilltopayListComponent],
  imports: [
    CommonModule,
    BilltopayListRoutingModule,
    SharedModule
  ]
})
export class BilltopayListModule { }