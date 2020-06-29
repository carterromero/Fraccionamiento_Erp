import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterInventarysListRoutingModule } from './masterinventarys-details-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MasterinventarysDetailsComponent } from './masterinventarys-details.component';

@NgModule({
  declarations: [MasterinventarysDetailsComponent],
  imports: [
    CommonModule,
    MasterInventarysListRoutingModule,
    SharedModule
  ]
})
export class MasterInventarysListModule { }