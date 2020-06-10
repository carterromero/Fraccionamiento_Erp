import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalsDetailsRoutingModule } from './legals_details-routing.module';
import { LegalsDetailsComponent } from './legals-details.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [LegalsDetailsComponent],
  imports: [
    CommonModule,
    LegalsDetailsRoutingModule,
    SharedModule
  ]
})
export class LegalsDetailsModule { }