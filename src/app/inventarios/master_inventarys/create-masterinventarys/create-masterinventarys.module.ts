import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CreateMasterinventarysComponent } from './create-masterinventarys.component';
import { CreateMasterinventarysRoutingModule } from './create-masterinventarys-routing.module';

@NgModule({
  declarations: [CreateMasterinventarysComponent],
  imports: [
    CommonModule,
    CreateMasterinventarysRoutingModule,
    SharedModule
  ]
})
export class CreateMasterinventarysModule { }