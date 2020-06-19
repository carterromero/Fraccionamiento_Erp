import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubinventarysDetailsRoutingModule } from './subinventarys-details-routing.module';
import { SubinventarysDetailsComponent } from './subinventarys-details.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [SubinventarysDetailsComponent],
  imports: [
    CommonModule,
    SubinventarysDetailsRoutingModule,
    SharedModule
  ]
})
export class SubinventarysDetailsModule { }