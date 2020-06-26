import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateMasterInventarysRoutingModule } from './update-masterinventarys-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UpdateMasterinventarysComponent } from '../update-masterinventarys/update-masterinventarys.component';

@NgModule({
  declarations: [UpdateMasterinventarysComponent],
  imports: [
    CommonModule,
    UpdateMasterInventarysRoutingModule,
    SharedModule
  ]
})

export class UpdateMasterInventarysModule { }