import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateLegalsRoutingModule } from './update-legals-routing.module';
import { UpdateLegalsComponent } from './update-legals.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateLegalsComponent],
  imports: [
    CommonModule,
    UpdateLegalsRoutingModule,
    SharedModule
  ]
})

export class UpdateLegalsModule { }