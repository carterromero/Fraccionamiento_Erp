import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterinventarysListRoutingModule } from './masterinventarys-list-routing.module';
import { MasterinventarysListComponent } from './masterinventarys-list.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [MasterinventarysListComponent],
  imports: [
    CommonModule,
    MasterinventarysListRoutingModule,
    SharedModule
  ]
})
export class MasterinventarysListModule { }