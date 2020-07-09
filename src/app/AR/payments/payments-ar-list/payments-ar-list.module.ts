import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsARListRoutingModule } from './payments-ar-list-routing.module';
import { PaymentsARListComponent } from './payments-ar-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [PaymentsARListComponent],
  imports: [
    CommonModule,
    PaymentsARListRoutingModule,
    SharedModule
  ]
})
export class PaymentsARListModule { }