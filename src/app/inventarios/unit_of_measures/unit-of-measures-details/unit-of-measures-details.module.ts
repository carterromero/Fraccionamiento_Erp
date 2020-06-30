import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitOfMeasuresDetailsComponent } from './unit-of-measures-details.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UnitOfMeasuresListRoutingModule } from '../unit-of-measures-list/unit-of-measures-routing.module';

@NgModule({
  declarations: [UnitOfMeasuresDetailsComponent ],
  imports: [
    CommonModule,
    UnitOfMeasuresListRoutingModule,
    SharedModule
  ]
})
export class UnitOfMeasuaresDetailsModule { }