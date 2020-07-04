import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUnitOfMeasuresRoutingModule } from './create-unit-of-measures-routing.module';
import { CreateUnitOfMeasuresComponent } from './create-unit-of-measures.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateUnitOfMeasuresComponent],
  imports: [
    CommonModule,
    CreateUnitOfMeasuresRoutingModule,
    SharedModule
  ]
})
export class CreateUnitOfMeasuresModule { }