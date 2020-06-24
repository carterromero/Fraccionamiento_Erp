import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitOfMeasuresListComponent } from './unit-of-measures-list.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UnitOfMeasuresListRoutingModule } from './unit-of-measures-routing.module';

@NgModule({
  declarations: [UnitOfMeasuresListComponent],
  imports: [
    CommonModule,
    UnitOfMeasuresListRoutingModule,
    SharedModule
  ]
})
export class UnitOfMeasuresListModule { }