import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodsDetailsRoutingModule } from './periods-details-routing.module';
import { PeriodsDetailsComponent } from './periods-details.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [PeriodsDetailsComponent],
  imports: [
    CommonModule,
    PeriodsDetailsRoutingModule,
    SharedModule
  ]
})
export class PeriodsDetailsModule { }