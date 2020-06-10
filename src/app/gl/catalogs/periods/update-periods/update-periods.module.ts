import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePeriodsRoutingModule } from './update-periods-routing.module';
import { UpdatePeriodsComponent } from './update-periods.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdatePeriodsComponent],
  imports: [
    CommonModule,
    UpdatePeriodsRoutingModule,
    SharedModule
  ]
})
export class UpdatePeriodsModule { }