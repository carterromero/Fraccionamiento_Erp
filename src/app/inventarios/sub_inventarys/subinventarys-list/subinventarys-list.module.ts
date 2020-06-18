import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubinventarysListRoutingModule } from './subinventarys-list-routing.module';
import { SubinventarysListComponent } from './subinventarys-list.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [SubinventarysListComponent],
  imports: [
    CommonModule,
    SubinventarysListRoutingModule,
    SharedModule
  ]
})
export class SubinventarysListModule { }