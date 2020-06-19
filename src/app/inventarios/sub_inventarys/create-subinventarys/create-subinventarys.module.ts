import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSubinventarysRoutingModule } from './create-subinventarys-routing.module';
import { CreateSubinventarysComponent } from './create-subinventarys.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateSubinventarysComponent],
  imports: [
    CommonModule,
    CreateSubinventarysRoutingModule,
    SharedModule
  ]
})
export class CreateSubinventarysModule { }