import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondominumsDetailsRoutingModule } from './condominums-details-routing.module';
import { CondominumsDetailsComponent } from './condominums-details.component';
import { SharedModule } from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CondominumsDetailsComponent],
  imports: [
    CommonModule,
    CondominumsDetailsRoutingModule,
    SharedModule
  ]
})
export class CondominumsDetailsModule { }