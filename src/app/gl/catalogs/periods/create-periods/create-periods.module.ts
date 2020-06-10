import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePeriodsRoutingModule } from './create-periods-routing.module';
import { CreatePeriodsComponent } from './create-periods.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreatePeriodsComponent],
  imports: [
    CommonModule,
    CreatePeriodsRoutingModule,
    SharedModule
  ]
})
export class CreatePeriodsModule { }