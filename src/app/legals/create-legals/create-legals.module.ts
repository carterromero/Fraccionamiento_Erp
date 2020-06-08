import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateLegalsRoutingModule } from './create-legals-routing.module';
import { CreateLegalsComponent } from './create-legals.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateLegalsComponent],
  imports: [
    CommonModule,
    CreateLegalsRoutingModule,
    SharedModule
  ]
})
export class CreateLegalsModule { }