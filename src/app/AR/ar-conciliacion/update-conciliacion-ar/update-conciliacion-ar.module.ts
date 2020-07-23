import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateConciliacionRoutingModule } from './update-conciliacion-ar-routing.module';
import { UpdateConciliacionARComponent } from './update-conciliacion-ar.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateConciliacionARComponent],
  imports: [
    CommonModule,
    UpdateConciliacionRoutingModule,
    SharedModule
  ]
})
export class UpdateConciliacionModule { }