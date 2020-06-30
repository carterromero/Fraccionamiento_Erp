import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateUnitOfMeasuresRoutingModule } from './update-unit-of-measures-routing.module';
import { UpdateUnitOfMeasuresComponent } from './update-unit-of-measures.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [UpdateUnitOfMeasuresComponent],
  imports: [
    CommonModule,
    UpdateUnitOfMeasuresRoutingModule,
    SharedModule
  ]
})

export class UpdateUnitOfMeasuresModule { }